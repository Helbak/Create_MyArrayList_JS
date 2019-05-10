// const array = [1,2,3,4,5];
// const nameOfArray = "ara";
const myArray = {
    nameAr: nameOfArray,
    arr: array,
    funcCheckParam: checkParamAsArray(arr),
    funcGetSize: getSize(arr),
    funcDoPop: doPop(arr),
    funcDoPush: doPush(arr, newElement),

}

function checkParamAsArray(arr) {
    // if(arr.length>=0 || isArray(arr)){
    if (arr.constructor === Array) {

        return true;
    }
    return false;
}

function getSize(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}


// этот метод извлекает первый элемент массива и возвращает его.
//     При этом возвращенный элемент удаляется из массива, а длина массива уменьшается на единицу.
//     Если массив пустой, то метод pop() возвращает значение undefined, при этом массив так и остается пустым

function doPop(arr, task) {

    if (arr.funcGetSize == 0) {
        return undefined;
    }
    const firstDead = arr[0];
    arrayTemp = [arr.funcGetSize - 1];
    for (let i = 1; i < arr.funcGetSize; i++) {
        arrayTemp[i - 1] = arr[i];
        delete arr[i];
    }
    for (let i = 0; i < arrayTemp.length; i++) {
        arr[i] = arrayTemp[i];
        delete arrayTemp[i];
    }
    if(task = "return popedArray"){
        return arr;
    }
    return firstDead;
}


// Метод добавляет элементы, начиная с текущей длины length и возвращает новую, увеличенную длину массива.
function doPush(arr, newElement) {
    arr[arr.length] = newElement;
    if (arr[arr.length - 1] == "return pushed Array") {
        return arr;
    }
    return arr.length;

}