function speedcheck (speed){
    if (speed <= 70){
        console.log("ok"); 
       
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12 ) {
            console.log("Licence Suspended");
        } else{
            console.log("Points:" + demeritPoints);
        }
    }
}


// Function test here
speedcheck(70); //output: ok
speedcheck(150); //output:license suspended
speedcheck(90); //output: points:4
