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
  <div>
    <Pet name="bruno" animal="dog" breed="husky" />
    <Pet name="bunny" animal="rabbit" breed="rabbit" />
    <Pet name="pepper" animal="bird" breed="Indo" />
  </div>;
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
