var shapes;
var ctx;
var inter;
//Variables for the house body
var houseDimensionX = 180;
var houseDimensionY = 120;
var leftFrontFaceHouseBodyX = 100;
var rightFrontFaceHouseBodyX = leftFrontFaceHouseBodyX + houseDimensionX;
var topFrontFaceHouseBodyY = 340;
var bottomFrontFaceHouseBodyY = topFrontFaceHouseBodyY + houseDimensionY;
var leftBackFaceHouseBodyX = 250;
var rightBackFaceHouseBodyX = leftBackFaceHouseBodyX + houseDimensionX;
var topBackFaceHouseBodyY = 300;
var bottomBackFaceHouseBodyY = topBackFaceHouseBodyY + houseDimensionY;
//Variables for the house roof
var leftFrontRoofCornerX = leftFrontFaceHouseBodyX - (houseDimensionX / 4);
var rightFrontRoofCornerX = rightFrontFaceHouseBodyX + (houseDimensionX / 4);
var bottomFrontRoofY = topFrontFaceHouseBodyY;
var pointFrontRoofX = leftFrontFaceHouseBodyX + (houseDimensionX / 2);
var pointFrontRoofY = topFrontFaceHouseBodyY - (houseDimensionY / 1.5);
var leftBackRoofCornerX = leftBackFaceHouseBodyX - (houseDimensionX / 4);
var rightBackRoofCornerX = rightBackFaceHouseBodyX + (houseDimensionX / 4);
var bottomBackRoofY = topBackFaceHouseBodyY;
var pointBackRoofX = leftBackFaceHouseBodyX + (houseDimensionX / 2);
var pointBackRoofY = topBackFaceHouseBodyY - (houseDimensionY / 1.5);
//Variables for the Chimney
var chimenySizeX = 50;
var chimenySizeY = 120;
var chimLeftBackX = pointFrontRoofX + 25;
var chimTopBackY = pointFrontRoofY - chimenySizeY / 2 - 20;
var chimRightBackX = chimLeftBackX + chimenySizeX;
var chimBottomBackY = chimTopBackY + chimenySizeY;
var chimLeftFrontX = pointFrontRoofX - chimenySizeX / 2 + 15;
var chimTopFrontY = pointFrontRoofY - chimenySizeY / 2.5 - 25;
var chimRightFrontX = chimLeftFrontX + chimenySizeX;
var chimBottomFrontY = chimTopFrontY + chimenySizeY;
var smokeLimitX1;
var smokeLimitX2;

//Draws mountains in background
function drawMountains() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.lineWidth = "1";
    ctx.fillStyle = "lightSeaGreen";
    var x = -75;
    var mountIncrement = 500;
    var numMountains = 2;
    var controlInterval = mountIncrement / 3;
    var floorY = bottomBackFaceHouseBodyY - houseDimensionY / 4;
    var mountHeight = 300;
    var controlPointX = x + controlInterval;
    ctx.beginPath();
    for (var j = 0; j < numMountains; j++) {
        ctx.moveTo(x, floorY);
        ctx.bezierCurveTo(controlPointX, floorY - mountHeight, controlPointX + controlInterval, floorY - mountHeight, x + mountIncrement, floorY);
        x += mountIncrement - controlInterval;
        controlPointX += mountIncrement - controlInterval;
        ctx.fill();
        ctx.stroke();
    }
}
//Draws background
function drawBackground() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.lineWidth = "1";
    ctx.fillStyle = "lightskyBlue";
    ctx.fillRect(0, 0, shapes.width, shapes.height);
    ctx.fillStyle = "green";
    ctx.fillRect(0, (bottomBackFaceHouseBodyY - houseDimensionY / 4), shapes.width, shapes.height);
    drawMountains();
    ctx.strokeRect(-1, (bottomBackFaceHouseBodyY - houseDimensionY / 4), shapes.width + 2, shapes.height + 1);
}
//Draws logs on body of house
function drawLogsBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.lineWidth = "2";
    var logs = houseDimensionY / 20;
    var logsInterval = 20;
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.moveTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval));
        ctx.lineTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY - (i * logsInterval));
        ctx.closePath();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(leftFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
}
//Draws logs on roof of house
function drawLogsRoof() {
    var logs = 9;
    var logsInterval = 20;
    ctx.fillStyle = "saddleBrown";
    ctx.lineWidth = "2";
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightBackRoofCornerX - (i * (logsInterval / 1.19)), bottomBackRoofY - (i * (logsInterval / 1.95)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(rightFrontRoofCornerX, bottomFrontRoofY + (logsInterval / 2));
    ctx.lineTo(pointFrontRoofX - (logsInterval / 2), pointFrontRoofY - (logsInterval / 2) + 2);
    ctx.lineTo(pointBackRoofX - 5, pointBackRoofY - (logsInterval / 2));
    ctx.lineTo(rightBackRoofCornerX + (logsInterval / 2) - 2, bottomBackRoofY + (logsInterval / 9));
    ctx.lineTo(rightBackRoofCornerX + (logsInterval / 7), bottomBackRoofY + (logsInterval / 2));
    ctx.closePath();
    ctx.fill();
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(leftFrontRoofCornerX + (i * (logsInterval / 1.2)), bottomFrontRoofY - (i * (logsInterval / 2)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        if (i == 0) {
            ctx.moveTo(rightFrontRoofCornerX + (logsInterval / 7), bottomFrontRoofY + (logsInterval / 2));
            ctx.lineTo(rightBackRoofCornerX + (logsInterval / 7), bottomBackRoofY + (logsInterval / 2));
            //ctx.lineTo(rightBackRoofCornerX, bottomBackRoofY);
            ctx.fill();
        }
        ctx.moveTo(rightFrontRoofCornerX - (i * (logsInterval / 1.15)), bottomFrontRoofY - (i * logsInterval / 2) - (logsInterval / 2));
        ctx.lineTo(rightBackRoofCornerX - (i * (logsInterval / 1.16)), bottomBackRoofY - (i * logsInterval / 1.97) - (logsInterval / 2));
        ctx.stroke();
    }
    logs = 8;
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightFrontRoofCornerX - (i * (logsInterval / 1.19)), bottomFrontRoofY - (i * (logsInterval / 1.95)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
//Draws planks on body of house
function drawPlanksHouse() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var plankHeight = 20;
    ctx.lineWidth = "1";
    var plankNum = houseDimensionY / plankHeight;
    for (var i = 0; i < plankNum; i++) {
        ctx.beginPath();
        ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY + plankHeight * i);
        ctx.lineTo(rightFrontFaceHouseBodyX, topFrontFaceHouseBodyY + plankHeight * i);
        ctx.stroke();
    }
}
//Draws body of the house
function houseBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "chocolate";
    ctx.lineWidth = 2;
    //Fills and outlines the "Back Face" of the house body
    ctx.fillRect(leftBackFaceHouseBodyX, topBackFaceHouseBodyY, houseDimensionX, houseDimensionY);
    //Fills the space between the "faces" with colour
    ctx.beginPath();
    ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.lineTo(leftBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.lineTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY);
    ctx.closePath();
    ctx.fill();
    //Draws the lines connecting the corners to give appearance of depth
    ctx.beginPath();
    ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.lineTo(leftBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.closePath();
    ctx.stroke();
    //Fills and outlines the "Front Face" of the house body
    ctx.fillStyle = "peru";
    ctx.fillRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
    ctx.strokeRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
    drawPlanksHouse();
    drawLogsBody();
}
//Draws planks on roof of house
function drawPlanksRoof() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var plankWidth = 20;
    ctx.lineWidth = "1";
    var plankNum = (rightFrontRoofCornerX - leftFrontRoofCornerX) / plankWidth;
    var lineHeight = 0;
    for (var i = 0; i < plankNum; i++) {
        ctx.beginPath();
        ctx.moveTo(leftFrontRoofCornerX + plankWidth * i, bottomFrontRoofY);
        ctx.lineTo(leftFrontRoofCornerX + plankWidth * i, bottomFrontRoofY - lineHeight);
        ctx.closePath();
        ctx.stroke();
        if (i < (plankNum / 2)) {
            lineHeight += 13;
        }
        else {
            lineHeight -= 13;
        }
    }
}
//Draws the roof
function houseRoof() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.lineWidth = 2;
    //Makes the shape, fills it and oulines it
    ctx.beginPath();
    ctx.moveTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.lineTo(leftBackRoofCornerX, bottomBackRoofY);
    //ctx.lineTo(pointBackRoofX, pointBackRoofY);
    ctx.moveTo(pointBackRoofX, pointBackRoofY);
    ctx.lineTo(rightBackRoofCornerX, bottomBackRoofY);
    ctx.lineTo(rightFrontRoofCornerX, bottomFrontRoofY);
    ctx.lineTo(pointFrontRoofX, pointFrontRoofY);
    ctx.lineTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.lineTo(pointBackRoofX, pointBackRoofY);
    ctx.moveTo(pointBackRoofX, pointBackRoofY);
    ctx.lineTo(pointFrontRoofX, pointFrontRoofY);
    ctx.lineTo(rightFrontRoofCornerX, bottomFrontRoofY);
    ctx.lineTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.closePath();
    ctx.fill();
    ctx.stroke();
    drawPlanksRoof();
    drawLogsRoof();
}
//Draws decor on body of house
function drawDecorBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "brown";
    ctx.lineWidth = 1;
    //Variables for door
    var doorDimensionX = houseDimensionX / 4;
    var doorDimensionY = houseDimensionY / 2;
    var doorTopX = leftFrontFaceHouseBodyX + (houseDimensionX / 2 - doorDimensionX / 2);
    var doorTopY = topFrontFaceHouseBodyY + (houseDimensionY / 2);
    //Varaibles for Door Knob
    var knobRadius = 3;
    var knobCenterX = doorTopX + doorDimensionX - knobRadius - 3;
    var knobCenterY = doorTopY + doorDimensionY / 2;
    var knobStartAngle = 0;
    var knobEndAngle = 2 * Math.PI;
    //Variables for windows
    var windowSize = houseDimensionY / 3;
    var windowTopY = topFrontFaceHouseBodyY + windowSize / 3;
    var window1TopX = leftFrontFaceHouseBodyX + windowSize / 2;
    var window2TopX = window1TopX + windowSize * 2.5;
    //Draws the door and oulines
    ctx.fillRect(doorTopX, doorTopY, doorDimensionX, doorDimensionY);
    ctx.strokeRect(doorTopX, doorTopY, doorDimensionX, doorDimensionY);
    //Draws the door knob
    ctx.beginPath();
    ctx.arc(knobCenterX, knobCenterY, knobRadius, knobStartAngle, knobEndAngle);
    ctx.fillStyle = "black";
    ctx.fill();
    //Sets the background for the windows
    ctx.fillStyle = "gray";
    //Draws and outlines the windows
    ctx.fillRect(window1TopX, windowTopY, windowSize, windowSize);
    ctx.strokeRect(window1TopX, windowTopY, windowSize, windowSize);
    ctx.fillRect(window2TopX, windowTopY, windowSize, windowSize);
    ctx.strokeRect(window2TopX, windowTopY, windowSize, windowSize);
    //Draws the frames for the windows
    ctx.beginPath();
    ctx.moveTo(window1TopX + windowSize / 2, windowTopY);
    ctx.lineTo(window1TopX + windowSize / 2, windowTopY + windowSize);
    ctx.moveTo(window1TopX, windowTopY + windowSize / 2);
    ctx.lineTo(window1TopX + windowSize, windowTopY + windowSize / 2);
    ctx.moveTo(window2TopX + windowSize / 2, windowTopY);
    ctx.lineTo(window2TopX + windowSize / 2, windowTopY + windowSize);
    ctx.moveTo(window2TopX, windowTopY + windowSize / 2);
    ctx.lineTo(window2TopX + windowSize, windowTopY + windowSize / 2);
    ctx.closePath();
    ctx.stroke();
}
//Draws decor on roof of house
function drawDecorRoof() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var winWidth = (rightFrontRoofCornerX - leftFrontRoofCornerX) / 1.5;
    var winHeight = (bottomFrontRoofY - pointFrontRoofY) / 1.5;
    var winLeftX = leftFrontRoofCornerX + winWidth / 2;
    var winRightX = rightFrontRoofCornerX - winWidth / 2;
    var winBottomY = bottomFrontRoofY - winHeight / 2 + 5;
    var winPointX = pointFrontRoofX;
    var winPointY = pointFrontRoofY + winHeight / 2 + 5;
    ctx.beginPath();
    ctx.moveTo(winLeftX, winBottomY);
    ctx.lineTo(winPointX, winPointY);
    ctx.lineTo(winRightX, winBottomY);
    ctx.closePath();
    ctx.lineWidth = "1";
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(winPointX, winPointY);
    ctx.lineTo(winPointX, winBottomY);
    ctx.moveTo(winPointX - winWidth / 6.8, winBottomY - winHeight / 5);
    ctx.lineTo(winPointX + winWidth / 6.8, winBottomY - winHeight / 5);
    ctx.closePath()
    ctx.stroke();
}
//Draws bricks on the chimney
function drawBricks() {
    "use strict"
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.lineWidth = "1";
    var brickHeight = 8;
    var brickWidth = chimenySizeX / 3;
    var bricksTall = chimenySizeY / brickHeight;
    ctx.fillStyle = "fireBrick";
    ctx.fillRect(chimLeftFrontX + 2 * brickWidth, chimTopFrontY, brickWidth, chimenySizeY);
    for (var i = 0; i < bricksTall; i++) {
        var brickHeight = 8;
        ctx.fillStyle = "fireBrick";
        if (i % 2 == 0) {
            ctx.fillRect(chimLeftFrontX, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.fillRect(chimLeftFrontX + 2 * brickWidth, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.strokeRect(chimLeftFrontX, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.strokeRect(chimLeftFrontX + 2 * brickWidth, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
        }
        else {
            ctx.fillRect(chimLeftFrontX + brickWidth / 2, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.fillStyle = "orangeRed";
            ctx.fillRect(chimLeftFrontX + brickWidth * 1.5, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.strokeRect(chimLeftFrontX + brickWidth / 2, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
            ctx.strokeRect(chimLeftFrontX + brickWidth * 1.5, chimTopFrontY + (i * brickHeight), brickWidth, brickHeight);
        }
    }
    var brickWidthSlant = (chimRightBackX - chimRightFrontX) / 3;
    var brickHeightSlant = (chimTopFrontY - chimTopBackY) / 3;
    for (var j = 0; j < bricksTall; j++) {
        if (j % 2 == 0) {
            ctx.beginPath();
            ctx.moveTo(chimRightFrontX, chimTopFrontY + brickHeight * j);
            ctx.lineTo(chimRightFrontX, chimTopFrontY + brickHeight + brickHeight * j);
            ctx.lineTo(chimRightFrontX + brickWidthSlant / 2, chimTopFrontY + brickHeight + brickHeight * j - brickHeightSlant / 2);
            ctx.lineTo(chimRightFrontX + brickWidthSlant / 2, chimTopFrontY + brickHeight + brickHeight * j - brickHeightSlant / 2 - brickHeight);
            //
            ctx.moveTo(chimRightFrontX + brickWidthSlant * 1.5, chimTopFrontY + brickHeight * j - brickHeightSlant * 1.5);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 1.5, chimTopFrontY + brickHeight * j - brickHeightSlant * 1.5 + brickHeight);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 2.5, chimTopFrontY + brickHeight * j - brickHeightSlant * 2.5 + brickHeight);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 2.5, chimTopFrontY + brickHeight * j - brickHeightSlant * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
        else {
            ctx.beginPath();
            ctx.moveTo(chimRightFrontX, chimTopFrontY + brickHeight * j);
            ctx.lineTo(chimRightFrontX, chimTopFrontY + brickHeight + brickHeight * j);
            ctx.lineTo(chimRightFrontX + brickWidthSlant, chimTopFrontY + brickHeight + brickHeight * j - brickHeightSlant);
            ctx.lineTo(chimRightFrontX + brickWidthSlant, chimTopFrontY + brickHeight + brickHeight * j - brickHeightSlant - brickHeight);
            //
            ctx.moveTo(chimRightFrontX + brickWidthSlant * 2, chimTopFrontY + brickHeight * j - brickHeightSlant * 1.5);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 2, chimTopFrontY + brickHeight * j - brickHeightSlant * 2 + brickHeight);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 3, chimTopFrontY + brickHeight * j - brickHeightSlant * 3 + brickHeight);
            ctx.lineTo(chimRightFrontX + brickWidthSlant * 3, chimTopFrontY + brickHeight * j - brickHeightSlant * 3);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
        ctx.beginPath();
        ctx.moveTo(chimRightFrontX, chimTopFrontY + brickHeight * j);
        ctx.lineTo(chimRightBackX, chimTopBackY + brickHeight * j);
        ctx.stroke();
        ctx.closePath();
    }
}
//Draws the chimney
function drawChimeny() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "orangeRed";
    ctx.lineWidth = 2;
    ctx.fillRect(chimLeftBackX, chimTopBackY, chimenySizeX, chimenySizeY);
    ctx.strokeRect(chimLeftBackX, chimTopBackY, chimenySizeX, chimenySizeY);
    //Fills the space between with colour
    ctx.beginPath();
    ctx.moveTo(chimLeftBackX, chimTopBackY);
    ctx.lineTo(chimLeftFrontX, chimTopFrontY);
    ctx.lineTo(chimRightFrontX, chimBottomFrontY);
    ctx.lineTo(chimRightBackX, chimBottomBackY);
    ctx.lineTo(chimRightBackX, chimTopBackY);
    ctx.moveTo(chimRightFrontX, chimTopFrontY);
    ctx.lineTo(chimRightBackX, chimTopBackY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //Fills the top of the chimeny
    ctx.beginPath();
    ctx.moveTo(chimLeftBackX, chimTopBackY);
    ctx.lineTo(chimLeftFrontX, chimTopFrontY);
    ctx.lineTo(chimRightFrontX, chimTopFrontY);
    ctx.lineTo(chimRightBackX, chimTopBackY);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    //Draws the fornt face of chimeny
    ctx.fillStyle = "orangeRed";
    ctx.fillRect(chimLeftFrontX, chimTopFrontY, chimenySizeX, chimenySizeY);
    ctx.strokeRect(chimLeftFrontX, chimTopFrontY, chimenySizeX, chimenySizeY);
    //Draws the bricks
    drawBricks();
}

//Variables for smoke orientation
var chimneyX = chimLeftFrontX;
var chimneyY = chimTopFrontY;
var alphaMod1 = 0.8;
var alphaMod2 = 1.0;
var alphaMod3 = 0.8;

//Draws smoke puff 1
function drawSmoke1(scaleX, scaleY) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var xMod = 30;
    var yMod = 0;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    ctx.globalAlpha = alphaMod2;
    if (chimneyX < shapes.width && chimneyY > 0) {
      alphaMod1 -= 0.025;
    } else {
      alphaMod1 = 0.8;
    }
    //Draws smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX + xMod, chimneyY - yMod );
    ctx.quadraticCurveTo(chimneyX + xMod + 10, chimneyY - yMod + 5, chimneyX + xMod + 20, chimneyY - yMod - 10);
    ctx.quadraticCurveTo(chimneyX + xMod + 30, chimneyY - yMod - 15, chimneyX + xMod + 25, chimneyY - yMod - 20);
    ctx.quadraticCurveTo(chimneyX + xMod + 20, chimneyY - yMod - 20, chimneyX + xMod + 20, chimneyY - yMod - 22);
    ctx.quadraticCurveTo(chimneyX + xMod + 7, chimneyY - yMod - 40, chimneyX + xMod, chimneyY - yMod - 20);
    ctx.quadraticCurveTo(chimneyX + xMod - 12, chimneyY - yMod - 25, chimneyX + xMod - 10, chimneyY - yMod - 15);
    ctx.quadraticCurveTo(chimneyX + xMod - 15, chimneyY - yMod + 5, chimneyX + xMod, chimneyY - yMod );
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.7)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX + xMod - 6, chimneyY - yMod - 6);
    ctx.quadraticCurveTo(chimneyX + xMod - 4, chimneyY - yMod - 4, chimneyX + xMod, chimneyY - yMod - 8);
    ctx.quadraticCurveTo(chimneyX + xMod + 6, chimneyY - yMod - 8, chimneyX + xMod + 8, chimneyY - yMod - 11);
    ctx.quadraticCurveTo(chimneyX + xMod + 2, chimneyY - yMod - 12, chimneyX + xMod - 5, chimneyY - yMod - 10);
    ctx.lineTo(chimneyX + xMod - 6, chimneyY - yMod - 6);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();

    //Changes smoke position
    if (chimneyX < shapes.width && chimneyY > 0) {
        chimneyX += 3;
        chimneyY -= 2;
    }
    else {
        chimneyX = chimLeftBackX;
        chimneyY = chimTopBackY;
    }
    ctx.restore();

}
//Draws smoke puff 2
function drawSmoke2(scaleX, scaleY) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var xMod = -10;
    var yMod = -20;
    ctx.save();
    ctx.scale(scaleX, scaleY);
    //Decreases Opacity
    ctx.globalAlpha = alphaMod2;
    if (chimneyX < shapes.width && chimneyY > 0) {
      alphaMod2 -= 0.025;
    } else {
      alphaMod2 = 0.8;
    }

    //Draws smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX + xMod, chimneyY - yMod);
    ctx.quadraticCurveTo(chimneyX + 10 + xMod, chimneyY + 8 - yMod, chimneyX + 20 + xMod, chimneyY - yMod);
    ctx.quadraticCurveTo(chimneyX + 50 + xMod, chimneyY - yMod, chimneyX + 30 + xMod, chimneyY - 30 - yMod);
    ctx.quadraticCurveTo(chimneyX + 15 + xMod, chimneyY - 50 - yMod, chimneyX + 5 + xMod, chimneyY - 28 - yMod);
    ctx.quadraticCurveTo(chimneyX - 20 + xMod, chimneyY - 10 - yMod, chimneyX + xMod, chimneyY - yMod);
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.8)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX + 10 + xMod, chimneyY - 26 - yMod);
    ctx.quadraticCurveTo(chimneyX + 20 + xMod, chimneyY - 20 - yMod, chimneyX + 25 + xMod, chimneyY - 26 - yMod);
    ctx.quadraticCurveTo(chimneyX + 30 + xMod, chimneyY - 26 - yMod, chimneyX + 28 + xMod, chimneyY - 30 - yMod);
    ctx.quadraticCurveTo(chimneyX + 10 + xMod, chimneyY - 40 - yMod, chimneyX + 3 + xMod, chimneyY - 26 - yMod);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    //Changes smoke location
    if (chimneyX < shapes.width && chimneyY > 0) {
        chimneyX += 4;
        chimneyY -= 2;
    }
    else {
        chimneyX = chimLeftBackX;
        chimneyY = chimTopBackY;
    }
    ctx.restore();
}
//Draws smoke puff 3
function drawSmoke3(scaleX, scaleY, xMod, yMod) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var xMod2 = -20;
    var yMod2 = -40;
    ctx.save();
    ctx.scale(scaleX, scaleY);
    //Decreases Opacity
    ctx.globalAlpha = alphaMod2;
    if (chimneyX < shapes.width && chimneyY > 0) {
      alphaMod3 -= 0.018;
    } else {
      alphaMod3 = 0.8;
    }
    //Draws smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX + xMod2, chimneyY - yMod2);
    ctx.quadraticCurveTo(chimneyX + xMod2 + 30, chimneyY - yMod2, chimneyX + xMod2 + 8, chimneyY - yMod2 - 30);
    ctx.quadraticCurveTo(chimneyX + xMod2, chimneyY - yMod2 - 50, chimneyX + xMod2 - 20, chimneyY - yMod2 - 35);
    ctx.quadraticCurveTo(chimneyX + xMod2 - 35, chimneyY - yMod2 - 35, chimneyX + xMod2 - 30, chimneyY - yMod2 - 20);
    ctx.quadraticCurveTo(chimneyX + xMod2 - 35, chimneyY - yMod2 + 8, chimneyX + xMod2, chimneyY - yMod2);
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.9)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX + xMod2 - 10, chimneyY - yMod2 - 26);
    ctx.quadraticCurveTo(chimneyX + xMod2 - 5, chimneyY - yMod2 - 20, chimneyX + xMod2, chimneyY - yMod2 - 30);
    ctx.bezierCurveTo(chimneyX + xMod2 - 2, chimneyY - yMod2 - 40, chimneyX + xMod2 - 25, chimneyY - yMod2 - 35, chimneyX + xMod2 - 10, chimneyY - yMod2 - 26);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    //Changes smoke location
    if (chimneyX < shapes.width && chimneyY > 0) {
        chimneyX += 3;
        chimneyY -= 1;
    }
    else {
        chimneyX = chimLeftBackX;
        chimneyY = chimTopBackY;
    }
    ctx.restore();
}
//Draws the smoke formation coming out of chimney
function drawSmokeFormation(scale) {
    var scaleX = Math.random() * (1.01 - 0.99) + 0.99;
    var scaleY = Math.random() * (1.01 - 0.99) + 0.99;
    if (chimneyX >= smokeLimitX2) {
        drawSmoke3(scaleX, scaleY);
        drawSmoke2(scaleX, scaleY);
        drawSmoke1(scaleX, scaleY);
    }
    else if (chimneyX >= smokeLimitX1) {
        drawSmoke2(scaleX, scaleY);
        drawSmoke1(scaleX, scaleY);
    }
    else {
        drawSmoke1(scaleX, scaleY);
    }
}

function drawHouse() {
    "use strict";
    drawBackground();
    houseBody();
    drawChimeny();
    houseRoof();
    drawDecorBody();
    drawDecorRoof();
}

//Variables for clouds
var xCloud = -100;
var xCloud2 = xcloud * 1.5;
var xCloud3 = xcloud * 2;
var xCloud4 = xcloud * .5;
var yCloud = 75;

//Draws clouds
function drawClouds() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.clearRect(0, 0, shapes.width, shapes.height);
    drawHouse();
    ctx.fillStyle = "lightSkyblue";
    ctx.lineWidth = "3";
    var yCloud = 75;
    var radius = 50;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.save();
    ctx.scale(1, .5);
    ctx.clearRect(0, 0, shapes.width, radius * 6.4);
    ctx.fillRect(0, 0, shapes.width, radius * 6.5);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    //Draws cloud 1
    ctx.beginPath();
    ctx.moveTo(xCloud, yCloud);
    ctx.bezierCurveTo(xCloud + 20, yCloud + 40, xCloud + 60, yCloud + 40, xCloud + 80, yCloud);
    ctx.bezierCurveTo(xCloud + 100, yCloud - 10, xCloud + 100, yCloud - 40, xCloud + 80, yCloud - 40);
    ctx.bezierCurveTo(xCloud + 80, yCloud - 60, xCloud + 60, yCloud - 80, xCloud + 40, yCloud - 60);
    ctx.bezierCurveTo(xCloud + 40, yCloud - 60, xCloud, yCloud - 80, xCloud, yCloud - 40);
    ctx.bezierCurveTo(xCloud - 20, yCloud - 40, xCloud - 20, yCloud, xCloud, yCloud);
    ctx.closePath();
    ctx.fill();

    //Draws cloud 2
    ctx.beginPath();
    ctx.moveTo(xCloud2, yCloud*2);
    ctx.bezierCurveTo(xCloud2, yCloud*2 + 10, xCloud2 + 40, yCloud*2 + 10, xCloud2 + 40, yCloud*2);
    ctx.bezierCurveTo(xCloud2 + 40, yCloud*2 + 10, xCloud2 + 80, yCloud*2 + 10,  xCloud2 + 80, yCloud*2);
    ctx.bezierCurveTo(xCloud2 + 100, yCloud*2, xCloud2 + 100, yCloud*2 - 40, xCloud2 + 80, yCloud*2 - 40);
    ctx.bezierCurveTo(xCloud2 + 90, yCloud*2 - 60, xCloud2 + 40, yCloud*2 - 80, xCloud2 + 20, yCloud*2 - 60);
    ctx.quadraticCurveTo(xCloud2, yCloud*2 - 60, xCloud2, yCloud*2 - 40);
    ctx.bezierCurveTo(xCloud2 - 20, yCloud*2 - 40, xCloud2 - 20, yCloud*2, xCloud2, yCloud*2);
    ctx.closePath();
    ctx.fill();

    //Draws cloud 3
    ctx.beginPath();
    ctx.moveTo(xCloud3, yCloud*0.5);
    ctx.bezierCurveTo(xCloud3, yCloud*0.5 + 10, xCloud3 + 50, yCloud*0.5 + 10, xCloud3 + 50, yCloud*0.5);
    ctx.bezierCurveTo(xCloud3 + 60, yCloud*0.5, xCloud3 + 60, yCloud*0.5 - 20, xCloud3 + 50, yCloud*0.5 - 20);
    ctx.quadraticCurveTo(xCloud3 + 50, yCloud*0.5 - 30, xCloud3 + 40, yCloud*0.5 - 30);
    ctx.bezierCurveTo(xCloud3 + 40, yCloud*0.5 - 40, xCloud3 + 10, yCloud*0.5 - 40, xCloud3 + 10, yCloud*0.5 - 30);
    ctx.quadraticCurveTo(xCloud3, yCloud*0.5 - 30, xCloud3, yCloud*0.5 - 20);
    ctx.bezierCurveTo(xCloud3 - 10, yCloud*0.5 - 20, xCloud3 - 10, yCloud*0.5, xCloud3, yCloud*0.5);
    ctx.closePath();
    ctx.fill();

    //Draws cloud 4
    ctx.beginPath();
    ctx.moveTo(xCloud4, yCloud*0.8);
    ctx.bezierCurveTo(xCloud4, yCloud*0.8 + 10, xCloud4 + 50, yCloud*0.8 + 10, xCloud4 + 50, yCloud*0.8);
    ctx.bezierCurveTo(xCloud4 + 60, yCloud*0.8, xCloud4 + 60, yCloud*0.8 - 20, xCloud4 + 50, yCloud*0.8 - 20);
    ctx.quadraticCurveTo(xCloud4 + 50, yCloud*0.8 - 30, xCloud4 + 40, yCloud*0.8 - 30);
    ctx.bezierCurveTo(xCloud4 + 40, yCloud*0.8 - 40, xCloud4 + 10, yCloud*0.8 - 40, xCloud4 + 10, yCloud*0.8 - 30);
    ctx.quadraticCurveTo(xCloud4, yCloud*0.8 - 30, xCloud4, yCloud*0.8 - 20);
    ctx.bezierCurveTo(xCloud4 - 10, yCloud*0.8 - 20, xCloud4 - 10, yCloud*0.8, xCloud4, yCloud*0.8);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
    if (xCloud < shapes.width + radius) {
        xCloud += 2;
    }
    else {
        xCloud = -100;
    }
    if (xCloud2 < shapes.width + radius) {
        xCloud2 += 3;
    }
    else {
        xCloud2 = -100;
    }
    if (xCloud3 < shapes.width + radius) {
        xCloud3 += 4;
    }
    else {
        xCloud3 = -100;
    }
    if (xCloud4 < shapes.width + radius) {
        xCloud4 += 1;
    }
    else {
        xCloud4 = -100;
    }
    drawSmokeFormation();
}
//Changes animation speed
function house(speed) {
    clearInterval(inter);
    "use strict";
    shapes = document.getElementById("myShapes");
    smokeLimitX1 = chimLeftBackX + (shapes.width - chimLeftBackX) / 14;
    smokeLimitX2 = chimLeftBackX + 2 * (shapes.width - chimLeftBackX) / 14;
    inter = setInterval(drawClouds, 150 - speed);
}
