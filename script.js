const container=document.querySelector(".container")
const snake=document.querySelector(".snake")
const topp=document.querySelector(".top")
const left=document.querySelector(".left")
const right=document.querySelector(".right")
const down=document.querySelector(".down")


let snakeTop = 0;
let snakeLeft = 0;
getcomput=window.getComputedStyle(container);
border_width=getcomput.getPropertyValue("border-width")


left.addEventListener("click", () => {
    if (snakeLeft > 0) { // Prevent moving out of bounds
      snakeLeft -= 10;
      snake.style.left = snakeLeft + "px";
    }
  });

  right.addEventListener("click", () => {
    if (snakeLeft < container.offsetWidth - snake.offsetWidth -parseFloat(border_width)) {
      snakeLeft += 10;
      snake.style.left = snakeLeft + "px";
    }
})

topp.addEventListener("click", () => {
    if (snakeTop > 0) { // Prevent moving out of bounds
      snakeTop -= 10;
      snake.style.top = snakeTop + "px";
    }
  });

down.addEventListener("click", () => {
    if (snakeTop < container.offsetHeight - snake.offsetHeight-parseFloat(border_width)) {
      snakeTop += 10;
      snake.style.top = snakeTop + "px";
    }
  });

 