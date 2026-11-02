/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @file File Management
 * @kit CoreFileKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * This module is the core module of Core File Kit. It provides APIs for basic file operations, such as creating,
 * opening, reading, writing, copying, moving, deleting, and querying files and directories in the application sandbox.
 *
 * This module provides multiple file access modes. You can select a mode based on your specific requirements:
 *
 * Based on the file descriptor (FD): You can obtain a <b>File</b> object using the <b>open</b> API and then read data
 * from the file or write data to the file using the <b>read</b> or <b>write</b> API. This mode is suitable for common
 * file read/write scenarios.
 * Based on the stream: You can create a <b>Stream</b> object using <b>createStream</b> or <b>fdopenStream</b>, or
 * create a <b>ReadStream</b> or <b>WriteStream</b> object using <b>createReadStream</b> or <b>createWriteStream</b>.
 * This mode is suitable for scenarios such as stream data processing or block-based read/write of large files.
 * Based on <b>RandomAccessFile</b>: You can create a <b>RandomAccessFile</b> object using
 * <b>createRandomAccessFile</b>. This mode supports independent offset pointers and random read/write operations, which
 * is suitable for scenarios where frequent jumps between read/write positions are required.
 * In addition, this module provides other capabilities such as <b>Watcher</b>, <b>FileMapping</b>, and
 * <b>AtomicFile</b>.
 *
 * > **How to Use**
 *
 * Before using the APIs provided by this module to perform operations on a file or directory, obtain the application
 * sandbox path of the file or directory as follows:
 * [Obtain application file paths]
 * (docroot://application-models/application-context-stage.md#obtaining-application-file-paths). <br/>
 * A uniform resource identifier (URI) is a string pointing to a resource. For APIs that support only the sandbox path
 * as the input parameter, you can construct a <b>fileUri</b> object and obtain the sandbox path property to convert the
 * URI to the sandbox path, and then use the APIs.
 * For details about the URI definition and how to convert a URI to a path, see
 * [File URI](docroot://reference/apis-core-file-kit/js-apis-file-fileuri.md).
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace fileIo {
  export { access };
  export { accessSync };
  export { close };
  export { closeSync };
  export { copy };
  export { copyDir };
  export { copyDirSync };
  export { copyFile };
  export { copyFileSync };
  export { createRandomAccessFile };
  export { createRandomAccessFileSync };
  export { createStream };
  export { createStreamSync };
  export { createReadStream };
  export { createWriteStream };
  export { createWatcher };
  export { dup };
  export { fdatasync };
  export { fdatasyncSync };
  export { fdopenStream };
  export { fdopenStreamSync };
  export { fsync };
  export { fsyncSync };
  export { getxattr };
  export { getxattrSync };
  export { listFile };
  export { listFileSync };
  export { listFileExt };
  export { listFileExtSync };
  export { lseek };
  export { lstat };
  export { lstatSync };
  export { mkdir };
  export { mkdirSync };
  export { mkdtemp };
  export { mkdtempSync };
  export { mmap };
  export { mmapSync };
  export { moveDir };
  export { moveDirSync };
  export { moveFile };
  export { moveFileSync };
  export { open };
  export { openSync };
  export { read };
  export { readSync };
  export { readLines };
  export { readLinesSync };
  export { readText };
  export { readTextSync };
  export { rename };
  export { renameSync };
  export { rmdir };
  export { rmdirSync };
  export { setxattr };
  export { setxattrSync };
  export { stat };
  export { statSync };
  export { symlink };
  export { symlinkSync };
  export { truncate };
  export { truncateSync };
  export { unlink };
  export { unlinkSync };
  export { utimes };
  export { write };
  export { writeSync };
  export { AccessModeType };
  export { AccessFlagType };
  export { File };
  export { FileMapping };
  export { MappingMode };
  export { OpenMode };
  export { RandomAccessFile };
  export { ReaderIterator };
  export { Stat };
  export { Stream };
  export { ReadStream };
  export { WriteStream };
  export { AtomicFile };
  export { Watcher };
  export { WhenceType };
  export { TaskSignal };
  export { connectDfs };
  export { disconnectDfs };
  export type { Progress };
  export type { CopyOptions };
  export type { ProgressListener };
  export type { DfsListeners };

  /**
   * Enumerates the constants of the <b>mode</b> parameter used in <b>open()</b>, which specifies the file opening mode,
   * such as <b>READ_ONLY</b>, <b>WRITE_ONLY</b>, <b>READ_WRITE</b>, or <b>CREATE</b>.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  namespace OpenMode {
    /**
     * Open the file in read-only mode.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const READ_ONLY = 0o0;
    /**
     * Open the file in write-only mode.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const WRITE_ONLY = 0o1;
    /**
     * Open the file in read/write mode.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const READ_WRITE = 0o2;
    /**
     * Create a file if the specified file does not exist.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const CREATE = 0o100;
    /**
     * If the file exists and is opened in write-only or read/write mode, truncate the file
     * length to 0.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const TRUNC = 0o1000;
    /**
     * Open the file in append mode. New data will be written to the end of the file.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const APPEND = 0o2000;
    /**
     * If **path** points to a named pipe (FIFO), block special file, or character special
     * file, perform non-blocking operations on the open file and in subsequent I/Os.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const NONBLOCK = 0o4000;
    /**
     * If **path** does not point to a directory, throw an exception.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const DIR = 0o200000;
    /**
     * If **path** points to a symbolic link, throw an exception.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const NOFOLLOW = 0o400000;
    /**
     * Open the file in synchronous I/O mode.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const SYNC = 0o4010000;
    /**
     * Disable the page cache for reading and writing a file.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    const UNCACHE = 0o10000000000;
  }
}

/**
 * Checks whether a file or directory exists or has the operation permission. This API uses a promise to return the
 * result.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied)
 * will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } [mode] - Permission on the file or directory to check. If this parameter is left blank,
 *     the system checks whether the file exists. [since 12]
 * @returns { Promise<boolean> } Promise used to return the result. The value <b>true</b> means the file or directory
 *     exists; the value <b>false</b> means the opposite.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function access(path: string, mode?: AccessModeType): Promise<boolean>;

/**
 * Checks whether a file or directory exists. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value <b>true</b> means the
 *     file or directory exists; the value <b>false</b> means the opposite.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function access(path: string, callback: AsyncCallback<boolean>): void;

/**
 * Checks whether the file or directory is on the local host or verifies the operation permission. This API uses a
 * promise to return the result.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied)
 * will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } mode - Permission on the file or directory to check.
 * @param { AccessFlagType } flag - Position of the file or directory to check.
 * @returns { Promise<boolean> } Promise used to return the result. The value <b>true</b> means the file or directory is
 *     a local one and has the related permission. The value <b>false</b> means the file or directory does not exist or
 *     is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>;

/**
 * Checks whether a file or directory exists or has the operation permission. This API returns the result synchronously.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will
 * be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } [mode] - Permission on the file or directory to check. If this parameter is left blank, the
 *     system checks whether the file or directory exists. [since 12]
 * @returns { boolean } The value <b>true</b> means the file or directory exists; the value <b>false</b> means the
 *     opposite.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function accessSync(path: string, mode?: AccessModeType): boolean;

/**
 * Checks whether a file or directory is stored locally or has the operation permission. This API returns the result
 * synchronously.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012 (Permission denied) will
 * be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } mode - Permission on the file or directory to check.
 * @param { AccessFlagType } flag - Position of the file or directory to check.
 * @returns { boolean } The value <b>true</b> means the file or directory is a local one and has the related permission.
 *     The value <b>false</b> means the file or directory does not exist or is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * Closes a file or directory. After the file or directory is closed, the FD becomes invalid and cannot be used for
 * read/write operations. This API uses a promise to return the result.
 *
 * @param { number | File } file - File object or open file descriptor fd that has been opened. After the function is
 *     disabled, the <b>File</b> object or FD cannot be used for read and write operations. If the file object or file
 *     descriptor is still used, an error may occur or the operation may fail.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function close(file: number | File): Promise<void>;

/**
 * Closes a file or directory. After the file or directory is closed, the FD becomes invalid and cannot be used for
 * read/write operations. This API uses an asynchronous callback to return the result.
 *
 * @param { number | File } file - File object or open file descriptor fd that has been opened. After the function is
 *     disabled, the <b>File</b> object or FD cannot be used for read and write operations. If the file object or file
 *     descriptor is still used, an error may occur or the operation may fail.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. When the file or directory is
 *     successfully closed asynchronously, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function close(file: number | File, callback: AsyncCallback<void>): void;

/**
 * Closes a file or directory synchronously. After the file or directory is closed, the FD becomes invalid and cannot be
 * used for read/write operations.
 *
 * @param { number | File } file - File object or open file descriptor fd that has been opened. After the function is
 *     disabled, the <b>File</b> object or FD cannot be used for read and write operations. If the file object or file
 *     descriptor is still used, an error may occur or the operation may fail.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function closeSync(file: number | File): void;

/**
 * Copies a file or directory. This API uses a promise to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory. The input parameter can be
 * the URI of the file or directory.
 *
 * A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files to be copied at a time
 * cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } [options] - Callback invoked to provide the copy progress. If this parameter is not set, the
 *     callback will not be invoked.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, options?: CopyOptions): Promise<void>;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory.
 * The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks
 * are allowed at the same time, and the number of files to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, callback: AsyncCallback<void>): void;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory.
 * The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks
 * are allowed at the same time, and the number of files to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } options - Callback used to return the copy progress.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory and its content to the destination path. You can set the conflict handling mode. This API
 * uses a promise to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } [mode] - Copy mode. <br/>
 *     - <b>0</b>: Throw an exception if a file conflict occurs.
 *     An exception will be thrown if the destination directory contains a directory with the same name as the source
 *     directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>
 *     - <b>1</b>: Forcibly overwrite the files with the same name in the destination directory.
 *     When the destination directory contains a directory with the same name as the source directory,
 *     the files with the same names in the destination directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode?: number): Promise<void>;

/**
 * Copies the source directory and its content to the destination path. This API uses an asynchronous callback to return
 * the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     copied, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination path. This API uses an asynchronous callback to return the result.
 *
 * An exception will be thrown if the destination directory contains a directory with the same name as the source
 * directory and there are files with the same name in the conflicting directory. All the non-conflicting files in the
 * source directory will be copied to the destination directory, and the non-conflicting files in the destination
 * directory will be retained. The <b>data</b> attribute in the error returned provides information about the
 * conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback invoked when a directory is copied
 *     asynchronously.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copies the source directory and its content to the destination path. You can set the conflict handling mode. This API
 * uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } mode - Copy mode. <br/>
 *     - <b>0</b>: Throw an exception if a file conflict occurs.
 *     An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting
 *     files in the source directory will be copied to the destination directory, and the non-conflicting files
 *     in the destination directory will be retained. <br/>
 *     - <b>1</b>: Forcibly overwrite the
 *     files with the same name in the destination directory. When the destination directory contains a
 *     directory with the same name as the source directory, the files with the same
 *     names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     copied, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory and its content to the destination path. You can set the conflict handling mode. This API
 * uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } mode - Copy mode. <br/>
 *     - <b>0</b>: Throw an exception if a file conflict occurs.
 *     An exception will be thrown if the destination directory contains a directory with the same name as the source
 *     directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>
 *     - <b>1</b>: Forcibly overwrite the files with the same name in the destination directory.
 *     When the destination directory contains a directory with the same name as the source directory,
 *     the files with the same names in the destination directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result. If the directory
 *     is successfully copied, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode: number, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copies the source directory to the destination path. This API returns the result synchronously.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } [mode] - Copy mode. <br/>
 *     - <b>0</b>: Throw an exception if a file conflict occurs.
 *     An exception will be thrown if the destination directory contains a directory with the same name as the source
 *     directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>
 *     - <b>1</b>: Forcibly overwrite the files with the same name in the destination directory.
 *     When the destination directory contains a directory with the same name as the source directory,
 *     the files with the same names in the destination directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDirSync(src: string, dest: string, mode?: number): void;

/**
 * Copies a file. This API uses a promise to return the result.
 *
 * @param { string | number } src - Path or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } [mode] - Option for overwriting the destination file. The default value is <b>0</b>, which is the
 *     only value supported. <br/><b>0</b>: Overwrite the file with the same name completely and truncate the part that
 *     is not overwritten.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;

/**
 * Copies a file. This API overwrites the file with the same name in the destination directory and truncates the part
 * that is not overwritten. This API uses an asynchronous callback to return the result.
 *
 * @param { string | number } src - Path or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { AsyncCallback<void> } callback - Callback invoked when a file is copied asynchronously.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;

/**
 * Copies a file with the specified mode. This API uses an asynchronous callback to return the result.
 *
 * @param { string | number } src - Path or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } mode - Whether to overwrite the file with the same name in the destination directory. The default
 *     value is **0**, which is the only value supported.<br>**0**: overwrite the file with the same name and truncate
 *     the part that is not overwritten.
 * @param { AsyncCallback<void> } callback - Callback invoked immediately after the file is copied.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void;

/**
 * Copies a file. This API returns the result synchronously.
 *
 * @param { string | number } src - Path or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } [mode] - Option for overwriting the destination file. The default value is <b>0</b>, which is the
 *     only value supported. <br/><b>0</b>: Overwrite the file with the same name completely and truncate the part that
 *     is not overwritten.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;

/**
 * Creates a stream based on a file path. This API uses a promise to return the result. To close the stream, use
 * <b>close()</b> of [Stream]{@link Stream}.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.<br>
 *     - **r+**: Open a file for both reading and writing. The file must exist.<br>
 *     - **w**: Open a file for writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **w+**: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **a**: Open a file in append mode for writing at the end of the file. If the file does not exist, create a
 *     file. If the file exists, write data to the end of the file (the original content of the file is reserved).<br>
 *     - **a+**: Open a file in append mode for reading or updating at the end of the file.
 *     If the file does not exist, create a file. If the file exists, write data to the end of
 *     the file (the original content of the file is reserved).
 * @returns { Promise<Stream> } Promise used to return the file stream.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStream(path: string, mode: string): Promise<Stream>;

/**
 * Creates a stream based on a file path. To close the stream, use <b>close()</b> of [Stream]{@link Stream}. This API
 * uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.<br>
 *     - **r+**: Open a file for both reading and writing. The file must exist.<br>
 *     - **w**: Open a file for writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **w+**: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **a**: Open a file in append mode for writing at the end of the file. If the file does not exist, create a
 *     file. If the file exists, write data to the end of the file (the original content of the file is reserved).<br>
 *     - **a+**: Open a file in append mode for reading or updating at the end of the file.
 *     If the file does not exist, create a file. If the file exists, write data to the end of
 *     the file (the original content of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the <b>Stream</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Creates a stream based on a file path. This API returns the result synchronously. To close the stream, use
 * **close()** of [Stream]{@link Stream}.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.<br>
 *     - **r+**: Open a file for both reading and writing. The file must exist.<br>
 *     - **w**: Open a file for writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **w+**: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file.<br>
 *     - **a**: Open a file in append mode for writing at the end of the file. If the file does not exist, create a
 *     file. If the file exists, write data to the end of the file (the original content of the file is reserved).<br>
 *     - **a+**: Open a file in append mode for reading or updating at the end of the file.
 *     If the file does not exist, create a file. If the file exists, write data to the end of
 *     the file (the original content of the file is reserved).
 * @returns { Stream } File stream.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStreamSync(path: string, mode: string): Stream;

/**
 * Creates a **RandomAccessFile** instance based on the specified file path or file object. This API uses a promise to
 * return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { number } [mode] - [Mode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance.
 *     This parameter is valid only when the application sandbox path of the file is passed in.
 *     One of the following options must be specified:<br>
 *     - **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.<br>
 *     - **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.<br>
 *     - **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.<br>You can also specify the following
 *     options, separated by a bitwise OR operator (|). By default, no additional options are given.<br>
 *     - **OpenMode.CREATE(0o100)**: If the file does not exist, create it.<br>- **OpenMode.TRUNC(0o1000)**: If the
 *     **RandomAccessFile** object already exists and is created in write mode, truncate the file length to 0.<br>
 *     - **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object. <br>
 *     - **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special file,
 *     or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.<br>
 *     - **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception.
 *     The write permission is not allowed.<br>
 *     - **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.<br>
 *     - **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - The options are as follows:<br>
 *     - **start** (number): start position to read data, in bytes. This parameter is optional.
 *      By default, data is read from the current position.<br>
 *     - **end** (number): end position to read data, in bytes. This parameter is optional. The default value
 *     is the end of the file.<br>This parameter takes effect only for file stream objects obtained by
 *     [getreadstream]{@link RandomAccessFile.getReadStream} and
 *     [getwritestream]{@link RandomAccessFile.getWriteStream}. [since 12]
 * @returns { Promise<RandomAccessFile> } Promise used to return the **RandomAccessFile** instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, mode?: number,
  options?: RandomAccessFileOptions): Promise<RandomAccessFile>;

/**
 * Creates a <b>RandomAccessFile</b> instance in read-only mode based on a file path or file object. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the <b>RandomAccessFile</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a <b>RandomAccessFile</b> instance based on a file path or file object. This API uses an asynchronous
 * callback to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { number } mode - [Mode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance.
 *     This parameter is valid only when the application sandbox path of the file is passed in.
 *     One of the following options must be specified:<br>
 *     - **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.<br>
 *     - **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.<br>
 *     - **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.<br>You can also specify the following
 *     options, separated by a bitwise OR operator (|). By default, no additional options are given.<br>
 *     - **OpenMode.CREATE(0o100)**: If the file does not exist, create it.<br>
 *     - **OpenMode.TRUNC(0o1000)**: If the **RandomAccessFile** object already exists and is created in write mode,
 *     truncate the file length to 0.<br>
 *     - **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object. <br>
 *     - **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special file,
 *     or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.<br>
 *     - **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception.
 *     The write permission is not allowed.<br>
 *     - **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.<br>
 *     - **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the <b>RandomAccessFile</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, mode: number, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a **RandomAccessFile** instance based on a file path or file object.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { number } [mode] - [Mode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance.
 *     This parameter is valid only when the application sandbox path of the file is passed in.
 *     One of the following options must be specified:<br>
 *     - **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.<br>
 *     - **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.<br>
 *     - **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.<br>You can also specify the following
 *     options, separated by a bitwise OR operator (|). By default, no additional options are given.<br>
 *     - **OpenMode.CREATE(0o100)**: If the file does not exist, create it.<br>
 *     - **OpenMode.TRUNC(0o1000)**: If the **RandomAccessFile** object already exists and is created in write mode,
 *     truncate the file length to 0.<br>
 *     - **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object. <br>
 *     - **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special file,
 *     or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.<br>
 *     - **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception.
 *     The write permission is not allowed.<br>
 *     - **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.<br>
 *     - **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - The options are as follows:<br>
 *     - **start** (number): start position to read data, in bytes. This parameter is optional.
 *      By default, data is read from the current position.<br>
 *     - **end** (number): end position to read data, in bytes. This parameter is optional. The default value
 *     is the end of the file.<br>This parameter takes effect only for file stream objects obtained by
 *     [getreadstream]{@link RandomAccessFile.getReadStream} and
 *     [getwritestream]{@link RandomAccessFile.getWriteStream}. [since 12]
 * @returns { RandomAccessFile } **RandomAccessFile** instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFileSync(file: string | File, mode?: number,
  options?: RandomAccessFileOptions): RandomAccessFile;

/**
 * Creates a readable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { ReadStreamOptions } [options] - The options are as follows:<br>
 *     - **start** (number): start position to read data, in bytes. This parameter is optional. By default,
 *     data is read from the current position.<br>
 *     - **end** (number): end position to read data, in bytes. This parameter is optional.
 *     The default value is the end of the file.
 * @returns { ReadStream } **ReadStream** instance obtained.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

/**
 * Creates a writeable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { WriteStreamOptions } [options] - The options are as follows:<br>
 *     - **start** (number): start position to write the data, in bytes. This parameter is optional.
 *     By default, data is written from the current position.<br>
 *     - **mode** (number): [Mode]{@link fileIo.OpenMode} for creating the writeable stream.
 *     This parameter is optional. The default value is the write-only mode.
 * @returns { WriteStream } **WriteStream** instance obtained.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

/**
 * Creates a <b>Watcher</b> object to listen for file or directory changes such as creating, deleting, and modifying.
 *
 * @param { string } path - Application sandbox path of the file or directory to observe.
 * @param { number } events - Events to observe. Multiple events can be separated by vertical bars (\|). <br/>
 *     - <b>0x1: IN_ACCESS</b>: A file is accessed. <br/>
 *     - <b>0x2: IN_MODIFY</b>: The file content is modified. <br/>
 *     - <b>0x4: IN_ATTRIB</b>: Metadata is changed. <br/>
 *     - <b>0x8: IN_CLOSE_WRITE</b>: A file is opened, written with data, and then closed. <br/>
 *     - <b>0x10: IN_CLOSE_NOWRITE</b>: A file or directory is opened and then closed without being written. <br/>
 *     - <b>0x20: IN_OPEN</b>: A file or directory is opened. <br/>
 *     - <b>0x40: IN_MOVED_FROM</b>: A file in the observed directory is moved. <br/>
 *     - <b>0x80: IN_MOVED_TO</b>: A file in the observed directory is moved. <br/>
 *     - <b>0x100: IN_CREATE</b>: A file or directory is created in the observed directory. <br/>
 *     - <b>0x200: IN_DELETE</b>: A file or directory is deleted from the observed directory. <br/>
 *     - <b>0x400: IN_DELETE_SELF</b> : The observed directory is deleted. After the directory is deleted,
 *     the listening stops. <br/>
 *     - <b>0x800: IN_MOVE_SELF</b>: The observed file or directory is moved. After the file or directory is moved,
 *     the listening continues. <br/>
 *     - <b>0xfff: IN_ALL_EVENTS</b>: All events.
 * @param { WatchEventListener } listener - Callback invoked when an observed event occurs. The callback will be invoked
 *     each time an observed event occurs.
 * @returns { Watcher } <b>Watcher</b> object created.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createWatcher(path: string, events: number, listener: WatchEventListener): Watcher;

/**
 * Duplicates the file descriptor and returns the corresponding **File** object.
 *
 * @param { number } fd - File descriptor.
 * @returns { File } File object opened.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 10 dynamic
 */
declare function dup(fd: number): File;

/**
 * Synchronizes data in a file. This API uses a promise to return the result.
 *
 * @param { number } fd - FD of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasync(fd: number): Promise<void>;

/**
 * Synchronizes data in a file. This API uses an asynchronous callback to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file data is successfully
 *     synchronized, <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the data of a file. This API returns the result synchronously.
 *
 * @param { number } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasyncSync(fd: number): void;

/**
 * Opens a file stream based on the file descriptor. This API uses a promise to return the result. To close the stream,
 * use <b>close()</b> of [Stream]{@link Stream}.
 *
 * @param { number } fd - FD of the file.
 * @param { string } mode - - <b>r</b>: Open a file for reading. The file must exist. <br/>
 *     - <b>r+</b>: Open a file for both reading and writing. The file must exist. <br/>
 *     - <b>w</b>: Open a file for writing. If the file exists, clear its content. If the file does not exist,
 *     create a file. <br/>
 *     - <b>w+</b>: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file. <br/>
 *     - <b>a</b>: Open a file in append mode for writing at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file (the original content of the
 *     file is reserved). <br/>
 *     - <b>a+</b>: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file
 *     (the original content of the file is reserved).
 * @returns { Promise<Stream> } Promise used to return the file stream.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStream(fd: number, mode: string): Promise<Stream>;

/**
 * Opens a stream based on the file descriptor. To close the stream, use <b>close()</b> of [Stream]{@link Stream}. This
 * API uses an asynchronous callback to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { string } mode - - <b>r</b>: Open a file for reading. The file must exist. <br/>
 *     - <b>r+</b>: Open a file for both reading and writing. The file must exist. <br/>
 *     - <b>w</b>: Open a file for writing. If the file exists, clear its content. If the file does not exist,
 *     create a file. <br/>
 *     - <b>w+</b>: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file. <br/>
 *     - <b>a</b>: Open a file in append mode for writing at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file (the original content of the
 *     file is reserved). <br/>
 *     - <b>a+</b>: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file
 *     (the original content of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the <b>Stream</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStream(fd: number, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Opens a stream based on the file descriptor. This API returns the result synchronously. To close the stream, use
 * <b>close()</b> of [Stream]{@link Stream}.
 *
 * @param { number } fd - FD of the file.
 * @param { string } mode - - <b>r</b>: Open a file for reading. The file must exist. <br/>
 *     - <b>r+</b>: Open a file for both reading and writing. The file must exist. <br/>
 *     - <b>w</b>: Open a file for writing. If the file exists, clear its content. If the file does not exist,
 *     create a file. <br/>
 *     - <b>w+</b>: Open a file for both reading and writing. If the file exists, clear its content.
 *     If the file does not exist, create a file. <br/>
 *     - <b>a</b>: Open a file in append mode for writing at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file (the original content of the
 *     file is reserved). <br/>
 *     - <b>a+</b>: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     create a file. If the file exists, write data to the end of the file
 *     (the original content of the file is reserved).
 * @returns { Stream } File stream.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;

/**
 * Synchronizes the cached data of a file to storage. This API uses a promise to return the result.
 *
 * @param { number } fd - FD of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsync(fd: number): Promise<void>;

/**
 * Synchronizes the cached data of a file to storage. This API uses an asynchronous callback to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the cache data of the file system is
 *     successfully written to the disk, <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsync(fd: number, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the cached data of a file to storage. This API returns the result synchronously.
 *
 * @param { number } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsyncSync(fd: number): void;

/**
 * Lists the names of all files and directories in the current path. Filtering is supported. This API uses a promise to
 * return the result.
 *
 * You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The
 * relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { object } [options] - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default. [since 11]
 * @returns { Promise<string[]> } Promise used to return the file name array, which is encoded in UTF-8 format by
 *     default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>;

/**
 * Lists the names of all files and directories in the current path. A file name array is returned. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file names listed. The files are encoded in
 *     UTF-8 by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(path: string, callback: AsyncCallback<string[]>): void;

/**
 * Lists the names of all files and directories in the current path. Filtering is supported. This API uses an
 * asynchronous callback to return the result.
 *
 * You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The
 * relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { object } options - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } options - Options for filtering files. The files are not filtered by default. [since 11]
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file names listed. The files are encoded in
 *     UTF-8 by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void;

/**
 * Lists the names of all files and directories in the current directory. This API returns the result synchronously.
 * Filtering is supported.
 *
 * You can configure the **recursion** parameter in **options** to recursively list the relative paths of all files. The
 * relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { object } [options] - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default. [since 11]
 * @returns { string[] } File name array, which is encoded in UTF-8 format by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 * Lists all file names in a directory. This API uses a promise to return the result.
 * This API supports recursive listing of all file names and custom file name filtering.
 * The returned result starts with a slash (/) and contains the subdirectory.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileExtOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { Promise<string[]> } Promise used to return the file names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function listFileExt(
  path: string,
  options?: ListFileExtOptions
): Promise<string[]>;

/**
 * Lists all file names in a directory. This API returns the result synchronously.
 * This API supports recursive listing of all file names and custom file name filtering.
 * The returned result starts with a slash (/) and contains the subdirectory.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileExtOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { string[] } List of the file names obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function listFileExtSync(
  path: string,
  options?: ListFileExtOptions
): string[];

/**
 * Adjusts the position of the file offset pointer.
 *
 * @param { number } fd - File descriptor.
 * @param { number } offset - Relative offset, in bytes.
 * @param { WhenceType } [whence] - Where to start the offset. If this parameter is not specified, the file start
 *     position is used by default.
 * @returns { number } Position of the current offset as measured from the beginning of the file, in bytes.
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900026 - Illegal seek
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 12]
 * @since 11 dynamic
 */
declare function lseek(fd: number, offset: number, whence?: WhenceType): number;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory. The attributes of the
 * symbolic link are returned, instead of the attributes of the target file. This API uses a promise to return the
 * result.
 *
 * @param { string } path - Application sandbox path or URI of the file. <br>**Note**: URIs can be passed since API
 *     version 22.
 * @returns { Promise<Stat> } Promise used to return the symbolic link information obtained. For details, see
 *     <b>Stat</b>.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstat(path: string): Promise<Stat>;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory. The attributes of the
 * symbolic link are returned, instead of the attributes of the target file. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file. <br>**Note**: URIs can be passed since API
 *     version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the <b>Stat</b> object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory synchronously. The attributes
 * of the symbolic link are returned, instead of the attributes of the target file.
 *
 * @param { string } path - Application sandbox path or URI of the file. <br>**Note**: URIs can be passed since API
 *     version 22.
 * @returns { Stat } Detailed file information.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstatSync(path: string): Stat;

/**
 * Creates a single-level directory. If the parent directory does not exist, an error is reported. This API uses a
 * promise to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdir(path: string): Promise<void>;

/**
 * Creates a directory. This API uses a promise to return the result. The value <b>true</b> means to create a directory
 * recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively. The value <b>true</b> means to create a
 *     directory recursively. The value <b>false</b> means to create a single-level directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdir(path: string, recursion: boolean): Promise<void>;

/**
 * Creates a single-level directory. If the parent directory does not exist, an error is reported. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     created, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Creates a directory. If <b>recursion</b> is set to <b>true</b>, a directory is created recursively. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively. The value <b>true</b> means to create a
 *     directory recursively. The value <b>false</b> means to create a single-level directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     created, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdir(path: string, recursion: boolean, callback: AsyncCallback<void>): void;

/**
 * Creates a single-level directory synchronously. If the parent directory does not exist, an error is reported.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdirSync(path: string): void;

/**
 * Creates a directory. This API returns the result synchronously. The value **true** means to create a directory
 * recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.<br> The value **true** means to create a
 *     directory recursively. The value **false** means to create a single-level directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdirSync(path: string, recursion: boolean): void;

/**
 * Create a temporary directory. This API uses a promise to return the result.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to create a unique temporary
 *     directory.
 * @returns { Promise<string> } Promise used to return the directory created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtemp(prefix: string): Promise<string>;

/**
 * Create a temporary directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to create a unique temporary
 *     directory.
 * @param { AsyncCallback<string> } callback - Callback used to return the temporary directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;

/**
 * Creates a temporary directory. This API returns the result synchronously.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to create a unique temporary
 *     directory.
 * @returns { string } Unique path generated.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtempSync(prefix: string): string;

/**
 * Creates a file mapping object based on a file descriptor or file object for efficient read and write access to files.
 * This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > 1. Memory mapping can be performed only for regular files. Non-regular files, such as pipeline, socket, and device
 * > files, are not supported. You can use [statSync()]{@link statSync} to obtain file attributes and then call
 * > [Stat.isFile()]{@link Stat.isFile} to check whether the file is a regular file.
 * > 2. If the mapping range exceeds the raw file size and the write permission is granted for the file, the mapping
 * > file size will be automatically expanded.
 * > 3. For files from external storage or network files, the establishment of mappings and access to the mapped memory
 * > are not guaranteed due to differences in the underlying file system. This may cause the application to terminate
 * > unexpectedly. You are advised to use other file access APIs such as [read]{@link read}, [write]{@link write}, or
 * > [Stream]{@link Stream} in this scenario.
 *
 * @param { number | File } file - File object or open file descriptor fd that has been opened.
 * @param { MappingMode } mode - Option to create a file memory-mapped object. You must specify one of the following
 *     options: <br>
 *     <b>MappingMode.READ_ONLY(0)</b>: read-only mode. The file mapping area is not writable. An exception is
 *     thrown when the file mapping area is modified. <br>
 *     <b>MappingMode.READ_WRITE(1)</b>: read/write mode. The modification is written to the file mapping area and
 *     then synchronized to the file by the operating system (non-real-time).
 *     <b>MappingMode.PRIVATE(2)</b>: private mode. It is a copy-on-write mapping mechanism. Modifications to the
 *     mapping area are visible only to the current process and do not affect the raw file.
 * @param { number } offset - Start location of the file mapping area, in bytes.
 * @param { number } size - Size of the file mapping area, in bytes. The value must be greater than 0 and not greater
 *     than <b>INT32_MAX</b>.
 * @returns { Promise<FileMapping> } Promise used to return the file mapping object. Initial state of the returned
 *     object: The value of <b>position</b> is <b>0</b>, and the values of <b>limit</b> and <b>capacity</b> are equal to
 *     the value of <b>size</b>.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900050 - Internal resource error
 * @throws { BusinessError } 13900056 - Mmap does not support mapping this file
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function mmap(file: number | File, mode: MappingMode, offset: number, size: number): Promise<FileMapping>;

/**
 * Creates a file mapping object synchronously based on a file descriptor or file object for efficient read and write
 * access to files.
 *
 * > **NOTE**
 * >
 * > 1. Memory mapping can be performed only for regular files. Non-regular files, such as pipeline, socket, and device
 * > files, are not supported. You can use [statSync()]{@link statSync} to obtain file attributes and then call
 * > [Stat.isFile()]{@link Stat.isFile} to check whether the file is a regular file.
 * > 2. If the mapping range exceeds the raw file size and the write permission is granted for the file, the mapping
 * > file size will be automatically expanded.
 * > 3. For files from external storage or network files, the establishment of mappings and access to the mapped memory
 * > are not guaranteed due to differences in the underlying file system. This may cause the application to terminate
 * > unexpectedly. You are advised to use other file access APIs such as [read]{@link read}, [write]{@link write}, or
 * > [Stream]{@link Stream} in this scenario.
 *
 * @param { number | File } file - File object or open file descriptor fd that has been opened.
 * @param { MappingMode } mode - Option to create a file memory-mapped object. You must specify one of the following
 *     options: <br>
 *     <b>MappingMode.READ_ONLY(0)</b>: read-only mode. The file mapping area is not writable. An exception is
 *     thrown when the file mapping area is modified. <br>
 *     <b>MappingMode.READ_WRITE(1)</b>: read/write mode. The modification is written to the file mapping area and
 *     then synchronized to the file by the operating system (non-real-time).
 *     <b>MappingMode.PRIVATE(2)</b>: private mode. It is a copy-on-write mapping mechanism. Modifications to the
 *     mapping area are visible only to the current process and do not affect the raw file.
 * @param { number } offset - Start location of the file mapping area, in bytes.
 * @param { number } size - Size of the file mapping area, in bytes. The value must be greater than 0 and not greater
 *     than <b>INT32_MAX</b>.
 * @returns { FileMapping } File mapping object created. Initial state of the returned object: The value of
 *     <b>position</b> is <b>0</b>, and the values of <b>limit</b> and <b>capacity</b> are equal to the value of
 *     <b>size</b>.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900050 - Internal resource error
 * @throws { BusinessError } 13900056 - Mmap does not support mapping this file
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function mmapSync(file: number | File, mode: MappingMode, offset: number, size: number): FileMapping;

/**
 * Moves the source directory and its content to the destination path. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } [mode] - Move mode. The default value is <b>0</b>. <br/>- <b>0</b>: Throw an exception if a
 *     directory conflict occurs. An exception will be thrown if the destination directory contains a non-empty
 *     directory with the same name as the source directory. <br/>- <b>1</b>: Throw an exception if a file conflict
 *     occurs. An exception will be thrown
 *     if the destination directory contains a directory with the same name as the source directory, and a file with the
 *     same name exists in the conflict directory. All the non-conflicting files in the source directory will be moved
 *     to the destination directory, and the non-conflicting files in the destination directory will be retained. The
 *     <b>data</b> attribute in the error returned provides information about the conflicting files in the
 *     Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>- <b>2</b>: Forcibly overwrite the conflicting files in the
 *     destination directory. When the destination directory contains a directory with the same name as the source
 *     directory, the files with the same names in the destination directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained. <br/>- <b>3</b>: Forcibly overwrite the
 *     conflicting directory. The source directory is moved to the destination directory, and the content of the moved
 *     directory is the same as that of the source directory. If the destination directory contains a directory with the
 *     same name as the source directory, all original files in the directory will be deleted.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode?: number): Promise<void>;

/**
 * Moves the source directory and its content to the destination path. This API uses an asynchronous callback to return
 * the result.
 *
 * An exception will be thrown if a directory conflict occurs, that is, the destination directory contains a non-empty
 * directory with the same name as the source directory.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully moved,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory and its content to the destination path. This API uses an asynchronous callback to return
 * the result.
 *
 * An exception will be thrown if a directory conflict occurs, that is, the destination directory contains a non-empty
 * directory with the same name as the source directory.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result. If the directory
 *     is successfully moved, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Moves the source directory and its content to the destination path. You can set the conflict handling mode. This API
 * uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } mode - Move mode. <br/>- <b>0</b>: Throw an exception if a directory conflict occurs. An exception
 *     will be thrown if the destination directory contains a non-empty directory with the same name as the source
 *     directory. <br/>
 *     - <b>1</b>: Throw an exception if a file conflict occurs. An exception will be thrown if the destination
 *     directory contains a directory with the same name as the source directory, and a file with the same name exists
 *     in the conflict directory. All the non-conflicting files in the source directory will be moved to the destination
 *     directory, and the non-conflicting files in the destination directory will be retained. <br/>
 *     - <b>2</b>: Forcibly overwrite the conflicting files in the destination directory. When the destination directory
 *     contains a directory with the same name as the source directory, the files with the same names in the destination
 *     directory are overwritten forcibly; the files without conflicts in the destination directory are retained. <br/>
 *     - <b>3</b>: Forcibly overwrite the conflicting directory. The source directory is moved to the destination
 *     directory, and the content of the moved directory is the same as that of the source directory. If the destination
 *     directory contains a directory with the same name as the source directory, all original files in the directory
 *     will be deleted.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully moved,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory and its content to the destination path. You can set the conflict handling mode. This API
 * uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } mode - Move mode. <br/>- <b>0</b>: Throw an exception if a directory conflict occurs. An exception
 *     will be thrown if the destination directory contains a non-empty directory with the same name as the source
 *     directory. <br/>
 *     - <b>1</b>: Throw an exception if a file conflict occurs. An exception will be thrown if the destination
 *     directory contains a directory with the same name as the source directory, and a file with the same name exists
 *     in the conflict directory. All the non-conflicting files in the source directory will be moved to the destination
 *     directory, and the non-conflicting files in the destination directory will be retained.
 *     The <b>data</b> attribute in the error returned provides information about the conflicting files in the
 *     Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>
 *     - <b>2</b>: Forcibly overwrite the conflicting files in the destination directory. When the destination directory
 *     contains a directory with the same name as the source directory, the files with the same names in the destination
 *     directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained. <br/>- <b>3</b>: Forcibly overwrite the
 *     conflicting directory. The source directory is moved to the destination directory, and the content of the moved
 *     directory is the same as that of the source directory. If the destination directory contains a directory with the
 *     same name as the source directory, all original files in the directory will be deleted.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result. If the directory
 *     is successfully moved, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode: number, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Moves the source directory and its content to the destination directory. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { number } [mode] - Move mode. The default value is <b>0</b>. <br/>- <b>0</b>: Throw an exception if a
 *     directory conflict occurs. An exception will be thrown if the destination directory contains a non-empty
 *     directory with the same name as the source directory. <br/>- <b>1</b>: Throw an exception if a file conflict
 *     occurs. An exception will be thrown
 *     if the destination directory contains a directory with the same name as the source directory, and a file with the
 *     same name exists in the conflict directory. All the non-conflicting files in the source directory will be moved
 *     to the destination directory, and the non-conflicting files in the destination directory will be retained. The
 *     <b>data</b> attribute in the error returned provides information about the conflicting files in the
 *     Array<[ConflictFiles]{@link ConflictFiles}> format. <br/>- <b>2</b>: Forcibly overwrite the conflicting files in the
 *     destination directory. When the destination directory contains a directory with the same name as the source
 *     directory, the files with the same names in the destination directory are overwritten forcibly;
 *     the files without conflicts in the destination directory are retained. <br/>- <b>3</b>: Forcibly overwrite the
 *     conflicting directory. The source directory is moved to the destination directory, and the content of the moved
 *     directory is the same as that of the source directory. If the destination directory contains a directory with the
 *     same name as the source directory, all original files in the directory will be deleted.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDirSync(src: string, dest: string, mode?: number): void;

/**
 * Moves a file to the target path. You can set the conflict handling mode. This API uses a promise to return the
 * result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source file.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { number } [mode] - Move mode. The value <b>0</b> means to overwrite the file with the same name in the
 *     destination directory; the value <b>1</b> means to throw an exception. The default value is <b>0</b>.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, mode?: number): Promise<void>;

/**
 * Moves a file and forcibly overwrites the file with the same name in the destination directory. This API uses an
 * asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source file.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is moved successfully,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves a file to the target path. You can set the conflict handling mode. This API uses an asynchronous callback to
 * return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source file.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { number } mode - Move mode. The value <b>0</b> means to overwrite the file with the same name in the
 *     destination directory; the value <b>1</b> means to throw an exception. The default value is <b>0</b>.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is moved successfully,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * Moves a file to the destination path. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source file.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { number } [mode] - Move mode. The value <b>0</b> means to overwrite the file with the same name in the
 *     destination directory; the value <b>1</b> means to throw an exception. The default value is <b>0</b>.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 26.0.1]
 * @since 9 dynamic
 */
declare function moveFileSync(src: string, dest: string, mode?: number): void;

/**
 * Opens a file or directory. This API supports the use of a URI. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file or directory.
 * @param { number } [mode] - [Mode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options.
 *     By default, the file is opened in read-only mode.<br/>
 *     - <b>OpenMode.READ_ONLY(0o0)</b>: Open the file in read-only mode. <br/>
 *     - <b>OpenMode.WRITE_ONLY(0o1)</b>: Open the file in write-only mode. <br/>
 *     - <b>OpenMode.READ_WRITE(0o2)</b>: Open the file in read/write mode. <br/>You can specify the following options,
 *     separated using a bitwise OR operator (&#124;). By default, no extra option is specified. <br/>
 *     - <b>OpenMode.CREATE(0o100)</b>: If the file does not exist, create it. <br/>
 *     - <b>OpenMode.TRUNC(0o1000)</b>: If the file exists and is opened in write mode,
 *     truncate the file length to 0. <br/>
 *     - <b>OpenMode.APPEND(0o2000)</b>: Open the file in append mode. New data will be added to the
 *     end of the file. <br/>
 *     - <b>OpenMode.NONBLOCK(0o4000)</b>: If <b>path</b> points to a named pipe (also known as a FIFO),
 *     block special file, or character special file, perform non-blocking operations on the open file and
 *     in subsequent I/Os. <br/>
 *     - <b>OpenMode.DIR(0o200000)</b>: If <b>path</b> does not point to a directory, throw an
 *     exception. The write permission is not allowed. <br/>
 *     - <b>OpenMode.NOFOLLOW(0o400000)</b>: If <b>path</b> points to a symbolic link, throw an exception. <br/>
 *     - <b>OpenMode.SYNC(0o4010000)</b>: Open the file in synchronous I/O mode. <br/>
 *     - <b>OpenMode.UNCACHE(0o10000000000)</b>: Disable the page cache for reading and writing a file. This
 *     option is supported since API version 26.0.0.
 * @returns { Promise<File> } Promise used to return the <b>File</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, mode?: number): Promise<File>;

/**
 * Opens a file or directory. This API supports the use of a URI. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { string } path - Application sandbox path or URI of the file or directory.
 * @param { AsyncCallback<File> } callback - Callback used to return the <b>File</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory with the specified mode. This API uses an asynchronous callback to return the result.
 *
 * This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of the file or directory.
 * @param { number } mode - [Mode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options.
 *     By default, the file is opened in read-only mode.<br/>
 *     - <b>OpenMode.READ_ONLY(0o0)</b>: Open the file in read-only mode. <br/>
 *     - <b>OpenMode.WRITE_ONLY(0o1)</b>: Open the file in write-only mode. <br/>
 *     - <b>OpenMode.READ_WRITE(0o2)</b>: Open the file in read/write mode. <br/>You can specify the following options,
 *     separated using a bitwise OR operator (&#124;). By default, no extra option is specified. <br/>
 *     - <b>OpenMode.CREATE(0o100)</b>: If the file does not exist, create it. <br/>
 *     - <b>OpenMode.TRUNC(0o1000)</b>: If the file exists and is opened in write mode,
 *     truncate the file length to 0. <br/>
 *     - <b>OpenMode.APPEND(0o2000)</b>: Open the file in append mode. New data will be added to the
 *     end of the file. <br/>
 *     - <b>OpenMode.NONBLOCK(0o4000)</b>: If <b>path</b> points to a named pipe (also known as a FIFO),
 *     block special file, or character special file, perform non-blocking operations on the open file and
 *     in subsequent I/Os. <br/>
 *     - <b>OpenMode.DIR(0o200000)</b>: If <b>path</b> does not point to a directory, throw an
 *     exception. The write permission is not allowed. <br/>
 *     - <b>OpenMode.NOFOLLOW(0o400000)</b>: If <b>path</b> points to a symbolic link, throw an exception. <br/>
 *     - <b>OpenMode.SYNC(0o4010000)</b>: Open the file in synchronous I/O mode. <br/>
 *     - <b>OpenMode.UNCACHE(0o10000000000)</b>: Disable the page cache for reading and writing a file. This
 *     option is supported since API version 26.0.0.
 * @param { AsyncCallback<File> } callback - Callback used to return the <b>File</b> object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, mode: number, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory. This API returns the result synchronously. This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of a file or directory to open.
 * @param { number } [mode] - [Mode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options.
 *     By default, the file is opened in read-only mode.<br/>
 *     - <b>OpenMode.READ_ONLY(0o0)</b>: Open the file in read-only mode. <br/>
 *     - <b>OpenMode.WRITE_ONLY(0o1)</b>: Open the file in write-only mode. <br/>
 *     - <b>OpenMode.READ_WRITE(0o2)</b>: Open the file in read/write mode. <br/>You can specify the following options,
 *     separated using a bitwise OR operator (&#124;). By default, no extra option is specified. <br/>
 *     - <b>OpenMode.CREATE(0o100)</b>: If the file does not exist, create it. <br/>
 *     - <b>OpenMode.TRUNC(0o1000)</b>: If the file exists and is opened in write mode,
 *     truncate the file length to 0. <br/>
 *     - <b>OpenMode.APPEND(0o2000)</b>: Open the file in append mode. New data will be added to the
 *     end of the file. <br/>
 *     - <b>OpenMode.NONBLOCK(0o4000)</b>: If <b>path</b> points to a named pipe (also known as a FIFO),
 *     block special file, or character special file, perform non-blocking operations on the open file and
 *     in subsequent I/Os. <br/>
 *     - <b>OpenMode.DIR(0o200000)</b>: If <b>path</b> does not point to a directory, throw an
 *     exception. The write permission is not allowed. <br/>
 *     - <b>OpenMode.NOFOLLOW(0o400000)</b>: If <b>path</b> points to a symbolic link, throw an exception. <br/>
 *     - <b>OpenMode.SYNC(0o4010000)</b>: Open the file in synchronous I/O mode. <br/>
 *     - <b>OpenMode.UNCACHE(0o10000000000)</b>: Disable the page cache for reading and writing a file. This
 *     option is supported since API version 26.0.0.
 * @returns { File } File object opened.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function openSync(path: string, mode?: number): File;

/**
 * Reads file data. This API uses a promise to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { object } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 9 - 10]
 * @param { ReadOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 11]
 * @returns { Promise<number> } Promise used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<number>;

/**
 * Reads data from a file and returns the number of bytes read. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer for storing the read file data.
 * @param { AsyncCallback<number> } callback - Callback used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

/**
 * Reads data from a file. This API uses an asynchronous callback to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { object } options - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 9 - 10]
 * @param { ReadOptions } options - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 11]
 * @param { AsyncCallback<number> } callback - Callback used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<number>
): void;

/**
 * Reads data from a file. This API returns the result synchronously.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { object } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 9 - 10]
 * @param { ReadOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length. [since 11]
 * @returns { number } Length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): number;

/**
 * Reads a file text line by line. Only the files in UTF-8 format are supported. This API uses a promise to return the
 * result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options. The options are as follows:<br/>
 *     - <b>encoding</b> (string): format of the string to be encoded. The default value is <b>'utf-8'</b>,
 *     which is the only value supported.
 * @returns { Promise<ReaderIterator> } Promise used to return the <b>ReaderIterator</b> object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, options?: Options): Promise<ReaderIterator>;

/**
 * Reads a file text line by line. Only the files in UTF-8 format are supported. This API uses an asynchronous callback
 * to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return the <b>ReaderIterator</b> object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads a file text line by line. Read options can be configured. Only the files in UTF-8 format are supported. This
 * API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } options - Options. The options are as follows:<br/>
 *     - <b>encoding</b> (string): format of the string to be encoded. The default value is <b>'utf-8'</b>,
 *     which is the only value supported.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return the <b>ReaderIterator</b> object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, options: Options, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads a file text line by line synchronously. Only the files in UTF-8 format are supported.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options. The options are as follows:<br/>
 *     - <b>encoding</b> (string): format of the string to be encoded. The default value is <b>'utf-8'</b>,
 *     which is the only value supported.
 * @returns { ReaderIterator } <b>ReaderIterator</b> object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLinesSync(filePath: string, options?: Options): ReaderIterator;

/**
 * Reads the text content of a file. This API uses a promise to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { object } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 11]
 * @returns { Promise<string> } Promise used to return the file content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(
  filePath: string,
  options?: ReadTextOptions
): Promise<string>;

/**
 * Reads the text of a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<string> } callback - Callback used to return the file content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(filePath: string, callback: AsyncCallback<string>): void;

/**
 * Reads the text content of a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { object } options - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } options - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 11]
 * @param { AsyncCallback<string> } callback - Callback used to return the content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(
  filePath: string,
  options: ReadTextOptions,
  callback: AsyncCallback<string>
): void;

/**
 * Reads the text content of a file. This API returns the result synchronously.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { object } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): position of the data to read in the file, in bytes. This parameter is optional.
 *     By default, data is read from the current position.<br>
 *     - **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is
 *     the file length.<br>
 *     - **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 11]
 * @returns { string } File content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * Renames a file or directory. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Renames a file or directory. This API uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is renamed successfully,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;

/**
 * Renames a file or directory. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function renameSync(oldPath: string, newPath: string): void;

/**
 * Deletes a directory and all its subdirectories and files. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use <b>unlink()</b> instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdir(path: string): Promise<void>;

/**
 * Deletes a directory and all its subdirectories and files. This API uses an asynchronous callback to return the
 * result.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use <b>unlink()</b> instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     deleted, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Removes a directory and all its subdirectories and files synchronously.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use <b>unlinkSync()</b> instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdirSync(path: string): void;

/**
 * Obtains detailed attributes of a file or directory. The returned <b>Stat</b> object contains attributes such as the
 * file size, permission mode, access time, and modification time. This API uses a promise to return the result.
 *
 * @param { string | number } file - Application sandbox path, URI, or FD of the file or directory. <br>**Note**: URIs
 *     can be passed since API version 22.
 * @returns { Promise<Stat> } Promise used to return the file or directory information.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function stat(file: string | number): Promise<Stat>;

/**
 * Obtains detailed attributes of a file or directory. The returned <b>Stat</b> object contains attributes such as the
 * file size, permission mode, access time, and modification time. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { string | number } file - Application sandbox path, URI, or FD of the file or directory. <br>**Note**: URIs
 *     can be passed since API version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the file or directory information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function stat(file: string | number, callback: AsyncCallback<Stat>): void;

/**
 * Obtains detailed attributes of a file or directory synchronously. The returned <b>Stat</b> object contains attributes
 * such as the file size, permission mode, access time, and modification time.
 *
 * @param { string | number } file - Application sandbox path, URI, or FD of the file or directory. <br>**Note**: URIs
 *     can be passed since API version 22.
 * @returns { Stat } Detailed information of a file or directory.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function statSync(file: string | number): Stat;

/**
 * Creates a symbolic link based on a file path. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > Since API version 11, this API cannot be used by third-party applications.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 9 dynamic
 */
declare function symlink(target: string, srcPath: string): Promise<void>;

/**
 * Creates a symbolic link based on a file path. This API uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > Since API version 11, this API cannot be used by third-party applications.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the symbolic link is successfully
 *     created, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 9 dynamic
 */
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;

/**
 * Creates a symbolic link based on the file path. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > Since API version 11, this API cannot be used by third-party applications.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 9 dynamic
 */
declare function symlinkSync(target: string, srcPath: string): void;

/**
 * Truncates a file to the specified length. Excess content will be deleted. This API uses a promise to return the
 * result.
 *
 * @param { string | number } file - Application sandbox path or FD of the file.
 * @param { number } [len] - File length after truncation, in bytes. The default value is <b>0</b>.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, len?: number): Promise<void>;

/**
 * Truncates a file and deletes its content. This API uses an asynchronous callback to return the result.
 *
 * @param { string | number } file - Application sandbox path or FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is truncated successfully,
 *     <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, callback: AsyncCallback<void>): void;

/**
 * Truncates a file to the specified length. Excess content will be deleted. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string | number } file - Application sandbox path or FD of the file.
 * @param { number } [len] - File length after truncation, in bytes. The default value is <b>0</b>. [since 9 - 10]
 * @param { number } len - File length after truncation, in bytes. The default value is <b>0</b>. [since 11]
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is truncated successfully,
 *     <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, len: number, callback: AsyncCallback<void>): void;

/**
 * Truncates a file to the specified length synchronously. Excess content will be deleted.
 *
 * @param { string | number } file - Application sandbox path or FD of the file.
 * @param { number } [len] - File length after truncation, in bytes. The default value is <b>0</b>.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncateSync(file: string | number, len?: number): void;

/**
 * Deletes a single file. This method cannot be used to delete a directory. This API uses a promise to return the
 * result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlink(path: string): Promise<void>;

/**
 * Deletes a single file. This method cannot be used to delete a directory. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is deleted successfully,
 *     <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlink(path: string, callback: AsyncCallback<void>): void;

/**
 * Deletes a single file synchronously. This method cannot be used to delete a directory.
 *
 * @param { string } path - Application sandbox path of the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlinkSync(path: string): void;

/**
 * Last modification time of a file.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { number } mtime - New timestamp. The value is the number of milliseconds elapsed since the Epoch time
 *     (00:00:00 UTC on January 1, 1970). Only the time when the file was last modified can be changed.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 12]
 * @since 11 dynamic
 */
declare function utimes(path: string, mtime: number): void;

/**
 * Writes data into a file. This API uses a promise to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): start position to write the data
 *     in the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>-
 *     **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the
 *     buffer length.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
 *     By default, data is written from the current position. <br>
 *     - **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is
 *     the buffer length.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 11]
 * @returns { Promise<number> } Promise used to return the length of the data written, in bytes.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<number>;

/**
 * Writes data to a file and returns the number of bytes written. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - A string or data from a buffer to be written to the file.
 * @param { AsyncCallback<number> } callback - Callback used to return the length of the data written, in bytes.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

/**
 * Writes data to a file. This API uses an asynchronous callback to return the result.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { object } options - The options are as follows:<br>
 *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
 *     By default, data is written from the current position.<br>
 *     - **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is
 *     the buffer length.<br>
 *     - **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } options - The options are as follows:<br>
 *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
 *     By default, data is written from the current position.<br>
 *     - **length** (number): length of the data to write, in bytes. This parameter is optional. The default
 *     value is the buffer length.<br>
 *     - **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 11]
 * @param { AsyncCallback<number> } callback - Callback used to return the result. The callback returns the length of
 *     the data written, in bytes.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<number>
): void;

/**
 * Writes data to a file. This API returns the result synchronously.
 *
 * @param { number } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { object } [options] - The options are as follows:<br>
 *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
 *     By default, data is written from the current position.<br>
 *     - **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is
 *     the buffer length.<br>
 *     - **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } [options] - The options are as follows:<br>
 *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
 *     By default, data is written from the current position.<br>
 *     - **length** (number): length of the data to write, in bytes. This parameter is optional. The default
 *     value is the buffer length.<br>
 *     - **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 11]
 * @returns { number } Length of the data written, in bytes.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): number;

/**
 * Triggers connection. If the peer device is abnormal, [onStatus]{@link DfsListeners.onStatus} in **DfsListeners** will
 * be called to notify the application.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - Network ID of the device. The device network ID can be obtained from
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo} using the
 *     related [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager} API.
 * @param { DfsListeners } listeners - Listeners for distributed file system status.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:
 *     1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900045 - Connection failed.
 * @throws { BusinessError } 13900046 - Software caused connection abort.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>;

/**
 * Triggers disconnection.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - Network ID of the device. The device network ID can be obtained from
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo} using the
 *     related [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager} API.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:
 *     1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13600004 - Unmount failed.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function disconnectDfs(networkId: string): Promise<void>;

/**
 * Sets an extended attribute of a file or directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain. The value is a string of less than 256 bytes and can
 *     contain only the **user.** prefix.
 * @param { string } value - Value of the extended attribute to set.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function setxattr(path: string, key: string, value: string): Promise<void>;

/**
 * Sets an extended attribute of a file or directory.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain. The value is a string of less than 256 bytes and can
 *     contain only the **user.** prefix.
 * @param { string } value - Value of the extended attribute to set.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function setxattrSync(path: string, key: string, value: string): void;

/**
 * Obtains an extended attribute of a file or directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { Promise<string> } Promise used to return the value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function getxattr(path: string, key: string): Promise<string>;

/**
 * Obtains an extended attribute of a file or directory. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { string } Value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function getxattrSync(path: string, key: string): string;

/**
 * Defines the copy progress information.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
interface Progress {
  /**
   * Size of the copied data, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly processedSize: number;

  /**
   * Total size of the data to be copied, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly totalSize: number;
}

/**
 * Provides APIs for interrupting a copy task.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
export class TaskSignal {
  /**
   * Cancels a copy task.
   *
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900043 - No task can be canceled.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  cancel(): void;

  /**
   * > **NOTE**
   * >
   * > This API is supported since API version 12 and deprecated since API version 24.
   *
   * Subscribes to the event reported when a copy task is canceled.
   *
   * @returns { Promise<string> } Promise used to return the path of the last file copied.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamiconly
   * @deprecated since 24
   */
  onCancel(): Promise<string>;
}

/**
 * Defines the callback for listening for the copy progress.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
interface CopyOptions {
  /**
   * Listener used to observe the copy progress.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  progressListener?: ProgressListener;
  /**
   * Signal used to cancel a copy task.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  copySignal?: TaskSignal;
}

/**
 * Defines the listener used to observe the copy progress.
 *
 * @param { Progress } progress - Listener used to observe the copy progress.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
type ProgressListener = (progress: Progress) => void;

/**
 * Represents a <b>File</b> object opened by <b>open()</b>. It contains the FD and provides capabilities such as locking
 * a file and obtaining the parent directory.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface File {
  /**
   * FD of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly fd: number;

  /**
   * Path of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 10 dynamic
   */
  readonly path: string;

  /**
   * Name of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 10 dynamic
   */
  readonly name: string;

  /**
   * Obtains the parent directory of the <b>File</b> object.
   *
   * @returns { string } Parent directory obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  getParent(): string;

  /**
   * Applies an exclusive lock or a shared lock on a file in blocking mode. This API uses a promise to return the
   * result.
   *
   * @param { boolean } [exclusive] - Whether to apply an exclusive lock. The value <b>true</b> indicates an exclusive
   *     lock is applied, and <b>false</b> indicates a shared lock is applied. The default value is <b>false</b>.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  lock(exclusive?: boolean): Promise<void>;

  /**
   * Applies a shared lock on a file in blocking mode. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is locked successfully,
   *     <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  lock(callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on a file in blocking mode. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { boolean } exclusive - Whether to apply an exclusive lock. The value <b>true</b> indicates an exclusive
   *     lock is applied, and <b>false</b> indicates a shared lock is applied.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is locked successfully,
   *     <b>err</b> is <b>undefined</b>. Otherwise, <b>err</b> is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  lock(exclusive: boolean, callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on a file in non-blocking mode.
   *
   * @param { boolean } [exclusive] - Whether to apply an exclusive lock. The value <b>true</b> indicates an exclusive
   *     lock is applied, and <b>false</b> indicates a shared lock is applied. The default value is <b>false</b>.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  tryLock(exclusive?: boolean): void;

  /**
   * Unlocks a file. This API returns the result synchronously.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  unlock(): void;
}

/**
 * Defines a file mapping object. Before calling the <b>FileMapping</b> method, construct a <b>FileMapping</b> instance
 * using [mmap()]{@link mmap} or [mmapSync()]{@link mmapSync}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface FileMapping {
  /**
   * Sets the current location of the file mapping area.
   *
   * @param { number } position - Target position to set, in bytes. The value must be a non-negative number and cannot
   *     be greater than the upper bound (<b>limit</b>) of the readable and writable area. You can obtain the value of
   *     <b>limit</b> by calling [getLimit()]{@link FileMapping.getLimit}.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  setPosition(position: number): void;

  /**
   * Gets the current location of the file mapping area.
   *
   * @returns { number } Current location of the file mapping area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getPosition(): number;

  /**
   * Obtains the capacity of the file mapping area.
   *
   * @returns { number } Capacity of the file mapping area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  capacity(): number;

  /**
   * Sets the upper bound of the readable and writable area of the file mapping area.
   *
   * @param { number } limit - Upper bound of the readable and writable area to be set, in bytes. The value is greater
   *     than or equal to 0 and less than or equal to the value of [capacity]{@link FileMapping.capacity}.
   *     If the value of <b>limit</b> is smaller than that of <b>position</b> in the file mapping area, the value of
   *     <b>position</b> is automatically adjusted to that of <b>limit</b>.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  setLimit(limit: number): void;

  /**
   * Obtains the upper bound of the readable and writable area of the file mapping area.
   *
   * @returns { number } Upper bound of the current readable and writable area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getLimit(): number;

  /**
   * Flips the file mapping area to switch from the write-ready state to the read-ready state. After this API is called,
   * <b>limit</b> is set to the value of <b>position</b>, and <b>position</b> is reset to <b>0</b>.
   * It is recommended that this API be called to prepare for subsequent [read()]{@link FileMapping.read} operations
   * after the [write()]{@link FileMapping.write} operations are complete.
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  flip(): void;

  /**
   * Obtains the number of remaining bytes between the current position (<b>position</b>) and the upper bound
   * (<b>limit</b>) of the readable and writable area.
   *
   * @returns { number } Number of remaining readable or writable bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  remaining(): number;

  /**
   * Reads data from the current position and moves the position backward by the number of bytes actually read.
   *
   * @param { ArrayBuffer } buffer - Buffer for storing the read file data.
   * @param { number } [length] - Length of the data to be read, in bytes. The default value is the buffer length.
   * @returns { number } Length of the data read, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  read(buffer: ArrayBuffer, length?: number): number;

  /**
   * Reads data from the specified position. The current position does not move.
   *
   * @param { number } position - Start position to read the data, in bytes.
   * @param { ArrayBuffer } buffer - Buffer for storing the read file data.
   * @param { number } [length] - Length of the data to be read, in bytes. The default value is the buffer length.
   * @returns { number } Length of the data read, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  read(position: number, buffer: ArrayBuffer, length?: number): number;

  /**
   * Writes data from the current position and moves the position backward by the number of bytes actually written.
   *
   * @param { ArrayBuffer } data - Buffer data to be written to the file.
   * @param { number } [length] - Length of the data to be written, in bytes. The default value is the buffer length.
   * @returns { number } Length of the data written, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  write(data: ArrayBuffer, length?: number): number;

  /**
   * Writes data to the specified position. The current position does not move.
   *
   * @param { number } position - Position to write data in the file, in bytes.
   * @param { ArrayBuffer } data - Buffer data to be written to the file.
   * @param { number } [length] - Length of the data to be written, in bytes. This parameter is optional. The default
   *     value is the buffer length.
   * @returns { number } Length of the data written, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  write(position: number, data: ArrayBuffer, length?: number): number;

  /**
   * Synchronizes data of the entire file mapping area to the disk file. This API uses a promise to return the result.
   * Note: If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * persistently.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msync(): Promise<void>;

  /**
   * Synchronizes data in the specified range of the file mapping area to the disk file. This API uses a promise to
   * return the result.
   * Note: If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * persistently.
   *
   * @param { number } position - Start position to synchronize, in bytes.
   * @param { number } length - Length of the data to be synchronized, in bytes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msync(position: number, length: number): Promise<void>;

  /**
   * Synchronizes data of the entire file mapping area to the disk file synchronously.
   * Note: If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * persistently.
   *
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msyncSync(): void;

  /**
   * Synchronizes data in the specified range of the file mapping area to the disk file synchronously.
   * Note: If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * persistently.
   *
   * @param { number } position - Start position to synchronize, in bytes.
   * @param { number } length - Length of the data to be synchronized, in bytes.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msyncSync(position: number, length: number): void;

  /**
   * Releases the file mapping area. This API uses a promise to return the result. After this API is called,
   * <b>position</b>, <b>limit</b>, and <b>capacity</b> are all reset to <b>0</b>, and no operation can be performed on
   * the <b>FileMapping</b> object.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unmap(): Promise<void>;

  /**
   * Releases the file mapping area synchronously. After this API is called, <b>position</b>, <b>limit</b>, and
   * <b>capacity</b> are all reset to <b>0</b>, and no operation can be performed on the <b>FileMapping</b> object.
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unmapSync(): void;
}

/**
 * Provides APIs for randomly reading and writing a stream based on offset pointers. Before invoking any API of
 * <b>RandomAccessFile</b>, you need to use <b>createRandomAccessFile()</b> to create a <b>RandomAccessFile</b> instance
 * synchronously or asynchronously.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare interface RandomAccessFile {

  /**
   * FD of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly fd: number;

  /**
   * Offset pointer to the <b>RandomAccessFile</b> instance, in bytes. This parameter indicates the current read/write
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly filePointer: number;

  /**
   * Sets the file offset pointer to specify the start position of subsequent read and write operations.
   *
   * @param { number } filePointer - Offset pointer to the <b>RandomAccessFile</b> instance, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  setFilePointer(filePointer: number): void;

  /**
   * Closes a <b>RandomAccessFile</b> object synchronously. After the object is closed, it cannot be used for read or
   * write operations.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  close(): void;

  /**
   * Writes data into a file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default, data is
   *     written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is
   *     a string. The default value is **'utf-8'**, which is the only value supported. [since 10 - 10]
   * @param { WriteOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the
   *     data is a string. The default value is **'utf-8'**, which is the only value supported. [since 11]
   * @returns { Promise<number> } Promise used to return the length of the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<number>;

  /**
   * Writes data to a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - A string or data from a buffer to be written to the file.
   * @param { AsyncCallback<number> } callback - Callback used to return the length of the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * Writes data to a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } options - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default, data is
   *     written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is
   *     a string. The default value is **'utf-8'**, which is the only value supported. [since 10 - 10]
   * @param { WriteOptions } options - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the
   *     data is a string. The default value is **'utf-8'**, which is the only value supported. [since 11]
   * @param { AsyncCallback<number> } callback - Callback used to return the result. The callback returns the length of
   *     the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<number>
  ): void;

  /**
   * Writes data to a file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default, data is
   *     written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is
   *     a string. The default value is **'utf-8'**, which is the only value supported. [since 10 - 10]
   * @param { WriteOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data, in bytes
   *     (it is determined by **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.<br>
   *     - **encoding** (string): format of the data to be encoded when the
   *     data is a string. The default value is **'utf-8'**, which is the only value supported. [since 11]
   * @returns { number } Length of the data written in the file, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): number;

  /**
   * Reads data from a file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 10 - 10]
   * @param { ReadOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 11]
   * @returns { Promise<number> } Promise used to return the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<number>;

  /**
   * Reads data from a file and returns the number of bytes read. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { ArrayBuffer } buffer - Buffer used for reading the file.
   * @param { AsyncCallback<number> } callback - Callback used to return the length of the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

  /**
   * Reads data from a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } options - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 10 - 10]
   * @param { ReadOptions } options - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 11]
   * @param { AsyncCallback<number> } callback - Callback used to return the result. The callback returns the length of
   *     the data read,
   *     in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<number>
  ): void;

  /**
   * Reads data from a file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 10 - 10]
   * @param { ReadOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**. [since 11]
   * @returns { number } Length of the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): number;

  /**
   * Obtains a <b>ReadStream</b> instance of this <b>RandomAccessFile</b> to read data from a stream file.
   *
   * @returns { ReadStream } <b>ReadStream</b> instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  getReadStream(): ReadStream;

  /**
   * Obtains a <b>WriteStream</b> instance of this <b>RandomAccessFile</b> to write data to a stream file.
   *
   * @returns { WriteStream } <b>WriteStream</b> instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  getWriteStream(): WriteStream;
}

/**
 * Defines a readable stream. You need to use [createReadStream]{@link fileIo.createReadStream} to create a
 * **ReadStream** instance, which is inherited from [stream.Readable]{@link @ohos.util.stream:stream.ReadableOptions}.
 *
 * The data obtained by **ReadStream** is a decoded string. Currently, only the UTF-8 format is supported.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare class ReadStream extends stream.Readable {
  /**
   * The ReadStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  constructor();

  /**
   * Number of bytes read by the readable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly bytesRead: number;

  /**
   * Path of the file corresponding to the readable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly path: string;

  /**
   * Adjusts the position of the readable stream offset pointer.
   *
   * @param { number } offset - Relative offset, in bytes.
   * @param { WhenceType } [whence] - Where to start the offset. The default value is <b>SEEK_SET</b>, which indicates
   *     the beginning of the file.
   * @returns { number } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  seek(offset: number, whence?: WhenceType): number;

  /**
   * Closes this readable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * Defines a writeable stream. You need to use [createWriteStream]{@link fileIo.createWriteStream} to create a
 *  **WriteStream** instance, which is inherited from [stream.Writable]{@link @ohos.util.stream:stream.Writable}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare class WriteStream extends stream.Writable {
  /**
   * Creates a <b>WriteStream</b> instance.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  constructor();

  /**
   * Number of bytes written to the writable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly bytesWritten: number;

  /**
   * Path of the file corresponding to the writeable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly path: string;

  /**
   * Adjusts the position of the writeable stream offset pointer.
   *
   * @param { number } offset - Relative offset, in bytes.
   * @param { WhenceType } [whence] - Where to start the offset. The default value is **SEEK_SET**, which indicates the
   *     beginning of the file.
   * @returns { number } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  seek(offset: number, whence?: WhenceType): number;

  /**
   * Closes this writeable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * <b>AtomicFile</b> is a class used to perform atomic read, write, and other operations on files.
 *
 * A temporary file is written and renamed to the original file location, which ensures file integrity. If the write
 * operation fails, the temporary file is deleted without modifying the original file content.
 *
 * You can call <b>finishWrite()</b> or <b>failWrite()</b> to write or roll back file content.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 15 dynamic
 */
export class AtomicFile {
  /**
   * Creates an **AtomicFile** instance for a file in a specified path.
   *
   * @param { string } path - Application sandbox path of the file.
   * @throws { BusinessError } 401 Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  constructor(path: string);

  /**
   * Obtains the file object through the **AtomicFile** object.
   *
   * The FD needs to be closed by calling **close()**.
   *
   * @returns { File } File object opened.
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900005 IO error
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  getBaseFile(): File;

  /**
   * Creates a **ReadStream** instance.
   *
   * @returns { ReadStream } **ReadStream** instance obtained.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  openRead(): ReadStream;

  /**
   * Reads all content of a file.
   *
   * @returns { ArrayBuffer } Full content of a file.
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  readFully(): ArrayBuffer;

  /**
   * Starts to write new file data in the **WriteStream** object returned.
   *
   * If the file does not exist, create a file.
   *
   * Call **finishWrite()** if the write operation is successful; call **failWrite()** if the write operation fails.
   *
   * @returns { WriteStream } **WriteStream** instance obtained.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  startWrite(): WriteStream;

  /**
   * Finishes writing file data when the write operation is complete.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  finishWrite(): void;

  /**
   * Rolls back the file after the file fails to be written.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  failWrite(): void;

  /**
   * Deletes the original files and temporary files of **AtomicFile**.
   *
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  delete(): void;
}

/**
 * Obtains detailed information of a file, including attributes such as the file size, permission mode, access time,
 * and modification time. Before calling an API of the <b>Stat</b> class, use [stat()]{@link fileIo.stat} to create a
 *  <b>Stat</b> instance.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface Stat {
  /**
   * File ID. Different files on the same device have different **ino**s.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly ino: bigint;
  /**
   * File permissions. The meaning of each bit is as follows:
   *
   * Note: The following values are in octal format. The return values are in decimal format. You need to convert the
   * values.
   *
   * - **0o400**: The user has the read permission on a regular file or a directory entry.
   * - **0o200**: The user has the permission to write a regular file or create and delete a directory entry.
   * - **0o100**: The user has the permission to execute a regular file or search for the specified path in a directory.
   * - **0o040**: The user group has the read permission on a regular file or a directory entry.
   * - **0o020**: The user group has the permission to write a regular file or create and delete a directory entry.
   * - **0o010**: The user group has the permission to execute a regular file or search for the specified path in a
   * directory.
   * - **0o004**: Other users have the permission to read a regular file or read a directory entry.
   * - **0o002**: Other users have the permission to write a regular file or create and delete a directory entry.
   * - **0o001**: Other users have the permission to execute a regular file or search for the specified path in a
   * directory.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly mode: number;
  /**
   * ID of the file owner.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly uid: number;
  /**
   * ID of the user group of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly gid: number;
  /**
   * File size, in bytes. This parameter is valid only for regular files.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly size: number;
  /**
   * Time when the file was last accessed. The value is the number of seconds elapsed since 00:00:00 on January 1, 1970.
   *
   * **Note**: Currently, user data partitions are mounted in **noatime** mode by default, and **atime** update is
   * disabled.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly atime: number;
  /**
   * Time when the file content was last modified. The value is the number of seconds elapsed since 00:00:00 on January
   * 1, 1970.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly mtime: number;
  /**
   * Time when the file metadata was last modified. The value is the number of seconds elapsed since 00:00:00 on January
   * 1, 1970.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly ctime: number;

  /**
   * Time of the last access to the file. The value is the number of nanoseconds elapsed since 00:00:00 on January 1, 19
   * 70.
   *
   * **Note**: Currently, user data partitions are mounted in **noatime** mode by default, and **atime** update is
   * disabled.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly atimeNs?:bigint;

  /**
   * Time of the last modification to the file. The value is the number of nanoseconds elapsed since 00:00:00 on January
   * 1, 1970.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly mtimeNs?:bigint;

  /**
   * Time of the last status change of the file. The value is the number of nanoseconds elapsed since 00:00:00 on
   * January 1, 1970.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly ctimeNs?:bigint;

  /**
   * File location, which indicates whether the file is stored in a local device or in the cloud.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly location: LocationType;

  /**
   * Number of blocks allocated to the file, in 512-byte units.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.1.0 dynamic
   */
  readonly blocks?: number;

  /**
   * Checks whether this file is a block special file. A block special file supports access by block only, and it is
   * cached when accessed.
   *
   * @returns { boolean } Whether the file is a block special file. The value **true** means the file is a block special
   *     file; the value **false** means the file is not a block special file.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isBlockDevice(): boolean;
  /**
   * Checks whether this file is a character special file. A character special device supports random access, and it is
   * not cached when accessed.
   *
   * @returns { boolean } Whether the file is a character special device. The value **true** means the file is a
   *     character special device; the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isCharacterDevice(): boolean;
  /**
   * Checks whether this file is a directory.
   *
   * @returns { boolean } Whether the file is a directory. The value **true** means the file is a directory; the value
   *     **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isDirectory(): boolean;
  /**
   * Checks whether this file is a named pipe (or FIFO). Named pipes are used for inter-process communication.
   *
   * @returns { boolean } Whether the file is an FIFO. The value **true** means the file is an FIFO; the value **false**
   *     means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isFIFO(): boolean;
  /**
   * Checks whether this file is a regular file.
   *
   * @returns { boolean } Whether the file is a regular file. The value **true** means that the file is a regular file;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isFile(): boolean;
  /**
   * Checks whether this file is a socket.
   *
   * @returns { boolean } Whether the file is a socket. The value **true** means that the file is a socket; the value
   *     **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isSocket(): boolean;
  /**
   * Checks whether this file is a symbolic link.
   *
   * @returns { boolean } Whether the file is a symbolic link. The value **true** means that the file is a symbolic link
   *     ; the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isSymbolicLink(): boolean;
}

/**
 * Provides APIs for stream operations, such as reading and writing data streams of files. After using an API of the
 * <b>Stream</b> class, you need to call <b>close</b> to close the file stream. Before calling an API of the
 * <b>Stream</b> class, you need to create a <b>Stream</b> instance by using [createStream]{@link fileIo.createStream}
 *  or [fdopenStream]{@link fileIo.fdopenStream} synchronously or asynchronously.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare interface Stream {
  /**
   * Closes the file stream. After the stream is closed, it cannot be used for read or write operations. This API uses a
   * promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  close(): Promise<void>;

  /**
   * Closes the file stream. After the stream is closed, it cannot be used for read or write operations. This API uses
   * an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file stream is closed
   *     successfully, <b>err</b> is <b>undefined</b>; otherwise, <b>err</b> is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  close(callback: AsyncCallback<void>): void;

  /**
   * Closes the file stream synchronously. After the stream is closed, it cannot be used for read or write operations.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  closeSync(): void;

  /**
   * Flushes all data from this stream. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise used to return the file stream flushed.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  flush(): Promise<void>;

  /**
   * Flushes the file stream. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback invoked when the stream is asynchronously flushed.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  flush(callback: AsyncCallback<void>): void;

  /**
   * Flushes the file stream. This API returns the result synchronously.
   *
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  flushSync(): void;

  /**
   * Writes data to a stream file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
   *     By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 11]
   * @returns { Promise<number> } Promise used to return the length of the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): Promise<number>;

  /**
   * Writes data to a stream file and returns the number of bytes written. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { ArrayBuffer | string } buffer - A string or data from a buffer to be written to the file.
   * @param { AsyncCallback<number> } callback - Callback used to return the length of the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * Writes data to a stream file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } options - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } options - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
   *     By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 11]
   * @param { AsyncCallback<number> } callback - Callback used to return the result. The callback returns the length of
   *     the data written, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(
      buffer: ArrayBuffer | string,
      options: WriteOptions,
      callback: AsyncCallback<number>
  ): void;

  /**
   * Writes data to a stream file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to write, in bytes. The default value is the buffer length.<br>
   *     - **offset** (number): start position to write the data in the file, in bytes. This parameter is optional.
   *     By default, data is written from the current position.<br>
   *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 11]
   * @returns { number } Length of the data written in the file, in bytes.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  writeSync(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): number;

  /**
   * Reads data from a stream file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 9 - 10]
   * @param { ReadOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 11]
   * @returns { Promise<number> } Promise used to return the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): Promise<number>;

  /**
   * Reads data from a stream file and returns the number of bytes read. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used for reading the file.
   * @param { AsyncCallback<number> } callback - Callback used to return the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

  /**
   * Reads data from a stream file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } options - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 9 - 10]
   * @param { ReadOptions } options - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 11]
   * @param { AsyncCallback<number> } callback - Callback used to return the result. The callback returns the data read,
   *     in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(
      buffer: ArrayBuffer,
      options: ReadOptions,
      callback: AsyncCallback<number>
  ): void;

  /**
   * Reads data from a stream file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { object } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 9 - 10]
   * @param { ReadOptions } [options] - The options are as follows:<br>
   *     - **length** (number): length of the data to read , in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position. [since 11]
   * @returns { number } Length of the data read, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  readSync(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): number;
}

/**
 *
 * Defines a watch event listener. When the monitored file or directory changes, a callback is triggered.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface WatchEventListener {
  /**
   * Callback invoked when the monitored file or directory changes.
   *
   * @param { WatchEvent } event - Event for the callback to invoke.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  (event: WatchEvent): void;
}

/**
 * Defines the event to observe.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface WatchEvent {
  /**
   * Sandbox path of the file to observe. The sandbox path contains the file name.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly fileName: string;

  /**
   * Events to observe. Multiple events can be separated by vertical bars (\|). <br/>
   * - <b>0x1: IN_ACCESS</b>: A file is accessed. <br/>
   * - <b>0x2: IN_MODIFY</b>: The file content is modified. <br/>
   * - <b>0x4: IN_ATTRIB</b>: Metadata is changed. <br/>
   * - <b>0x8: IN_CLOSE_WRITE</b>: A file is opened, written with data, and then closed. <br/>
   * - <b>0x10: IN_CLOSE_NOWRITE</b>: A file or directory is opened and then closed without being written. <br/>
   * - <b>0x20: IN_OPEN</b>: A file or directory is opened. <br/>
   * - <b>0x40: IN_MOVED_FROM</b>: A file in the observed directory is moved. <br/>
   * - <b>0x80: IN_MOVED_TO</b>: A file in the observed directory is moved. <br/>
   * - <b>0x100: IN_CREATE</b>: A file or directory is created in the observed directory. <br/>
   * - <b>0x200: IN_DELETE</b>: A file or directory is deleted from the observed directory. <br/>
   * - <b>0x400: IN_DELETE_SELF</b>: The observed directory is deleted. After the directory is deleted,
   * the listening stops. <br/>
   * - <b>0x800: IN_MOVE_SELF</b>: The observed file or directory is moved. After the file or directory is moved,
   * the listening continues. <br/>
   * - <b>0xfff: IN_ALL_EVENTS</b>: All events.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly event: number;

  /**
   * Cookie bound with the event.
   *
   * Currently, only the **IN_MOVED_FROM** and **IN_MOVED_TO** events are supported. The **IN_MOVED_FROM** and
   * **IN_MOVED_TO** events of the same file have the same **cookie** value.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly cookie: number;
}

/**
 * Provides APIs for observing the changes of files or directories. Before using the APIs of **Watcher**, call
 * **createWatcher()** to create a **Watcher** object.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface Watcher {
  /**
   * Starts listening for file or directory change events.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  start(): void;

  /**
   * Stops listening for file or directory change events and removes the <b>Watcher</b> object.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  stop(): void;
}

/**
 * Represents the information obtained by the **ReaderIterator** object.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
export interface ReaderIteratorResult {
  /**
   * Whether the iteration is complete. The value **true** means the iteration is complete; the value **false** means
   * the opposite.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  done: boolean;

  /**
   * File text content read line by line.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  value: string;
}

/**
 * Provides a **ReaderIterator** object. Before calling APIs of **ReaderIterator**, you need to use **readLines()** to
 * create a **ReaderIterator** instance.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare interface ReaderIterator {
  /**
   * Obtains the **ReaderIterator** result.
   *
   * @returns { ReaderIteratorResult } **ReaderIteratorResult** object obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  next(): ReaderIteratorResult;
}

/**
 * Defines the file filtering configuration used by **listFile()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface Filter {
  /**
   * Locate files that fully match the specified file name extensions, which are of the OR relationship.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  suffix?: Array<string>;
  /**
   * Locate files that fuzzy match the specified file names, which are of the OR relationship. Currently, only the
   * wildcard * is supported.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayName?: Array<string>;
  /**
   * Locate files that fully match the specified MIME types, which are of the OR relationship. This parameter is
   * reserved.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mimeType?: Array<string>;
  /**
   * Locate files that are greater than the specified size, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fileSizeOver?: number;
  /**
   * Locate files whose last modification time is the same or later than the specified time.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lastModifiedAfter?: number;
  /**
   * Whether to exclude the files already in <b>Media</b>. <b>true</b>: Exclude the files already in <b>Media</b>.
   * <b>false</b>: Do not exclude the files already in <b>Media</b>. This parameter is reserved.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  excludeMedia?: boolean;
}

/**
 * Defines conflicting file information used in **copyDir()** or **moveDir()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface ConflictFiles {
  /**
   * Path of the source file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  srcFile: string;

  /**
   * Path of the destination file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  destFile: string;
}

/**
 * Defines the options used in **readLines()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
export interface Options {
  /**
   * File encoding format. It is optional.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  encoding?: string;
}

/**
 * Defines the options used in **read()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface ReadOptions {
  /**
   * Position to read data in the file, in bytes. This parameter is optional. By default, data is read from the current
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: number;
  /**
   * Length of the data to read, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  length?: number;
}

/**
 * Defines the options used in <b>readText()</b>. It inherits from [ReadOptions]{@link ReadOptions}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * Format of the data to be encoded. This parameter is valid only when the data type is string. The default value is
   * **'utf-8'**, which is the only value supported.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  encoding?: string;
}

/**
 * Defines the options used in <b>write()</b>. It inherits from [Options]{@link Options}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface WriteOptions extends Options {
  /**
   * Position to write data in the file, in bytes. This parameter is optional. By default, data is written from the
   * current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: number;
  /**
   * Length of the data to write, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  length?: number;
}

/**
 * Defines the options used in <b>listFile()</b>.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @atomicservice
 * @since 11 dynamic
 */
export interface ListFileOptions {
  /**
   * Whether to list all files in the subdirectories recursively. This parameter is optional. The default value is
   * **false**. If **recursion** is **false**, the names of files and directories that meet the filtering requirements
   * in the current directory are returned. If **recursion** is **true**, relative paths (starting with"/") of all files
   * that meet the specified conditions in the current directory are returned.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  recursion?: boolean;

  /**
   * Number of file names to list. This parameter is optional. The default value is **0**, which means to list all
   * files.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  listNum?: number;

  /**
   * File filtering configuration. This parameter is optional. It specifies the file filtering conditions.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  filter?: Filter;
}

/**
 * Describes a file name filter, which can be used to customize file name filtering rules.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
export interface FileFilter {
  /**
   * Filters files of the [listFileExt]{@link listFileExt} or [listFileExtSync]{@link listFileExtSync} API and
   * determines whether a specified file name should be included in the returned file list.
   *
   * Note: This function is frequently called. Do not perform time-consuming operations, such as file I/O operations and
   * network requests.
   *
   * @param { string } name - Name or relative path of the file to be filtered. In recursive mode, the value is a
   *     relative file path, which starts with a slash (/).
   * @returns { boolean } Whether the file is included in the returned file list. <b>true</b>: The file is included.
   *     <b>false</b>: The file is not included.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  filter(name: string): boolean;
}

/**
 * Defines the options used in <b>listFileExt</b>.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
export interface ListFileExtOptions {
  /**
   * Whether to list all files in subfolders recursively. The default value is <b>false</b>.
   * <br><b>false</b>: The names of files and directories that meet the filtering requirements in the current
   * directory are returned. <br><b>true</b>: Relative paths (starting with /) of all files that meet the
   * filtering requirements in the directory are returned.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  recursion?: boolean;

  /**
   * Number of file names to be listed. The default value is <b>0</b>, indicating that all files are listed.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  listNum?: number;

  /**
   * File name filtering rule. The default value is empty, indicating that no filtering is performed.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  fileFilter?: FileFilter;
}

/**
 * Defines the options used in **createRandomAccessFile()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface RandomAccessFileOptions {
  /**
   * Start offset position of the file, in bytes. This parameter is optional. The default value is the current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;

  /**
   * End offset position of the file, in bytes. This parameter is optional. The default value is the end of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  end?: number;
}

/**
 * Defines the options used in **createReadStream()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface ReadStreamOptions {
  /**
   * Start position to read the data, in bytes. This parameter is optional. By default, data is read from the current
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;

  /**
   * End position to read the data, in bytes. This parameter is optional. The default value is the end of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  end?: number;
}

/**
 * Defines the options used in **createWriteStream()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface WriteStreamOptions {
  /**
   * [Option]{@link fileIo.OpenMode} for creating the writeable stream.
   * You must specify one of the following options. By default, the write-only mode is used.
   * - **OpenMode.READ_ONLY(0o0)**: read-only.
   * - **OpenMode.WRITE_ONLY(0o1)**: write-only.
   * - **OpenMode.READ_WRITE(0o2)**: read/write.
   * You can also specify the following options, separated by a bitwise OR operator (|). By default, no additional
   * options are given.
   * - **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
   * - **OpenMode.TRUNC(0o1000)**: If the file exists and is opened in write mode, truncate the file length to 0.
   * - **OpenMode.APPEND(0o2000)**: Open the file in append mode. New data will be added to the end of the file.
   * - **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special file, or
   * character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
   * - **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write permission
   * is not allowed.
   * - **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
   * - **OpenMode.SYNC(0o4010000)**: Open the file in synchronous I/O mode.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  mode?: number;
  /**
   * Start position to write the data, in bytes. This parameter is optional. By default, data is written from the
   * current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;
}

/**
 * Provides APIs for observing events. listening for the distributed file system status.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
export interface DfsListeners {
  /**
   * Called to return the specified status. Its parameters are passed in by
   * [connectDfs](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioconnectdfs12).
   *
   * @param { string } networkId - Network ID of the device.
   * @param { number } status - Status code of the distributed file system. The status code is the error code returned
   *     by **onStatus** invoked by **connectDfs**. If the device is abnormal when **connectDfs()** is called,
   *     **onStatus** will be called to return the error code:<br>-
   *     [13900046](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md#13900046-connection-interrupted-by-software)
   *     : The connection is interrupted by software.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  onStatus(networkId: string, status: number): void;
}

/**
 * Enumerates file memory mapping modes.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum MappingMode {
  /**
   * Read-only mode. The file mapping area is not writable. An exception is thrown when the file mapping area is
   * modified.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  READ_ONLY = 0,

  /**
   * Read/Write mode. The modification is written to the file mapping area and then synchronized to the file by the
   * operating system (non-real-time).
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  READ_WRITE = 1,

  /**
   * Private mode. It is a copy-on-write mapping mechanism. Modifications to the mapping area are visible only to the
   * current process and do not affect the raw file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PRIVATE = 2
}

/**
 * Enumerates the types of the relative offset position used in **lseek()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare enum WhenceType {
  /**
   * Beginning of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_SET = 0,

  /**
   * Current offset position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_CUR = 1,

  /**
   * End of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_END = 2
}

/**
 * Enumerates the file locations.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare enum LocationType {
  /**
   * The file is stored in a local device.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  LOCAL = 1 << 0,

  /**
   * The file is stored in the cloud.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  CLOUD = 1 << 1
}

/**
 * Enumerates the access modes to verify. If this parameter is left blank, the system checks whether the file exists.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AccessModeType {
  /**
   * Whether the file exists.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  EXIST = 0,

  /**
   * Verify the write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  WRITE = 2,

  /**
   * Verify the read permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  READ = 4,

  /**
   * Verify the read/write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  READ_WRITE = 6
}

/**
 * Enumerates the locations of the file to verify.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare enum AccessFlagType {
  /**
   * The file is stored locally.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  LOCAL = 0
}

export default fileIo;
