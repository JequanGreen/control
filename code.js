function blastOffTimer(){
    console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime);
    currTime = currTime - i;
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 5000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 10000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 15000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 20000); setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 25000); setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 30000); setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 35000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 40000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, 45000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!";
        currTime = currTime - i;
    }, 50000);
}

function testCtDown(){
    console.log("testCtDown() started");
    currTime = 50
    for(var i = 0; i <= 10; i++){
        console.log(i);
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "Blastoff";
            }
            currTime = currtime - 5;
        }, 5000 * i);
    }
}
function test(){
    console.log("test() started");
    var i = 0;
    currTime = 50;
    while( i <= 10){
        console.log(i)
        setTimeout(function(){
            document.getElementById("blastOffText").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "Blastoff";
            }
            currTime = currtime - 5;
        }, 5000 * i);
        i = i + 1;
    }
})

var numWins = 0;
var numLost = 0;
var numTie = 0;
function playCraps(){
    console.log("playCraps() started");
    //pick a random number, multiply by 6 and store in die1
    var die1 = Math.ceil(6 * Math.random());
    //pick a random number, multiply by 6 and store in die2
    var die2 = Math.ceil(6 * Math.random());
    var sum = die1 + die2;      //add die1 and die2 up and store in sum
    //display die1 on the brower at the dieRes position
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    (sum == 7 or sum == 11){
        document.getElementById("CrapsRes").innerHTML = "Craps, you lose!!";
        numLost = numLost + 1;
    } else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("CrapsRes").innerHTML = "Doubles, you win";
        numWins = numWins + 1;
    } else {
        document.getElementById("CrapsRes").innerHTML = "Tie, please try again.";
        numTie = numTie + 1;
    }
    document.getElementById("wins").innerHTML = numWins;
    document.getElementById("losses").innerHTML = numLost;
    document.getElementById("ties").innerHTML = numTie;

}
