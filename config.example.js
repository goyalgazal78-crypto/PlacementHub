/**
 * PlacementHub AI Mock Interviewer - Configuration Example
 * 
 * Instructions:
 * 1. Copy this file to `config.js` in the same directory:
 *    copy config.example.js config.js
 * 2. Replace 'YOUR_API_KEY_HERE' with your real API key.
 *    (Alternatively, you can leave it empty and enter it directly in the UI Settings modal).
 * 3. `config.js` is ignored by git so your secrets remain safe.
 */

window.AI_CONFIG = {
  // LLM Provider: 'gemini' | 'openai' | 'groq' | 'openrouter'
  provider: 'gemini',

  // Your API Key (leave empty to configure via browser UI)
  apiKey: 'YOUR_API_KEY_HERE',

  // Model name
  // Recommended options:
  // - Gemini: 'gemini-1.5-flash' (Fast & generous free tier)
  // - OpenAI: 'gpt-4o-mini'
  // - Groq: 'llama-3.3-70b-versatile'
  // - OpenRouter: 'openai/gpt-4o-mini'
  model: 'gemini-1.5-flash',

  // Custom API Endpoint (leave empty for default provider endpoints)
  apiEndpoint: ''
};

