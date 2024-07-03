function studentGradeGenerator(){
let scores = prompt("Enter students scores (between 0 and 100):")
if (isNaN(scores) || scores > 0 || scores < 100){
    alert("Invalid input. Please enter a number between 0 and 100.");
    return;
}
}
let scores = x
if (scores <= 100 && scores >= 79) {
    console.log('A');
} else if (scores <=78 && scores >=60) {
    console.log('B')
} else if (scores <=59 && scores >= 49) {
    console.log('C')
} else if ( scores <= 49 && scores >=40){
    console.log('D')
}else if( scores <=40 && scores >= 0){
    console.log('E')
}
else{
    console.log('ERROR no match found')
} 