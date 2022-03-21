process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  function callAcc(n) {
    return ((n + BigInt(1)) * n) / BigInt(2);
  }

  const t = parseInt(readLine());
  for (let a0 = 0; a0 < t; a0++) {
    const n = parseInt(readLine());

    let count = n - 1;

    const a = BigInt(Math.floor(count / 3));
    const b = BigInt(Math.floor(count / 5));
    const c = BigInt(Math.floor(count / 15));

    const bigIntA = callAcc(a) * BigInt(3);
    const bigIntB = callAcc(b) * BigInt(5);
    const bigIntC = callAcc(c) * BigInt(15);
    const r = bigIntA + bigIntB - bigIntC;
    console.log(r.toString());
  }
}
