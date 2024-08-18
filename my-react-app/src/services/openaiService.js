import { HfInference } from '@huggingface/inference';

// Clave de API de Hugging Face
const HF_API_KEY = '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';  // Reemplaza con tu clave de API de Hugging Face.
const inference = new HfInference(HF_API_KEY);

// Función para obtener recomendaciones basadas en los síntomas del paciente
export const getRecommendations = async (symptoms, age, gender) => {
  try {
    // Mejorar el prompt para ser más claro y directo
    const prompt = `
    A ${age} years old ${gender} patient reports the following symptoms: ${symptoms}.
    
    Based on this information, provide specific medical recommendations for the following:
    1. Zones Affected (which parts of the body are affected based on the symptoms)
    2. Recommended Therapies (therapies or treatments that can help alleviate the symptoms)
    3. Recommended Foods (foods that could help improve the patient's condition)
    4. Recommended Medications (appropriate medications for the reported symptoms)
    5. Possible Additional Symptoms (symptoms that could develop based on the patient's report)
    6. Possible Disease (the likely disease based on the symptoms)

    Provide detailed and specific answers for each category without repeating the prompt instructions.
    `;

    // Hacer la solicitud a Hugging Face para generar el texto
    const response = await inference.textGeneration({
      model: 'EleutherAI/gpt-neo-2.7B',  // Usamos GPT-Neo en lugar de GPT-2
      inputs: prompt,
      parameters: {
        max_new_tokens: 50, // Incrementa el número de tokens para respuestas más largas
        temperature: 0.7,
        stop_sequences: ["\n\n"], // Para detener la generación después de una respuesta completa
      },
    });

    // Obtener el texto generado por la IA
    const generatedText = response.generated_text;

    // Procesar la respuesta generada
    const recommendations = parseResponse(generatedText);

    return recommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return {};
  }
};

// Función para parsear el texto generado por la IA
const parseResponse = (content) => {
  const recommendations = {
    zonesAffected: extractBetween(content, 'Zones Affected:', 'Recommended Therapies:'),
    therapies: extractBetween(content, 'Recommended Therapies:', 'Recommended Foods:'),
    foods: extractBetween(content, 'Recommended Foods:', 'Recommended Medications:'),
    medications: extractBetween(content, 'Recommended Medications:', 'Possible Additional Symptoms:'),
    additionalSymptoms: extractBetween(content, 'Possible Additional Symptoms:', 'Possible Disease:'),
    disease: extractBetween(content, 'Possible Disease:'),
  };

  return recommendations;
};

// Función auxiliar para extraer texto entre dos puntos clave
const extractBetween = (text, start, end) => {
  const startIndex = text.indexOf(start) + start.length;
  const endIndex = end ? text.indexOf(end, startIndex) : text.length;
  return startIndex !== -1 && endIndex !== -1 ? text.slice(startIndex, endIndex).trim() : 'N/A';
};
