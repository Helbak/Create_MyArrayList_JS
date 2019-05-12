var testInt = 1000000;
var testString = "test";
var testNull = null;
var testFalse = false;
var obj1 = {
    a: 1,
    b: "abc",
    c: "qwe",
};
var obj2 = {
    a: obj1,
    b: 1000000,
    c: "qwe",
}
arrInt = [1, 20, 300, 4000, 50000];
arrIntUnPushedTestInt = [1, 20, 300, 4000, 50000, 1000000];
arrString = ['a', 'b', 'c', 'd', 'e', 'f'];

arrObj = [obj1, obj2];
arrEmpty = [];

describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doSetArray (arrEmpty)`, function () {
        const act = myArray.doSetArray(arrEmpty)
        const exp = arrEmpty;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (arrInt)`, function () {
        const act = myArray.doSetArray(arrInt)
        const exp = arrInt;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (arrString)`, function () {
        const act = myArray.doSetArray(arrString)
        const exp = arrString;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (arrObj)`, function () {
        const act = myArray.doSetArray(arrObj)
        const exp = arrObj;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (testInt)`, function () {
        const act = myArray.doSetArray(testInt)
        const exp = false;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (testString)`, function () {
        const act = myArray.doSetArray(testString)
        const exp = false;
        assert.deepEqual(act, exp);
    });
    it(`test doSetArray (testNull)`, function () {
        const act = myArray.doSetArray(testNull)
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test doSetArray (testFalse)`, function () {
        const act = myArray.doSetArray(testFalse)
        const exp = false;
        assert.equal(act, exp);
    });


});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test funcGetSize (arrEmpty)`, function () {
        myArray.doSetArray(arrEmpty)
        const act = myArray.doGetSize();
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test funcGetSize (arrString)`, function () {
        myArray.doSetArray(arrString)
        const act = myArray.doGetSize();
        const exp = 6;
        assert.equal(act, exp);
    });
    it(`test funcGetSize (arrObj)`, function () {
        myArray.doSetArray(arrObj)
        const act = myArray.doGetSize();
        const exp = 2;
        assert.equal(act, exp);
    });
    it(`test funcGetSize (arrInt)`, function () {
        myArray.doSetArray(arrInt)
        const act = myArray.doGetSize();
        const exp = 5;
        assert.equal(act, exp);
    });
});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doPush (testInt)`, function () {
        const act = myArray.doPush(testInt);
        const exp = testInt;
        assert.equal(act, exp);
    });
    it(`test doPush (testString)`, function () {
        const act = myArray.doPush(testString);
        const exp = testString;
        assert.equal(act, exp);
    });
    it(`test doPush (testNull)`, function () {
        const act = myArray.doPush(testNull);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test doPush (obj1)`, function () {
        const act = myArray.doPush(obj1);
        const exp = obj1;
        assert.deepEqual(act, exp);
    });
    it(`test doPush (arrObj)`, function () {
        const act = myArray.doPush(arrObj);
        const exp = arrObj;
        assert.deepEqual(act, exp);
    });

});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doUnShift (testInt)`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000])
        const act = myArray.doUnShift(1000000);
        const exp = [1000000, 1, 20, 300, 4000, 50000];
        assert.deepEqual(act, exp);
    });
    it(`test doUnShift (addObject)`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000])
        const act = myArray.doUnShift(obj1);
        const exp = [obj1 , 1, 20, 300, 4000, 50000];
        assert.deepEqual(act, exp);
    });
    it(`test doUnShift (testEmptyArray)`, function () {
        myArray.doSetArray([])
        const act = myArray.doUnShift(1000000);
        const exp = [1000000];
        assert.deepEqual(act, exp);
    });


});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doPop ()`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000])
        const act = myArray.doPop();
        const exp = [1, 20, 300, 4000];
        assert.deepEqual(act, exp);
    });
    it(`test doPop empty array()`, function () {
        myArray.doSetArray([])
        const act = myArray.doPop();
        const exp = false;
        assert.deepEqual(act, exp);
    });
    it(`test doPop length =1()`, function () {
        myArray.doSetArray([1])
        const act = myArray.doPop();
        const exp = [];
        assert.deepEqual(act, exp);
    });

});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doShift ()`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000])
        const act = myArray.doShift();
        const exp = [20, 300, 4000, 50000];
        assert.deepEqual(act, exp);
    });
    it(`test doShift (length = 1)`, function () {
        myArray.doSetArray([1])
        const act = myArray.doShift();
        const exp = [];
        assert.deepEqual(act, exp);
    });
    it(`test doShift (length = 0)`, function () {
        myArray.doSetArray([])
        const act = myArray.doShift();
        const exp = false;
        assert.deepEqual(act, exp);
    });

});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test doSort (Array int)`, function () {
        myArray.doSetArray([4000, 50000, 1, 20, 300]);
        const act = myArray.doSort();
        const exp = [1,20, 300, 4000, 50000];
        assert.deepEqual(act, exp);
    });
    it(`test doSort (Array int)`, function () {
        myArray.doSetArray(arrString);
        const act = myArray.doSort();
        const exp =false;
        assert.deepEqual(act, exp);
    });
    it(`test doSort (Array obj)`, function () {
        myArray.doSetArray(arrObj);
        const act = myArray.doSort();
        const exp =false;
        assert.deepEqual(act, exp);
    });
    it(`test doSort (Array empty)`, function () {
        myArray.doSetArray([]);
        const act = myArray.doSort();
        const exp =[];
        assert.deepEqual(act, exp);
    });
    it(`test doSort (Array empty)`, function () {
        myArray.doSetArray([2,2,2,2,obj1]);
        const act = myArray.doSort();
        const exp =false;
        assert.deepEqual(act, exp);
    });
});
describe(" test funcGetSize", () => {
    beforeEach(() => {
        console.log('running before each test')
    })
    it(`test Splice (Array int)`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000]);
        const act = myArray.doSplice(1,2);
        const exp = [1, 4000, 50000];
        assert.deepEqual(act, exp);
    });
    it(`test Splice (Array int)`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000]);
        const act = myArray.doSplice(2,3);
        const exp = [1, 20];
        assert.deepEqual(act, exp);
    });
    it(`test Splice (amount+pos>length)`, function () {
        myArray.doSetArray([1, 20, 300, 4000, 50000]);
        const act = myArray.doSplice(2,4);
        const exp = false;
        assert.deepEqual(act, exp);
    });
    it(`test Splice (amount+pos>length)`, function () {
        myArray.doSetArray([]);
        const act = myArray.doSplice(0,1);
        const exp = false;
        assert.deepEqual(act, exp);
    });

});