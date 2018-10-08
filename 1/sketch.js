function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  background(255);
  var fontSize = 10;
  textSize(fontSize);
  for (var x = 1; x < windowWidth; x += fontSize+1) {
    for (var y = 1; y < windowHeight; y += fontSize+1) { 
      var dx = abs(x - mouseX);
      var dy = abs(y - mouseY);
      if (dx * dx + dy * dy < 8 * fontSize * fontSize) {
        text("🌕", x, y);
      } else {
        text("🌑", x, y);
      }
    }
  }
  
}