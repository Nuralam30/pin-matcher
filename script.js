

    // pin generate of 4 digit
    function generatePin(){
        var pin = Math.floor(Math.random() * 10000);
        const pinString = pin.toString();
        if(pinString.length == 4){
            return pinString;
        }
        else{
            return generatePin();
        }
    }

    document.getElementById('pin-generate').addEventListener('click', ()=>{
        var generateDisplay = document.getElementById('generate-display');
        const pin = generatePin();
        generateDisplay.value = pin;
    });



    // keypad btns event
    const btnGroup = document.querySelector('.calc-body');
    const inputDisplay = document.getElementById('user-display');
    var inputNumber = '';
    
    btnGroup.addEventListener('click', function(event){
        const btn = event.target;
        
        if(btn.id == 'number'){
            const number = btn.innerText;
            inputNumber = inputNumber + number;
            inputDisplay.value = inputNumber;
        }
        if(btn.id == 'delete'){
            inputNumber = inputNumber.slice(0, -1);
            inputDisplay.value = inputNumber;
        }
        if(btn.id == 'remove'){
            inputNumber = '';
            inputDisplay.value = inputNumber;
        }
    });



    // submit button event
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', function(){
        const generatedPin = document.getElementById('generate-display').value;
        const inputPin = document.getElementById('user-display').value;
        const successMessage = document.querySelector('#succed');
        const failedMessage = document.querySelector('#failed');

        if(inputPin == generatedPin){
            successMessage.style.display = 'block';
        }
        else{
            failedMessage.style.display = 'block';
        }
    })


