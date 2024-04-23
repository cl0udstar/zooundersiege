let intervalId = null;
  let moveDirection = 'up';
  const speed = 15; // Speed of movement in pixels

  function moveLine() {
    const line = document.getElementById("horizontal-line");
    const currentPosition = parseInt(line.style.bottom) || 0;
    const rectangleHeight = document.getElementById("rectangle").clientHeight;
    
    if (moveDirection === 'up') {
      if (currentPosition < rectangleHeight) {
        line.style.bottom = (currentPosition + speed) + "px";
      } else {
        moveDirection = 'down';
      }
    } else {
      if (currentPosition > 0) {
        line.style.bottom = (currentPosition - speed) + "px";
      } else {
        moveDirection = 'up';
      }
    }
  }

  function toggleMoveLine() {
    const button = document.getElementById("button");
    if (intervalId === null) {
      intervalId = setInterval(moveLine, 100); // Adjust the interval for speed
    } else {
      clearInterval(intervalId);
      intervalId = null;
      checkGreenSection();
    }
  }

  function checkGreenSection() {
    const line = document.getElementById("horizontal-line");
    const currentPosition = parseInt(line.style.bottom) || 0;
    const rectangleHeight = document.getElementById("rectangle").clientHeight;

    // Check if the line stops within the green section
    const greenSectionTop = (rectangleHeight * 0.42) + 7.5;
    const greenSectionBottom = greenSectionTop + (rectangleHeight * 0.14);
    if (currentPosition >= greenSectionTop && currentPosition <= greenSectionBottom) {
        document.getElementById("button").style.display = "none";
        document.getElementById("numbers").style.display = "flex";
        document.getElementById("answer-box").style.display = "block";
        document.getElementById("finalAnswerButton").style.display = "block";
        document.getElementById("rectangle").style.marginRight = "0px";
    }
}

function submitAnswer() {
    // Get the value from the input field
    const answer = document.getElementById("answer").value;
    
    // Check if the answer is equal to 10
    if (answer.trim() === "10" || answer.trim() === "10N" || answer.trim() === "10n" || answer.trim() === "10newtons" || answer.trim() === "10Newtons" || answer.trim() === "10 newtons" || answer.trim() === "10 Newtons") {
        alert("Congratulations! Your answer is correct!");
        setPuzzleCompletionStatus(3, 'complete');
        document.getElementByID("forceInput").style.backgroundColor = "#C8E4B2";
    } else {
        alert("Sorry, your answer is incorrect. Please try again.");
        document.getElementByID("forceInput").style.backgroundColor = "#FF7676";
    }
}
