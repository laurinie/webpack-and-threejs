import { MTLLoader, OBJLoader, BoxGeometry, MeshLambertMaterial, Mesh } from 'three-full';

export const createShoe = (scene) => {
  var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
  };
  var onError = function () { };
  let shoe;
  return  new MTLLoader()
    .setPath('./')
    .load("yeezus.mtl",  function (materials) {
      materials.preload();
      materials.shininess = 0;
      return  new OBJLoader()
        .setMaterials(materials)
        .setPath('./')
        .load("yeezus.obj", function (object) {
          object.position.set(0, 1, 0);
          object.scale.set(2, 2, 2);
          object.rotation.x = 30;
          shoe = object;
          scene.add(object);
        return shoe;

        }, onProgress, onError);
    });

};

export const createBox = () => {
  const geometry = new BoxGeometry(10, 20, 30);
  const material = new MeshLambertMaterial({ color: 0x0000ab });
  const box = new Mesh(geometry, material);
  box.position.set(0,20,0);
  return box;
};
