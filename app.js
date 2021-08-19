function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
       // console.log('got 3 digit pin and call again')
        return getPin();
    }
}

function generatePin(){
    /* const pin = Math.round(Math.random() * 10000); */
        const pin = getPin();
       document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',
function(event){
    const  number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C' || number == '.del'){
            calcInput.value = '';
        }
    }
    else{
     
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
   
});

function verifyPin(){
    const pin  = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-fail');
    if(pin == typed){
       successMsg.style.display = 'block';
       failedError.style.display = 'none';
    }else{
     
        failedError.style.display = 'block';
        successMsg.style.display = 'none';
    }
}