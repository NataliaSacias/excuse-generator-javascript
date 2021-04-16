/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //   const nombres = ["pepe", "luna", "paz", "meme", "luz"];
  //   const paises = ["mx", "ar", "uy", "cl"];

  const obtenerRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  document.write(
    `${obtenerRandom(who)} ${obtenerRandom(action)} ${obtenerRandom(
      action
    )} ${obtenerRandom(what)} ${obtenerRandom(when)}`
  );
  //  console.log("Hello Rigo from the console!");
};
