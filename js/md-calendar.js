let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".stepper-item");

let currentStep = 1; //目前步驟

// 下一步
next.addEventListener("click", () => {
  currentStep++;
  // console.log(currentStep);
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  // console.log(currentStep);
  update();
});

// 上一步
prev.addEventListener("click", () => {
  currentStep--;
  // console.log(currentStep);
  if (currentStep < 1) {
    currentStep = 1;
  }
  // console.log(currentStep);
  update();
});

// 更新DOM
function update() {
  // 圓圈
  circles.forEach((circleItem, index) => {
    if (index < currentStep) {
      circleItem.classList.add("completed", "active");
    } else {
      circleItem.classList.remove("completed", "active");
    }
  });

  // 當前進度的線條
  let actives = document.querySelectorAll(".completed");
  console.log((actives.length / circles.length) * 90);
  // progress.style.width = (actives.length / circles.length) * 100 + "%";
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 90 + "%";
  if (currentStep === 1) {
    prev.disabled = true;
  } else if (currentStep === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
