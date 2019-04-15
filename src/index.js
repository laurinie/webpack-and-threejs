import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { createLight, createFloor } from "./environment";
import { createShoe } from './objects';

// create a scene
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xefd1b5, 0.001);


createShoe(scene);

scene.add(createLight());

scene.add(createFloor());
// create a camera and set position
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);
camera.position.x = 20;
camera.position.y = 20;
camera.position.z = 50;

// create a renderer & add to DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 490;
controls.maxPolarAngle = Math.PI / 2;
// set & start rendering the scene

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};
render();
console.log('Here is your scene', scene);

// adapt camera & renderer to browser window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
