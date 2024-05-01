const output = document.querySelector('.output');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

let fnum = '';
let snum = '';
let ope = '';

function display(value){
   if( ope === ''){
      fnum += value;
   } else{
      snum += value;
   }
   output.innerText += value;
   console.log(value)
}

function operators(value){
   ope += output.innerText += value;
}

function clearAll(){
   output.innerText = '';
   ope = '';
   fnum = '';
   snum = '';
}

function del(){
   let val = output.innerText;
   let del = val.substring(0, val.length - 1)
   output.innerText = del;
   fnum = '';
   snum = '';
   ope = '';
   console.log(del);
}

function equal(){
   let check_op = ope.split('');
   let firstnum = parseFloat(fnum);
   let secondnum = parseFloat(snum);

   if(check_op.includes('+')){
      const add = firstnum + secondnum;
      output.innerText = add;
   } else if(check_op.includes('-')){
      const minus = firstnum - secondnum;
      output.innerText = minus;
   } else if(check_op.includes('x')){
      const multiply = firstnum * secondnum;
      output.innerText = multiply;
   } else if(check_op.includes('/')){
      let divide;
      if(secondnum === 0){
        output.textContent = 'ERROR';
      } else {
        divide = fnum / snum;
        output.textContent = divide;
      }     
   }
}
