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
  intensity: 15,
  distance: 10,
  positionX: 3,
  positionY: 5,
  positionZ: 3,
  positionTargetX: 0,
  positionTargetY: 1,
  positionTargetZ: 0,
  scene,
});

spotlightRenderer({
  color: 0xffffff,
  intensity: 15,
  distance: 10,
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
  intensity: 15,
  distance: 10,
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
  intensity: 15,
  distance: 10,
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
  intensity: 15,
  distance: 10,
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

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
scene.add(hemiLight);

const lampButton = document.querySelector('[data-bs-title="Lamp"]');
let isLightAdded = false;

lampButton.addEventListener("click", function () {
  if (isLightAdded) {
    scene.remove(light);
    scene.remove(hemiLight);
  } else {
    scene.add(light);
    scene.add(hemiLight);
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
let selectedCar = "0";

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
          const carMaterial = currentCarModel.getObjectByName(
            "hon_crxdelsol_95_cockpit_glassF_window_"
          ).material;
          carMaterial.color.setHex(0xff0000);
          carMaterial.depthTest = false;

          const lightInterior = new THREE.PointLight(0xffffff, 100, 1);
          lightInterior.position.set(0, 1.3, 0);
          scene.add(lightInterior);
        } else if (selectedCar === "2") {
          const carMaterial =
            currentCarModel.getObjectByName("ID3358").material;
          carMaterial.color.setHex(0xff0000);
        }
        break;
      case "biru":
        if (selectedCar === "1") {
          const carMaterial = currentCarModel.getObjectByName("body1").material;
          carMaterial.color.setHex(0x0000ff);
        } else if (selectedCar === "2") {
          const carMaterial =
            currentCarModel.getObjectByName("ID3358").material;
          carMaterial.color.setHex(0x0000ff);
        }
        break;
      case "hijau":
        if (selectedCar === "1") {
          const carMaterial = currentCarModel.getObjectByName("body1").material;
          carMaterial.color.setHex(0x00ff00);
        } else if (selectedCar === "2") {
          const carMaterial =
            currentCarModel.getObjectByName("ID3358").material;
          carMaterial.color.setHex(0x00ff00);
        }
        break;
      default:
        // Default color or handle other cases
        break;
    }
  }
}

let isCarSelected = false;

const music2 = new THREE.AudioListener();
camera.add(music2);
const soundCar = new THREE.Audio(music2);
const audioLoader2 = new THREE.AudioLoader();
audioLoader2.load("../audio/carengine.mp3", function (buffer) {
  soundCar.setBuffer(buffer);
  soundCar.setVolume(1);
  // sound.play();
});

const smokeTexture = new THREE.TextureLoader().load("../texture/smoke.jpg");
const smokeGeometry = new THREE.TorusKnotGeometry(0.1, 0.3, 3, 4, 2, 0.5);
const smokeMaterial = new THREE.MeshLambertMaterial({
  map: smokeTexture,
  opacity: 0.3,
  transparent: true,
});

const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
const smoke2 = new THREE.Mesh(smokeGeometry, smokeMaterial);
function startEngine() {
  if (isCarSelected) {
    const engineButton = document.getElementById("engineButton");

    engineButton.addEventListener("click", function () {
      if (selectedCar == 1) {
        smoke.position.set(-0.6, 0.5, -2.8);
        scene.add(smoke);
        soundCar.play();
      } else if (selectedCar == 2) {
        smoke.position.set(-0.6, 0.6, -2.7);
        smoke2.position.set(0.6, 0.6, -2.7);
        scene.add(smoke);
        scene.add(smoke2);
        soundCar.play();
      }

      setTimeout(function () {
        // clearInterval(blinkInterval);
        scene.remove(smoke);
        scene.remove(smoke2);
      }, 5000);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  startEngine();
});

function toggleCarColorSelection(enable) {
  carColorButton.disabled = !enable;
}

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
  renderModel("../models/hondaCrx.gltf", 0, 0.35, 0, 0, 0, 0, scene)
    .then((loadedCarModel) => {
      currentCarModel = loadedCarModel.scene;
      currentCarModel.traverse((object) => {
        console.log(object.name);
      });
      isCarSelected = true;
      startEngine();
      loadSmokeModel();
      const carMaterial = currentCarModel.getObjectByName(
        "hon_crxdelsol_95_cockpit_glassF_window_"
      ).material;
      const rim = currentCarModel.getObjectByName(
        "hon_crxdelsol_95_caliperlf_lod0_caliperLF_misc_"
      );
      rim.material.color.setHex(0xff0000);
      carMaterial.depthTest = false;
    })
    .catch((error) => {
      console.error("Error loading the model:", error);
    });
}

function loadCarModel2() {
  if (currentCarModel) {
    scene.remove(currentCarModel);
  }
  toggleCarColorSelection(true);
  renderModel("../models/vw.gltf", 0, 0.2, 0, 0, 0, 0, scene)
    .then((loadedCarModel) => {
      currentCarModel = loadedCarModel.scene;
      currentCarModel.traverse((object) => {
        console.log(object.name);
      });
      isCarSelected = true;
      // const carMaterial = currentCarModel.getObjectByName("ID3358_8").material;
      // carMaterial.depthTest = false;
      startEngine();
    })
    .catch((error) => {
      console.error("Error loading the model:", error);
    });
}

function loadCarModel3() {
  if (currentCarModel) {
    scene.remove(currentCarModel);
  }
  toggleCarColorSelection(true);
  renderModel("../models/mersi.gltf", 0, 0.2, 0, 0, 0, 0, scene)
    .then((loadedCarModel) => {
      currentCarModel = loadedCarModel.scene;
      currentCarModel.traverse((object) => {
        console.log(object.name);
      });
      isCarSelected = true;
      const carMaterial = currentCarModel.getObjectByName("ID3358_8").material;
      // carMaterial.depthTest = false;
      startEngine();
    })
    .catch((error) => {
      console.error("Error loading the model:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const detailedInfoButton = document.getElementById("detailnfo");
  const detailedInfoCanvas = document.getElementById("detailedInfoCanvas");
  const carSelect = document.getElementById("carSelect");

  detailedInfoButton.addEventListener("click", function () {
    console.log(detailedInfoCanvas);
    const selectedCar = carSelect.value;
    detailedInfoCanvas.classList.toggle("visible");

    detailedInfoCanvas.style.display =
      detailedInfoCanvas.style.display === "none" ? "block" : "none";

    let content = "<h3>Car Details</h3>";

    switch (selectedCar) {
      case "1":
        content += `
          <p>Make: Honda</p>
          <p>Model: CR-X S</p>
          <p>Year: 1988</p>
          <p>Top Speed : 222km/h</p>
          <p>Color: Silver</p>
          <p>Engine: Gasoline</p>
          <p>Interior: Leather</p>
        `;
        break;
      case "2":
        content += `
          <p>Make: Marcedez Benz</p>
          <p>Model: GLS</p>
          <p>Year: 2022</p>
          <p>Top Speed : 246km/h</p>
          <p>Color: White</p>
          <p>Engine: Gasoline</p>
          <p>Interior: Alcantara</p>
        `;
        break;

      default:
        content += "<p>Please select a car to view details.</p>";
    }

    detailedInfoCanvas.innerHTML = content;
  });
});

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
    let text1 = "CR-X";
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
      textmesh.position.set(-0.9, 0.2, 3);
      textmesh.castShadow = true;
      textmesh.receiveShadow = true;
    });
  } else if (carType == "2") {
    // Teks default jika tidak memilih mobil
    let text = "Marcedes-Benz";
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
      textmesh.position.set(-3, 0.2, 3);
      textmesh.castShadow = true;
      textmesh.receiveShadow = true;
    });
  }
}

const music = new THREE.AudioListener();
camera.add(music);
const sound = new THREE.Audio(music);
const audioLoader = new THREE.AudioLoader();
audioLoader.load("../audio/softvibes.mp3", function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.2);
  // sound.play();
});

function playMusic() {
  const musicButton = document.getElementById("musicButton");

  musicButton.addEventListener("click", function () {
    if (sound.isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  playMusic();
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
