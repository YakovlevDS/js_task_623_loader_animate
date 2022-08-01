var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/",
  animationWindow = select('#animationWindow'),
  anim = lottie.loadAnimation({
  container: animationWindow, 
  renderer: 'svg',
  loop: true,
  autoplay: true,
  //initialSegment: [0, 1140],
  path: 'https://assets.codepen.io/35984/space+knot.json'
});

 anim.addEventListener('DOMLoaded', onDOMLoaded);
 anim.setSpeed(1.5);

function onDOMLoaded(e){ 


}
//ScrubLottieTimeline(anim)