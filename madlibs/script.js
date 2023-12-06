(function(){
    'use strict';
    console.log(`reading JS`);

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector('#madlib p');


    const overlay = document.querySelector('#overlay');
    const errorContainer = document.querySelector('#errorContainer');
    const error = document.querySelector('#errorMsg');

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        const inputOne = document.querySelector('#inputOne').value;
        const inputTwo = document.querySelector('#inputTwo').value;
        const inputTre = document.querySelector('#inputTre').value;
        const inputFor = document.querySelector('#inputFor').value;
        const inputFiv = document.querySelector('#inputFiv').value;
        const inputSix = document.querySelector('#inputSix').value;
        const inputSev = document.querySelector('#inputSev').value;
        const inputEig = document.querySelector('#inputEig').value;
        const inputNin = document.querySelector('#inputNin').value;
        const inputTen = document.querySelector('#inputTen').value;
        const inputEle = document.querySelector('#inputEle').value;
        const inputTwe = document.querySelector('#inputTwe').value;

        let myText = '';
        const error = document.querySelector('#error');

    if(inputOne == ''){
        error.innerHTML = "Please fill out: Day of the Week";
        document.querySelector('#inputOne').focus();
    }

    else if(inputTwo == ''){
        error.innerHTML = "Please fill out: Noun";
        document.querySelector('#inputTwo').focus();
    }
    else if(inputTre == ''){
        error.innerHTML = "Please fill out: Adjective ending with -ing";
        document.querySelector('#inputTre').focus();
    }
    else if(inputFor == ''){
        error.innerHTML = "Please fill out: Verb";
        document.querySelector('#inputFor').focus();
    }
    else if(inputFiv == ''){
        error.innerHTML = "Please fill out: Day of the Week";
        document.querySelector('#inputFiv').focus();
    }

    else if(inputSix == ''){
        error.innerHTML = "Please fill out: Noun";
        document.querySelector('#inputSix').focus();
    }
    else if(inputSev == ''){
        error.innerHTML = "Please fill out: Adjective ending with -ing";
        document.querySelector('#inputSev').focus();
    }
    else if(inputEig == ''){
        error.innerHTML = "Please fill out: Noun";
        document.querySelector('#inputEig').focus();
    }
    else if(inputNin == ''){
        error.innerHTML = "Please fill out: Adjective";
        document.querySelector('#inputNin').focus();
    }
    else if(inputTen == ''){
        error.innerHTML = "Please fill out: Verb";
        document.querySelector('#inputTen').focus();
    }
    else if(inputEle == ''){
        error.innerHTML = "Please fill out: Noun";
        document.querySelector('#inputEle').focus();
    }
    else if(inputTwe == ''){
        error.innerHTML ="Please fill out: Noun";
        document.querySelector('#inputTwe').focus();
    }

    else{
        myText = `On a ${inputOne}, can I see you?/Can I check my ${inputTwo}? 'Cause I want to/I know it's ${inputTre}, how much I do/${inputFor} you the day that I want, the day that I want/Another day then, maybe ${inputFiv}?/Can I spend a ${inputSix}? 'Cause I want to/I know it's ${inputSev}, how I lose you/${inputFor} every day that I want, the day that I want/What happened to me?/Cause I just had a ${inputEig} I was dead/And I only ${inputNin} cause I was ${inputTen} from you/You're the only ${inputEle} that I own/I hear my ${inputTwe} ring, I'd only answer for you`;
        ovrtitle.innerHTML = "Mosquito - PinkPantheress";
        document.querySelector('#inputOne').value = '';
        document.querySelector('#inputTwo').value = '';
        document.querySelector('#inputTre').value = '';
        document.querySelector('#inputFor').value = '';
        document.querySelector('#inputFiv').value = '';
        document.querySelector('#inputSix').value = '';
        document.querySelector('#inputSev').value = '';
        document.querySelector('#inputEig').value = '';
        document.querySelector('#inputNin').value = '';
        document.querySelector('#inputTen').value = '';
        document.querySelector('#inputEle').value = '';
        document.querySelector('#inputTwe').value = '';
        madLib
        
        error.innerHTML = '';
        document.querySelector('#overlay').className = 'showing';
    }

    madLib.innerHTML = myText;

    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'hidden';
        //errorContainer.className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key == 'Escape'){
            overlay.className ='hidden';
            //errorContainer.className = 'hidden';
        }
    })

    
})();