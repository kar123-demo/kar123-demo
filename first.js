let mode1 = "-1";
let difficulty = "";

const v = document.getElementById("background-video");
v.onended = function() {
    v.pause(); 
};

function showImage() {
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "./pictures/instructions.png";

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "close-btn";
    closeButton.onclick = function () {
        document.body.removeChild(imageContainer); 
    };

    imageContainer.appendChild(closeButton);
    imageContainer.appendChild(image);

    document.body.appendChild(imageContainer);
}

function mode() {
    let modeContainer = document.createElement("div");
    modeContainer.className = "mode-container";
    
    let heading = document.createElement("h2");
    heading.innerText = "Select Mode";
    modeContainer.appendChild(heading);
    
    let singlePlayerBtn = document.createElement("button");
    singlePlayerBtn.innerText = "Single Player";
    singlePlayerBtn.className = "mode-button";
    singlePlayerBtn.onclick = function() {
        mode1 = "single";
        showDifficultyOptions();
        document.body.removeChild(modeContainer); 
    };
    
    let multiPlayerBtn = document.createElement("button");
    multiPlayerBtn.innerText = "Multiplayer";
    multiPlayerBtn.className = "mode-button";
    multiPlayerBtn.onclick = function() {
        mode1 = "multi";
        showDifficultyOptions();
        document.body.removeChild(modeContainer); 
    };
    
    let closeButton = document.createElement("button");
    closeButton.innerText = "✖";
    closeButton.className = "close-button";
    closeButton.onclick = function() {
        document.body.removeChild(modeContainer);
    };
    
    modeContainer.appendChild(singlePlayerBtn);
    modeContainer.appendChild(multiPlayerBtn);
    modeContainer.appendChild(closeButton);
    
    document.body.appendChild(modeContainer);
    
    let style = document.createElement("style");
    style.innerHTML = `
        .mode-container {
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(199, 247, 226);
            padding: 20px;
            border: 2px solid black;
            border-radius: 12%;
            z-index: 1000;
            width: 40%;
            box-sizing: border-box;
        }
        
        h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .mode-button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
        }
        .mode-button:hover {
            background-color: #0056b3;
        }
        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
        }
        .difficulty-dropdown {
            display: none;
            margin-top: 20px;
            text-align: center;
        }
        .difficulty-dropdown button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
        }
        .difficulty-dropdown button:hover {
            background-color: #218838;
        }
    `;
    document.head.appendChild(style);
}

function showDifficultyOptions() {
    let difficultyContainer = document.createElement("div");
    difficultyContainer.className = "difficulty-dropdown";

    let easyBtn = document.createElement("button");
    easyBtn.innerText = "Easy";
    easyBtn.onclick = function() {
        difficulty = "easy";
        updatePlayButton();
        difficultyContainer.style.display = "none";  
    };

    let mediumBtn = document.createElement("button");
    mediumBtn.innerText = "Medium";
    mediumBtn.onclick = function() {
        difficulty = "medium";
        updatePlayButton();
        difficultyContainer.style.display = "none";  
    };

    let hardBtn = document.createElement("button");
    hardBtn.innerText = "Hard";
    hardBtn.onclick = function() {
        difficulty = "hard";
        updatePlayButton();
        difficultyContainer.style.display = "none";  
    };

    difficultyContainer.appendChild(easyBtn);
    difficultyContainer.appendChild(mediumBtn);
    difficultyContainer.appendChild(hardBtn);

    document.body.appendChild(difficultyContainer);

    difficultyContainer.style.display = "block";  
}

function updatePlayButton() {
    const playButton = document.getElementById("b1");
    if (mode1 !== "-1" && difficulty !== "") {
        playButton.disabled = false;  
    }
}

function startGame() {
    if (mode1 === "single") {
        if(difficulty==="easy"){
        alert("Starting Single Player Game with " + difficulty + " difficulty.");
        window.open('./single/harish.html', '_blank');
        }
        if(difficulty==="medium"){
            alert("Starting Single Player Game with " + difficulty + " difficulty.");
            window.open('./single/Medium.html', '_blank');
            }
        if(difficulty==="hard"){
                alert("Starting Single Player Game with " + difficulty + " difficulty.");
                window.open('./single/Hard.html', '_blank');
        }
    } else if (mode1 === "multi") {
        if(difficulty==="easy"){
        alert("Starting Multiplayer Game with " + difficulty + " difficulty.");
        window.open('./Multi/harish2.html', '_blank');
        }
       else if(difficulty==="medium"){
            alert("Starting Multiplayer Game with " + difficulty + " difficulty.");
            window.open('./Multi/Medium1.html', '_blank');
            }
    else if(difficulty==="hard"){
                alert("Starting Multiplayer Game with " + difficulty + " difficulty.");
                window.open('./Multi/harish2.html', '_blank');
                }
    }
}

function demo() {
    if (mode1 === "-1") { 
        window.alert("Please select mode and difficulty");
    } else {
        startGame();
    }
}
