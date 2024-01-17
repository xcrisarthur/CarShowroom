import * as THREE from "../node_modules/three/build/three.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function renderModel(
  modelPath,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  scene
) {
  return new Promise((resolve, reject) => {
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      modelPath,
      (gltfScene) => {
        gltfScene.scene.position.x = positionX;
        gltfScene.scene.position.y = positionY;
        gltfScene.scene.position.z = positionZ;
        gltfScene.scene.rotation.x = rotationX;
        gltfScene.scene.rotation.y = rotationY;
        gltfScene.scene.rotation.z = rotationZ;
        scene.add(gltfScene.scene);

        const currentCarModel = gltfScene;
        resolve(currentCarModel);
      },
      undefined,
      reject
    );
  });
}

export function renderTexture(options) {
  const {
    nameTexture,
    modelPath,
    repeatVectorX,
    repeatVectorY,
    positionX,
    positionY,
    positionZ,
    boxWidth,
    boxHeight,
    boxDepth,
    cylinderRadiusTop,
    cylinderRadiusBottom,
    cylinderHeight,
    cylinderRadialSegments,
    scene,
  } = options;

  const texture = new THREE.TextureLoader().load(modelPath);
  texture.repeat.set(repeatVectorX, repeatVectorY);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  if (nameTexture === "wall") {
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const wall = new THREE.Mesh(geometry, material);
    wall.position.x = positionX;
    wall.position.y = positionY;
    wall.position.z = positionZ;
    scene.add(wall);
  } else {
    const geometryCylinder = new THREE.CylinderGeometry(
      cylinderRadiusTop,
      cylinderRadiusBottom,
      cylinderHeight,
      cylinderRadialSegments
    );

    const materialCylinder = new THREE.MeshPhongMaterial({ map: texture });
    const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
    scene.add(cylinder);
  }
}

export function spotlightRenderer(options) {
  const {
    color,
    intensity,
    distance,
    positionX,
    positionY,
    positionZ,
    positionTargetX,
    positionTargetY,
    positionTargetZ,
    scene,
  } = options;

  const spotlight = new THREE.SpotLight(color, intensity, distance);
  spotlight.position.set(positionX, positionY, positionZ);
  spotlight.target.position.set(
    positionTargetX,
    positionTargetY,
    positionTargetZ
  );
  spotlight.angle = Math.PI / 6;
  scene.add(spotlight, spotlight.target);
}
