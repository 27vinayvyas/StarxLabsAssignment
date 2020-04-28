/*
  The Algo checks the number of odd elements in the range.
  If range is of even length, number of odds is len/2
  If range is even, then it depends on the starting element.
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
    
    for(let i=0; i<t; i++) {
        let arr = input[i].split(" ");
        let l=arr[0],r=arr[1];
        let len=r-l+1;
        if(len%2==0){
            len=len/2;
        }else{
            if(l%2==0){
                len=Math.floor(len/2);
            }else{
                len=Math.floor(len/2)+1;
            }
        }

        if(len%2==0){
            console.log("Even");
        }else{
            console.log("Odd");
        }
    }
})
