/*
  Inbuilt sort algo on input array is used.
  Along with the function for comparing only the first character of the string.
  Has exception with empty strings, always placed at the top.
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input = ""
process.stdin.on("data", chunk=> {
  input += chunk;  
})

process.stdin.on("end", ()=> {
    input = input.split("\n");
    let t = parseInt(input.shift());

    for(let i=0;i<t;i++){
        let n = input[i].length;
        input[i]=input[i].slice(1,n-1);
    //    console.log(input[i]);
    }

    input.sort(function (a, b) {
    if(a.length == 0){
        return -1;
    }else if(b.length == 0){
        return 1;
    }
    else{
    let x = a[0],y = b[0] ;
    if (x <= y) {
        return -1;
    }else{
        return 1;
    }}
});
console.log(input);

})
