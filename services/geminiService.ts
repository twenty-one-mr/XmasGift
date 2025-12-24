
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getConciergeResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an elite Private Concierge for Louisville, KY. 
        Your goal is to provide sophisticated, warm, and highly personalized restaurant and nightlife recommendations. 
        The users are Kathy and Moe, two sisters enjoying a gifted luxury evening. 
        Focus on high-end or atmosphere-rich spots like 610 Magnolia, Jack Fry's, or Proof on Main. 
        Always mention the convenience of their private transportation included in their gift. 
        Keep responses concise, elegant, and exciting.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my database at the moment. However, I highly recommend Jack Fry's for a classic, sophisticated Louisville experience.";
  }
};
