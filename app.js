

const input = document.getElementById('input');

function btn(val) {
   input.value += val
}

function solve() {
   let solves = input.value;
   let equal = eval(solves);
   input.value = equal
}

function clearAll() {
   input.value = ""
}

function deletNum() {
   let deletNum = input.value;
   let deletNums = deletNum.slice(0, -1);
   input.value = deletNums
}
