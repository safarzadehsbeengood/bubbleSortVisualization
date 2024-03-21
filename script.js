var cnv;
var nums = [];
var n = 150;
let barWidth;
let currI, currJ;
var doSort;

function setup() {
  frameRate(60);
  cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
  textSize(16);
  doSort = createCheckbox("Sort", false);
  doSort.position(width/2, 20);
  doSort.id("doSort");
  barWidth = width/n;
  for (let i = 0; i < n; i++) {
    nums.push(random(height-50));
  }
  currI = 0;
  currJ = 0;
}

function onePass() {
  for (let i = 0; i < n-1; i++) {
    for (j = 0; j < n-1; j++) {
      if (nums[j] > nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
        leftAt = i;
        return;
      }
      currJ = j;
    }
  }
}

function draw() {
  background(0);
  fill(150);
  strokeWeight(1);
  stroke(0);
  let xOffset = 0;
  for (let i = 0; i < nums.length; i++) {
    push();
    translate(0, height);
    // if (i == leftAt) {
    //   fill(color(200, 50, 50));
    // }
    if (i == currJ) {
      fill(color(10, 200, 50));
    }
    rect(xOffset, 0, barWidth, -nums[i]);
    xOffset += barWidth;
    pop();
  }
  strokeWeight(4);
  stroke(100);
  noFill();
  rect(0, 0, width, height);
  if (doSort.checked()) {
    onePass();
  }
}

window.onresize = () => {
  resizeCanvas(windowWidth-100, windowHeight-100);
  barWidth = width/n;
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
}