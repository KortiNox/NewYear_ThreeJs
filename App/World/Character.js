import * as THREE from 'three';
import App from '../App';
import assetStore from '../Utils/AssetStore';

export default class Character {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.assetStore = assetStore.getState();
    this.avatar = this.assetStore.loadedAssets.avatar;

    this.instantiateCharacter();

    //this.physics = this.app.world.physics;
  }

  instantiateCharacter() {
    //create character and add to scene
    const geometry = new THREE.BoxGeometry(0.6, 2, 0.6);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      wireframe: true,
      visible: false,
    });
    this.instance = new THREE.Mesh(geometry, material);
    this.instance.position.set(0, 4, 0);
    this.scene.add(this.instance);

    const avatar = this.avatar.scene;
    avatar.rotation.y = Math.PI;
    avatar.position.y = -1;
    // avatar.scale.setScalar(3);
    this.instance.add(avatar);
  }
}
