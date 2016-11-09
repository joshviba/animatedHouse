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
var xCloud = -100;
var xCloud2 = xcloud * 1.5;
var xCloud3 = xcloud * 2;
var xCloud4 = xcloud * .5;

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
var chimneyX = chimLeftFrontX;
var chimneyY = chimTopFrontY;
//ADD SMOKE OPACITY VARIABLE
function drawSmoke1(scaleX, scaleY) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.save();
    ctx.scale(scaleX, scaleY);
    //Draws Smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX, chimneyY);
    ctx.quadraticCurveTo(chimneyX + 10, chimneyY + 5, chimneyX + 20, chimneyY - 10);
    ctx.quadraticCurveTo(chimneyX + 30, chimneyY - 15, chimneyX + 25, chimneyY - 20);
    ctx.quadraticCurveTo(chimneyX + 20, chimneyY - 20, chimneyX + 20, chimneyY - 22);
    ctx.quadraticCurveTo(chimneyX + 7, chimneyY - 40, chimneyX, chimneyY - 20);
    ctx.quadraticCurveTo(chimneyX - 12, chimneyY - 25, chimneyX - 10, chimneyY - 15);
    ctx.quadraticCurveTo(chimneyX - 15, chimneyY + 5, chimneyX, chimneyY);
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.8)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX - 6, chimneyY - 6);
    ctx.quadraticCurveTo(chimneyX - 4, chimneyY - 4, chimneyX, chimneyY - 8);
    ctx.quadraticCurveTo(chimneyX + 6, chimneyY - 8, chimneyX + 8, chimneyY - 11);
    ctx.quadraticCurveTo(chimneyX + 2, chimneyY - 12, chimneyX - 5, chimneyY - 10);
    ctx.lineTo(chimneyX - 6, chimneyY - 6);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    //If else that..
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

function drawSmoke2(scaleX, scaleY) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.save();
    ctx.scale(scaleX, scaleY);
    //Draws smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX, chimneyY);
    ctx.quadraticCurveTo(chimneyX + 10, chimneyY + 8, chimneyX + 20, chimneyY);
    ctx.quadraticCurveTo(chimneyX + 50, chimneyY, chimneyX + 30, chimneyY - 30);
    ctx.quadraticCurveTo(chimneyX + 15, chimneyY - 50, chimneyX + 5, chimneyY - 28);
    ctx.quadraticCurveTo(chimneyX - 20, chimneyY - 10, chimneyX, chimneyY);
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.8)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX + 10, chimneyY - 26);
    ctx.quadraticCurveTo(chimneyX + 20, chimneyY - 20, chimneyX + 25, chimneyY - 26);
    ctx.quadraticCurveTo(chimneyX + 30, chimneyY - 26, chimneyX + 28, chimneyY - 30);
    ctx.quadraticCurveTo(chimneyX + 10, chimneyY - 40, chimneyX + 3, chimneyY - 26);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    //If else that..
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

function drawSmoke3(scaleX, scaleY) {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.save();
    ctx.scale(scaleX, scaleY);
    //Draws smoke puff
    ctx.beginPath();
    ctx.moveTo(chimneyX, chimneyY);
    ctx.quadraticCurveTo(chimneyX + 30, chimneyY, chimneyX + 8, chimneyY - 30);
    ctx.quadraticCurveTo(chimneyX, chimneyY - 50, chimneyX - 20, chimneyY - 35);
    ctx.quadraticCurveTo(chimneyX - 35, chimneyY - 35, chimneyX - 30, chimneyY - 20);
    ctx.quadraticCurveTo(chimneyX - 35, chimneyY + 8, chimneyX, chimneyY);
    ctx.closePath();
    ctx.fillStyle = "rgba(120,120,120,0.8)";
    ctx.fill();
    //Draws lighter area
    ctx.beginPath();
    ctx.moveTo(chimneyX - 10, chimneyY - 26);
    ctx.quadraticCurveTo(chimneyX - 5, chimneyY - 20, chimneyX, chimneyY - 30);
    ctx.bezierCurveTo(chimneyX - 2, chimneyY - 40, chimneyX - 25, chimneyY - 35, chimneyX - 10, chimneyY - 26);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    //If else that..
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

function drawSmokeFormation(scale) {
    var scaleX = Math.random() * (1.01 - 0.99) + 0.99;
    var scaleY = Math.random() * (1.01 - 0.99) + 0.99;
    if (chimneyX >= smokeLimitX2) {
        drawSmoke3(scaleX, scaleY);
    }
    else if (chimneyX >= smokeLimitX1) {
        drawSmoke2(scaleX, scaleY);
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
//MAKE THE CLOUDS PROPER CLOUDS
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
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(xCloud, yCloud, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xCloud2, yCloud * 2, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xCloud3, yCloud * .75, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xCloud4, yCloud * 1.5, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
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

function house(speed) {
    clearInterval(inter);
    "use strict";
    shapes = document.getElementById("myShapes");
    smokeLimitX1 = chimLeftBackX + (shapes.width - chimLeftBackX) / 3;
    smokeLimitX2 = chimLeftBackX + 2 * (shapes.width - chimLeftBackX) / 3;
    inter = setInterval(drawClouds, 150 - speed);
}
