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
// camera.position.x = 6;
// camera.position.y = 5;

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
controls.maxPolarAngle = 1.2;

const orbitTarget = new THREE.Vector3(0, 0.5, 0);
controls.target.copy(orbitTarget);

controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

const geometry = new THREE.BoxGeometry(1, 8, 15);
const geometry2 = new THREE.BoxGeometry(15, 8, 1);
const geometry3 = new THREE.BoxGeometry(15, 1, 15);
const geometry4 = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshPhongMaterial({ map: wall_texture });

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

// const wall4 = new THREE.Mesh(geometry2, material);
// wall4.position.z = 7;
// wall4.position.y = 2.5;
// scene.add(wall4);

const wall5 = new THREE.Mesh(geometry3, material);
wall5.position.z = 0;
wall5.position.y = 7;
scene.add(wall5);

const wall6 = new THREE.Mesh(
  geometry3,
  new THREE.MeshPhongMaterial({ map: paving_texture })
);
wall6.position.z = 0;
wall6.position.y = -0.4;
scene.add(wall6); // floor

const geometryCylinder = new THREE.CylinderGeometry(3, 3, 0.5, 32);
const materialCylinder = new THREE.MeshPhongMaterial({ map: metal_texture });
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
scene.add(cylinder);

const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 5, 0);
scene.add(light);

const spotlight0 = new THREE.SpotLight(0xffffff, 100, 5);
spotlight0.position.set(0, 5, 0);
spotlight0.target.position.set(0, 1, 0);
spotlight0.angle = Math.PI / 6;

const spotlight1 = new THREE.SpotLight(0xffffff, 100, 10);
spotlight1.position.set(3, 0.5, 3);
spotlight1.target.position.set(0, 1, 0);
spotlight1.angle = Math.PI / 6;

const spotlight2 = new THREE.SpotLight(0xffffff, 100, 10);
spotlight2.position.set(-3, 0.5, 3);
spotlight2.target.position.set(0, 1, 0);
spotlight2.angle = Math.PI / 6;

const spotlight3 = new THREE.SpotLight(0xffffff, 100, 10);
spotlight3.position.set(3, 0.5, -3);
spotlight3.target.position.set(0, 0.5, -0.5);
spotlight3.angle = Math.PI / 6;

const spotlight4 = new THREE.SpotLight(0xffffff, 100, 10);
spotlight4.position.set(-3, 0.5, -3);
spotlight4.target.position.set(0, 0.5, -0.5);
spotlight4.angle = Math.PI / 6;

scene.add(spotlight0, spotlight1, spotlight2, spotlight3, spotlight4);
scene.add(
  spotlight0,
  spotlight1.target,
  spotlight2.target,
  spotlight3.target,
  spotlight4.target
);

// const spotLightHelper = new THREE.SpotLightHelper( spotlight0 );
// scene.add( spotLightHelper );
// const light2 = new THREE.PointLight(0xffffff, 100, 100);
// light2.position.set(-2.5, 2, 0);
// scene.add(light2);

// const light3 = new THREE.PointLight(0xffffff, 100, 100);
// light3.position.set(0, 3, 0);
// scene.add(light3);

// const light4 = new THREE.PointLight(0xffffff, 100, 100);
// light4.position.set(0, 1, -3);
// scene.add(light4);

document.addEventListener("DOMContentLoaded", function () {
  const fsButton = document.querySelector('[data-bs-title="Full Screen"]');
  let isFullScreen = false;

  fsButton.addEventListener("click", function () {
    if (document.fullscreenEnabled) {
      if (!isFullScreen) {
        document.documentElement.requestFullscreen();
        isFullScreen = true;
      } else {
        document.exitFullscreen();
        isFullScreen = false;
      }
    } else {
      console.error("Full screen is not supported in this browser.");
    }
  });
});

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
scene.add(pointLightHelper);

let currentCarModel = null;

function hideCarModels() {
  if (currentCarModel) {
    scene.remove(currentCarModel.scene);
  }
}

function loadCarModel0() {
  hideCarModels();
}

function loadCarModel1() {
  hideCarModels();
  const gltfLoaderCar1 = new GLTFLoader();
  gltfLoaderCar1.load("../models/scene.gltf", (gltfScene) => {
    gltfScene.scene.position.z = 2;
    gltfScene.scene.position.y = 0.3;
    scene.add(gltfScene.scene);
    currentCarModel = gltfScene;
  });
}

function loadCarModel2() {
  hideCarModels();
  const gltfLoaderCar2 = new GLTFLoader();
  gltfLoaderCar2.load("../models/alfa_romeo_giulia/scene.gltf", (gltfScene) => {
    gltfScene.scene.position.z = 0;
    gltfScene.scene.position.y = 1;
    scene.add(gltfScene.scene);
    currentCarModel = gltfScene;
  });
}

carSelect.addEventListener("change", function () {
  const selectedCar = carSelect.value;

  // Tambahkan model yang sesuai berdasarkan pilihan
  if (selectedCar === "0") {
    loadCarModel0();
  } else if (selectedCar === "1") {
    loadCarModel1();
  } else if (selectedCar === "2") {
    loadCarModel2();
  }
});

// const gltfLoaderCar1 = new GLTFLoader();
// gltfLoaderCar1.load("../models/scene.gltf", (gltfScene) => {
//   gltfScene.scene.position.z = 2;
//   gltfScene.scene.position.y = 0.3;
//   scene.add(gltfScene.scene);
// });

// const gltfLoaderCar2 = new GLTFLoader();
// gltfLoaderCar2.load("../models/alfa_romeo_giulia/scene.gltf", (gltfScene) => {
//   gltfScene.scene.position.z = 0;
//   gltfScene.scene.position.y = 1;
//   scene.add(gltfScene.scene);
// });

// rak
const gltfLoader2 = new GLTFLoader();
gltfLoader2.load("../models/rak.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -6.4;
  gltfScene.scene.position.y = 0.1;
  scene.add(gltfScene.scene);
});

const gltfLoader3 = new GLTFLoader();
gltfLoader3.load("../models/rak.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -6.4;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = 2;
  scene.add(gltfScene.scene);
});

const gltfLoader4 = new GLTFLoader();
gltfLoader4.load("../models/rak.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -6.4;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = -2;
  scene.add(gltfScene.scene);
});

// meja
const gltfLoader5 = new GLTFLoader();
gltfLoader5.load("../models/meja.gltf", (gltfScene) => {
  gltfScene.scene.position.z = 0;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = 6;
  gltfScene.scene.rotation.y = 4.72;
  scene.add(gltfScene.scene);
});

// kursi
const gltfLoader6 = new GLTFLoader();
gltfLoader6.load("../models/kursi.gltf", (gltfScene) => {
  gltfScene.scene.position.z = 0;
  gltfScene.scene.position.y = 0;
  gltfScene.scene.position.x = 5;
  gltfScene.scene.rotation.y = 4.72;
  scene.add(gltfScene.scene);
});

// alat-alat
const gltfLoader7 = new GLTFLoader();
gltfLoader7.load("../models/alat1.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -0.5;
  gltfScene.scene.position.y = 1.2;
  gltfScene.scene.position.x = 5.8;
  gltfScene.scene.rotation.y = 3.72;
  scene.add(gltfScene.scene);
});

camera.position.set(0, 0.5, 6);
camera.lookAt(orbitTarget);
const gltfLoader8 = new GLTFLoader();
gltfLoader8.load("../models/ban.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -5.9;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = 6;
  scene.add(gltfScene.scene);
});

const gltfLoader9 = new GLTFLoader();
gltfLoader9.load("../models/ban.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -5.9;
  gltfScene.scene.position.y = 0.5;
  gltfScene.scene.position.x = 6;
  scene.add(gltfScene.scene);
});

const gltfLoader10 = new GLTFLoader();
gltfLoader10.load("../models/ban.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -5.9;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = 4.93;
  scene.add(gltfScene.scene);
});

const gltfLoader11 = new GLTFLoader();
gltfLoader11.load("../models/ban.gltf", (gltfScene) => {
  gltfScene.scene.position.z = -4.85;
  gltfScene.scene.position.y = 0.1;
  gltfScene.scene.position.x = 6;
  scene.add(gltfScene.scene);
});

const size = 15;
const divisions = 15;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

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

const draw = () => {
  // cylinder.rotation.y += 0.001;
  // camera.rotation.x += 0.1
  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(draw);
};

draw();
