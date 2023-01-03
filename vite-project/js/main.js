import "../styles/style.css";
import {dumplings} from "./array";
import {dom} from "./dom";

document.getElementById("changetheme").addEventListener("click", function () {
  if(document.body.classList.contains("gray")) {
    document.body.classList.add("blue");
    document.body.classList.remove("gray");
  } else {
    document.body.classList.add("gray");
    document.body.classList.remove("blue");
  }
});

function clear() {
  dom.main.innerHTML = "";
};

function start(dumplings) {
  dom.main.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h2 class="name">${dumplings.name}</h2>
    <img class="img" src="${dumplings.img}"/> 
    <h3 class="price">${dumplings.price}</h3>
    <h4 class="desc"></h4>
    </div>`
  )};

function listAll() {
  dumplings.forEach((dumplings) => {
    start(dumplings);
  });
  };

  listAll();

document.getElementById("all").addEventListener("click", function all() {
  clear();
  dumplings.forEach((dumplings) => 
    dom.main.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
      <h2 class="name">${dumplings.name}</h2>
      <img class="img" src="${dumplings.img}"/> 
      <h3 class="price">${dumplings.price}</h3>
      <h4 class="desc"></h4>
    </div> `
    ) 
  );
});

document.getElementById("boiled").addEventListener("click", function boiled() {
  clear();
  dumplings
    .filter(dumplings => dumplings.category === "boiled")
    .forEach((dumplings) => 
      dom.main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2>${dumplings.name}</h2>
        <img class="img" src="${dumplings.img}"/> 
        <h3>${dumplings.price}</h3>
        <h4 class="desc"></h4>
      </div> `
      ) 
    );
  });

document.getElementById("steamed").addEventListener("click", function steamed() {
  clear();
  dumplings
    .filter(dumplings => dumplings.category === "steamed")
    .forEach((dumplings) => 
      dom.main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2>${dumplings.name}</h2>
        <img class="img" src="${dumplings.img}"/> 
        <h3>${dumplings.price}</h3>
        <h4 class="desc"></h4>
      </div> `
      ) 
    );
  });
  
  document.getElementById("fried").addEventListener("click", function fried() {
    clear();
    dumplings
      .filter(dumplings => dumplings.category === "fried")
      .forEach((dumplings) => 
        dom.main.insertAdjacentHTML(
          "beforeend",
          `
          <div class="card">
          <h2>${dumplings.name}</h2>
          <img class="img" src="${dumplings.img}"/> 
          <h3>${dumplings.price}</h3>
          <h4 class="desc"></h4>
        </div> `
        ) 
      );
    });