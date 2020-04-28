process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = ""
process.stdin.on("data", chunk=> {
  input += chunk;  
})

process.stdin.on("end", ()=> {
    let n = parseInt(input);
    
    let sec = n%60;
    n=Math.floor(n/60);
    let min = n%60;
    n=Math.floor(n/60);
    console.log("Hours = " + n + ", minutes = " + min + ", seconds = " + sec);    
})
