import axios from "axios";

const API_KEY = "AIzaSyBHWE9zOf46Emjp-9nj8RGaf-Vj5x4Jxnc"; // 🔒 paste new key here

export const askAI = async (message) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        params: { key: API_KEY },
      }
    );

    const text =
      response?.data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join("") || "No response";

    return text;

  } catch (error) {
    console.log("ERROR:", JSON.stringify(error.response?.data, null, 2));
    return "Error: check console";
  }
};