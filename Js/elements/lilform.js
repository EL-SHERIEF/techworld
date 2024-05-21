// Get all elements with class 'lilform' and loop through them
document.querySelectorAll('.lilform input').forEach(function(inputElement) {
  inputElement.value = ""; // Set input value to an empty string

  // Add a 'focusout' event listener to each input element
  inputElement.addEventListener('focusout', function() {
    var textValue = this.value; // Get the value of the current input element

    // Check if the value is empty
    if (textValue === "") {
      console.log("empty!");
      this.classList.remove('has-value'); // Remove 'has-value' class if the value is empty
    } else {
      this.classList.add('has-value'); // Add 'has-value' class if the value is not empty
    }
  });
});