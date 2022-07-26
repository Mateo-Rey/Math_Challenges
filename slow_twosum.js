//create a function that will take two numbers from an array and add them together to meet the target

Set = []
function twosum(arr,target) {
for (let i = 0; i <arr.length; i++) {
    for (let j = 0; j <arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            Set.push(arr[i])
            Set.push(arr[j])
        }
    }

}
Set.splice(0,2)
return Set;
}
console.log(twosum([10,50,70,80,99,102,107,128,104,256,372, 483, 562, 671, 721, 851, 866, 666, 444, 333, 888, 881, 993,199, 268],777))