// 1. Function Declaration: Define the main function to check the answer.
function checkAnswer() {
    
    // 2. Identify the Correct Answer: The correct answer to "What is 2 + 2?" is "4".
    const correctAnswer = "4";
    
    // 3. Retrieve the User’s Answer:
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Select the feedback paragraph element where results will be displayed.
    const feedbackElement = document.getElementById('feedback');
    
    // Check if an answer was selected before proceeding.
    if (!selectedRadio) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }
    
    // Get the value of the selected radio button and store it.
    const userAnswer = selectedRadio.value;
    
    // 4. Compare the User’s Answer with the Correct Answer:
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; 
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545"; 
    }
}

// 5. Add an Event Listener to the Submit Button:
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the button using its ID.
    const submitButton = document.getElementById('submit-answer');
    
    // Attach the checkAnswer function to the button's 'click' event.
    submitButton.addEventListener('click', checkAnswer);
});