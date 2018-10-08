var fontSize = 10;
var r = 18;
var c = ["👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿"];

var nX, nY;
var arr = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  textSize(fontSize);
  nX = int(windowWidth / (fontSize * 1.1));
  nY = int(windowHeight / (fontSize * 1.1));
  for (var x = 0; x < nX; x++) {
    for (var y = 0; y < nY; y++) {
      arr.push(0);
    }
  }
}

function draw () {
  background(255);
  for (var x = 1; x <= nX; x++) {
    for (var y = 1; y <= nY; y++) {
      var dx = abs(x * fontSize * 1.1 - mouseX);
      var dy = abs(y * fontSize * 1.1 - mouseY);
      var d = (dx * dx + dy * dy) / (fontSize * fontSize * 1.1 * 1.1);
      if (d <= r) {
        arr[x + nX * y] = 5;
      }
      text(c[int(arr[x + nX * y])], x * fontSize * 1.1, y * fontSize * 1.1);
      arr[x + nX * y] = arr[x + nX * y] * 0.9;
    }
  }

}