// backend/index.js
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate-content', async (req, res) => {
  const { eventType, audience, tone, date } = req.body;

  const prompt = `
Generate a JSON object for a ${tone} invitation to a ${eventType}.
Target audience: ${audience}. Date: ${date}.
The object should have: title, description, call_to_action.
Return only the JSON.
`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Extract JSON (Gemini sometimes wraps it in triple backticks)
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || [null, text];
    const parsed = JSON.parse(jsonMatch[1]);

    res.json({ success: true, result: parsed });
  } catch (err) {
    console.error('Gemini error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to generate content' });
  }
});

app.listen(PORT, () => {
  console.log(`Gemini backend running on http://localhost:${PORT}`);
});
