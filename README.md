# Evently: A Canva AI Agent for Event Planning Asset Generation
 **Evently** combines user inputs with LLM intelligence and Canva’s creative tooling to streamline the asset creation process.
 Built for the [Folio x Canva AI Agent Challenge](https://app.folioworks.com/challenges/5)

 ---

 ## How it works:

1. **Input Event Details**  
   Users enter information like:
   - Event name
   - Date & time
   - Audience
   - Location
   - Event goals

2. **Suggest Assets**  
   The app uses Gemini to suggest a list of relevant event assets (e.g. Instagram posts, name badges, flyers, etc.).

3. **Select Assets**  
   Users select which assets they want to create.

4. **Template Matching & Text Generation**  
   The LLM:
   - Chooses templates from a mock template database that best match the event details
   - Generates personalized starter text for each selected asset

5. **Connect & Export**  
   Users are offered integrations to:
   - Send invites via Google Calendar or Mailchimp
   - Print assets via Canva Print
   - Export assets into Canva to edit further

 ## Local Setup
 ### Prerequisites
- Node.js (v18+ recommended)
- An API key for [Gemini](https://aistudio.google.com/app/apikey)

---

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/canva-agent.git
   cd canva-agent

2. **Install Dependencies**
    ```bash
    npm install

3. **Create a .env file in the root directory**
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here

4. **Start the app**
    ```bash
    npm start

## Project Structure

| Folder/File   | Purpose                                      |
|---------------|----------------------------------------------|
| `/src`        | React frontend using Canva App SDK           |
| `/server`     | Node + Express backend for Gemini requests   |
| `.env`        | API key configuration for Gemini             |

---

## Tech Stack

- 🧩 [Canva App SDK](https://www.canva.dev/)
- 🧠 [Gemini Flash 2.0](https://aistudio.google.com/)
- ⚛️ React + TypeScript
- 🌐 Node.js + Express

---