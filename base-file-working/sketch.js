/**
	* ABOUT THIS FILE
	* This file can be used as the base file for your assignment
	* This code is written using p5.js see https://p5js.org/
**/

//the code inside these curly brackets runs once when you first load the sketch
function setup() {
	//this line creates the canvas and sets its width and height at 400px
	var canvas = createCanvas(400, 400);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
}

// the code inside these curly brackets runs over and over again
function draw() {
	//draw a background
	background(248, 216, 221);

	if (mouseIsPressed) {
		//when mouse is pressed draw this image
        // 2nd half of eye (cl)
        strokeWeight(1);
        stroke(219, 181, 106);
        fill(250, 250, 250);
        beginShape();
        curveVertex(100, 200);
        curveVertex(100, 200);
        curveVertex(130, 228);
        curveVertex(170, 246);
        curveVertex(200, 250);
        curveVertex(230, 246);
        curveVertex(270, 228);
        curveVertex(300, 200);
        curveVertex(300, 200);
        endShape();
        // eyeballs (cl)
        strokeWeight(0.5);
        stroke(219, 181, 106);
        fill(127, 196, 235);
        ellipse(width/2, height/2, 76, 76)
        fill(34, 34, 34);
        ellipse(width/2, height/2, 28, 28)
        strokeWeight(1);
        // tangent lines (cl)
        stroke(87, 74, 46);
        var steps = 9; // number of iterations
        for (var i = 0; i <= steps; i++) {
        var t = i / steps;
        var x = curvePoint(400, 280, 120, 0, t); // in form; cx1, x1, x2 ,cx2
        var y = curvePoint(-120, 192, 192, -120, t); // in form; cy1, y1, y2, cy2
        var tx = curveTangent(400, 280, 120, 0, t);
        var ty = curveTangent(-120, 192, 192, -120, t);
        var a = atan2(ty, tx); // arctan magic    
        var rns = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7/8, 1]; // get random number from array
        var rn = random(rns); // select random number
        a -= rn * PI / 2.0; // period magic (rotation)
        line(x, y, cos(a) * 24 + x, sin(a) * 24 + y); // eyelash lines
        }
        // 1st half of eye (cl)
        strokeWeight(1);
        stroke(219, 181, 106);
        fill(246, 228, 221);
        beginShape();
        curveVertex(100, 200);
        curveVertex(100, 200);
        curveVertex(130, 172);
        curveVertex(170, 154);
        curveVertex(200, 150);
        curveVertex(230, 154);
        curveVertex(270, 172);
        curveVertex(300, 200);
        curveVertex(300, 200);
        endShape();
        // eyelid (cl)
        strokeWeight(1);
        fill(246, 228, 221);
        beginShape();
        curveVertex(100, 200);
        curveVertex(100, 200);
        curveVertex(130, 216);
        curveVertex(170, 227);
        curveVertex(200, 230);
        curveVertex(230, 227);
        curveVertex(270, 216);
        curveVertex(300, 200);
        curveVertex(300, 200);
        endShape();
        
	} else {
		//when mouse is released draw this image
        // two halves of eye
        strokeWeight(1);
        stroke(219, 181, 106);
        fill(250, 250, 250);
        beginShape();
        curveVertex(100, 200);
        curveVertex(100, 200);
        curveVertex(130, 172);
        curveVertex(170, 154);
        curveVertex(200, 150);
        curveVertex(230, 154);
        curveVertex(270, 172);
        curveVertex(300, 200);
        curveVertex(300, 200);
        endShape();
        beginShape();
        curveVertex(100, 200);
        curveVertex(100, 200);
        curveVertex(130, 228);
        curveVertex(170, 246);
        curveVertex(200, 250);
        curveVertex(230, 246);
        curveVertex(270, 228);
        curveVertex(300, 200);
        curveVertex(300, 200);
        endShape();
        // eyeballs
        strokeWeight(0.5);
        stroke(219, 181, 106);
        fill(127, 196, 235);
        ellipse(width/2, height/2, 76, 76)
        fill(34, 34, 34);
        ellipse(width/2, height/2, 28, 28)
        // tangent lines
        stroke(87, 74, 46);
        strokeWeight(1);
        var steps = 9; // number of iterations
        for (var i = 0; i <= steps; i++) {
        var t = i / steps;
        var x = curvePoint(80, 108, 292, 320, t); // in form; cx1, x1, x2 ,cx2; cx1,2 add to 400
        var y = curvePoint(540, 190, 190, 540, t); // in form; cy1, y1, y2, cy2
        var tx = curveTangent(80, 108, 292, 320, t);
        var ty = curveTangent(540, 190, 190, 540, t);
        var rns = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7/8, 1]; // get random number from array
        var rn = random(rns); // select random number
        var a = atan2(ty, tx); // arctan magic
        a -= rn * PI / 2.0; // period magic (rotation)
        line(x, y, cos(a) * 20 + x, sin(a) * 20 + y); // eyelash lines
        }
        
	}
    
}
