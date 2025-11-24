import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

export const getGeminiClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key not found");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const chatWithAssociate = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  try {
    const ai = getGeminiClient();
    
    // Transform history for the API if needed, though usually we maintain a session.
    // For simplicity in this stateless example, we'll create a new chat each time or just use generateContent with instruction.
    // However, to maintain context properly:
    
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
        history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text;

  } catch (error) {
    console.error("Error communicating with AI Associate:", error);
    return "I apologize, but I am currently unable to access the latest data. Please contact our investor relations team directly.";
  }
};
