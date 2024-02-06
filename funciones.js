function init() {
    var resultado = document.getElementById('screen');
    var reset = document.getElementById('almacenar');
    var igual = document.getElementById('igual');
  
    // Event listeners para los números
    var numbers = document.getElementsByClassName('number');
    for (var i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener('click', function(e) {
        resultado.value += e.target.textContent;
      });
    }
  
    // Event listeners para los operadores
    var operators = document.getElementsByClassName('operator');
    for (var i = 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function(e) {
        resultado.value += e.target.textContent;
      });
    }
  
    // Event listener para el botón de igual
    igual.addEventListener('click', function() {
      var expression = resultado.value;
      var result = eval(expression);
      resultado.value = result;
    });
  
    // Event listener para el botón de almacenar
    reset.addEventListener('click', function() {
      resultado.value = "";
    });
  }
  
  window.onload = init;