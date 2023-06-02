import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

//without jsx
// const Pet = (props) => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h3", {}, props.breed)
//   );
// };

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello Pets"),
    React.createElement(Pet, {
      name: "bruno",
      animal: "Dog",
      breed: "libra",
    }),
    React.createElement(Pet, {
      name: "Bunny",
      animal: "rabbit",
      breed: "abcd",
    }),
    React.createElement(Pet, {
      name: "Antonny",
      animal: "Horse",
      breed: "white horse",
    })
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
