/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkTS
 */

/**
 * Queue follows the principle of First In First Out (FIFO). 
 * It supports insertion of elements at the end and removal from the front of the queue. 
 * Queue is implemented based on the queue data structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * Queue follows the principle of First In First Out (FIFO). 
 * It supports insertion of elements at the end and removal from the front of the queue. 
 * Queue is implemented based on the queue data structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Queue follows the principle of First In First Out (FIFO). 
 * It supports insertion of elements at the end and removal from the front of the queue. 
 * Queue is implemented based on the queue data structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class Queue<T> {
  /**
   * A constructor used to create a Queue object.
   *
   * @throws { BusinessError } 10200012 - The Queue's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a Queue object.
   *
   * @throws { BusinessError } 10200012 - The Queue's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a Queue object.
   *
   * @throws { BusinessError } 10200012 - The Queue's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();
  /**
   * Gets the element number of the Queue.This is a number one higher than the highest index in the queue.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the Queue.This is a number one higher than the highest index in the queue.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the Queue.This is a number one higher than the highest index in the queue.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  length: number;

  /**
   * Gets the element number of the Queue.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  get length(): number;

  /**
   * Inserting specified element at the end of a queue if it is possible to do
   * so immediately without violating capacity restrictions.
   *
   * @param { T } element - element element to be appended to this queue
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserting specified element at the end of a queue if it is possible to do
   * so immediately without violating capacity restrictions.
   *
   * @param { T } element - element element to be appended to this queue
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserting specified element at the end of a queue if it is possible to do
   * so immediately without violating capacity restrictions.
   *
   * @param { T } element - element element to be appended to this queue
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  add(element: T): boolean;
  /**
   * Obtains the header element of a queue.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the header element of a queue.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the header element of a queue.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getFirst(): T;

  /**
   * Obtains the header element of a queue.
   *
   * @returns { T | undefined } the first element of the queue if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  getFirst(): T | undefined;

  /**
   * Retrieves and removes the head of this queue
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The pop method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Retrieves and removes the head of this queue
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The pop method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Retrieves and removes the head of this queue
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The pop method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  pop(): T;

  /**
   * Retrieves and removes the head of this queue
   *
   * @returns { T | undefined } the deleted element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  pop(): T | undefined;

  /**
   * Executes a provided function once for each value in the queue object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Executes a provided function once for each value in the queue object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Executes a provided function once for each value in the queue object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  forEach(callbackFn: (value: T, index?: number, Queue?: Queue<T>) => void, thisArg?: Object): void;

  /**
   * Executes a provided function once for each value in the queue object.
   *
   * @param { QueueForEachCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  forEach(callbackfn: QueueForEachCb<T>): void;

  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  $_iterator(): IterableIterator<T>;

}

/**
 * The type of Queue callback function.
 *
 * @typedef { function } QueueForEachCb
 * @param { T } value - The value of current element
 * @param { number } index - The key of current element
 * @param { Queue<T> } queue - The Queue instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type QueueForEachCb<T> = (value: T, index: number, queue: Queue<T>) => void

export default Queue;
