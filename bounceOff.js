function bounceOff(){
    if (isTouching()){
        fixedRect.velocityX= fixedRect.velocityX*(-1);
        movingRect.velocityX = movingRect.velocityX*(-1);
        
      }
       
}