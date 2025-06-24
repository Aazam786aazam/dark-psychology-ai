export async function onRequestPost(context) {
  const { prompt } = await context.request.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "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", // ← Yaha apni API key dalo
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful AI script writer that focuses on dark psychology topics." },
        { role: "user", content: prompt }
      ]
    })
  });

  const result = await response.json();
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" }
  });
    }
