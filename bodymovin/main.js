const ikoni = document.querySelector('#ikoni');

const animaatio = lottie.loadAnimation({
    container: ikoni,
    loop: false,
    autoplay: false,
    path: 'data.json'
  });

ikoni.addEventListener('mouseenter', function(){
    animaatio.setSpeed(3);
    animaatio.setDirection(1);
    animaatio.play();
});

ikoni.addEventListener('mouseleave', function(){
    animaatio.setDirection(-1);
    animaatio.play();
});
