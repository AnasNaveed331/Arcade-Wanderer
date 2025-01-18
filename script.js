const container=document.querySelector(".container")
const orb=document.querySelector(".orb")
const topp=document.querySelector(".top")
const left=document.querySelector(".left")
const right=document.querySelector(".right")
const down=document.querySelector(".down")


let orbTop = 0;
let orbLeft = 0;
getcomput=window.getComputedStyle(container);
border_width=getcomput.getPropertyValue("border-width")


left.addEventListener("click", () => {
    if (orbLeft > 0) { // Prevent moving out of bounds
      orbLeft -= 10;
      orb.style.left = orbLeft + "px";
    }
  });

  right.addEventListener("click", () => {
    if (orbLeft < container.offsetWidth - orb.offsetWidth -parseFloat(border_width)) {
      orbLeft += 10;
      orb.style.left = orbLeft + "px";
    }
})

topp.addEventListener("click", () => {
    if (orbTop > 0) { // Prevent moving out of bounds
      orbTop -= 10;
      orb.style.top = orbTop + "px";
    }
  });

down.addEventListener("click", () => {
    if (orbTop < container.offsetHeight - orb.offsetHeight-parseFloat(border_width)) {
      orbTop += 10;
      orb.style.top = orbTop + "px";
    }
  });

 