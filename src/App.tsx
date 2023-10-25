import { render } from "solid-js/web";
import { startWorld } from "./physics";
import { createSignal } from "solid-js";
import { startWSS, wss } from "./websocket";

export default function () {
  const [pos, setpos] = createSignal(0);

  const world = startWorld();

  for (let x = 0; x < 100; x++) {
    setTimeout(() => {
      setpos(x);
    }, x * 5);
  }

  world.on("postStep", () => {
    console.log("stepped");
    // world.bodies.forEach()
  });

  return (
    <div>
      <img
        id="test"
        style={`transform: translateX(${pos()}px), width=${100 - pos()}%`}
        src="https://i.imgur.com/59wDi4M.png"
      ></img>
    </div>
  );
}
