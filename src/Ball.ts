import {
  Mesh,
  Group,
  MeshBasicMaterial,
  Object3DEventMap,
  CircleGeometry,
} from "three";
import { FIXED_DELTATIME } from "./constants.ts";
import { Ref } from "./types";

export default class Ball extends Group {
  #size: number;
  #strokeWidth: number;
  #fill: Mesh<CircleGeometry, MeshBasicMaterial, Object3DEventMap>;
  #stroke: Mesh<CircleGeometry, MeshBasicMaterial, Object3DEventMap>;
  #updates: (() => void)[] = [];
  #time = 0;

  constructor() {
    super();
    const segments = 50;
    const size = 1;
    const strokeWidth = size * 0.1;

    const fill = new Mesh(
      new CircleGeometry(size, segments),
      new MeshBasicMaterial({ color: 0xff0000 })
    );
    fill.name = "fill"

    const stroke = new Mesh(
      new CircleGeometry(size, segments),
      new MeshBasicMaterial({ color: 0xff0000 })
    );
    stroke.name = "stroke"

    stroke.position.z = 0;
    fill.position.z = 1;

    this.add(stroke, fill);

    this.#fill = fill;
    this.#stroke = stroke;
    this.#size = size;
    this.#strokeWidth = strokeWidth;
  }

  get strokeColor() {
    return this.#stroke.material.color;
  }

  get fillColor() {
    return this.#fill.material.color;
  }

  get size() {
    return this.#size;
  }

  set size(v) {
    this.#size = v;
    this.#fill.scale.setScalar(v);
  }

  get strokeWidth() {
    return this.#strokeWidth;
  }

  set strokeWidth(v) {
    this.#strokeWidth = v;
    this.#stroke.scale.setScalar(this.#size + this.#size * v);
  }

  getUpdates({
    deltaTime,
    width,
    props,
    amplitude,
    offset
  }: {
    deltaTime: number;
    width: number;
    height: number;
    props: { range: Ref<number> };
    amplitude: number;
    offset: number;
  }) {
    this.#updates.length = 0;

    const updateCount = Math.ceil(deltaTime / FIXED_DELTATIME);

    while (this.#updates.length < updateCount) {
      this.#updates.push(() => {
        const dt = FIXED_DELTATIME * 0.05;
        this.#time += dt;
        this.position.y = this.size * 2.75;
        this.position.y +=
          Math.abs(Math.cos(this.#time * 0.05)) *
          (10 + 75 * Math.abs(Math.sin(this.#time * 0.001)));
        this.position.y +=
          Math.abs(Math.sin(offset + this.#time * amplitude)) * props.range.value;
        this.position.x += dt + Math.cos(this.#time * 0.01) * 0.25;

        if (this.position.x > width * 0.5) {
          this.position.x = width * -0.5;
        }
      });
    }

    return this.#updates;
  }
}
