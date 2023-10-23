import { Mesh, MeshNormalMaterial, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Model from "./assets/ground.glb?url";

export default class Ground extends Mesh {
  async load() {
    const { scene } = await new GLTFLoader().loadAsync(Model);
    scene.traverse((object: Object3D | Mesh) => {
      if ("isMesh" in object) {
        object.material = new MeshNormalMaterial();
      }
    });
    this.add(scene);
  }
}
