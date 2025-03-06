let mode1="-1";
const v = document.getElementById("background-video");
v.onended = function() {
    v.pause(); 
};


function showImage() {
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "instructions.png";

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
       mode1="single";
       document.body.removeChild(modeContainer); 
    };
    let closeButton = document.createElement("button");
    closeButton.innerText = "✖";
    closeButton.className = "close-button";
    closeButton.onclick = function() {
        document.body.removeChild(modeContainer);
    };
    modeContainer.appendChild(closeButton);
    let multiPlayerBtn = document.createElement("button");
    multiPlayerBtn.innerText = "Multiplayer";
    multiPlayerBtn.className = "mode-button";
    multiPlayerBtn.onclick = function() {
       mode1="multi";
       document.body.removeChild(modeContainer); 
    };
    
    modeContainer.appendChild(singlePlayerBtn);
    modeContainer.appendChild(multiPlayerBtn);
    
    document.body.appendChild(modeContainer);
    
    let style = document.createElement("style");
    style.innerHTML = `
        .mode-container {
            text-align: center;
            margin-top: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color:rgb(199, 247, 226);
           
            padding: 20px;
            border: 2px solid black;
            border-radius: 22%;
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
    `;
    document.head.appendChild(style);
}






function demo() {
    let buttonText = document.getElementById("b1").textContent;
    if (mode1==="-1") { 
        window.alert("Please select difficulty");
    } else if(mode1==="single") {
        window.open('harish.html', '_blank'); 
    }else if(mode1==="multi"){
        window.open('harish2.html', '_blank'); 
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
