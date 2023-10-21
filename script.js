let isDayMode = true;

function toggle() {
  isDayMode = !isDayMode;
  document.body.classList.toggle("night");
  if (isDayMode === true) {
    document.querySelector("button").innerHTML = "Night Mode";
    document.querySelector("button").style.color = "#F7A1B1";

    document.querySelector("button").style.backgroundColor = "#ACD8AA";
  } else {

    document.querySelector("button").innerHTML = "Day Mode";

    document.querySelector("button").style.color = "White";

    document.querySelector("button").style.backgroundColor = "#F7A1B1";
  }

}

function changeAmount() {
  let figure = `<figure>
        <img src="https://pbs.twimg.com/media/FcUqATtaMAIBOW1.jpg:large" alt="1994 Mazda Miata" width="200px">
        <figcaption>1994 Mazda Miata</figcaption>
      </figure>`;

let ourGrid = document.querySelector(".our-grid");

let amount = document.querySelector("#amount").values;
  ourGrid.innerHTML = '';

  for(let i =1; i<=amount; i++) {
    ourGrid.innerHTML +- figure;
  }
}
