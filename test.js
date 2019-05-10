const obj1 = {
    num :2,
    name : "test",
};

const objWithObject = {
    num : 2,
    name : "withObject",
    child : obj1,
}

const testInt = 5;
const  testWord = "test";
const array = [1,2,3,4,5];
const array2 = [-1,-4,-1000000, 0];
const arrayWithObject = [obj1, objWithObject];
const arrayEmpty = [];
const arrayPushedTestword = [1,2,3,4,5,"return pushed Array"];
const popedArray = [2,3,4,5];

describe("tests is this array", () => {
    const td = [
        {
            name : "just array",
          a : array,
          exp : true,
        },
        {
            name : "array with (-) & 0 ",
            a : array2,
            exp : true,
        },
        {
            name : "array with objects ",
            a : arrayWithObject,
            exp : true,
        },
        {
            name : "empty array ",
            a : arrayEmpty,
            exp : true,
        },
        {
            name : "no array, just int",
            a : 1,
            exp : false,
        },
        {
            name : "no array, just String",
            a: "test",
            exp : false,
        }
    ]
    for(let i=0; i<td.length; i++) {
    it('test is this array  '+td[i].name, function () {

            const act = checkParamAsArray(td[i].a);
            const expected = td[i].exp;
            assert.equal(act, expected);
    });
    }


 });

describe("tests getSize of array", () => {
    const td2 = [
        {
            name : "just array",
            a : array,
            exp : 5,
        },
        {
            name : "array with (-) & 0 ",
            a : array2,
            exp : 4,
        },
        {
            name : "array with objects ",
            a : arrayWithObject,
            exp : 2,
        },
        {
            name : "empty array ",
            a : arrayEmpty,
            exp : 0,
        }

    ]
    for(let i=0; i<td2.length; i++) {
        it(`test getSize  `+td2[i].name, function () {

            const act = getSize(td2[i].a);
            const expected = td2[i].exp;
            assert.equal(act, expected);
        });
    }


});

describe("tests of doPush ", () => {
    const td = [
        {
            name : "add num to just array ",
            a : array,
            b : testInt,
            exp : 6,
        },
        {
            name : "add num to array with (-) & 0 ",
            a : array2,
            b :testWord,
            exp : 5,
        },
        {
            name : "add num to array with objects ",
            a : arrayWithObject,
            b : testInt,
            exp : 3,
        },
        {
            name : "add object to empty array ",
            a : arrayEmpty,
            b : obj1,
            exp : 1,
        },

    ]
    for(let i=0; i<td.length; i++) {
        it('tests of doPush   '+td[i].name, function () {

            const act = doPush(td[i].a);
            const expected = td[i].exp;
            assert.equal(act, expected);
        });
    }

        it(`test add String to array. Check all elements `, function () {
            for(let i = 0; i<arrayWithObject.length; i++) {
                const act = doPush(array, "return pushed Array")[i];
                const exp = arrayPushedTestword[i];
                assert.equal(act, exp);
            }
        });

});