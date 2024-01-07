function getComputerChoice() {
    //For computer
    let computerChoice = "";
    var computerInput = ["rock", "paper", "scissor"];
    const select = Math.floor(Math.random() * 3);
    for (let i = 0; i < computerInput.length; i++) {
        if (computerInput[select]) {
            // console.log(computerInput[select]);
            computerChoice = computerInput[select]
            break
        }
    }
    return computerChoice
}

function roundOne(playerSelection, computerSelection) {
    let imgPath = [
        {
            option: "rock",
            path: "rock.png"
        },
        {
            option: "paper",
            path: "paper.png"
        },
        {
            option: "scissor",
            path: "scissor.png"
        }
    ]


    let imgTag = "";
    for (let i = 0; i < imgPath.length; i++) {
        if (playerSelection == imgPath[i].option) {
            imgTag = "<img src='" + imgPath[i].path + "' alt=''>";
            document.getElementById("js-user-choice").innerHTML = imgTag;
            break
        }
    }

    let comImgTag = "";
    for (let i = 0; i < imgPath.length; i++) {
        if (computerSelection == imgPath[i].option) {
            comImgTag = "<img src='" + imgPath[i].path + "' alt=''>";
            document.getElementById("js-computer-choice").innerHTML = comImgTag;
            break
        }
    }
    let computerScore = 0, userScore = 0;
    let result = "";
    let scoreBoard = "";
    if (playerSelection == computerSelection) {
        // console.log("Your match is Tie")
        result = "Your match is Tie";
        userScore = 0;
        computerScore = 0;
        scoreBoard += "<tr><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        // alert(scoreBoard);
        // document.getElementById("result").innerHTML=result;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            // console.log("You won the match");
            result = "You lost the match";
            // document.getElementById("result").innerHTML=result;
            userScore += 1;
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
        else if (computerSelection == "scissor") {
            // console.log("You won the match");
            result = "You won the match";
            // document.getElementById("result").innerHTML=result;
            computerScore += 1;
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You won the match";
            // document.getElementById("result").innerHTML=result;
            userScore += 1;
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
        else if (computerSelection == "scissor") {
            result = "You lost the match";
            // document.getElementById("result").innerHTML=result;
            computerScore += 1
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
    }
    else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            result = "You lost the match";
            // document.getElementById("result").innerHTML=result;
            computerScore += 1;
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
        else if (computerSelection == "paper") {
            result = "You won the match";
            // document.getElementById("result").innerHTML=result;
            userScore += 1;
            scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
        }
    }
    else {
        alert("Invalid Input");
    }
    scoreBoard += "<tr class='text-center'><td>" + userScore + "</td><td>" + computerScore + "</td></tr>";
    document.getElementById("score-board").innerHTML = scoreBoard;
    return result
}

function game() {
    // const playerName = prompt("Enter Your Name :").toUpperCase();
    // document.getElementById("player-name").innerHTML = playerName;
    // document.getElementById("username").innerHTML = playerName[0] + playerName.slice(1).toLowerCase() + "'s Score";
    // alert("Welcome" + ' ' + playerName + "\n" + "(ROCK-PAPER-SCISSOR GAME)")
    let stringScore = "";

        const computerSelection = getComputerChoice();
        const playerSelection = String(prompt("CHOOSE ONE \n(ROCK-PAPER-SCISSOR)")).toLowerCase()
        // console.log(roundOne(playerSelection, computerSelection))
        alert("VINESH" + " SELECTED " + " " + playerSelection)
        alert("COMPUTER SELECTED" + " " + computerSelection)
        alert(roundOne(playerSelection, computerSelection))

}

function resetGame() {
    window.location.reload();
}



game()


// console.log(imgPath[1].option);

// if (getComputerChoice()=="rock") {
//     document.getElementById("").innerHTML=imgTag;
// }
// else if (getComputerChoice()=="paper") {
//     document.getElementById("").innerHTML=imgTag;

// }
// else if(getComputerChoice()=="scissor"){
//     document.getElementById("").innerHTML=imgTag;
// }

// let imgTag="<img src="+ imgTag+ "alt="+ imgTag+ ">"


// s


function rock() {
    return "rock"
}

function paper() {
    return "paper"
}

function scissor() {
    return "scissor"
}
