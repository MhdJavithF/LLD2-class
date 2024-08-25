// const names = ['atu','kav','papa'];
// console.log(names);
// function convertUp(list){
//     for(let i = 0; i < list.length; i++){
//         list[i] = list[i].toUpperCase();
//     }
//     return list;
// }
// console.log(convertUp(names.slice()));
// console.log(names);

const data = [['name', 'me'], ['city','tj']];

function convObj(arr){
    return arr.reduce(function(acc,item){
        const key = item[0];
        const val = item[1];
        acc[key] = val;
        return acc;
    },{});
}

console.log(convObj(data));