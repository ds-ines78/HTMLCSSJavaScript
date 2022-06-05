let canvasSize = document.querySelector(".art").clientHeight;

const sketch = function (p) {
  p.setup = function () {
    const drawFunctions = [
      drawCircle,
      drawEllipse1,
      drawEllipse2,
      drawLine1,
      drawLine2,
      drawLine3,
      drawRectangle,
      drawTriangle1,
      drawTriangle2,
      drawQuad1
    ];
    const roughSize = 600;
    p.createCanvas(canvasSize, canvasSize);
    p.background("#62c9c4");
    drawFunctions.forEach((draw) => {
      let x = p.random(0, canvasSize);
      let y = p.random(0, canvasSize);
      let color = getRandomColorHex();
      p.fill(color);
      draw(x, y, roughSize);
    });
  };

  function drawCircle(x, y, size) {
    width = p.random(0.5, 1) * size;
    height = p.random(0.5, 1) * size;
    p.circle(x, y, 100);
  }

  function drawEllipse1(x, y, size) {
    width = p.random(0.5, 1) * size;
    height = p.random(0.5, 1) * size;
    p.ellipse(x, y, width, height);
  }

  function drawEllipse2(x, y, size) {
    width = p.random(0.4, 1) * size;
    height = p.random(0.4, 1) * size;
    p.ellipse(x, y, width, height);
  }

  function drawLine1(x, y) {
    let len = p.height;
    let drawVertical = p.random(0, 1);
    let x1, y1, x2, y2;
    if (drawVertical > 0.5) {
      x1 = x;
      x2 = x;
      y1 = y - len / 2;
      y2 = y + len / 2;
    } else {
      x1 = x - len / 2;
      x2 = x + len / 2;
      y1 = y;
      y2 = y;
    }
    p.line(x1, y1, x2, y2);
  }

  function drawLine2(x, y) {
    let len = p.height;
    let drawVertical = p.random(0, 1);
    let x1, y1, x2, y2;
    if (drawVertical > 0.5) {
      x1 = x;
      x2 = x;
      y1 = y - len / 2;
      y2 = y + len / 2;
    } else {
      x1 = x - len / 2;
      x2 = x + len / 2;
      y1 = y;
      y2 = y;
    }
    p.line(x1, y1, x2, y2);
  }

  function drawLine3(x, y) {
    let len = p.height;
    let drawVertical = p.random(0, 1);
    let x1, y1, x2, y2;
    if (drawVertical > 0.5) {
      x1 = x;
      x2 = x;
      y1 = y - len / 2;
      y2 = y + len / 2;
    } else {
      x1 = x - len / 2;
      x2 = x + len / 2;
      y1 = y;
      y2 = y;
    }
    p.line(x1, y1, x2, y2);
  }

  function drawQuad1(x, y) {
    let len = p.height;
    let drawVertical = p.random(0, 1);
    let x1, y1, x2, y2, x3, y3, x4, y4;
    if (drawVertical > 0.5) {
      x1 = x;
      x2 = x + 30;
      x3 = x + 20;
      x4 = x - 30;
      y1 = len / 2;
      y2 = len / 2 + 30;
      y3 = len / 2 - 20;
      y4 = y - 20;
    } else {
      x1 = x - 60;
      x2 = x + 20;
      x3 = x + 60;
      x4 = x;
      y1 = y - 60;
      y2 = len / 2 - 20;
      y3 = len / 2 + 60;
      y4 = len / 2;
    }
    p.quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  function drawRectangle(x, y, size) {
    let width = p.random(0.1, 1) * 2 * size;
    let height = p.random(0.1, 1) * 2 * size;
    p.rect(x, y, width, height);
  }

  function drawTriangle1(x, y, size) {
    let topPoint = [x, p.random(0.5, 1) * (y + size)];
    let leftPoint = [p.random(0.5, 1) * (x - size), y - size];
    let rightPoint = [p.random(0.5, 1) * (x + size), y - size];
    let points = [...topPoint, ...leftPoint, ...rightPoint];
    p.triangle(...points);
  }

  function drawTriangle2(x, y, size) {
    let topPoint = [x, p.random(0.4, 1) * (y + size)];
    let leftPoint = [p.random(0.4, 1) * (x - size), y - size];
    let rightPoint = [p.random(0.4, 1) * (x + size), y - size];
    let points = [...topPoint, ...leftPoint, ...rightPoint];
    p.triangle(...points);
  }
};

new p5(sketch, "shapes");

function getRandomColorHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//to refresh page upon button click
// function refreshPage() {
//   window.location.href = window.location.href;
// } 