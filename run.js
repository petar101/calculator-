document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.cell');
  const maxLength = 12;

  let answer = "";

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = button.innerText;
      console.log("Clicked:", value);

      if (value === "AC") {
        answer = "";
        display.innerText = "";
      } 
      else if (value === "=") {
        try {
          let result = eval(answer);            // Calculate the expression in 'answer'
          let resultStr = result.toString();      // Convert the result to a string

          // If the result string is longer than maxLength, truncate it
          if (resultStr.length > maxLength) {
            resultStr = resultStr.slice(0, maxLength);
          }
          
          display.innerText = resultStr;          // Display the (possibly truncated) result
          console.log("Result:", resultStr);
          
          // Update 'answer' for further calculations
          answer = resultStr;
        } catch (error) {
          display.innerText = "Error";
          answer = "";
        }
      } else if (display.innerText.length < maxLength) {
        // Append the clicked value to both 'answer' and display.
        answer += value;
        display.innerText += value;
        console.log("Current expression:", answer);
      }
    });
  });
});
