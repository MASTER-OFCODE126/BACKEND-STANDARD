const {GoogleGenAI} = require('@google/genai');

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
});

async function invokeGeminiAi(){
    try {
        const res = await ai.models.generateContent({
        model:"gemini-3-flash-preview",
        contents :"Hello Gemini ! Explain what is RAG"
    })
        console.log(res.text);    
    } catch (error) {
        console.log("API error : ",error);
    }
    
}

// console.log(interaction.output_text);
module.exports = invokeGeminiAi;
