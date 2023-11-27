(function(){
    'use strict';
    console.log('reading js');

/*overlay*/

//from the overlay slides

const item = document.querySelector('#item');
const itemtext = document.querySelector('#item-text');

document.querySelector('#sk-1').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 1: Morning Explore"
    itemtext.innerHTML = "The first full day was dedicated to exploring the area around our hotel. We wanted to go to a cafe so my friend, Bella, in the picture, navigated us to the nearest one. We had to go on the subway then the bus and somehow ended up in Chungmu-ro. Walking down this street and seeing the people, the signs, and how different everything was. I wanted to commemorate the moment as the beginning of our week-long adventure. I also made a habit of taking pictures of cool designs and I liked the signs in the back!"
});

document.querySelector('#sk-2').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 2: Seoul Sky"
    itemtext.innerHTML = "My other friend landed the next day after the first picture in the slideshow. We wanted to attend Lotte World then Seoul Sky Observatory, which is the tallest building in South Korea and the 5th tallest in the world. It gives a 360 view of Seoul. Even though the pic does not depict the wonderful view of the city at sunset, it was our first group picture together."
});

document.querySelector('#sk-3').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 3: Mall Activities"
    itemtext.innerHTML = "One of things I enjoyed most about South Korea was the amount of detail put into the interior design of stores. This one was from one audio shop in a mall. The aesthetic of the shop tried to capture an old school jazz bar. The lighting was low, but warm in certain areas. Right next to the shop was a coffee shop that fits well with the store’s vibe. My favorite part was the different records in sale and how it was displayed on the wooden shelf."
});

document.querySelector('#sk-4').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 4: Interior Design Galore"
    itemtext.innerHTML = "Another appreciation post of interior design!! Nanda Laundry is a clothing store… that looks like a laundromat. It was one of many different stores that looked like other things like the poolside, bar, and tennis court."
});

document.querySelector('#sk-5').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 5: Night Out"
    itemtext.innerHTML = "Day 5 was full of rain. It rained all day and it rained unlike I have seen (from Southern California). We were upset for a day and a half. We could not go outside since we were not prepared for the rain. The moment it stopped, we made plans to go out. This is one of my favorite memories because it seemed like everyone wanted to go out too. I liked how the light reflected off the floor"
});

document.querySelector('#sk-6').addEventListener('click', function(addEventListener){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    item.innerHTML = "Day 6: Night Out Pt. 2"
    itemtext.innerHTML = "We made our way to Hongdae for clubbing. This is us waiting in line. Day 7 was dedicated for recovery from this night hehe."
});

document.querySelector('.close').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('overlay').className = 'hidden';

});

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        document.getElementById('overlay').className = 'hidden';
    }
});


/*mouseoverhover*/

// I found it more helpful to label the img(imgOne) when creating distinctive interaction, though src would be easier to use due to the other hover interaction in css//

const overlay = document.getElementById('overlay');
const imgOne = document.getElementById('sk-1');
const imgTwo = document.getElementById('sk-2');
const imgTre = document.getElementById('sk-3');
const imgFor = document.getElementById('sk-4');
const imgFiv = document.getElementById('sk-5');
const imgSix = document.getElementById('sk-6');

//mouse over- the hover interaction /change in image and mouseout- is going back to the normal image

imgOne.addEventListener('mouseover', function(){
    imgOne.src = 'images/skstreet1-mo.jpg';
});
imgOne.addEventListener('mouseout', function(){
    imgOne.src='images/skstreet1.jpg';
});


imgTwo.addEventListener('mouseover', function(){
    imgTwo.src ='images/skfriends1-mo.jpg';
});
imgTwo.addEventListener('mouseout', function(){
    imgTwo.src='images/skfriends1.jpg';
});


imgTre.addEventListener('mouseover', function(){
    imgTre.src ='images/skstore1-mo.jpg';
});
imgTre.addEventListener('mouseout', function(){
    imgTre.src='images/skstore1.jpg';
});


imgFor.addEventListener('mouseover', function(){
    imgFor.src ='images/skstore2-mo.jpg';
});
imgFor.addEventListener('mouseout', function(){
    imgFor.src='images/skstore2.jpg';
});


imgFiv.addEventListener('mouseover', function(){
    imgFiv.src ='images/skstreet2-mo.jpg';
});
imgFiv.addEventListener('mouseout', function(){
    imgFiv.src='images/skstreet2.jpg';
});


imgSix.addEventListener('mouseover', function(){
    imgSix.src ='images/skfriends2-mo.jpg';
});
imgSix.addEventListener('mouseout', function(){
    imgSix.src='images/skfriends2.jpg';
});

})();

