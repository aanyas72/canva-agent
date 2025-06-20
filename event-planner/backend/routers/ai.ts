// backend/routers/ai.ts
import * as express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
import { templates } from "../templates";

dotenv.config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);


// Generate content for graphics endpoint
router.post("/generate-content", async (req, res) => {
  const { eventName, audience, date, location, goals, chosenTemplates } = req.body;

  const matchingTemplates = templates.filter(t => chosenTemplates.includes(t.type));

  const prompt = `
You are a Canva content assistant.

Here are the event details:
- Name: ${eventName}
- Audience: ${audience}
- Date: ${date}
- Location: ${location}
- Goals: ${goals}

The user wants to create content for the following asset types:
${JSON.stringify(chosenTemplates)}

Below is a list of available templates for those types. Each includes name, type, description, and URL.

${JSON.stringify(matchingTemplates, null, 2)}

From these options, choose the best-fitting templates based on the event description and the template descriptions. For each chosen template, generate placeholder text tailored to the asset type and the event’s goals and audience.

Return only valid JSON like this:

{
  "event_overview": {
    "title": "Short branded title",
    "description": "Brief summary of the event",
    "call_to_action": "Optional CTA like 'Join us now'"
  },
  "templates": [
    {
      "name": "...",
      "type": "...",
      "url": "...",
      "text_content": {
        "header": "...",
        "body": "...",
        "footer": "..."
      }
    }
  ]
}
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