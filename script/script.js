import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { renderModel, renderTexture, spotlightRenderer } from "./Renderer.js";
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

camera.position.set(0, 2.5, 7);
camera.position.y = 4;
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = 1.3;

const orbitTarget = new THREE.Vector3(0, 0.5, 0);
controls.target.copy(orbitTarget);
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;
camera.lookAt(orbitTarget);

document.body.appendChild(renderer.domElement);

// Wall
renderTexture({
  nameTexture: "wall",
  modelPath: "texture/wall.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: 7,
  positionY: 2.5,
  positionZ: 0,
  boxWidth: 1,
  boxHeight: 8,
  boxDepth: 15,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

renderTexture({
  nameTexture: "wall",
  modelPath: "texture/wall.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: -7,
  positionY: 2.5,
  positionZ: 0,
  boxWidth: 1,
  boxHeight: 8,
  boxDepth: 15,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

renderTexture({
  nameTexture: "wall",
  modelPath: "texture/wall.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: 0,
  positionY: 2.5,
  positionZ: -7,
  boxWidth: 15,
  boxHeight: 8,
  boxDepth: 1,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

renderTexture({
  nameTexture: "wall",
  modelPath: "texture/wall.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: 0,
  positionY: 2.5,
  positionZ: 7,
  boxWidth: 15,
  boxHeight: 8,
  boxDepth: 1,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

renderTexture({
  nameTexture: "wall",
  modelPath: "texture/wall.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: 0,
  positionY: 7,
  positionZ: 0,
  boxWidth: 15,
  boxHeight: 1,
  boxDepth: 15,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

// Floor
renderTexture({
  nameTexture: "wall",
  modelPath: "texture/paving.jpg",
  repeatVectorX: 10,
  repeatVectorY: 10,
  positionX: 0,
  positionY: -0.4,
  positionZ: 0,
  boxWidth: 15,
  boxHeight: 1,
  boxDepth: 15,
  cylinderRadiusTop: 0,
  cylinderRadiusBottom: 0,
  cylinderHeight: 0,
  cylinderRadialSegments: 0,
  scene: scene,
});

// Metal
renderTexture({
  nameTexture: "Cylinder",
  modelPath: "texture/metal.jpg",
  repeatVectorX: 3,
  repeatVectorY: 3,
  positionX: 0,
  positionY: -0.4,
  positionZ: 0,
  boxWidth: 0,
  boxHeight: 0,
  boxDepth: 0,
  cylinderRadiusTop: 3,
  cylinderRadiusBottom: 3,
  cylinderHeight: 0.5,
  cylinderRadialSegments: 32,
  scene: scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 100,
  distance: 5,
  positionX: 0,
  positionY: 5,
  positionZ: 0,
  positionTargetX: 0,
  positionTargetY: 1,
  positionTargetZ: 0,
  scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 100,
  distance: 5,
  positionX: 3,
  positionY: 0.5,
  positionZ: 3,
  positionTargetX: 0,
  positionTargetY: 1,
  positionTargetZ: 0,
  scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 100,
  distance: 5,
  positionX: -3,
  positionY: 0.5,
  positionZ: 3,
  positionTargetX: 0,
  positionTargetY: 1,
  positionTargetZ: 0,
  scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 100,
  distance: 5,
  positionX: 3,
  positionY: 0.5,
  positionZ: -3,
  positionTargetX: 0,
  positionTargetY: 0.5,
  positionTargetZ: -0.5,
  scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 100,
  distance: 5,
  positionX: -3,
  positionY: 0.5,
  positionZ: -3,
  positionTargetX: 0,
  positionTargetY: 0.5,
  positionTargetZ: -0.5,
  scene,
});

// rak
renderModel("../models/rak.gltf", 0, 0.1, -6.4, 0, 0, 0, scene);
renderModel("../models/rak.gltf", 2, 0.1, -6.4, 0, 0, 0, scene);
renderModel("../models/rak.gltf", -2, 0.1, -6.4, 0, 0, 0, scene);

// meja
renderModel("../models/meja.gltf", 6, 0.1, 0, 0, 4.72, 0, scene);

// kursi
renderModel("../models/kursi.gltf", 5, 0, 0, 0, 4.72, 0, scene);

// alat-alat
renderModel("../models/alat1.gltf", 5.8, 1.2, -0.5, 0, 3.72, 0, scene);

// ban
renderModel("../models/ban.gltf", 6, 0.1, -5.9, 0, 0, 0, scene);
renderModel("../models/ban.gltf", 6, 0.5, -5.9, 0, 0, 0, scene);
renderModel("../models/ban.gltf", 4.93, 0.1, -5.9, 0, 0, 0, scene);
renderModel("../models/ban.gltf", 6, 0.1, -4.85, 0, 0, 0, scene);

const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 5, 0);
scene.add(light);

const pointLightHelper = new THREE.PointLightHelper(light, 1);
scene.add(pointLightHelper);
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


let currentCarModel;
let selectedCar = "0"; // Assuming a default value, change it as needed

const carColorButton = document.getElementById("carColorButton");
carColorButton.addEventListener("change", function () {
    const selectedColor = carColorButton.value;
    changeCarColor(selectedColor);
});


function changeCarColor(color) {
  if (currentCarModel) {
      switch (color) {
          case "merah":
              if (selectedCar === "1") {
                  const carMaterial = currentCarModel.getObjectByName("Object_400").material;
                  carMaterial.color.setHex(0xff0000);
              } else if (selectedCar === "2") {
                  const carMaterial = currentCarModel.getObjectByName("ID3358").material;
                  carMaterial.color.setHex(0xff0000);
              }
              break;
          case "biru":
              if (selectedCar === "1") {
                  const carMaterial = currentCarModel.getObjectByName("Object_400").material;
                  carMaterial.color.setHex(0x0000ff);
              } else if (selectedCar === "2") {
                  const carMaterial = currentCarModel.getObjectByName("ID3358").material;
                  carMaterial.color.setHex(0x0000ff);
              }
              break;
          case "hijau":
              if (selectedCar === "1") {
                  const carMaterial = currentCarModel.getObjectByName("Object_400").material;
                  carMaterial.color.setHex(0x00ff00);
              } else if (selectedCar === "2") {
                  const carMaterial = currentCarModel.getObjectByName("ID3358").material;
                  carMaterial.color.setHex(0x00ff00);
              }
              break;
          default:
              // Default color or handle other cases
              break;
      }
  }
}


// Add the following function to enable/disable the car color selection
function toggleCarColorSelection(enable) {
    carColorButton.disabled = !enable;
}

// Modify the loadCarModel functions to call toggleCarColorSelection accordingly
function loadCarModel0() {
    if (currentCarModel) {
        scene.remove(currentCarModel);
    }
    toggleCarColorSelection(false);
}

function loadCarModel1() {
    if (currentCarModel) {
        scene.remove(currentCarModel);
    }
    toggleCarColorSelection(true);
    renderModel("../models/scene.gltf", 0, 0.3, 2, 0, 0, 0, scene)
        .then((loadedCarModel) => {
            currentCarModel = loadedCarModel.scene;
            currentCarModel.traverse((object) => {
              console.log(object.name);
            });
        })
        .catch((error) => {
            console.error("Error loading the model:", error);
        });
}

function loadCarModel2() {
    toggleCarColorSelection(true);
    renderModel("../models/alfa_romeo_giulia/scene.gltf", 0, 1, 0, 0, 0, 0, scene);
}

function loadCarModel3() {
    if (currentCarModel) {
        scene.remove(currentCarModel);
    }
    toggleCarColorSelection(true);
    renderModel("../models/mersi/mersi.gltf", 0, 0.2, 0, 0, 0, 0, scene)
        .then((loadedCarModel) => {
            currentCarModel = loadedCarModel.scene;
            // Menampilkan nama objek dari model mobil
      currentCarModel.traverse((object) => {
        console.log(object.name);
      });
            // const initialColor = 0xff0000;
            // currentCarModel.getObjectByName("ID3358").material.color.setHex(initialColor);
        })
        .catch((error) => {
            console.error("Error loading the model:", error);
        });
}

// function loadCarModel0() {
//   if (currentCarModel) {
//     scene.remove(currentCarModel);
//   }
// }

// function loadCarModel1() {
//   if (currentCarModel) {
//     scene.remove(currentCarModel);
//   }

//   renderModel("../models/scene.gltf", 0, 0.3, 2, 0, 0, 0, scene)
//     .then((loadedCarModel) => {
//       currentCarModel = loadedCarModel.scene;
//     })
//     .catch((error) => {
//       console.error("Error loading the model:", error);
//     });
// }

// function loadCarModel2() {
//   renderModel(
//     "../models/alfa_romeo_giulia/scene.gltf",
//     0,
//     1,
//     0,
//     0,
//     0,
//     0,
//     scene
//   );
// }

// function loadCarModel3() {
//   if (currentCarModel) {
//     scene.remove(currentCarModel);
//   }

//   renderModel("../models/mersi/mersi.gltf", 0, 0.2, 0, 0, 0, 0, scene)
//     .then((loadedCarModel) => {
//       currentCarModel = loadedCarModel.scene;
//       const initialColor = 0xff0000;
//       currentCarModel.getObjectByName("ID3358").material.color.setHex(initialColor);
//     })
//     .catch((error) => {
//       console.error("Error loading the model:", error);
//     });
// }

// Pemilihan mobil event listener
carSelect.addEventListener("change", function () {
  selectedCar = carSelect.value;
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

// Fungsi untuk memperbarui teks berdasarkan pilihan mobil
function updateText(carType) {
  if (textmesh) {
    scene.remove(textmesh);
  }
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

zoomButton.addEventListener("touchstart", startZoom);
zoomButton.addEventListener("touchend", stopZoom);
zoomButton.addEventListener("touchcancel", stopZoom);

const zoomOutButton = document.getElementById("zoomOut");
let isZoomingOut = false;

const handleZoomOut = () => {
  camera.position.y += 0.1;
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

zoomOutButton.addEventListener("touchstart", startZoomOut);
zoomOutButton.addEventListener("touchend", stopZoomOut);
zoomOutButton.addEventListener("touchcancel", stopZoomOut);

const draw = () => {
  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(draw);
};

draw();
