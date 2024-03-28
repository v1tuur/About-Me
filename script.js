document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá, eu sou o Victor";
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor'); // Adicionando referência ao elemento de cursor
  
    let index = 0;
    const typingEffect = setInterval(() => {
      typingElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingEffect);
        typingElement.innerHTML += '<span id="cursor"></span>'; // Adicionando o cursor após o texto ser digitado
        startCursorBlink(); // Iniciar a animação do cursor após a digitação
      }
    }, 100);
  
    function startCursorBlink() {
      setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0'; // Alternando a opacidade do cursor
      }, 500); // Definindo o intervalo de piscar
    }
  });
  