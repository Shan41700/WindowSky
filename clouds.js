function clouds(){
    
    if (theTime<100)
    {
        c1x=500;
        c2x=500;
        c3x=500;
    }
    
    else if(theTime<20500){
        c1x=c1x-1;
        image(cloud1,c1x,100);
    }
    
    else if(theTime<35000){
        c2x=c2x-1.5;
        image(cloud2,c2x,50);
    }
    
    else if(theTime<45000){
        c3x=c3x-1.75;
        image(cloud3,c3x,100);
    }
    

}