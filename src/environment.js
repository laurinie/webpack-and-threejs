// import * as THREE from 'three';
import { GridHelper, SphereBufferGeometry, Mesh, MeshPhongMaterial, TextureLoader, PlaneBufferGeometry, PointLight, DoubleSide,HemisphereLight } from 'three-full';
import world from "./models/world.jpg";

export const createLight = () => {
  const hemlight = new HemisphereLight(0xffffff, 0x444444);
  hemlight.position.set(0, 200, 0);
  return hemlight;
};

export const createPointLight = () => {
  let intensity = 5;
  let distance = 100;
  let decay = 2.0;
  const pointLight = new PointLight("#fff", intensity, distance, decay);
  return pointLight;
};
export const createFloor = () => {
  const mesh = new Mesh(new PlaneBufferGeometry(2000, 2000), new MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
  mesh.rotation.x = - Math.PI / 2;
  mesh.receiveShadow = true;
  // scene.add(mesh);

  const loader = new TextureLoader();
  const map = loader.load(world);
  const worldmaterial = new MeshPhongMaterial({
    specular: 0x333333,
    shininess: 0,
    map: map,
  });
  worldmaterial.side = DoubleSide;

  const backGround = new Mesh(new SphereBufferGeometry(500, 100, 100), worldmaterial);

  const grid = new GridHelper(2000, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  // scene.add(grid);
  const floor = backGround;
  return floor;
};

