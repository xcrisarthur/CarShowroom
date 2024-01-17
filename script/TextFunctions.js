import * as THREE from "../node_modules/three/build/three.module.js";

let textmesh;
const loader = new THREE.FontLoader();

function createTextMesh(text, position) {
  loader.load("../fonts/Bungee Spice Regular_Regular.json", function (font) {
    const tGeometry = new TextGeometry(text, {
      font: font,
      size: 0.5,
      height: 0.5,
      curveSegments: 1,
      bevelEnabked: true,
      bevelThickness: 100,
      bevelSize: 100,
      bevelOffset: 100,
      bevelSegments: 100,
    });

    textmesh = new THREE.Mesh(tGeometry, [
      new THREE.MeshStandardMaterial({ emissive: 0x88ffff }),
      new THREE.MeshStandardMaterial({ color: 0x00000 }),
    ]);
    scene.add(textmesh);
    textmesh.position.set(position.x, position.y, position.z);
    textmesh.castShadow = true;
    textmesh.receiveShadow = true;
  });
}

export { createTextMesh };
