// const array = [1,2,3,4,5];
// const nameOfArray = "ara";
var myArray = {
    name: null,
    arr: null,
    funcCheckParamArray: checkParamAsArray(arr),
    funcSetArray: setArray() (arr) ,
    funcSetName: setName(name),
    funcGetSize: getSize(arr),
    funcDoPop: doPop(arr, "justPop"),
    funcDoPush: doPush(arr, newElement),

}

function setName(name) {
    if (name === String(name)) {
        this.name = name;
        return name;
    }
    return false;
}

function setArray(arr) {
    if (checkParamAsArray(arr) == true) {
        this.arr = arr;
        return arr;
    }
    return false;
}

function checkParamAsArray(arr) {
    if(arr==null){
        return  false;
    }
    if (arr.constructor === Array ) {
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

    if (arr.length == 0) {
        return false;
    }
    const firstDead = arr[0];

    let arrayTemp = [];

    for (let i = 1; i < arr.length; i++) {
        arrayTemp[i - 1] = arr[i];
        delete arr[i];

    }
    // delete arr;

    arrBack = [];
    for (let i = 0; i < arrayTemp.length; i++) {
        arrBack[i] = arrayTemp[i];
        delete arrayTemp[i];
    }
    if (task = "forTest") {
        const backFromDoPop = {
            ar : arrBack,
            size : arrBack.length,
            first : firstDead,
        }
        return backFromDoPop;
    }
    if(task = "justPop") {
        return firstDead;
    }
}


// Метод добавляет элементы, начиная с текущей длины length и возвращает новую, увеличенную длину массива.
function doPush(arr, newElement) {
    arr[arr.length] = newElement;
    if (arr[arr.length - 1] == "return pushed Array") {
        return arr;
    }
    return arr.length;

}