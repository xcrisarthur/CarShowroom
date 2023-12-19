import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  1,
  100
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 6;
camera.position.y = 5;

const wall_texture = new THREE.TextureLoader().load("texture/wall.jpg");
wall_texture.repeat = new THREE.Vector2(3, 3);
wall_texture.wrapS = THREE.RepeatWrapping;
wall_texture.wrapT = THREE.RepeatWrapping;

const metal_texture = new THREE.TextureLoader().load("texture/metal.jpg");
metal_texture.repeat = new THREE.Vector2(2, 2);
metal_texture.wrapS = THREE.RepeatWrapping;
metal_texture.wrapT = THREE.RepeatWrapping;

const paving_texture = new THREE.TextureLoader().load("texture/paving.jpg");
paving_texture.repeat = new THREE.Vector2(10, 10);
paving_texture.wrapS = THREE.RepeatWrapping;
paving_texture.wrapT = THREE.RepeatWrapping;

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = 1.4;

const geometry = new THREE.BoxGeometry(1, 8, 15);
const geometry2 = new THREE.BoxGeometry(15, 8, 1);
const geometry3 = new THREE.BoxGeometry(15, 1, 15);
const geometry4 = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: wall_texture });

const wall1 = new THREE.Mesh(geometry, material);
wall1.position.x = 7;
wall1.position.y = 2.5;
scene.add(wall1);

const wall2 = new THREE.Mesh(geometry, material);
wall2.position.x = -7;
wall2.position.y = 2.5;
scene.add(wall2);

const wall3 = new THREE.Mesh(geometry2, material);
wall3.position.z = -7;
wall3.position.y = 2.5;
scene.add(wall3);

const wall4 = new THREE.Mesh(geometry2, material);
wall4.position.z = 7;
wall4.position.y = 2.5;
scene.add(wall4);

const wall5 = new THREE.Mesh(geometry3, material);
wall5.position.z = 0;
wall5.position.y = 7;
scene.add(wall5);

const wall6 = new THREE.Mesh(
  geometry3,
  new THREE.MeshBasicMaterial({ map: paving_texture })
);
wall6.position.z = 0;
wall6.position.y = -0.4;
scene.add(wall6); // floor

const geometryCylinder = new THREE.CylinderGeometry(3, 3, 0.5, 32);
const materialCylinder = new THREE.MeshBasicMaterial({ map: metal_texture });
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
scene.add(cylinder);

const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 4, 0);
scene.add(light);

const light2 = new THREE.PointLight(0xffffff, 100, 100);
light2.position.set(0, 4, 0);
scene.add(light2);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
scene.add(pointLightHelper);

const gltfLoader = new GLTFLoader();
gltfLoader.load("../models/scene.gltf", (gltfScene) => {
  gltfScene.scene.position.z = 2;
  gltfScene.scene.position.y = 0.3;
  scene.add(gltfScene.scene);
});

const size = 15;
const divisions = 15;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function carSelect() {
  const carModelButton = document.getElementById("carModelButton");
  const carDropdown = document.getElementById("carDropdown");

  carModelButton.addEventListener("click", () => {
    if (carDropdown.style.display === "block") {
      carDropdown.style.display = "none";
    } else {
      carDropdown.style.display = "block";
    }
  });
}
function color() {
  const carColorButton = document.getElementById("carColorButton");
  const colorPicker = document.getElementById("colorPicker");

  carColorButton.addEventListener("click", () => {
    colorPicker.click();
  });

  colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    carColorButton.style.backgroundColor = selectedColor;
    cube.material.color.set(selectedColor);
  });
}
color();
carSelect();

const draw = () => {
  // cylinder.rotation.y += 0.001;

  renderer.render(scene, camera);
  requestAnimationFrame(draw);
};

draw();
