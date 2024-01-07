const cups = document.querySelectorAll(".cup");
const leiter = document.querySelector(".leiter");
const score = document.querySelector(".score");
const empty = document.querySelector(".empty");
const mainCup = document.querySelector(".main-cup");
cups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    cups.forEach((cup, index2) => {
      if (index >= index2) {
        cups[index2].classList.remove("cup");
        cups[index2].classList.add("full");
      } else {
        cups[index2].classList.remove("full");
        cups[index2].classList.add("cup");
      }
    });
    setTimeout(() => {
      let height = (empty.style.height = `${
        document.querySelectorAll(".cup").length * 50
      }px`);
      leiter.innerHTML = `${document.querySelectorAll(".cup").length / 4}L`;
      score.innerHTML = `${document.querySelectorAll(".full").length * 12.5}%`;
    }, 10);
  });
});
mainCup.addEventListener("click", () => {
  cups.forEach((cup) => {
    cup.classList.remove("full");
    cup.classList.add("cup");
  });
});

