document.getElementById('form-calculo').addEventListener('submit', function(e) {
      e.preventDefault();
      const taxa = parseFloat(document.getElementById('taxa').value);
      const resultado = document.getElementById('resultado');

      if (taxa > 0) {
        resultado.textContent = `Seu investimento dobrará em aproximadamente ${ (72 / taxa).toFixed(2) } anos.`;
      } else {
        resultado.textContent = 'Por favor, insira uma taxa de juros válida.';
      }
    });