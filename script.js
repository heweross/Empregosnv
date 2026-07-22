document.getElementById('job-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Olá, Empregos NV! Quero anunciar uma vaga gratuitamente.\n\nEmpresa: ${data.get('empresa')}\nVaga: ${data.get('vaga')}\nSalário: ${data.get('salario') || 'Não informado'}\nContato: ${data.get('contato')}\nPré-requisitos: ${data.get('requisitos')}`;
  navigator.clipboard?.writeText(message);
  alert('As informações da vaga foram copiadas. Agora, envie a mensagem para nós pelo Direct do Instagram.');
  window.open('https://www.instagram.com/empregosnv/', '_blank', 'noopener');
});
