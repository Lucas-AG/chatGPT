const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

async function enviarSolicitacao() {
  const prompt = document.getElementById('texto').value;

  const responseContainer = document.getElementById('resposta');
  responseContainer.innerHTML = '';

  if (!prompt) {
    responseContainer.innerHTML = 'Por favor, insira uma mensagem.';
    return;
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100
    })
  });

  const data = await response.json();

  responseContainer.innerHTML = data.choices && data.choices[0].text.trim() || 'Não foi possível obter uma resposta.';
}
