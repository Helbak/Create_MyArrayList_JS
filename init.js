const myArray = {
    /*
remove
toString
     */
    array: [1, 2, 3, 4],
    doSetArray: function (array) {
        if (array == null) {
            return false;
        }
        if (array.length >= 0 & typeof array != 'string') {
            this.array = array;
            return this.array;
        }
        return false;
    },
    doGetSize: function () {
        let size = 0;
        this.array.forEach(function (element) {
            size++;
        })
        return size;
    },
    //Добавление элемента в конец массива
    doPush: function (element) {
        if (element == null) {
            return false;
        }
        this.array[this.array.length] = element;
        return element;
    },
//Добавление элемента в начало массива
    doUnShift: function (element) {
        if (element == null) {
            return false;
        }
        for (let i = this.doGetSize(); i > 0; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = element;
        return this.array;
    },
    //Удаление последнего элемента массива
    doPop: function () {
        if (this.doGetSize() == 0) {
            return false;
        }
        delete this.array[this.doGetSize() - 1];
        // this.array.length = this.doGetSize() - 1;
        return this.array;
    },
    //Удаление первого элемента массива
    doShift: function () {
        if (this.doGetSize() == 0) {
            return false;
        }
        for(let i=0;i<this.doGetSize()-1; i++){
            this.array[i]=this.array[i+1]
        }
        delete this.array[this.doGetSize()-1];
        return this.array;
    },
    doSort: function () {
        if(this.doGetSize==0){
            return false;
        }

        let count = 0;
        for(let i=0; i<=this.doGetSize(); i++){
            if(this.array[i]/0==Infinity){
                count++;
            }
        }
        if(count<this.doGetSize()){
            return false;
        }
        for (i = 0; i < this.doGetSize() - 1; i++) {
            for (j = 0; j < this.doGetSize(); j++) {
                if (this.array[j] > this.array[j + 1]) {
                    var temp =this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
        return this.array;
    },
    //Удаление нескольких элементов, начиная с определённого индекса
doSplice: function (pos, amount){
    if(this.doGetSize()<amount+pos){
        return false;
    }
    for(let i=pos; i<=pos+amount; i++){
        this.array[i]=this.array[i+amount];
    }
    // let oldSize = this.doGetSize();
    // for(let i = oldSize; i>=oldSize-amount; i--){
    //     delete this.array[i];
    // }
    this.array.length=this.array.length-amount;
    return this.array;
}













    // toString: function () {
    //     return `${this.name} ${this.age} ${this.gender}`;
    // }

}






