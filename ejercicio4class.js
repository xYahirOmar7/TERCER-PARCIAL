

function calculate() {
  const num1 = parseFloat(document.getElementById('n1').value);
  const num2 = parseFloat(document.getElementById('n2').value);
  const operation = document.getElementById('operation').value;
  let result;

  switch (operation) {
      case 'sumar':
          result = num1 + num2;
          break;
      case 'restar':
          result = num1 - num2;
          break;
      case 'multiplicar':
          result = num1 * num2;
          break;
      case 'dividir':
          result = num1 / num2;
          break;
      default:
          result = 'Operación no válida';
  }

  document.getElementById('result').inner
}