// backend/routers/ai.ts
import * as express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

router.post("/generate-content", async (req, res) => {
  const { eventType, audience, tone, date } = req.body;

  const prompt = `
Generate a JSON object for an event invitation.
Tone: ${tone}
Event: ${eventType}
Audience: ${audience}
Date: ${date}

Return only JSON with keys: title, description, call_to_action
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Remove markdown-style code fences if present
    const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || [null, text];
    const json = JSON.parse(match[1]);

    res.json({ success: true, result: json });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ success: false, error: "Failed to generate content" });
  }
});

export function createAIRouter() {
  return router;
}