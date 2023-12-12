(function () {
    'use strict';
    console.log('Reading JS');
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");

    const item = document.querySelector('#item');
    const itemtext = document.querySelector('#item-text');
    
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    //const beginBTn = document.querySelector('#begin');

   // const pinkP = new Audio('sound/pinkP.mp3');
    //const click = new Audio('sound/click.mp3');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);    
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;

        for(const eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value);
            } else{
                emptyfields.push(counter);
            }
            counter++;
        }
        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else{
            makeMadLib(words);
        }  
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field ${errorId}`;
        madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus;
    }

    function makeMadLib(words){
        document.querySelector('#overlay2').className = 'showing';
        const myText = `
        <h3> mosquito - PinkPantheress feat. you </h3>
        <p>On a ${words[0]}, can I see you?</p>
        <p>Can I ${words[1]} my numbers? 'Cause I want to</p>
        <p>I know it's ${words[2]}, how much I do</p>
        <p>${words[3]} you the day that I want, the day that I want</p>
        <p>Another day then, maybe ${words[4]}?</p>
        <p>Can I spend a ${words[5]}? 'Cause I want to</p>
        <p>I know it's ${words[6]}, how I lose you <p>
        <p>${words[3]} every day that I want, the day that I want</p>
        <p>What happened to me?</p>

        <p>Cause I just had a dream I was ${words[7]}</p>
        <p>And I only ${words[8]} 'cause I was taken from you</p>
        <p>You're the only ${words[9]} that I own</p>
        <p>I hear my bell ring, I'd only answer for you</p>

        <p>I had ${words[10]} out loud</p>
        <p>And,${words[11]}, you answered me too early</p>
        <p>I was too ${words[12]} startin’ out</p>
        <p>Now I’m too ${words[13]} that you might leave me</p>
        <p>I feel like I’m still a ${words[14]}</p>
        <p>Because I always cross my ${words[15]}</p>
        <p>Now you're sittin’ in ${words[16]}</p>
        <p>‘Cause I’m too scared to take you out</p>
        <p>Now ${words[17]} me</p> 

        <p>Cause I just had a dream I was ${words[7]}</p>
        <p>And I only ${words[8]} 'cause I was taken from you</p>
        <p>You're the only ${words[9]} that I own</p>
        <p>I hear my bell ring, I'd only answer for you</p>

        <p>On a ${words[0]}, can I see you?</p>
        <p>Can I ${words[1]} my numbers? 'Cause I want to</p>
        <p>I know it's ${words[2]}, how much I do</p>
        <p>${words[3]} you the day that I want, the day that I want</p>
        <p>Another day then, maybe ${words[4]}?</p>
        <p>Can I spend a ${words[5]}? 'Cause I want to</p>
        <p>I know it's ${words[6]}, how I lose you <p>
        <p>${words[3]} every day that I want, the day that I want</p>
        <p>What happened to me?</p>

        <p>Cause I just had a dream I was ${words[7]}</p>
        <p>And I only ${words[8]} 'cause I was taken from you</p>
        <p>You're the only ${words[9]} that I own</p>
        <p>I hear my bell ring, I'd only answer for you</p>
        `;
        madlib.innerHTML = myText;
        for(const eachField of formData){
            eachField.value = '';
        }
    }

    //background music
   //pinkP.loop = true;
   //pinkP.play();

    //header//
    window.onscroll = function(){
        myFunction()
    };

    function myFunction(){
        if(window.pageYOffset > sticky){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }
    }
    //instruction overlay//

    document.querySelector('#gamerules').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
        item.innerHTML = `Instructions`;
        itemtext.innerHTML = `<p>PinkPantheress is one of the most popular rising pop girlie who is celebrated for her unique sound and style. One of the main things she is known for is her short songs. </p> <p>Let’s see if you can write a pop song through this Mad Lib. You can choose your words wisely or have more fun. It is your choice. Fill out the specific instrucion for each verse!</p>
        <p>Thanks for playing! - M</p>`;
    });

    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            document.getElementById('overlay1').className = 'hidden';
        }
    })

})();