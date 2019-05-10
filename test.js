const obj1 = {
    num :2,
    name : "test",
};
const objWithObject = {
    num : 2,
    name : "withObject",
    child : obj1,
}
const array = [1,2,3,4,5];
const array2 = [-1,-4,-1000000, 0];
const arrayWithObject = [obj1, objWithObject];
const arrayEmpty = [];

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
            a : arrayWithObject,
            exp : true,
        },
        {
            name : "array with objects ",
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
    for(let i=0; i<=td.length; i++) {
    it(`test is this array  `+td[i].name, function () {

            const act = cP(td[i].a);
            const expected = td[i].exp;
            assert.equal(act, expected);
    });
    }


 });

