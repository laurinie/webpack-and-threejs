// import * as THREE from 'three';
import MTLLoader from "three-mtl-loader";
import OBJLoader from "three-obj-loader";
// import materials from './models/yeezus.mtl';

export const createShoe = () => {
  const mtlLoader = new MTLLoader();
  let shoe;
  mtlLoader
    .setPath('./models/')
    .load('yeezus.mtl', function (materials) {
      materials.preload();
      materials.shininess = 0;
      new OBJLoader()
        .setMaterials(materials)
        .setPath('./models/')
        .load('yeezus.obj', function (object) {
          object.position.set(0, 1, 0);
          object.scale.set(0.1, 0.1, 0.1);
          object.rotation.z = 1;
          shoe = object;
          // scene.add(object);

        }, onProgress, onError);
    });
  return shoe;
};
// export const createShoe = () =>{
//   const loader = new OBJLoader();
//   loader.loadMtl('', 'your-materials-name', materials, someCallbackFunction);
//   return "";
// };
