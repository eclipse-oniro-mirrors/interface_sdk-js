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
 * ArrayList is a linear data structure that is implemented based on arrays. 
 * ArrayList can dynamically adjust the capacity based on project requirements. It increases the capacity by 50% each time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * ArrayList is a linear data structure that is implemented based on arrays. 
 * ArrayList can dynamically adjust the capacity based on project requirements. It increases the capacity by 50% each time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * ArrayList is a linear data structure that is implemented based on arrays. 
 * ArrayList can dynamically adjust the capacity based on project requirements. It increases the capacity by 50% each time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ArrayList<T> {
  /**
   * A constructor used to create a ArrayList object.
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a ArrayList object.
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create an ArrayList instance.
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();
  /**
   * Gets the element number of the ArrayList.This is a number one higher than the highest index in the arraylist.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the ArrayList.This is a number one higher than the highest index in the arraylist.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Number of elements in an array list.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  length: number;
  /**
   * Gets the number of elements in an array list.
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
   * Appends the specified element to the end of this arraylist.
   *
   * @param { T } element - element element to be appended to this arraylist
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Appends the specified element to the end of this arraylist.
   *
   * @param { T } element - element element to be appended to this arraylist
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Adds an element at the end of this container.
   *
   * @param { T } element - Target element.
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  add(element: T): boolean;
  /**
   * Inserts the specified element at the specified position in this
   * arraylist. Shifts the element currently at that position (if any) and
   * any subsequent elements to the right (adds one to their index).
   *
   * @param { T } element - element element element to be inserted
   * @param { number } index - index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserts the specified element at the specified position in this
   * arraylist. Shifts the element currently at that position (if any) and
   * any subsequent elements to the right (adds one to their index).
   *
   * @param { T } element - element element element to be inserted
   * @param { number } index - index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserts an element at the specified position in this container.
   *
   * @param { T } element - Target element.
   * @param { number } index - Index of the position where the element is to be inserted.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  insert(element: T, index: number): void;
  /**
   * Check if arraylist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if arraylist contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Check if arraylist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if arraylist contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this container has the specified element.
   *
   * @param { T } element - Target element.
   * @returns { boolean } the boolean type,if arraylist contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  has(element: T): boolean;
  /**
   * Returns the index of the first occurrence of the specified element
   * in this arraylist, or -1 if this arraylist does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the index of the first occurrence of the specified element
   * in this arraylist, or -1 if this arraylist does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the index of the first occurrence of the specified element in this container.
   *
   * @param { T } element - Target element.
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getIndexOf(element: T): number;
  /**
   * Find the corresponding element according to the index,
   * delete the element, and move the index of all elements to the right of the element forward by one.
   *
   * @param { number } index - index index the index in the arraylist
   * @returns { T } the T type ,returns undefined if arraylist is empty,If the index is
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Find the corresponding element according to the index,
   * delete the element, and move the index of all elements to the right of the element forward by one.
   *
   * @param { number } index - index index the index in the arraylist
   * @returns { T } the T type ,returns undefined if arraylist is empty,If the index is
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes an element with the specified position from this container.
   *
   * @param { number } index - Position index of the target element.
   * @returns { T } the T type ,returns undefined if arraylist is empty,If the index is
   * @throws { BusinessError } 10200001 - The value of "index" is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  removeByIndex(index: number): T;
  /**
   * Removes the first occurrence of the specified element from this arraylist,
   * if it is present.  If the arraylist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes the first occurrence of the specified element from this arraylist,
   * if it is present.  If the arraylist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes the first occurrence of the specified element from this container.
   *
   * @param { T } element - Target element.
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  remove(element: T): boolean;
  /**
   * Returns in the index of the last occurrence of the specified element in this arraylist ,
   * or -1 if the arraylist does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns in the index of the last occurrence of the specified element in this arraylist ,
   * or -1 if the arraylist does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the index of the last occurrence of the specified element in this container.
   *
   * @param { T } element - Target element.
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getLastIndexOf(element: T): number;
  /**
   * Removes from this arraylist all of the elements whose index is between fromIndex,inclusive,and toIndex ,exclusive.
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes from this arraylist all of the elements whose index is between fromIndex,inclusive,and toIndex ,exclusive.
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes from this container all of the elements within a range, including the element at the start position but
   * not that at the end position.
   *
   * @param { number } fromIndex - Index of the start position.
   * @param { number } toIndex - Index of the end position.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  removeByRange(fromIndex: number, toIndex: number): void;
  /**
   * Replaces each element of this arraylist with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Replaces each element of this arraylist with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Replaces all elements in this container with new elements, and returns the new ones.
   *
   * @param { function } callbackFn - Callback invoked for the replacement.
   * @param { Object } [thisArg] - Value of this to use when callbackFn is invoked. The default value is this instance.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void;

  /**
   * Replaces all elements in this container with new elements, and returns the new ones.
   *
   * @param { ArrayListCbFn1<T> } callbackFn - Callback invoked for the replacement.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  replaceAllElements(callbackFn: ArrayListCbFn1<T>): void;

  /**
   * Executes a provided function once for each value in the arraylist object.
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
   * Executes a provided function once for each value in the arraylist object.
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
   * Executes a provided function once for each value in the arraylist object.
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
  forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void;

  /**
   * Iterates over elements in a generic ArrayList and executes a callback function for each element.
   *
   * @param { ArrayListCbFn<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  forEach(callbackFn: ArrayListCbFn<T>): void;

  /**
   * Sorts this arraylist according to the order induced by the specified comparator,without comparator this parameter,
   * it will default to ASCII sorting
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) A function that accepts up to two arguments.Specifies the sort order.
   * Must be a function,return number type,If it returns firstValue minus secondValue, it returns an arraylist
   * sorted in ascending order;If it returns secondValue minus firstValue, it returns an arraylist sorted in descending order;
   * If this parameter is empty, it will default to ASCII sorting
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Sorts this arraylist according to the order induced by the specified comparator,without comparator this parameter,
   * it will default to ASCII sorting
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) A function that accepts up to two arguments.Specifies the sort order.
   * Must be a function,return number type,If it returns firstValue minus secondValue, it returns an arraylist
   * sorted in ascending order;If it returns secondValue minus firstValue, it returns an arraylist sorted in descending order;
   * If this parameter is empty, it will default to ASCII sorting
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Sorts elements in this container.
   *
   * @param { function } [comparator] - Callback invoked for sorting. The default value is the callback function for
   * sorting elements in ascending order.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  sort(comparator?: (firstValue: T, secondValue: T) => number): void;
  /**
   * Returns a view of the portion of this arraylist between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { ArrayList<T> }
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a view of the portion of this arraylist between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { ArrayList<T> }
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains elements within a range in this container, including the element at the start position but not that at the
   * end position, and returns these elements as a new ArrayList instance.
   *
   * @param { number } fromIndex - Index of the start position.
   * @param { number } toIndex - Index of the end position.
   * @returns { ArrayList<T> }
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  subArrayList(fromIndex: number, toIndex: number): ArrayList<T>;
  /**
   * Removes all of the elements from this arraylist.The arraylist will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes all of the elements from this arraylist.The arraylist will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Clears this container and sets its length to 0.
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clear(): void;
  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { ArrayList<T> } this arraylist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { ArrayList<T> } this arraylist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Clones this container and returns a copy. The modification to the copy does not affect the original instance.
   *
   * @returns { ArrayList<T> } this arraylist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clone(): ArrayList<T>;
  /**
   * returns the capacity of this arraylist
   *
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns the capacity of this arraylist
   *
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the capacity of this container.
   *
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCapacity(): number;
  /**
   * convert arraylist to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * convert arraylist to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Converts this container into an array.
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  convertToArray(): Array<T>;
  /**
   * Determine whether arraylist is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Determine whether arraylist is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this container is empty (contains no element).
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isEmpty(): boolean;
  /**
   * Returns the element at the given index.
   * 
   * @param { number } index - Index. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { T } The element in the arraylist matching the given index. 
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  [index: number]: T;

  /**
   * Returns the item at that index.
   * 
   * @param { number } index - The zero-based index of the desired code unit.
   * @returns { T } The element in the arrayList matching the given index.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  $_get(index: number): T;

  /**
   * Set the value of item at that index.
   *
   * @param { number } index - The index of the element to set.
   * @param { T } value - The value to set at the specified index.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  $_set(index: number, value: T): void;

  /**
   * If the newCapacity provided by the user is greater than or equal to length,
   * change the capacity of the arraylist to newCapacity, otherwise the capacity will not be changed
   *
   * @param { number } newCapacity - newCapacity newCapacity
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * If the newCapacity provided by the user is greater than or equal to length,
   * change the capacity of the arraylist to newCapacity, otherwise the capacity will not be changed
   *
   * @param { number } newCapacity - newCapacity newCapacity
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Increases the capacity of this container.
   *
   * @param { number } newCapacity - New capacity.
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  increaseCapacityTo(newCapacity: number): void;
  /**
   * Limit the capacity to the current length
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Limit the capacity to the current length
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Releases the reserved space in this container by adjusting the container capacity to the actual number of elements
   * in this container.
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  trimToCurrentLength(): void;
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
   * Obtains an iterator, each item of which is a JavaScript object.
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
   * Obtains an iterator, each item of which is a JavaScript object.
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
   * The type of ArrayList callback function.
   *
   * @typedef { function } ArrayListCbFn
   * @param { T } value - The current element being processed
   * @param { number } index - The index of the current element
   * @param { ArrayList<T> } arrlist - The ArrayList instance being traversed
   * @returns { void } This callback does not return a value
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  type ArrayListCbFn<T> =  (value: T, index: number, arrlist: ArrayList<T>) => void;

  /**
   * The type of ArrayList callback function.
   *
   * @typedef { function } ArrayListCbFn
   * @param { T } value - The current element being processed
   * @param { number } [index] - The index of the current element
   * @param { ArrayList<T> } [arrlist] - The ArrayList instance being traversed
   * @returns { T } This callback does not return a value
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  type ArrayListCbFn1<T> =  (value: T, index?: number, arrlist?: ArrayList<T>) => T;  

export default ArrayList;
