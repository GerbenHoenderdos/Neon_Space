var setCanvasSize = function() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}


window.onload = init;




var ctx;

var begin = 1;
var beginBlokTwee = 1366;
var snelheid = 10; //hoe snel de blokken op je af komen
var bulletSnelheid = 20;
var up = false;
var right = false;
var left = false;
var space = false;
var xpositie = 10; //begin positie horizontaal
var ypositie = 700; //begin positie verticaal
var sidewayspeed = 4; //snelheid links,rechts
var jumpspeed = 18; //snelheid sprong omhoog
var landspeed = 20; //snelheid landing
var floor = 680; // hoogte van vloer
var objectHeight = 590; //hoogte van blok 1
var heightBlokTwee = 400; // hoogte blok 2
var eersteVloer = 0;
var tweedeVloer = 1366;
var char = new Image();
char.src="img/run002.png";
var vloer = new Image();
vloer.src="img/grond.png";
var vloer2 = new Image();
vloer2.src = "img/grond.png"
var blok1 = new Image();
blok1.src = "img/blok1.png";
var hogeblok = new Image();
hogeblok.src = "img/blok1.png";
var getal = 1;
var eersteAchtergrond = 0;
var tweedeAchtergrond = 1200;
var background = new Image();
background.src = "img/achtergrond.png";
var background2 = new Image();
background2.src = "img/achtergrond.png";
var coin = new Image();
coin.src = "coin.png";
var coin_score = 0;
var bullet = new Image();
bullet.src = "img/bullet.png";


function init() {
	document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
	console.log("Init")
	var canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");
	startscreen();
}





function startscreen() {
    ctx.drawImage(background,0,0);
    ctx.fillStyle="black";
	ctx.font = "100px Arial";

    animate()
}

function randomBlokTwee(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/2blok1.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/2blok2.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/2blok3.png";
        getal = 3 // breedte 276px
    }
}
function randomBlok(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3.png";
        getal = 3 // breedte 276px
    }
}
function randomBlokDrie(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1roze.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2roze.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3roze.png";
        getal = 3 // breedte 276px
    }
}
function randomBlokVier(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1paars.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2paars.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3paars.png";
        getal = 3 // breedte 276px
    }
}
function randomBlokVijf(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1groen.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2groen.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3groen.png";
        getal = 3 // breedte 276px
    }
}
function randomBlokZes(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1geel.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2geel.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3geel.png";
        getal = 3 // breedte 276px
    }
}
function randomBlokZeven(){
    var randomGetal = Math.floor((Math.random() * 3) + 1);
    if (randomGetal == 1) {
        blok1.src = "img/blok1oranje.png";
        getal = 1// breedte 483px
    }else if (randomGetal == 2) {
        blok1.src = "img/blok2oranje.png";
        getal = 2// breedte 345px
    }else if (randomGetal == 3) {
        blok1.src = "img/blok3oranje.png";
        getal = 3 // breedte 276px
    }
}


var i = 0;
var nieuwchar = new Image();
var char = ["img/run002.png","img/run003.png","img/run004.png","img/run006.png","img/run007.png"];

function animatechar(){


    i+= 1;

    if (i == 12) {
        nieuwchar.src = char[0];
    } else if (i == 24) {
        nieuwchar.src = char[1];
    } else if (i == 36) {
        nieuwchar.src = char[2];
    } else if (i == 48) {
        nieuwchar.src = char[3];
    } else if (i == 60) {
        nieuwchar.src = char[4];
    } else if (i > 60){
        i = 0;
    }

}



var score = 0;
function drawScreen() {
	ctx.clearRect(0,0,1200,800);
	drawObjects();
	moveShit();
    
	ctx.fillStyle="white";
	ctx.font = "30px Arial";
	ctx.fillText(("Distance: " + score), 1250, 50, 80);
    
    if (score < 107) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 1"), 700, 50, 80);
    }
    
     if (score >= 107 && score <= 206) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 2"), 700, 50, 80);
    }
    if (score >= 207 && score <= 306) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 3"), 700, 50, 80);
    }
    if (score >= 307 && score <= 406) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 4"), 700, 50, 80);
    }
    if (score >= 407 && score <= 506) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 5"), 700, 50, 80);
    }
    if (score >= 507 && score <= 606) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Level 6"), 700, 50, 80);
    }
    if (score >= 607) {
        ctx.fillStyle="white";
	   ctx.font = "30px Arial";
	   ctx.fillText(("Max Level"), 700, 50, 80);
    }


}

function moveShit(){
	begin -= snelheid;
	beginBlokTwee -= snelheid;
	eersteVloer -= snelheid;
	tweedeVloer -= snelheid;
    eersteAchtergrond -= snelheid;
    tweedeAchtergrond -= snelheid;
    coinposX -= snelheid;
    bulletposX -= bulletSnelheid;
}

var randCoin = 0;
var coinPositie = [floor, objectHeight, heightBlokTwee];
var coinposX = 200;
var coinposY = 500;
var randBullet = 0;
var bulletPositie = [floor, objectHeight, heightBlokTwee];
var bulletposX = 1100;
var bulletposY = 600;
function drawObjects() {


    ctx.drawImage(background, eersteAchtergrond, 0);
    ctx.drawImage(background2, tweedeAchtergrond, 0);
    ctx.drawImage(coin, coinposX, coinposY, 50, 50); //coin wordt gemaakt
    ctx.drawImage(bullet, bulletposX, bulletposY, 50, 50); //bullet wordt gemaakt


    var nee = new Image();
    nee.src = "img/coin.png";
    ctx.drawImage(nee, 10, 28);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText((coin_score), 45, 50);

    ctx.drawImage(blok1, begin, objectHeight); // object 1 opgemaakt
    ctx.drawImage(hogeblok, beginBlokTwee, heightBlokTwee);

    ctx.drawImage(vloer, eersteVloer, 775); //grond
    ctx.drawImage(vloer2, tweedeVloer, 775);
    if (beginBlokTwee <= -500) {
        beginBlokTwee = 1400; // blok achteraan zetten
        heightBlokTwee = 480 - (Math.floor(Math.random() * 120))
    }

    if (begin <= -500) {
        begin = 1400; // als blok1 geweest is, achteraan zetten
        objectHeight = 300 - (Math.floor(Math.random() * 100) + 1)
        if (score <= 90) {
            randomBlok();
        }
        else if (score >= 91 && score <= 190) {
            randomBlokTwee();
        }
        else if (score >= 191 && score <= 290) {
            randomBlokDrie();
        }
        else if (score >= 291 && score <= 390) {
            randomBlokVier();
        }
        else if (score >= 391 && score <= 490) {
            randomBlokVijf();
        }
        else if (score >= 491 && score <= 590) {
            randomBlokZes();
        }
        else if (score >= 591 && score <= 690) {
            randomBlokZeven();
        }
    }

    if (eersteVloer == -1200 && score <= 100) { //zorgt voor rollende vloer
        eersteVloer = 0;
        vloer.src = "img/grond.png";
    } else if (eersteVloer == -1200 && score >= 101) {
        eersteVloer = 0;
        vloer.src = "img/2grond.png";

    }
    if (score >= 91 && score <= 190) {
        hogeblok.src = "img/2blok1.png";
    }
    if (score >= 191 && score <= 290) {
        hogeblok.src = "img/blok1roze.png";
    }
    if (score >= 291 && score <= 390) {
        hogeblok.src = "img/blok1paars.png";
    }
    if (score >= 391 && score <= 490) {
        hogeblok.src = "img/blok1groen.png";
    }
    if (score >= 491 && score <= 590) {
        hogeblok.src = "img/blok1geel.png";
    }
    if (score >= 591 && score <= 690) {
        hogeblok.src = "img/blok1oranje.png";
    }
    if (tweedeVloer == 0 && score <= 100) { //zorgt voor rollende vloer
        tweedeVloer = 1200;
        vloer2.src = "img/grond.png";
    } else if (tweedeVloer == 0 && score >= 100) {
        tweedeVloer = 1200;
        vloer2.src = "img/2grond.png";
    }
    if (eersteAchtergrond = -1200 && score >= 0 && score < 92) {
        eersteAchtergrond = 0;
        background.src = "img/achtergrond.png";
    } else if (eersteAchtergrond = -1200 && score >= 92 && score < 192) {
        eersteAchtergrond = 0;
        snelheid = 15;
        background.src = "img/achtergrondrood.png";
    }   else if (eersteAchtergrond = -1200 && score >= 192 && score < 292) {
        eersteAchtergrond = 0;
        snelheid = 20;
        background.src = "img/achtergrondroze.png";
    }
    else if (eersteAchtergrond = -1200 && score >= 292 && score < 392) {
        eersteAchtergrond = 0;
        snelheid = 25;
        background.src = "img/achtergrondpaars.png";
    }   
    else if (eersteAchtergrond = -1200 && score >= 392 && score < 492) {
        eersteAchtergrond = 0;
        snelheid = 30;
        background.src = "img/achtergrondgroen.png";
    } 
    else if (eersteAchtergrond = -1200 && score >= 492 && score < 592) {
        eersteAchtergrond = 0;
        snelheid = 35;
        background.src = "img/achtergrondgeel.png";
    }   
    else if (eersteAchtergrond = -1200 && score >= 592) {
        eersteAchtergrond = 0;
        snelheid = 40;
        background.src = "img/achtergrondoranje.png";
    }   

    if (tweedeAchtergrond = -1200 && score >=0 && score < 92) {
        tweedeAchtergrond = 1200;
        background2.src = "img/achtergrond.png";
    } else if (tweedeAchtergrond = -1200 && score >=92 && score < 192) {
        tweedeAchtergrond = 1200;
        snelheid = 15;
        background2.src = "img/achtergrondrood.png";
    }  else if (tweedeAchtergrond = -1200 && score >= 192 && score < 292) {
        tweedeAchtergrond = 1200;
        snelheid = 20;
        background2.src = "img/achtergrondroze.png";
    }
    else if (tweedeAchtergrond = -1200 && score >= 292 && score < 392) {
        tweedeAchtergrond = 1200;
        snelheid = 25;
        background2.src = "img/achtergrondpaars.png";
    }   
    else if (tweedeAchtergrond = -1200 && score >= 392 && score < 492) {
        tweedeAchtergrond = 1200;
        snelheid = 30;
        background2.src = "img/achtergrondgroen.png";
    }
    else if (tweedeAchtergrond = -1200 && score >= 492 && score < 592) {
        tweedeAchtergrond = 1200;
        snelheid = 35;
        background2.src = "img/achtergrondgeel.png";
    }
    else if (tweedeAchtergrond = -1200 && score >= 592) {
        tweedeAchtergrond = 1200;
        snelheid = 40;
        background2.src = "img/achtergrondoranje.png";
    }
    
   /* if (eersteAchtergrond == -1200 && score <= 92) {
        eersteAchtergrond = 1200;
        background.src = "img/achtergrond.png";
    } else if (eersteAchtergrond == -1200 && score >= 92) {
        eersteAchtergrond = 1200;
        background.src = "img/achtergrondrood.png";
    }

    if (tweedeAchtergrond == -1200 && score <= 90) {
        tweedeAchtergrond = 1200;
        background2.src = "img/achtergrond.png";
    } else if (tweedeAchtergrond == -1200 && score >= 91) {
        tweedeAchtergrond = 1200;
        background2.src = "img/achtergrondrood.png";
    }*/


    if (coinposX == -100) {
        coinposX = 1500; //random coin
        randCoin = (Math.floor(Math.random() * 3) + 1) - 1;
        coinposY = coinPositie[randCoin] - 100;
        hit = true;
    }





    if (bulletposX == -100) {
        bulletposX = 1500; //random bullet
        randBullet = (Math.floor(Math.random() * 3) + 1) - 1;
        bulletposY = bulletPositie[randBullet] - 100;
        hit = true;
    }

    return bulletposY, coinposY;
}

var timer = 10
var timerteller = 0
var scoreteller = 0
function animate() { //60fps functie
	drawScreen();
	requestAnimationFrame(animate);
	drawPlayer();
	animatechar();
	position();
	timerteller += 1;
	if (timerteller == 1000000){
		timerteller = 0;
		timer -= 1;
	}
	if (timer <= 0){
		hit = false;

		timer = 0;

	}
	scoreteller += 1;
	if (scoreteller == 10 && timer > 0){
		scoreteller = 0;
		score += 1;
	}
    

}



function drawPlayer() {
	ctx.save
	ctx.drawImage(nieuwchar,xpositie,ypositie + 20);
	ctx.restore
}

function handleKeyDown(evt) {
	evt = evt || window.event;
	switch (evt.keyCode) {
        case 32:
        space  = true;
        break;
        case 37:
        left = true;
        break;
		case 38:
		up = true;
		break;
		case 39:
		right = true;
		break;
	}
}

function handleKeyUp(evt) {
		evt = evt || window.event;
		switch (evt.keyCode) {
            case 32:
            space  = false;
            break;
			case 37:
			left = false;
			break;
			case 38:
			up = false;
			break;
			case 39:
			right = false;
			break;

		}
}



hit = true;
grounded = true;
function position() {

    if (coinposY >= objectHeight - 50 && coinposY <= objectHeight && coinposX >= begin - 80 && coinposX <= begin + 441) {
        coinposY -= 100;
    }
    if (coinposY >= heightBlokTwee - 50 && coinposY <= heightBlokTwee && coinposX >= beginBlokTwee - 80 && coinposX <= beginBlokTwee + 440) {

        coinposY -= 100;
    }

    if (ypositie <= coinposY + 20 && ypositie >= coinposY - 70 && xpositie <= coinposX + 10 && xpositie >= coinposX - 70 && hit == true) {
        hit = false; //coin
        coinposY = 800;
        coin_score += 1;
    }

    if (bulletposY >= objectHeight - 50 && bulletposY <= objectHeight && bulletposX >= begin - 80 && bulletposX <= begin + 441) {
        bulletposY -= 100;
    }
    if (bulletposY >= heightBlokTwee - 50 && bulletposY <= heightBlokTwee && bulletposX >= beginBlokTwee - 80 && bulletposX <= beginBlokTwee + 440) {

        bulletposY -= 100;
    }

    if (ypositie <= bulletposY + 20 && ypositie >= bulletposY - 70 && xpositie <= bulletposX + 10 && xpositie >= bulletposX - 70 && hit == true) {
        hit = false; //bullet
        bulletposY = 800;
        window.location.href = "gameover/retry.html";
    }


    if (left) { 		// Left arrow key = naar links bewegen
        animatechar();
        xpositie -= sidewayspeed
    } else if (right) { // right arrow key = naar rechts bewegen
        xpositie += sidewayspeed
        animatechar();
    } else if (timer > 0) {
        xpositie -= 2
        animatechar();
    }

    if (ypositie <= (floor - 290)) {		//zorgt er voor dat je naar beneden komt na sprong
        grounded = false;
    }

    if (up && grounded == true) {	// key up = jump
        ypositie -= jumpspeed;
        nieuwchar.src = "img/run001.png";
    } else {
        grounded = false;
        ypositie += landspeed;
    }


    if (ypositie >= 580) { // vloer (min positie)		// zorgt er voor dat je niet door de grond valt
        ypositie = 580;
        floor = 580;
        grounded = true;
        hit = true;
    }

    if (getal == 1) { // wanneer blok #1 gebruikt wordt
        if (ypositie <= objectHeight && ypositie >= objectHeight - 50 && xpositie >= begin - 60 && xpositie <= begin + 480) {

            grounded = false;
        }
        if (xpositie >= begin - 60 && xpositie <= begin + (440) && ypositie > (objectHeight - 85) && ypositie <= objectHeight) {
            ypositie = objectHeight - 85;
            grounded = true;
            hit = true; //zorgt er voor dat je er op kan staan (verandert waarde floor)
            floor = objectHeight - 85;
        }

    } else if (getal == 2) { //wanneer blok #2 gebruikt wordt
        if (ypositie <= objectHeight && ypositie >= objectHeight - 50 && xpositie >= begin - 60 && xpositie <= begin + 301) {

            grounded = false;
        }

        if (xpositie >= begin - 60 && xpositie <= begin + (300) && ypositie > (objectHeight - 85) && ypositie <= objectHeight) {
            ypositie = objectHeight - 85;
            grounded = true;
            hit = true; // zorgt voor bovenkant
            floor = objectHeight - 85;
        }
    }
    else if (getal == 3) {
        if (ypositie <= objectHeight && ypositie >= objectHeight - 50 && xpositie >= begin - 60 && xpositie <= begin + 231) {

            grounded = false;
        }

        if (xpositie >= begin - 60 && xpositie <= begin + (230) && ypositie > (objectHeight - 85) && ypositie <= objectHeight) {
            ypositie = objectHeight - 85;
            grounded = true;
            hit = true; // zorgt voorw bovenkant
            floor = objectHeight - 85;
        }

    }


    if (coin_score === 20) {
        window.location.href = "victoryscreen/victory.html";
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BLOK2
    if (ypositie <= heightBlokTwee && ypositie >= heightBlokTwee - 50 && xpositie >= beginBlokTwee - 60 && xpositie <= beginBlokTwee + 441) {
        ypositie = heightBlokTwee + 1 //zorgt voor dichte onderkant
        grounded = false;
    }
    if (xpositie >= beginBlokTwee - 60 && xpositie <= beginBlokTwee + (440) && ypositie > (heightBlokTwee - 85) && ypositie <= heightBlokTwee) {
        ypositie = heightBlokTwee - 85;
        grounded = true;
        hit = true; //zorgt er voor dat je er op kan staan (verandert waarde floor)
        floor = heightBlokTwee - 85;
    }

    if (xpositie >= 1111) { // dichte zijkanten
        xpositie = 1111;
    } else if (xpositie <= -20) {
        xpositie = -20;
    }
}