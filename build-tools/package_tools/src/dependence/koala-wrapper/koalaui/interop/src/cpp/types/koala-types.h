/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

#ifndef _KOALA_TYPES_H
#define _KOALA_TYPES_H

#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <cmath>

struct KStringPtrImpl {
    KStringPtrImpl(const char* str) : _value(nullptr), _owned(true) {
        int len = str ? strlen(str) : 0;
        assign(str, len);
    }
    KStringPtrImpl(const char* str, int len, bool owned) : _value(nullptr), _owned(owned) {
        assign(str, len);
    }
    KStringPtrImpl() : _value(nullptr), _length(0), _owned(true) {}

    KStringPtrImpl(const KStringPtrImpl& other) = delete;
    KStringPtrImpl& operator=(const KStringPtrImpl& other) = delete;

    KStringPtrImpl(KStringPtrImpl&& other) {
        this->_value = other.release();
        this->_owned = other._owned;
        other._owned = false;
        this->_length = other._length;
    }

    ~KStringPtrImpl() { if (_value && _owned) free(_value); }

    bool isNull() const { return _value == nullptr; }
    const char* c_str() const { return _value; }
    char* data() const { return _value; }
    int length() const { return _length; }

    void resize(int size) {
        _length = size;
        if (!_owned) return;
        // Ignore old content.
        if (_value && _owned) free(_value);
        _value = reinterpret_cast<char*>(malloc(size + 1));
        _value[size] = 0;
    }

    void assign(const char* data) {
        assign(data, data ? strlen(data) : 0);
    }

    void assign(const char* data, int len) {
        if (_value && _owned) free(_value);
        if (data) {
          if (_owned) {
            _value = reinterpret_cast<char*>(malloc(len + 1));
            memcpy(_value, data, len);
            _value[len] = 0;
          } else {
            _value = const_cast<char*>(data);
          }
        } else {
            _value = nullptr;
        }
        _length = len;
    }

  protected:
    char* release() {
        char* result = this->_value;
        this->_value = nullptr;
        return result;
    }
  private:
    char* _value;
    int _length;
    bool _owned;
};

struct KInteropNumber {
    int8_t tag;
    union {
        int32_t i32;
        float f32;
    };
    static inline KInteropNumber fromDouble(double value) {
      KInteropNumber result = { 0 };
      // TODO: boundary check
      if (value == std::floor(value)) {
        result.tag = 102; // ARK_TAG_INT32
        result.i32 = (int)value;
      } else {
        result.tag = 103; // ARK_TAG_FLOAT32
        result.f32 = (float)value;
      }
      return result;
    }
    inline double asDouble() {
      if (tag == 102) // ARK_TAG_INT32
        return (double)i32;
      else
        return (double)f32;
    }
};

typedef int8_t KBoolean;
typedef uint8_t KByte;
typedef int16_t KChar;
typedef int16_t KShort;
typedef uint16_t KUShort;
typedef int32_t KInt;
typedef uint32_t KUInt;
typedef float KFloat;
typedef int64_t KLong;
typedef uint64_t KULong;
typedef double KDouble;
typedef void* KNativePointer;
typedef KStringPtrImpl KStringPtr;
typedef float* KFloatArray;
typedef const uint8_t* KStringArray;
typedef void** KNativePointerArray;

struct KInteropBuffer {
  KLong length;
  KNativePointer data;

  KInt resourceId;
  void (*dispose)(KInt /* resourceId for now */);
};

struct KInteropReturnBuffer {
  KInt length;
  KNativePointer data;
  void (*dispose)(KNativePointer data, KInt length);
};

struct KLength {
    KByte type;
    KFloat value;
    KInt unit;
    KInt resource;
};

inline void parseKLength(const KStringPtrImpl &string, KLength *result)
{
  char *suffixPtr = nullptr;

  float value = std::strtof(string.c_str(), &suffixPtr);

  if (!suffixPtr || suffixPtr == string.c_str())
  {
    // not a numeric value
    result->unit = -1;
    return;
  }
  result->value = value;
  if (suffixPtr[0] == '\0' || (suffixPtr[0] == 'v' && suffixPtr[1] == 'p'))
  {
    result->unit = 1;
  }
  else if (suffixPtr[0] == '%')
  {
    result->unit = 3;
  }
  else if (suffixPtr[0] == 'p' && suffixPtr[1] == 'x')
  {
    result->unit = 0;
  }
  else if (suffixPtr[0] == 'l' && suffixPtr[1] == 'p' && suffixPtr[2] == 'x')
  {
    result->unit = 4;
  }
  else if (suffixPtr[0] == 'f' && suffixPtr[1] == 'p')
  {
    result->unit = 2;
  }
  else
  {
    result->unit = -1;
  }
}

struct _KVMContext;
typedef _KVMContext *KVMContext;

// BEWARE: this MUST never be used in user code, only in very rare service code.
struct _KVMObject;
typedef _KVMObject *KVMObjectHandle;

typedef struct KVMDeferred {
    void* handler;
    void* context;
    void (*resolve)(KVMDeferred* thiz, uint8_t* data, int32_t length);
    void (*reject)(KVMDeferred* thiz, const char* message);
} KVMDeferred;

template <class T> T* ptr(KNativePointer ptr) {
    return reinterpret_cast<T*>(ptr);
}

template <class T> T& ref(KNativePointer ptr) {
    return *reinterpret_cast<T*>(ptr);
}

inline KNativePointer nativePtr(void* pointer) {
    return reinterpret_cast<KNativePointer>(pointer);
}

template <class T> KNativePointer fnPtr(void (*pointer)(T*)) {
    return reinterpret_cast<KNativePointer>(pointer);
}

#endif /* _KOALA_TYPES_H */
