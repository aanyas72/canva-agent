// backend/routers/ai.ts
import * as express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);


// Generate content for graphics endpoint
router.post("/generate-content", async (req, res) => {
  const { eventName, audience, date, location, goals } = req.body;

  const prompt = `
Generate a JSON object for an event invitation.
Event Name: ${eventName}
Location: ${location}
Audience: ${audience}
Date: ${date}
Goals: ${goals}

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



// Choose template route
router.post("/choose-template", async (req, res) => {
  const { eventName, audience, goals } = req.body;

  const prompt = `
User is planning an event:
Event Name: ${eventName}
Audience: ${audience}
Goals: ${goals}
Which templates best match this event?
Template options are Physical Flyer, Instagram Post, Instagram Story, Event Directional Sign, Welcome Banner, Name Badges, Speaker Slides, Thank you notes, Agenda
Return only a JSON list with the chosen assets: 
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