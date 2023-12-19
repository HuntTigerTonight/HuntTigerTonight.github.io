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


/**深浅拷贝 */

const jjj = [{info: {name: '1', age: 18, work: {f: '1', s: 2}}}]

function deepClone(obj) {
    return new Promise(resolve => {
        const {port1, port2} = new MessageChannel();
        port1.postMessage(obj);
        port2.onmessage = e => resolve(e.data);
    })
}

const b = deepClone(jjj)

console.log(b === jjj)

/**防抖 */
function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

/**节流 */
function throttle(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null;
            }, delay)
        }
    }
}
