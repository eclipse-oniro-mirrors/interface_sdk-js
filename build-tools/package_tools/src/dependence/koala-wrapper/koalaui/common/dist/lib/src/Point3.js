"use strict";
/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3 = void 0;
class Point3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    subtract(value) {
        return new Point3(this.x - value.x, this.y - value.y, this.z - value.z);
    }
    cross(value) {
        return new Point3(this.y * value.z - this.z * value.y, this.z * value.x - this.x * value.z, this.x * value.y - this.y * value.x);
    }
    normalize() {
        const mag = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        const tolerance = (1.0 / (1 << 12));
        if (mag < tolerance) {
            // This semicolon after return this is a workaround for ArkTS bug
            return this;
        }
        return new Point3(this.x / mag, this.y / mag, this.z / mag);
    }
}
exports.Point3 = Point3;
//# sourceMappingURL=Point3.js.map