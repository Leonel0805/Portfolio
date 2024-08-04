
var sound = document.getElementById('sound');

var navbarItems = document.getElementsByClassName('navbar__href');
var navbarMe = document.querySelector('.navbar__me-title')

navbarMe.addEventListener('mouseover', function(){
    sound.play();
})

for (var i = 0; i < navbarItems.length; i++) {
    var item = navbarItems[i];
    console.log(item); 
    
    item.addEventListener('mouseover', function(){
        sound.play();
    })
}


// proyectos
var cards = document.getElementsByClassName('proyecto__card');


for (var i = 0; i < cards.length; i++) {

    let card = cards[i];
    let video_card = card.querySelector('.proyecto__card-video');

    console.log(card);
    console.log(video_card);

    card.addEventListener('mouseleave', function() {
        if (video_card) {
            video_card.pause();
        }
    })
}
