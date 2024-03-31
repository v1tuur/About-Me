document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá, eu sou o Victor";
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor'); 
  
    let index = 0;
    const typingEffect = setInterval(() => {
      typingElement.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingEffect);
        typingElement.innerHTML += '<span id="cursor"></span>'; 
        startCursorBlink();
      }
    }, 150);
  
    function startCursorBlink() {
      setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0'; // Alternando a opacidade do cursor
      }, 100); // Definindo o intervalo de piscar
    }
  });
  