var shapes = []

function setup() {
  createCanvas(1536, 2048)
  noStroke()
  rectMode(CENTER)
  angleMode(DEGREES)

  generateSnow()
}
function generateSnow() {
  for (var i = 0; i < 20; i++) {
    shapes.push({
      type: int(random(2)), // 0 triangle; 1 rect
      x: random(width),
      y: -20,
      speed: random(1, 3),
      angle: random(360),
      c: color(random(255), random(255), random(255))
    })
  }
}

function draw() {
  background(251, 248, 229)
  drawTitle()
  drawDate()
  drawDesc()

  drawCar(mouseX, height * 0.8)
  drawShape()
}

function drawTitle() {
  fill(0)
  textSize(65)
  text('HANDLES', width * 0.1, 100)
  textSize(40)
  text('HAEGUE YANG', width * 0.1, 150)
  text('EXHIBITION', width * 0.1 + 100, 200)
}

function drawDate() {
  push()
  rectMode(CORNER)
  textWrap(WORD)
  textSize(50)
  text('OCT 21, 2019-FEB 1, 2020', 30, height - 300, 500)
  textSize(36)
  text('MOMA (MARRON FAMILY ATRIUM,FIOOR 2', 30, height - 150, 500)
  pop()
}

function drawDesc() {
  var s = `Hague Yang (Korean,
    b. 1971) is known for
    genre-defying, multi-
    media installations
    that interweave a
    range of materials and
    methods, historical ref.
    erences, and sensory
    experiences. Handles,
    Yang's installation
    commissioned for
    MoM's Marron Atrium,
    features six sculptures
    activated daily, daz-
    zling geometries, and
    the play of light and
    sound,
    to create a ritu-
    alized,
    complex envi-
    ronment with both per-
    sonal and political res-
    onance.`
  push()
  rectMode(CORNER)
  textWrap(WORD)
  textSize(24)
  text(s, width - 330, 500, 300)
  pop()
}




function drawShape() {
  fill(255)
  for (var i = 0; i < shapes.length; i++) {
    var shape = shapes[i]
    shape.y += shape.speed
    var w = 30

    push()
    translate(shape.x, shape.y)
    fill(shape.c)
    rotate(shape.angle)
    if (shape.type == 0) {
      var x1 = 0, y1 = 0
      var x2 = x1, y2 = y1 + w
      var x3 = x1 + w, y3 = y2
      triangle(x1, y1, x2, y2, x3, y3)
    } else {
      rect(0, 0, w, w)
    }
    pop()

    if (shape.y > height + 20) {
      shapes.splice(i, 1)
    }
  }
}

var angle = 0
function drawCar(x, y) {
  var w = width * 0.25, h = w / 3

  angle++

  // left wheel
  fill(250, 110, 100)
  var wheelX = x - w * 0.25
  var wheelY = y + h / 2
  var wheelR = h * 0.6
  circle(wheelX, wheelY, wheelR)
  for (var i = 0; i < 6; i++) {
    push()
    translate(wheelX, wheelY)
    rotate(-(angle + i * 60))
    stroke(0)
    strokeWeight(3)
    line(5, 0, wheelR / 2 - 5, 0)
    pop()
  }

  // right wheel
  wheelX = x + w * 0.25
  wheelY = y + h / 2
  wheelR = h * 0.6
  circle(wheelX, wheelY, wheelR)
  for (var i = 0; i < 6; i++) {
    push()
    translate(wheelX, wheelY)
    rotate(-(angle + i * 60))
    stroke(0)
    strokeWeight(3)
    line(5, 0, wheelR / 2 - 5, 0)
    pop()
  }

  // car head
  var x1 = x - w / 2, y1 = y - h / 2
  var x2 = x1 - w * 0.05, y2 = y1 + h * 0.2
  var x4 = x - w / 2, y4 = y + h / 2
  var x3 = x1 - w * 0.05, y3 = y4 - h * 0.2
  fill(250, 231, 159)
  quad(x1, y1, x2, y2, x3, y3, x4, y4)

  //car body
  fill(220, 220, 51)
  rect(x, y, w, h)
  circle(x, y, 5)
}

function mouseClicked() {
  generateSnow()
}