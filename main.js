const output = document.querySelector('.output');

let display = '';
let display_fnum = ''; //first number
let display_snum = '';//second number
let display_ope = '';

function displayVal(val){

    if(display_ope == ''){
        display_fnum  += val; 
    } else{
        display_snum  += val;
    }
    output.textContent += val;
    // display_fnum = output.textContent += val; 
    // display_snum = output.textContent += val;
}

function operatorVal(val){
    display_ope = output.textContent += val;
}

function clearAll(){
    output.textContent = display;
    display_fnum = '';
    display_snum = '';
    display_ope = '';
}

function operate(){
   let split = display_ope.split('');
   let fnum = parseFloat(display_fnum);
   let snum = parseFloat(display_snum);

   if(split.includes('+')){
      let add = fnum + snum;
      console.log(add);
   } else if(split.includes('-')){
      let minus = fnum - snum;
      console.log(minus);
   }
   
}