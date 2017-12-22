window.onload = choosePic;

var myPix = new Array("lenses.deck.alpha0.001.png","lenses.deck.alpha0.002.png","lenses.deck.alpha0.003.png","lenses.deck.alpha0.004.png","lenses.deck.alpha0.005.png","lenses.deck.alpha0.006.png","lenses.deck.alpha0.007.png","lenses.deck.alpha0.008.png","lenses.deck.alpha0.009.png","lenses.deck.alpha0.010.png","lenses.deck.alpha0.011.png","lenses.deck.alpha0.012.png","lenses.deck.alpha0.013.png","lenses.deck.alpha0.014.png","lenses.deck.alpha0.015.png","lenses.deck.alpha0.016.png","lenses.deck.alpha0.017.png","lenses.deck.alpha0.018.png","lenses.deck.alpha0.019.png","lenses.deck.alpha0.020.png","lenses.deck.alpha0.021.png","lenses.deck.alpha0.022.png","lenses.deck.alpha0.023.png","lenses.deck.alpha0.024.png","lenses.deck.alpha0.025.png","lenses.deck.alpha0.026.png","lenses.deck.alpha0.027.png","lenses.deck.alpha0.028.png","lenses.deck.alpha0.029.png","lenses.deck.alpha0.030.png","lenses.deck.alpha0.031.png","lenses.deck.alpha0.032.png","lenses.deck.alpha0.033.png","lenses.deck.alpha0.034.png","lenses.deck.alpha0.035.png","lenses.deck.alpha0.036.png","lenses.deck.alpha0.037.png","lenses.deck.alpha0.038.png","lenses.deck.alpha0.039.png","lenses.deck.alpha0.040.png","lenses.deck.alpha0.041.png","lenses.deck.alpha0.042.png","lenses.deck.alpha0.043.png","lenses.deck.alpha0.044.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
