import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
let gltfLoader;
let currentCarModel = null;
export function Renderer(url,y,z){
 gltfLoader = new GLTFLoader();
    gltfLoader.load(url, (gltfScene) => {
        gltfScene.scene.position.z = z;
        gltfScene.scene.position.y = y;
        scene.add(gltfScene.scene);
        currentCarModel = gltfScene;
})
return currentCarModel;
};
