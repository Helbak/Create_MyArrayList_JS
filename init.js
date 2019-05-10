// const myArray = {
//     name : null,
//     arr : null,
// checkParam : cP(arr),
//
// }
function cP(arr) {
   // if(arr.length>=0 || isArray(arr)){
       if(arr.constructor === Array){

       return true;
   }
   return false;
}