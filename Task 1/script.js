// JavaScript to make the calculator interactive and perform calculations

// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle the button click
    const value = button.textContent;
    if (value === 'Enter') {
      // Perform the calculation
      calculate();
    } else if (value === 'Clear') {
      // Clear the display
      display.value = '0';
    } else {
      // Append the button value to the display
      if (display.value === '0') {
        // If the display is currently '0', replace it with the button value
        display.value = value;
      } else {
        // Otherwise, append the button value
        display.value += value;
      }
    }
  });
});

// Function to perform the calculation
function calculate() {
  // Get the expression from the display
  let expression = display.value;

  // Replace % with /100 for calculation
  expression = expression.replace(/%/g, '/100');

  // Handle square root (sqrt)
  if (expression.includes('√')) {
    const rootValue = parseFloat(expression.slice(expression.indexOf('√') + 1));
    const result = Math.sqrt(rootValue);
    display.value = result;
    return;
  }

  // Evaluate the expression using JavaScript's eval() function
  const result = eval(expression);

  // Display the result
  display.value = result;
}


