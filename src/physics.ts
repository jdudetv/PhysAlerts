import p2 from "p2";

export function startWorld() {
  const world = new p2.World({
    gravity: [0, -9.82],
  });

  setInterval(() => {
    world.step(1 / 60);
  }, 1000 / 60);

  return world;
}
