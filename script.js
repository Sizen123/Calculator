let currentExpression = "";
let buttons = document.querySelectorAll(".button");

// Attach event listeners to all buttons
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerHTML.trim(); // Trim whitespace

    if (buttonValue === "=") {
      // Safely evaluate the expression
      try {
        currentExpression = eval(currentExpression);
      } catch (error) {
        currentExpression = "Error"; // Handle invalid expressions
      }
    } else if (buttonValue === "C") {
      // Remove the last character
      currentExpression = currentExpression.slice(0, -1);
    } else if (buttonValue === "AC") {
      // Clear the entire expression
      currentExpression = "";
    } else {
      // Append the button value to the current expression
      currentExpression += buttonValue;
    }

    // Update the input display
    document.querySelector("input").value = currentExpression;
  });
});
