import {
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderTarget,
  WebGLRenderer,
} from "three";
import Cube from "./src/Cube";
import Ball from "./src/Ball.ts";

interface InitProps {
  scene: Scene;
  width: number;
  height: number;
  pixelRatio: number;
}

interface UpdateProps extends InitProps {
  renderer: WebGLRenderer;
  time: number;
  deltaTime: number;
}

interface ResizeProps extends InitProps {}

let camera: OrthographicCamera;
let cube: Cube;
let ball: Ball;
let plane: Mesh<PlaneGeometry, MeshBasicMaterial>;
let rt0: WebGLRenderTarget;
let rt1: WebGLRenderTarget;
let amplitude = 0.001;
let offset = 0;

export let props = {
  fillColor: {
    value: "#ffffff",
    type: "color",
  },
  strokeColor: {
    value: "#252525",
    type: "color",
  },
  range: {
    value: 250,
  },
};

export let init = async ({ scene, width, height }: InitProps) => {
  camera = new OrthographicCamera(1, 1, 1, 1, 1, 1000);
  camera.position.z = 1;

  rt0 = new WebGLRenderTarget(width, height);
  rt1 = new WebGLRenderTarget(width, height);

  const Z = -100;

  cube = new Cube();
  cube.position.z = Z;
  cube.position.y = height * -0.5;
  cube.size = 100;
  cube.strokeWidth = 0.05;
  cube.traverse((o) => o.layers.set(1));
  scene.add(cube);

  plane = new Mesh(
    new PlaneGeometry(width, height),
    new MeshBasicMaterial({
      map: rt0.texture,
      transparent: true,
      opacity: 0.1,
      premultipliedAlpha: false,
      depthTest: false,
      // blendEquation: AddEquation
    })
  );
  plane.position.z = Z;
  plane.layers.set(2);
  scene.add(plane);

  ball = new Ball();
  ball.position.z = Z + 1;
  ball.size = 25;
  ball.strokeWidth = 0.05;
  ball.traverse((o) => o.layers.set(3));
  scene.add(ball);
};

export let update = ({
  renderer,
  scene,
  deltaTime,
  width,
  height,
}: UpdateProps) => {
  renderer.autoClear = false;

  cube.fillColor.setStyle(props.fillColor.value);
  cube.strokeColor.setStyle(props.strokeColor.value);

  if (!cube.onClear) {
    cube.onClear = () => {
      renderer.setRenderTarget(rt0);
      camera.layers.set(1);
      renderer.clear();
      renderer.render(scene, camera);
      amplitude = 0.001 + Math.random() * 0.001;
      offset = Math.random() * Math.PI;
    };
  }

  cube
    .getUpdates({
      deltaTime,
      width,
      height,
      props,
      amplitude,
      offset,
    })
    .forEach((update) => {
      update();
    });

  renderer.setRenderTarget(null);
  ball
    .getUpdates({
      deltaTime,
      width,
      height,
      props,
      amplitude,
      offset,
    })
    .forEach((update) => {
      update();
    });

  renderer.setRenderTarget(rt0);
  camera.layers.set(1);
  renderer.clearDepth();
  renderer.render(scene, camera);

  renderer.setRenderTarget(rt1);
  camera.layers.set(3);
  renderer.clear();
  renderer.setClearAlpha(0.1);
  renderer.render(scene, camera);

  renderer.setRenderTarget(null);
  camera.layers.set(2);

  plane.material.map = rt0.texture;
  plane.material.opacity = 1;
  renderer.render(scene, camera);

  plane.material.map = rt1.texture;
  // plane.material.opacity = 0.01
  plane.material.opacity = 1;
  renderer.render(scene, camera);

  // camera.layers.set(3);
  // renderer.setClearAlpha(1)
  // renderer.clearColor();
  // renderer.render(scene, camera);
};

export let resize = ({ width, height }: ResizeProps) => {
  camera.left = -width * 0.5;
  camera.right = width * 0.5;
  camera.top = height * 0.5;
  camera.bottom = -height * 0.5;

  camera.updateProjectionMatrix();
};

export let rendering = "three";
