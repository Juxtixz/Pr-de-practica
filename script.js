document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('practice-form');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (username && comment) {
      feedback.textContent = `¡Registro exitoso! Usuario: ${username}`;
      feedback.style.color = '#15803d';
      form.reset();
    } else {
      feedback.textContent = 'Por favor completa todos los campos.';
      feedback.style.color = '#b91c1c';
    }
  });
});