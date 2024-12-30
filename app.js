const inputfild = document.querySelector('#password ');
const outputfild = document.querySelector('#output');

inputfild.addEventListener('input', function () {

   let  password = inputfild.value;

   if (password.length < 8){
    outputfild.innerText = 'password is too short';
    outputfild.style.color = 'Balck';
   }
   else
   {
    outputfild.innerText = 'Pssword is long enough'
    outputfild.style.color = 'red';
   
     if(password.search(/[a-z]/) == -1 ) {
        outputfild.innerHTML = 'password is missing a lowercase';
        outputfild.style.color = "blue";
     }else if (password.search (/[A-Z]/) == -1){
        outputfild.innerHTML = 'password is missing a Uppercase';
        outputfild.style.color = "green";
     }else if (password.search (/[0-9]/) == -1){
        outputfild.innerHTML = 'password is missing a number';
        outputfild.style.color = "green";
     }else{
        outputfild.innerHTML = 'password is strong';
        outputfild.style.color = "green";
     }
     



   }
});