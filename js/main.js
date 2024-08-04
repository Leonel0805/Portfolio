
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

