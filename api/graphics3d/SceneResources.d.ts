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
 * @file Defines 3D resource related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { Resource } from '../global/resource';
import { Vec2, Vec3, Vec4 } from './SceneTypes';
/*** endif */
/*** if arkts dynamic */
import { Vec2, Vec3, Vec4, Aabb } from './SceneTypes';
/*** endif */
import { Callback } from '../@ohos.base';

/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 static
 */
declare type ResourceStr = string | Resource;

/**
 * The enum of SceneResource type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export enum SceneResourceType {
  /**
   * The resource is an Unknown.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  UNKNOWN = 0,

  /**
   * The resource is a Node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  NODE = 1,

  /**
   * The resource is an Environment.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  ENVIRONMENT = 2,

  /**
   * The resource is a Material.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  MATERIAL = 3,

  /**
   * The resource is a Mesh.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  MESH = 4,

  /**
   * The resource is an Animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  ANIMATION = 5,

  /**
   * The resource is a Shader.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  SHADER = 6,

  /**
   * The resource is an Image.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  IMAGE = 7,

  /**
   * The resource is a mesh resource
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 20 static
   */
  MESH_RESOURCE = 8,
}

/**
 * Define scene resource extended by other 3d resource.
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface SceneResource {
  /**
   * Scene resource name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  name: string;

  /**
   * Scene resource type.
   *
   * @type { SceneResourceType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly resourceType: SceneResourceType;

  /**
   * Scene resource uri.
   *
   * @type { ?ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly uri?: ResourceStr;


  /**
   * Release scene resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  destroy(): void;
}

/**
 * Shader resource.
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Shader extends SceneResource {
  /**
   * Shader inputs.
   * 
   * @type { Record<string, double | Vec2 | Vec3 | Vec4 | Image> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>;
}

/**
 * The enum of material type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export enum MaterialType {
  /**
   * The material type is a Shader.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  SHADER = 1,
  
  /**
   * The material is a physically-based metallic roughness material.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  METALLIC_ROUGHNESS = 2,
}

/**
 * The enum of PBR material cull mode.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export enum CullMode {
  /**
   * Disable culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * Front face culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  FRONT = 1,

  /**
   * Back face culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  BACK = 2
}

/**
 * Blend interface.
 * 
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface Blend {
  /**
   * Control whether blending is enabled
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  enabled: boolean;
}

/**
 * Render sort Layer. Within a render slot a layer can define a sort layer order.
 * There are 0-63 values available (0 first, 63 last). Default id value is 32.
 * 1. Typical use case is to set render sort layer to objects which render with depth test without depth write.
 * 2. Typical use case is to always render character and/or camera object first to cull large parts of the view.
 * 3. Sort e.g. plane layers.
 * 
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface RenderSort {
  /**
   * Sort layer used sorting submeshes in rendering in render slots.
   * Valid values are 0 - 63.
   * 
   * @type { ?number }
   * @default 32 Default render sort layer id.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  renderSortLayer?: number;

  /**
   * Sort layer order to describe fine order within sort layer.
   * Valid values are 0 - 255.
   * 
   * @type { ?number }
   * @default 0 Default render sort layer order.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  renderSortLayerOrder?: number;
}

/**
 * Material resource.
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Material extends SceneResource {
  /**
   * Material resource type.
   *
   * @type { MaterialType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly materialType: MaterialType;
  
  /**
   * Defines if the material can receive shadows.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  shadowReceiver?: boolean;

  /**
   * Culling mode.
   * 
   * @type { ?CullMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  cullMode?: CullMode;

  /**
   * Control whether the blend is enabled
   * 
   * @type { ?Blend }
   * @default undefined, which means that blending is disabled.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  blend?: Blend;

  /**
   * Alpha cutoff value [0,1]. Enabled if < 1.
   * 
   * @type { ?number }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  alphaCutoff?: number;

  /**
   * Render sorting priority for layers.
   * 
   * @type { ?RenderSort }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  renderSort?: RenderSort;
}

/**
 * Material property interface.
 * 
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface MaterialProperty {
  /**
   * Texture to use. If undefined, factor defines the diffuse color.
   * 
   * @type { Image | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  image: Image | null;

  /**
   * Texture coefficient. Default is {1,1,1,1}, meaning no effect.
   * 
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  factor: Vec4;

  /**
   * Texture Sampler.
   * 
   * @type { ?Sampler }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  sampler?: Sampler;
}

/**
 * Physically-based metallic roughness material resource.
 * 
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface MetallicRoughnessMaterial extends Material {
  /**
   * Base color factor of PBR material.
   * Value of factor.xyzw defines rgba color.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  baseColor: MaterialProperty;

  /**
   * Normal factor of PBR material.
   * Value of factor.x defines normal scale.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  normal: MaterialProperty;

  /**
   * Metallic roughness material parameters.
   * Value of factor.y defines roughness, factor.z defines metallic and factor.a defines reflectance.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  material: MaterialProperty;

  /**
   * Ambient occlusion of PBR material.
   * Value of factor.x defines ambient occlusion factor.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  ambientOcclusion: MaterialProperty;

  /**
   * Emissive property of PBR material.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  emissive: MaterialProperty;

  /**
   * Clearcoat intensity.
   * Value of factor.x defines clearcoat layer intensity.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  clearCoat: MaterialProperty;

  /**
   * Clearcoat roughness.
   * Value of factor.y defines clearcoat layer roughness.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  clearCoatRoughness: MaterialProperty;
  
  /**
   * Clearcoat normal.
   * Value of factor.xyz defines RGB clearcoat normal scale.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  clearCoatNormal: MaterialProperty;

  /**
   * Sheen color of PBR material.
   * Value of factor.xyz defines RGB sheen color,
   * Value of factor.w defines sheen roughness.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  sheen: MaterialProperty;

  /**
   * Specular color of PBR material.
   * Value of factor.xyz defines RGB specular color,
   * Value of factor.w defines specular intensity.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  specular: MaterialProperty;
}

/**
 * Shader material resource.
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface ShaderMaterial extends Material {
  /**
   * Color shader of material.
   *
   * @type { ?Shader }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  colorShader?: Shader;
}

/**
 * Sampler filter Mode
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export enum SamplerFilter {
  /**
   * Use nearest filtering
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  NEAREST = 0,
  /**
   * Use linear filtering
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  LINEAR = 1,
}

/**
 * Addressing mode for Sampler
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export enum SamplerAddressMode {
  /**
   * Repeat
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  REPEAT = 0,

  /**
   * Mirrored repeat
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  MIRRORED_REPEAT = 1,

  /**
   * clamp to edge
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  CLAMP_TO_EDGE = 2,
}

/**
 * Sampler interface
 * 
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface Sampler {
  /**
   * Mag filter
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  magFilter?: SamplerFilter;

  /**
   * Min filter
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  minFilter?: SamplerFilter;

  /**
   * Mip-map mode
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  mipMapMode?: SamplerFilter;

  /**
   * U addressing mode
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  addressModeU?: SamplerAddressMode;

  /**
   * V addressing mode
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  addressModeV?: SamplerAddressMode;
}

/**
 * Sub mesh resource.
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface SubMesh {
  /**
   * The name of the sub mesh.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  name: string;

  /**
   * The material of the sub mesh.
   *
   * @type { Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  material: Material;

  /**
   * The axis aligned bounding box of the sub mesh.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly aabb: Aabb;
}

/**
 * Defines Morpher interface for specifying morph targets for Node's geometry.
 * 
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 */
export interface Morpher {
  /**
   * Morph target names and weights
   * 
   * @type { Record<string, number> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  readonly targets: Record<string, number>;
}

/**
 * Mesh resource.
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Mesh extends SceneResource {
  /**
   * The sub meshes of the mesh.
   *
   * @type { SubMesh[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly subMeshes: SubMesh[];

  /**
   * The axis aligned bounding box of the mesh.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly aabb: Aabb;

  /**
   * The material override sub mesh's material.
   *
   * @type { ?Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  materialOverride?: Material;
}

/**
 * Mesh resource.
 * 
 * 
 * @extends SceneResource
 * @interface MeshResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 */
export interface MeshResource extends SceneResource {
}

/**
 * Animation resource.
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface Animation extends SceneResource {
  /**
   * The animation is enabled.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  enabled: boolean;

  /**
   * Animation speed factor
   * A negative value runs the animation in reverse using the given speed factor
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   */
  speed?: number;

  /**
   * The duration of the animation.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly duration: double;

  /**
   * Whether the animation is running.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  readonly running: boolean;

  /**
   * The progress of the animation between 0~1.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  readonly progress: double;

  /**
   * Register a callback when animation finished.
   *
   * @param { Callback<void> } callback - the callback invoked when animation finished
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  onFinished(callback: Callback<void>): void;

  /**
   * Register a callback when animation started.
   *
   * @param { Callback<void> } callback - the callback invoked when animation started
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  onStarted(callback: Callback<void>): void;

  /**
   * Pause the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  pause(): void;

  /**
   * Restart the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  restart(): void;

  /**
   * Seek the animation to the position.
   *
   * @param { double } position - the position seek between 0~1
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  seek(position: double): void;

  /**
   * Start the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  start(): void;

  /**
   * Stop the animation and seek the position to the beginning.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  stop(): void;

  /**
   * Finish the animation and seek the position to the end.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  finish(): void;
}

/**
 * The enum of environment background type.
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export enum EnvironmentBackgroundType {
  /**
   * The background is none.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  BACKGROUND_NONE = 0,

  /**
   * The background is image.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  BACKGROUND_IMAGE = 1,

  /**
   * The background is cubemap.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  BACKGROUND_CUBEMAP = 2,

  /**
   * The background is equirectangular.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  BACKGROUND_EQUIRECTANGULAR = 3,
}

/**
 * Environment resource.
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 20 static
 */
export interface Environment extends SceneResource {
  /**
   * The background type of the environment.
   *
   * @type { EnvironmentBackgroundType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  backgroundType: EnvironmentBackgroundType;

  /**
   * The indirect diffuse factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  indirectDiffuseFactor: Vec4;

  /**
   * The indirect specular factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 20 static
   */
  indirectSpecularFactor: Vec4;

  /**
   * The environment map factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  environmentMapFactor: Vec4;

  /**
   * The environment image of the environment.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  environmentImage?: Image | null;

  /**
   * The radiance image of the environment.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  radianceImage?: Image | null;

  /**
   * The irradiance coefficients (array of nine Vec3).
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  irradianceCoefficients?: Vec3[];
}

/**
 * Image resource.
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 */
export interface Image extends SceneResource {
  /**
   * The width of the image.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly width: int;

  /**
   * The height of the image.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   */
  readonly height: int;
}
