/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Defines 3D node related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { SceneResource } from './SceneResources';
/*** endif */
/*** if arkts dynamic */
import { SceneResource, Mesh, Morpher, Effect } from './SceneResources';
import { RaycastParameters, RaycastResult } from './Scene';
import { RenderingPipelineType } from './SceneTypes';
/*** endif */
import { Position3, Quaternion, Scale3, Color, Vec2, Vec3 } from './SceneTypes';
import { PostProcessSettings } from './ScenePostProcessSettings';

/**
 * Defines the layer mask of the node.
 *
 * @interface LayerMask
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface LayerMask {
  /**
   * Get whether layer mask is enabled.
   *
   * @param { int } index - the layer mask
   * @returns { boolean } whether layer mask is enabled 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  getEnabled(index: int): boolean;

  /**
   * Set whether the layer mask is enabled.
   *
   * @param { int } index - the layer mask
   * @param { boolean } enabled - whether layer mask is enabled
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  setEnabled(index: int, enabled: boolean): void;
}

/**
 * The enum of node type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export enum NodeType {
  /**
   * The node is an empty node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  NODE = 1,

  /**
   * The node is a geometry node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  GEOMETRY = 2,

  /**
   * The node is a camera node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  CAMERA = 3,

  /**
   * The node is a light node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  LIGHT = 4,

  /** 
   * The node is of custom type.
   * Usually this means that the node is of a type defined in an extension plugin.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   */
  CUSTOM = 255
}

/**
 * Defines a scene object container.
 *
 * @interface Container
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Container<T> {
  /**
   * Append a item to the container.
   *
   * @param { T } item - the item append to the end of container
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  append(item: T): void;

  /**
   * Insert a item.
   *
   * @param { T } item - the item insert to the container
   * @param { T | null } sibling - insert after this item, insert to the head if sibling is null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  insertAfter(item: T, sibling: T | null): void;

  /**
   * Remove a item from Container's children.
   *
   * @param { T } item - the item to be removed
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  remove(item: T): void;

  /**
   * Returns a child at given index from this Container's child list.
   *
   * @param { int } index - the index of the child to return
   * @returns { T | null } return the item specified by the index
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  get(index: int): T | null;

  /**
   * Clear all children.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  clear(): void;

  /**
   * Returns the number of items in the container.
   *
   * @returns { int } the number of the container
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  count(): int;
}

/**
 * Defines Node interface.
 *
 * @extends SceneResource
 * @interface Node
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface Node extends SceneResource {
  /**
   * position of the node.
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  position: Position3;

  /**
   * Rotation of the node.
   *
   * @type { Quaternion }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  rotation: Quaternion;

  /**
   * Scale of the node.
   *
   * @type { Scale3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  scale: Scale3;

  /**
   * Visibility flag for the node.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  visible: boolean;

  /**
   * Type of the node.
   *
   * @type { NodeType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  readonly nodeType: NodeType;

  /**
   * Layer mask of the node.
   *
   * @type { LayerMask }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly layerMask: LayerMask;

  /**
   * Path of the node.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly path: string;

  /**
   * Parent of the node.
   *
   * @type { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly parent: Node | null;

  /**
   * Get node by path.
   *
   * @param { string } path - the path of the node queried
   * @returns { Node | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  getNodeByPath(path: string): Node | null;

  /**
   * Children of the node.
   *
   * @type { Container<Node> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly children: Container<Node>
}

/**
 * Defines Geometry interface.
 *
 * @extends Node
 * @interface Geometry
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Geometry extends Node {
  /**
   * Mesh of the node.
   *
   * @type { Mesh }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly mesh: Mesh;
  
  /**
   * Morpher target definition.
   * 
   * @type { ?Morpher }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  readonly morpher?: Morpher;
}

/**
 * The enum of light type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export enum LightType {
  /**
   * Directional light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  DIRECTIONAL = 1,

  /**
   * Spot light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  SPOT = 2,
}

/**
 * Defines light interface.
 *
 * @extends Node
 * @interface Light
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface Light extends Node {
  /**
   * The type of the light.
   *
   * @type { LightType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly lightType: LightType;

  /**
   * The color of the light.
   *
   * @type { Color }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  color: Color;

  /**
   * The intensity of the light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  intensity: double;

  /**
   * Whether casting shadows.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  shadowEnabled: boolean;

  /**
   * Whether enable the light.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  enabled: boolean;
}

/**
 * Defines spot light.
 *
 * @extends Light
 * @interface SpotLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface SpotLight extends Light {
}

/**
 * Defines directional light.
 *
 * @extends Light
 * @interface DirectionalLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface DirectionalLight extends Light {
}

/**
 * Defines camera.
 *
 * @extends Node
 * @interface Camera
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface Camera extends Node {
  /**
   * Field of view of the camera.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  fov: double;

  /**
   * Near plane of the directional light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  nearPlane: double;

  /**
   * Far plane of the directional light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  farPlane: double;

  /**
   * Whether enabled the camera.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  enabled: boolean;

  /**
   * The post processing settings of the camera.
   *
   * @type { PostProcessSettings | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  postProcess: PostProcessSettings | null;

  /**
   * The effects to apply on the camera output.
   * 
   * @type { Container<Effect> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   */
  readonly effects: Container<Effect>;

  /**
   * Background clear color (environment background overrides this color,
   * BACKGROUND_NONE is needed for this to actually take effect).
   *
   * @type { Color | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  clearColor: Color | null;

  /**
   * Controls the rendering pipeline. 
   * Note that if FORWARD_LIGHTWEIGHT pipeline is selected, some features will be unavailable.
   *
   * @type { ?RenderingPipelineType }
   * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   */
  renderingPipeline?: RenderingPipelineType;

  /**
   * Casts a ray to a position on the screen and lists what the ray hits.
   * @param { Vec2 } viewPosition - Position to cast in the normalized device coordinates.
   * @param { RaycastParameters } params - Options used to execute the ray cast.
   * @returns { Promise<RaycastResult[]> } - Promise used to return an array of hit results, sorted from the closest to the farthest. The array may be empty.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>;
}
