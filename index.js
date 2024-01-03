/**冒泡排序 */
const arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// bubbleSort(arr)

/**选择排序 */
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

// selectSort(arr)

/**
 * 插入排序
 * 默认第一个数是排序的，其他数是未排序的
 * */


function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
}

// insertSort(arr)

/**快速排序 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}


console.log(quickSort(arr))


console.log(arr)


/**深拷贝 */

const jjj = [{ info: { name: '1', age: 18, work: { f: '1', s: 2 } } }]

function deepClone(obj) {
    return new Promise(resolve => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(obj);
        port2.onmessage = e => resolve(e.data);
    })
}

function deep_clone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let cloneObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deep_clone(obj[key])
        }
    }
    return cloneObj
}

const b = deepClone(jjj)

console.log(b === jjj)

/**
 * 防抖
 * @param {Function} fn 
 * @param {number} delay 
 * @returns 
 */
function debounce(fn, delay = 500) {
    let timer = null;
    return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

/**
 * 节流
 * @param {Function} fn 
 * @param {number} delay 
 * @returns 
 */
function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null;
        }, delay)
    }
}

/**手写bind、call、apply */
Function.prototype.myBind = function (context) {
    const _this = this
    // let args = Array.prototype.slice.call(arguments, 1);
    let args = [...arguments].slice(1)
    return function () {
        _this.apply(context, args)
    }
}

Function.prototype.myCall = function (context) {
    context.fn = this
    const args = [...arguments].slice(1)
    const res = context.fn(...args)
    delete context.fn
    return res
}

Function.prototype.myApply = function (context) {
    context.fn = this
    const args = [...arguments][1]
    const res = context.fn(...args)
    delete context.fn
    return res
}

const obj = {
    name: 1,
    age: 2
}

function fn(a, b, c) {
    console.log(this)
    console.log(a)
    console.log(b)
    console.log(c)
}

fn.myApply(obj, [1, 2, 3])
