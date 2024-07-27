
const arrayData = [
    {
        id: "card-1",
        cardNum: "1",
        imgUrl: "DATA_HQ.png",
        Heading: "Mission 1",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You begin your mission by looking at some of the data in the zoo. Is it realistic or has it already been tampered with by the hackers.",
        link: "../puzzles/puzzle-1.html",
        lock: "lock1",
        frontFeatures: "front1"
    },
    {
        id: "card-2",
        cardNum: "2",
        imgUrl: "Puzzle_2.png",
        Heading: "Mission 2",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Help! You now visit the zoo and it is in complete chaos. There are enclosures wide open and there are animals everywhere. There are also no lights working, water is running low and communications are out.",
        link: "../puzzles/puzzle-2.html",
        lock: "lock2",
        frontFeatures: "front2"
    },
    {
        id: "card-3",
        cardNum: "3",
        imgUrl: "Puzzle_3.png",
        Heading: "Mission 3",
        color: "linear-gradient(-135deg, #c8e4b2, #7eaa92)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Now that the animals are safely locked back in their enclosures, we need to fix all the systems that the hackers have destroyed.",
        link: "../puzzles/puzzle-3.html",
        lock: "lock3",
        frontFeatures: "front3"
    },
    {
        id: "card-4",
        cardNum: "4",
        imgUrl: "Puzzle_4.png",
        Heading: "Mission 4",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Next, we must get zoo wide IOT system back operational, so that the sensor readings can inform the keepers what is happening.",
        link: "../puzzles/puzzle-4.html",
        lock: "lock4",
        frontFeatures: "front4"
    },
    {
        id: "card-5",
        cardNum: "5",
        imgUrl: "Puzzle_5.png",
        Heading: "Mission 5",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "Quick, the hacker has ramped up the temperature of the reptile house to a hazardous level, the animals are in grave danger!",
        link: "../puzzles/puzzle-5.html",
        lock: "lock5",
        frontFeatures: "front5"
    },
    {
        id: "card-6",
        cardNum: "6",
        imgUrl: "Puzzle_6.png",
        Heading: "Mission 6",
        color: "linear-gradient(-135deg, #ec8f5e, #f1eb90)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "We are almost there. We have made it to the zoo headquarters.",
        link: "../puzzles/puzzle-6.html",
        lock: "lock6",
        frontFeatures: "front6"
    },
    {
        id: "card-7",
        cardNum: "7",
        imgUrl: "Puzzle_7.png",
        Heading: "Mission 7",
        color: "linear-gradient(-135deg, #dc0000, #850000, #ec8f5e)",
        imageWidth: "300px",
        imageHeight: "350px",
        para: "You have made it into the laptop! You see the file on the desktop and click on it. All you have to do now is decode the file to uncover the evil meeting location.",
        link: "../puzzles/puzzle-7.html",
        lock: "lock7",
        frontFeatures: "front7"
    }
]


const cardContainer = document.querySelector('.container')


const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += '<div class="card" id="'+data.id+'">\
                                        <div class="lockScreen" id="'+data.lock+'" style="display: none;"><i class="fa-solid fa-lock" id="lockIcon"></i></div>\
                                        <div class="front" style="background-image: url(\'../assets/backgrounds/'+data.imgUrl+'\');">\
                                            <div class="'+data.frontFeatures+'" id="'+data.frontFeatures+'">\
                                                <h1>'+data.Heading+'</h1>\
                                                <button class="more-btn" onclick="handleClick'+data.cardNum+'()">Read More</button>\
                                            </div>\
                                        </div>\
                                        <div class="back">\
                                            <img src="../assets/backgrounds/Top-secret.png"></img>\
                                            <h1>MISSION BRIEF</h1>\
                                            <p>'+data.para+'</p>\
                                            <div class="background_back"></div>\
                                            <button class="return" onclick="handle2ndClick'+data.cardNum+'()"><i class="fa-solid fa-arrow-rotate-left"></i></button>\
                                            <a href="'+data.link+'"><button class="start">Start</button></a>\
                                        </div>\
                                    </div>';
    })
}

function handleClick1() {
    document.getElementById("card-1").style.transform = "rotateY(180deg)";
}
function handle2ndClick1() {
    document.getElementById("card-1").style.transform = "rotateY(0deg)";
}

function handleClick2() {
    document.getElementById("card-2").style.transform = "rotateY(180deg)";
}
function handle2ndClick2() {
    document.getElementById("card-2").style.transform = "rotateY(0deg)";
}

function handleClick3() {
    document.getElementById("card-3").style.transform = "rotateY(180deg)";
}
function handle2ndClick3() {
    document.getElementById("card-3").style.transform = "rotateY(0deg)";
}

function handleClick4() {
    document.getElementById("card-4").style.transform = "rotateY(180deg)";
}
function handle2ndClick4() {
    document.getElementById("card-4").style.transform = "rotateY(0deg)";
}

function handleClick5() {
    document.getElementById("card-5").style.transform = "rotateY(180deg)";
}
function handle2ndClick5() {
    document.getElementById("card-5").style.transform = "rotateY(0deg)";
}

function handleClick6() {
    document.getElementById("card-6").style.transform = "rotateY(180deg)";
}
function handle2ndClick6() {
    document.getElementById("card-6").style.transform = "rotateY(0deg)";
}

function handleClick7() {
    document.getElementById("card-7").style.transform = "rotateY(180deg)";
}
function handle2ndClick7() {
    document.getElementById("card-7").style.transform = "rotateY(0deg)";
}

functionCards();
unlockFinalMission();
