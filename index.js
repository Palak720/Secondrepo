// start coding here
let arr =[1,2,3,4,5]

let  count =0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        count++;
    }
}
console.log(`count of odd numbers is $(count)`)