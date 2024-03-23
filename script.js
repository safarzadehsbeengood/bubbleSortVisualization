var cnv;
var nums = [];
var n;
let barWidth;
let currI, currJ;
var doSort;
var nSlider;
var bubSortBtn, quickSortBtn;
let doBub = 1;

function setup() {
  // frameRate(10);
  cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
  textSize(16);
  bubSortBtn = createButton('bubble');
  quickSortBtn = createButton('quick');
  bubSortBtn.class("btn");
  quickSortBtn.class("btn");
  quickSortBtn.mousePressed(doQuickSort);
  bubSortBtn.mousePressed(toggleBub);

  nSlider = createSlider(20, 200, 80, 1);
  n = nSlider.value();
  barWidth = width/n;
  for (let i = 0; i < n; i++) {
    nums.push(random(height-50));
  }
  currI = 0;
  currJ = 0;
}

function remakeArray(n) {
  nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(random(height));
  }
  doBub = 1;
}

function draw() {
  if (nSlider.value() != n) {
    remakeArray(nSlider.value());
    n = nSlider.value();
    barWidth = width/n;
  }
  background(0);
  fill(150);
  strokeWeight(1);
  stroke(0);
  let xOffset = 0;
  for (let i = 0; i < nums.length; i++) {
    push();
    translate(0, height);
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
  if (doBub % 2 == 0) {
    bubbleOnePass();
  }
}

window.onresize = () => {
  resizeCanvas(windowWidth-100, windowHeight-100);
  barWidth = width/n;
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}