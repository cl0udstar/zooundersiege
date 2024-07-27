const div = document.querySelector(".home-text");
const text1 = "Agents, we have a ruthless hacker on our hands! The Cyber Security Data Division has been monitoring a series of breaches, and we've identified the zoo’s IOT sensors technology as a critcal target. We need your exceptional skills in data analysis to save the animals and restore order.";
const text2 = "Your mission is of the utmost importance. The hacker's actions have caused chaos throughout the zoo, and it's up to you to save the animals and bring the system back under control.";
const text3 = "This is not just any mission, we need data experts – and we think you are exactly what we need! Your experience of collectng, analysing and visualising data has prepared you for this moment. Trust in your abilities, use every skill and resource at your disposal, and bring the zoo back to safety.";
const text4 = "Good luck, Agents. The fate of the zoo rests in your hands.";

let text1Finished = false;
let text2Finished = false;
let text3Finished = false;
let text4Finished = false;

function textTypingEffect(element, text, i = 0, callback = null) {
    element.innerHTML += text[i];

    // If the end of the string is reached
    if (i === text.length - 1) {
        element.innerHTML += "<br><br>";
        if (callback) {
            callback();
        }
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1, callback), 45);
}

textTypingEffect(div, text1, 0, function() {
    text1Finished = true;
    console.log(text1Finished);

    if (text1Finished) {
        // div.innerHTML += "<br>";
        textTypingEffect(div, text2, 0, function() {
            text2Finished = true;
            console.log(text2Finished);

            if (text2Finished) {
                textTypingEffect(div, text3, 0, function() {
                    text3Finished = true;
                    console.log(text3Finished);

                    if (text3Finished) {
                        textTypingEffect(div, text4, 0, function() {
                            text4Finished = true;
                            console.log(text4Finished);
                        });
                    }
                });
            }
        });
    }
});
