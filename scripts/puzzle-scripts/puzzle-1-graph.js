
var Q1Check = false;
var Q2Check = false;
var Q3Check = false;

// First Question
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var nextPuzzle = document.getElementById("next-puzzle");

function checkAnswerQ1() {
    var userAnswer1 = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var userAnswer2 = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var userAnswer3 = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer1 === "35" && userAnswer2 === "85" && userAnswer3 === "80") {
        Q1Check = true;
        Q2Check = true;
        Q3Check = true;

        checkCompletion();

        result.textContent = "Agent, your skills are as impressive as the most majestic creatures in the zoo. Well done on navigating the wild terrain!";
        result.style.color = "green";
        nextPuzzle.style.display = "block";

        var keyInputs = [keyInputQ1, keyInputQ2, keyInputQ3];

        for (var i = 0; i < keyInputs.length; i++) {
            // Disable the input
            keyInputs[i].disabled = true;
            // Change the background color
            keyInputs[i].style.background = "#C8E4B2";
        }
    } else {
        if (userAnswer1 === "35") {
            Q1Check = true;

            keyInputQ1.disabled = true;
            keyInputQ1.style.background = "#C8E4B2";
        } else {
            keyInputQ1.style.background = "#FF7676";
        }

        if (userAnswer2 === "85") {
            Q2Check = true;

            keyInputQ2.disabled = true;
            keyInputQ2.style.background = "#C8E4B2";
        } else {
            keyInputQ2.style.background = "#FF7676";
        }

        if (userAnswer3 === "80") {
            Q3Check = true;

            keyInputQ3.disabled = true;
            keyInputQ3.style.background = "#C8E4B2";
        } else {
            keyInputQ3.style.background = "#FF7676";
        }

        result.textContent = "Agent, it seems you've wandered into the wrong enclosure. Time to regroup and find the right path!";
        result.style.color = "red";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check) {
        setPuzzleCompletionStatus(1, 'complete');
    }
}
