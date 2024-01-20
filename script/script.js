import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Renderer } from "./Renderer.js";

import { FontLoader } from "../modules/FontLoader.js";
import { TextGeometry } from "../modules/TextGeometry.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  1,
  100
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

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
controls.maxPolarAngle = 1.3;

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
  new THREE.MeshPhongMaterial({ map: paving_texture })
);
wall6.position.z = 0;
wall6.position.y = -0.4;
scene.add(wall6);

const geometryCylinder = new THREE.CylinderGeometry(3, 3, 0.5, 32);
const materialCylinder = new THREE.MeshPhongMaterial({ map: metal_texture });
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
scene.add(cylinder);

const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 5, 0);
scene.add(light);

const lampButton = document.querySelector('[data-bs-title="Lamp"]');
let isLightAdded = false;

lampButton.addEventListener("click", function () {
  if (isLightAdded) {
    scene.remove(light);
  } else {
    scene.add(light);
  }
  isLightAdded = !isLightAdded;
});

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
  const carColorButton = document.getElementById("carColor");

  carColorButton.addEventListener("click", function () {
    const carColorValue = carColorButton.value;
    // console.log("Car Color Value:", carColorValue);
    document.getElementById("carColor").style.backgroundColor = selectedColor;

    // You can use the 'carColorValue' variable as needed in your JavaScript code
  });
});

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
scene.add(pointLightHelper);

let currentCarModel = null;
//
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

  Renderer("../models/scene.gltf", 0.3, 2);
  const gltfLoaderCar1 = new GLTFLoader();
  const carColorDropdown = document.getElementById("carColor");
  const selectedColor = carColorDropdown.value;

  gltfLoaderCar1.load("../models/crx.gltf", (gltfScene) => {
    const model = gltfScene.scene;
    model.position.x = model.position.z = 0;
    model.position.y = 0.35;
    scene.add(model);

    // Update the color of the specific part of the model
    const targetObjectName = "body1";
    const targetObject = model.getObjectByName(targetObjectName);

    if (targetObject) {
      targetObject.material.color.setHex(selectedColor);
      console.log("Updated color:", selectedColor);
    } else {
      console.error(
        `Object with name ${targetObjectName} not found in the model.`
      );
    }
  });
}

function loadCarModel2() {
  hideCarModels();
  Renderer("../models/alfa_romeo_giulia/scene.gltf", 1, 0);
  const gltfLoaderCar2 = new GLTFLoader();
  gltfLoaderCar2.load("../models/alfa_romeo_giulia/scene.gltf", (gltfScene) => {
    gltfScene.scene.position.z = 0;
    gltfScene.scene.position.y = 1;
    scene.add(gltfScene.scene);
    currentCarModel = gltfScene;
  });
}

function loadCarModel3() {
  hideCarModels();
  Renderer("../models/mersi/mersi.gltf", 1, 0);
  const gltfLoaderCar3 = new GLTFLoader();

  // Get the selected color from the carColor dropdown
  const carColorDropdown = document.getElementById("carColor");
  const selectedColor = carColorDropdown.value;

  gltfLoaderCar3.load("../models/mersi/mersi.gltf", (gltfScene) => {
    const model = gltfScene.scene;
    model.position.x = model.position.z = 0;
    model.position.y = 0.2;
    scene.add(model);

    // Update the color of the specific part of the model
    const targetObjectName = "ID3358";
    const targetObject = model.getObjectByName(targetObjectName);

    if (targetObject) {
      targetObject.material.color.setHex(selectedColor);
      console.log("Updated color:", selectedColor);
    } else {
      console.error(
        `Object with name ${targetObjectName} not found in the model.`
      );
    }
  });
}

// const gui = new dat.GUI();
// const option = {
//   Main_Color: 0x2f3130,
// };
// const gltfLoader = new GLTFLoader();
// gltfLoader.load("../models/mersi/mersi.gltf", (gltfScene) => {
//   const model = gltfScene.scene;
//   model.position.x = model.position.z = 0;
//   model.position.y = 0.2;
//   scene.add(model);
//   console.log(model.getObjectByName("ID3358"));
//   gui.addColor(option, "Main_Color").onChange(function (e) {
//     model.getObjectByName("ID3358").material.color.setHex(e);
//   });
// });

// Fungsi untuk memperbarui teks berdasarkan pilihan mobil
function updateText(carType) {
  // Menghapus teks yang ada dari scene jika sudah ada
  if (textmesh) {
    scene.remove(textmesh);
  }

  // Teks untuk mobil Tesla (car 1)
  if (carType == "0") {
    let text = "choose car!";
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
      textmesh.position.set(-2.5, 0.2, 3);
      textmesh.castShadow = true;
      textmesh.receiveShadow = true;
    });
  } else if (carType == "1") {
    let text1 = "Tesla";
    loader.load("../fonts/Bungee Spice Regular_Regular.json", function (font) {
      const tGeometry = new TextGeometry(text1, {
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
      textmesh.position.set(-1.5, 0.2, 3);
      textmesh.castShadow = true;
      textmesh.receiveShadow = true;
    });
  } else if (carType == "2") {
    // Teks default jika tidak memilih mobil
    let text = "alfa romeo";
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
      textmesh.position.set(-2.5, 0.2, 3);
      textmesh.castShadow = true;
      textmesh.receiveShadow = true;
    });
  }
}

// Pemilihan mobil event listener
carSelect.addEventListener("change", function () {
  const selectedCar = carSelect.value;

  if (selectedCar === "0") {
    loadCarModel0();
    updateText(selectedCar);
  } else if (selectedCar === "1") {
    loadCarModel1();
    updateText(selectedCar);
  } else if (selectedCar === "2") {
    loadCarModel3();
    updateText(selectedCar);
  }
});

let textmesh;
const loader = new FontLoader();

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

camera.position.set(0, 2.5, 7);
camera.position.y = 4;

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

const zoomButton = document.getElementById("zoomIn");
let isZooming = false;

const handleZoomIn = () => {
  camera.position.y -= 0.1;
};

const startZoom = () => {
  if (!isZooming) {
    isZooming = true;
    zoom();
  }
};

const stopZoom = () => {
  isZooming = false;
};

const zoom = () => {
  if (isZooming) {
    handleZoomIn();
    requestAnimationFrame(zoom);
  }
};

zoomButton.addEventListener("mousedown", startZoom);
zoomButton.addEventListener("mouseup", stopZoom);

// You can add touch events for mobile support
zoomButton.addEventListener("touchstart", startZoom);
zoomButton.addEventListener("touchend", stopZoom);
zoomButton.addEventListener("touchcancel", stopZoom);

const zoomOutButton = document.getElementById("zoomOut");
let isZoomingOut = false;

const handleZoomOut = () => {
  // Decrease camera zoom logic here
  camera.position.y += 0.1; // You can adjust the zoom speed as needed
};

const startZoomOut = () => {
  if (!isZoomingOut) {
    isZoomingOut = true;
    zoomOut();
  }
};

const stopZoomOut = () => {
  isZoomingOut = false;
};

const zoomOut = () => {
  if (isZoomingOut) {
    handleZoomOut();
    requestAnimationFrame(zoomOut);
  }
};

zoomOutButton.addEventListener("mousedown", startZoomOut);
zoomOutButton.addEventListener("mouseup", stopZoomOut);

// You can add touch events for mobile support
zoomOutButton.addEventListener("touchstart", startZoomOut);
zoomOutButton.addEventListener("touchend", stopZoomOut);
zoomOutButton.addEventListener("touchcancel", stopZoomOut);

document.addEventListener("DOMContentLoaded", function () {
  const detailedInfoButton = document.getElementById("soundButton");
  const detailedInfoCanvas = document.getElementById("detailedInfoCanvas");
  const carSelect = document.getElementById("carSelect");

  detailedInfoButton.addEventListener("click", function () {
    // Get the selected car value
    const selectedCar = carSelect.value;

    // Toggle the visibility of detailed information
    detailedInfoCanvas.style.display =
      detailedInfoCanvas.style.display === "none" ? "block" : "none";

    // Sample content for detailed information (modify as needed)
    let content = "<h3>Car Details</h3>";

    switch (selectedCar) {
      case "1":
        content += `
          <p>Make: Honda</p>
          <p>Model: CR-X S</p>
          <p>Year: 1988</p>
          <p>Top Speed : 222km/h</p>
          <p>Color: Red</p>
          <p>Engine: Electric</p>
          <p>Interior: Leather</p>
        `;
        break;
      case "2":
        content += `
          <p>Make: Marcedez Benz</p>
          <p>Model: Giulia</p>
          <p>Year: 2022</p>
          <p>Color: Blue</p>
          <p>Engine: Gasoline</p>
          <p>Interior: Alcantara</p>
        `;
        break;
      // Add more cases for other cars as needed

      default:
        content += "<p>Please select a car to view details.</p>";
    }

    // Set the content inside detailed information element
    detailedInfoCanvas.innerHTML = content;
  });

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

const draw = () => {
  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(draw);
};
draw();
