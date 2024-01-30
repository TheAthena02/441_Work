class Canvas{
  constructor(){
  this.hexagonSize1 = 150; // Initial size of the hexagon
  this.hexagonSize2 = 100;
  this.hexagonSize3 = 50;
  this.scaleAmount = 1.0; // Initial scaling factor
  this.hexPoints = [];
  }

  updateGraph(vArr, Name, label) {
    background(220);
  
    strokeWeight(1);
    fill("white");
    //GPT Code
    translate(width / 2, height / 2); // Move the origin to the center of the canvas
    scale(this.scaleAmount); // Apply the scaling factor
  
    // Draw the largest hexagon
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
      let x = this.hexagonSize1 * cos(angle);
      let y = this.hexagonSize1 * sin(angle);
      vertex(x, y);
      //end intitial GPT code
      let v = createVector(x, y); //creates a vector to store hexagon coords
      this.hexPoints.push(v) //stores coords in array
      
      
      
    }
    endShape(CLOSE);
  // middle hexagon
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
      let x = this.hexagonSize2 * cos(angle);
      let y = this.hexagonSize2 * sin(angle);
      vertex(x, y);
      
    }
    endShape(CLOSE);
  
    //inner hexagon
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
      let x = this.hexagonSize3 * cos(angle);
      let y = this.hexagonSize3 * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    
  //draws the converging lines using hexagon coords
    for(let i = 0; i < 3; i++) {
        line(this.hexPoints[i].x , this.hexPoints[i].y , this.hexPoints[i+3].x , this.hexPoints[i+3].y);
    }
  
  //Draws the rating shape
    strokeWeight(2);
    fill(77, 224, 235, 200);
    beginShape();
    for(let i = 0; i < 6; i++) {
        vertex(this.hexPoints[i].x * (vArr[i]), this.hexPoints[i].y * (vArr[i]));
  
    }
  
    endShape(CLOSE);
  
  
    //labels -- will need to be changed in the future if allowing the change of shape
    textSize(15);
    fill("black");
    textAlign(CENTER);
    text(label[0], 0, -160);
    text(label[1], 140, -100);
    text(label[2], 140, 110);
    text(label[3], 0, 170);
    text(label[4], -145, 110);
    text(label[5], -140, -100);
    textSize(25);
    textAlign(LEFT);
    text(Name, -185, -165);
    textSize(17);

    function arraySum(arr) {
      let sum = 0;
      for(let i=0; i<arr.length; i++)
 {
      sum += arr[i];
  }

      return sum;

}
    
    text("Total Level: " + (arraySum(vArr) * 3), 60, -165);
  
  }
  
}

/*
//temporary for testing. Please put in the update
//let vArr = [.5,1,1,1,1,1];

function setup() {
  
  //updateGraph(vArr);
}
//change this to updateGraph
function updateGraph(vArr) {
  background(220);

  strokeWeight(1);
  fill("white");
  //GPT Code
  translate(width / 2, height / 2); // Move the origin to the center of the canvas
  scale(scaleAmount); // Apply the scaling factor

  // Draw the largest hexagon
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
    let x = hexagonSize1 * cos(angle);
    let y = hexagonSize1 * sin(angle);
    vertex(x, y);
    //end intitial GPT code
    let v = createVector(x, y); //creates a vector to store hexagon coords
    hexPoints.push(v) //stores coords in array
    
    
    
  }
  endShape(CLOSE);
// middle hexagon
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
    let x = hexagonSize2 * cos(angle);
    let y = hexagonSize2 * sin(angle);
    vertex(x, y);
    
  }
  endShape(CLOSE);

  //inner hexagon
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i + PI/6; // Rotate the hexagon by PI/6 to position the point at the top
    let x = hexagonSize3 * cos(angle);
    let y = hexagonSize3 * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  
//draws the converging lines using hexagon coords
  for(let i = 0; i < 3; i++) {
      line(hexPoints[i].x , hexPoints[i].y , hexPoints[i+3].x , hexPoints[i+3].y);
  }

//Draws the rating shape
  strokeWeight(2);
  fill(77, 224, 235, 200);
  beginShape();
  for(let i = 0; i < 6; i++) {
      vertex(hexPoints[i].x * (vArr[i]), hexPoints[i].y * (vArr[i]));

  }

  endShape(CLOSE);


  //labels
  textSize(15);
  fill("black");
  textAlign(CENTER);
  text("Fun", 0, -160);
  text("Looks", 140, -100);
  text("Affection", 140, 110);
  text("Ease", 0, 170);
  text("Affordability", -145, 110);
  text("Cool", -140, -100);
  textSize(25);
  textAlign(LEFT);
  text(petName, -185, -165);
  textSize(17);
  text("Total Pet Level: " + petTotal, 28, -165);

}

*/
