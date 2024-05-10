var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

var pointCount= 3;
let sliders = [];
let sliderValues = [];
let maxSliders = [];
let exteriorPoints = [];
let fillPoints = [];
var valueNames = [];
var sections = [];
var labels=[];
var labelPoints=[];
var angle = 0;
var maxLength = 180;
var title = "Enter Title"
const center = {
    "x":canvas.width/2, 
    "y":canvas.height/2
}
    

//set MaxSliders names
//console.log(center.x);
for(let i = 0; i < 8; i++) {
    var temp = "#slider" + String(i + 1);
    maxSliders.push(temp);
    
}
//set value names
for(let i = 0; i < 8; i++) {
    var temp = "#value" + String(i + 1);
    valueNames.push(temp);
    
}

for(let i = 0; i < 8; i++) {
    var temp = "#section" + String(i + 1);
    sections.push(temp);
    
    
}

//canvas code

//step 1 -- create exterior points
function buildPoints() {
    exteriorPoints.splice(0, exteriorPoints.length);
    angle = 2*(Math.PI)/(pointCount);
    for(let i= 0; i < pointCount; i++) {
        var tempX = (maxLength * Math.cos(angle * i)); // - 0 * Math.sin(angle * i);
        var tempY = (maxLength * Math.sin(angle * i));
        var tempCoord = [tempX, tempY];
        exteriorPoints.push(tempCoord);
        console.log(angle);
    }
    
    
    
}
//step 2 -- draw base shape

//  this includes drawing the lines from the center and connecting the exterior shape
function drawLines() {
    exteriorPoints.forEach(element => {
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(element[0]+center.x, element[1]+center.y);
        ctx.strokeStyle = "rgb(0 0 0 / 50%)";
        ctx.stroke();
    });
}

function drawShape() {
    ctx.beginPath();
    ctx.moveTo(exteriorPoints[0][0]+center.x,exteriorPoints[0][1]+center.y);
    
    for(var i = 1; i < exteriorPoints.length; i++) {
        ctx.lineTo(exteriorPoints[i][0]+center.x, exteriorPoints[i][1]+center.y);
    }
    ctx.lineTo(exteriorPoints[0][0]+center.x,exteriorPoints[0][1]+center.y);
    ctx.strokeStyle = "rgb(0 0 0 / 100%)";
    ctx.stroke();

    
}
//step 3 -- draw the user generated shape
//  compare the exterior point with the user input value
// plot these new points and connect them

function drawFill() {
    
    //the math
    if(sliderValues.length > 0){

        fillPoints.splice(0, fillPoints.length);
        
        angle = 2*(Math.PI)/(pointCount);
        for(let i= 0; i < pointCount; i++) {
            var adjusted = maxLength * (sliderValues[i]/6);
            var tempX = (adjusted * Math.cos(angle * i)); 
            var tempY = (adjusted * Math.sin(angle * i));
            var tempCoord = [tempX, tempY];
            fillPoints.push(tempCoord);
            console.log(angle);
    }
    
    //the draw
        
    
    ctx.beginPath();
    ctx.moveTo(fillPoints[0][0]+center.x,fillPoints[0][1]+center.y);
    
    for(var i = 1; i < fillPoints.length; i++) {
        ctx.lineTo(fillPoints[i][0]+center.x, fillPoints[i][1]+center.y);
    }
    ctx.lineTo(fillPoints[0][0]+center.x,fillPoints[0][1]+center.y);
    ctx.strokeStyle = "rgb(0 0 0 / 100%)";
    ctx.stroke();
    console.log(fillPoints);
}
}

function drawLabels() {
    //labelPoints
    //labels
    //the math
    if(sliderValues.length > 0){

        labelPoints.splice(0, labelPoints.length);
        
        angle = 2*(Math.PI)/(pointCount);
        for(let i= 0; i < pointCount; i++) {
            var adjusted = maxLength * (1.4);
            var tempX = (adjusted * Math.cos(angle * i)); 
            var tempY = (adjusted * Math.sin(angle * i));
            if((tempX < 0) && (-5 <= tempY) && (tempY<= 5)) {
                tempX -= 40;
                console.log("true" + tempX + " " + tempY);
            }
            else if ((tempX > 0) && (-5 <= tempY) && (tempY<= 5)) {
                tempX += 40;
            }
            else if ((-5 <= tempX) && (tempX<= 5) && (tempY < 0)) {
                tempY += 20;
            }
            var tempCoord = [tempX, tempY];
            labelPoints.push(tempCoord);
            //console.log();
    }
    
    //the draw
        
    
    
    for(var i = 0; i < labelPoints.length; i++) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        if(labels[i] != undefined) {
            ctx.fillText(labels[i],labelPoints[i][0]+center.x,labelPoints[i][1]+center.y);

        }
    }
    
    console.log(labelPoints);
}
}


function update() {
    ctx.fillStyle = "skyblue";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //ctx.strokeRect(0, 0, canvas.width, canvas.height);
    buildPoints();
    //console.log(exteriorPoints);
    drawLines();
    drawShape();
    drawFill();
    drawLabels();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    ctx.fillText(title, 5, 30);

}


//jQuery
$( function() {
    //set pointSider default
    $( "#pointSlider" ).slider(
        {
            min:3,
            max: 8,
            step:1 

        }
        //set shape point count
    ).on("slidestop", function(event, ui){
        pointCount = ui.value;
        //console.log(pointCount);
        //clear previous point count and values
        sliders.splice(0, sliders.length);
        sliderValues.splice(0, sliderValues.length);
        
        
        //set array lengths and name sliders
        for(let i = 0; i < pointCount; i++) {
            var temp = "#slider" + String(i + 1);
            sliders.push(temp);
            sliderValues.push(1);
            
        }
        //console.log(sliders);

        //hide all sliders
        var index = 0;
        maxSliders.forEach(element => {
            $(String(sections[index])).hide();
            
            index++;
            
        });
        //show all active sliders and set slider visuals to reflect value
        var index1 = 0;
        sliders.forEach(element => {
            $(String(sections[index1])).show();
            
            $(String(element)).slider("value", 1);
            index1++;
        });
        update();



    })
    //actually build the sliders
    $( ".slider" ).slider(
        {
            min:0,
            max:6,
            step:0.5,

        }
        //get slider values when slid
    ).on("slidestop", function(){
        var index = 0;
        sliders.forEach(element => {
            
            sliderValues[index] = ($(String(element)).slider("value"));
            $(String(valueNames[index])).text(String(sliderValues[index]));
            //$(String(valueNames[index])).text("test");
            console.log("test");
            console.log(valueNames[index]);
            index++;
            //console.log(sliderValues);
        });
        update();
        
        
  })
    $('.text').on('input', function() {
        labels.splice(0, labels.length);
        $.each($('.text'), function() {
            labels.push($('#' + this.id).val());
            console.log(this.id);
        });
    update();
});
    $('#title').on('input', function() {
        title = $('#title').val();
        update();
});

} 


);