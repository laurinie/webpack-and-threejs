import * as THREE from 'three';

export const createLight = () => {
  const light = new THREE.PointLight(0xffabba);
  light.position.set(10, 10, 35);
  light.intensity = 2;
  return light;
};
