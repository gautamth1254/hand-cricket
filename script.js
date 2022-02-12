var total = 0;

function score(){
    var score = playerchoise;
    total = total + score;
    
    document.getElementById("score-no").innerHTML= total;
    
    if(total >= 50 && total <= 55){
    document.getElementById('achievement').innerHTML = "HALF CENTURY";
	}
	else if(total >= 100 && total <= 105){
		document.getElementById('achievement').innerHTML = "CENTURY";
	}
	else{
		document.getElementById('achievement').innerHTML = "";
	}
}

function one() {
    playerchoise = 1;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger1t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 1){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A single taken";
        document.getElementById('result').style.color = "green";
        score();
    }

    
}


function two() {
    playerchoise = 2;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger2t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 2){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A double taken";
        document.getElementById('result').style.color = "green";
        score();
    }

    
}

function three() {
    playerchoise = 3;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger3t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 3){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A triple taken";
        document.getElementById('result').style.color = "green";
        score();
    }

    
}

function four() {
    playerchoise = 4;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger4t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 4){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A straight forward Boundary";
        document.getElementById('result').style.color = "green";
       
        score();
    }

    
}

function five() {
    playerchoise = 5;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger5t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 5){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A boundary and no ball";
        document.getElementById('result').style.color = "green";
        score();
    }

    
}

function six() {
    playerchoise = 6;
    var computerchoice = Math.floor(Math.random() * 6) + 1;

    const player1dice = `images/finger6t.png`;

    document.getElementById('check1').setAttribute('src',player1dice);

/*    var img = document.createElement("img");
    img.src = "images/finger1t.png";
    var src = document.getElementById("box1");
    src.appendChild(img);
*/
    const computer1dice = `images/finger${computerchoice}t.png`;

    document.getElementById('check2').setAttribute('src',computer1dice);

    if(computerchoice === 6){
        

        document.getElementById('result').innerHTML="Out";
        document.getElementById('result').style.color = "red";
        total = 0;
    }else{
        document.getElementById('result').innerHTML="A huge six";
        document.getElementById('result').style.color = "green";
        score();
    }

    
}

