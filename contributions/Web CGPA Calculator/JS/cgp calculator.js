let presentInpuField=0;
let isOpen=false;
function toggleNavBar(){
    console.log("clicked");
    if(isOpen){
        isOpen=false;
        document.getElementById("header-options").classList.remove("open-nav");
        document.getElementById("header-options").classList.add("close-nav");
    }else{
        isOpen=true;
        document.getElementById("header-options").classList.remove("close-nav");
        document.getElementById("header-options").classList.add("open-nav");

    }
}
document.getElementById("nav-toggle").addEventListener("click",toggleNavBar);
document.getElementById("about").addEventListener("click",toggleNavBar);
document.getElementById("settings").addEventListener("click",toggleNavBar);


document.getElementById("enter-btn").addEventListener('click',function(event){
    event.preventDefault();
    
    let courseCode=document.getElementById("course").value; 
    let courseUnit=document.getElementById("unit").value;
    let courseScore=document.getElementById("score").value; 

    if(courseUnit.trim()==""||courseCode.trim()==""||courseScore.trim()==""){
        prompt("Please fill out all the fields");
        return;
    }

    receiveScoreValues(courseCode,courseUnit,courseScore);
    getGrade(courseScore);

  
});

 function receiveScoreValues(courseCode,courseUnit,courseScore){
    ++presentInpuField
     // by doing this, we can dynamcally populate each input field after the prevous input field is clicked
     // since we are appending the value of presentInpuField which increases everytime the enter button is clicked
     //to "course", unit and the likes
     let courseId="course"+presentInpuField;
     let unitId="unit"+presentInpuField;
     let scoreId="score"+presentInpuField;
     let gradeId="grade"+presentInpuField;
     let pointsId="points"+presentInpuField;

 document.getElementById(courseId).value= courseCode;  
 document.getElementById(unitId).value= courseUnit;  
 document.getElementById(scoreId).value= courseScore;  
 document.getElementById(gradeId).value= getGrade(courseScore);
 document.getElementById(pointsId).value= getPoints(courseScore,courseUnit);
 }
 function getGrade(courseScore)
 {
    if(courseScore>=70){
        return "A";
    }
    if (courseScore>=60){
        return"B";
    }
    if (courseScore>=50){
        return"C";
    }
    if (courseScore>=40){
        return"D";
    }
    if (courseScore < 40){
        return"F";
    }

}
function getPointsMark(courseScore)
{
   if(courseScore>=70){
       return "5";
   }
   if (courseScore>=60){
       return"4";
   }
   if (courseScore>=50){
       return"3";
   }
   if (courseScore>=40){
       return"2";
   }
   if (courseScore < 40){
       return"0";
   }
    
 }
 function getPoints(courseScore,courseUnit)
 {
    if(courseScore>=70){
        return 5*courseUnit;
    }
    if(courseScore>=70 || ("courseUnit = 4")){
        return "20";
    }
    if(courseScore>=70 || ("courseUnit = 3")){
        return "15";
    }
    if(courseScore>=70 || ("courseUnit = 2")){
        return "10";
    }
    if(courseScore>=70 || ("courseUnit = 1")){
        return "5";
    }
    if(courseScore>=60 || ("courseUnit = 5")){
        return "20";
    }
    if(courseScore>=60 || ("courseUnit = 4")){
        return "16";
    }
    if(courseScore>=60 || ("courseUnit = 3")){
        return "12";
    }
    if(courseScore>=60 || ("courseUnit = 2")){
        return "8";
    }
    if(courseScore>=60 || ("courseUnit = 1")){
        return "4";
    }
    if(courseScore>=50 || ("courseUnit = 5")){
        return "15";
    }
    if(courseScore>=50 || ("courseUnit = 4")){
        return "12";
    }
    if(courseScore>=50 || ("courseUnit = 3")){
        return "9";
    }
    if(courseScore>=50 || ("courseUnit = 2")){
        return "6";
    }
    if(courseScore>=50 || ("courseUnit = 1")){
        return "3";
    }
    if(courseScore>=40 || ("courseUnit = 5")){
        return "10";
    }
    if(courseScore>=40 || ("courseUnit = 4")){
        return "8";
    }
    if(courseScore>=40 || ("courseUnit = 3")){
        return "6";
    }
    if(courseScore>=40 || ("courseUnit = 2")){
        return "4";
    }
     if(courseScore>=40 || ("courseUnit = 1")){
        return "2";
    }
    if(courseScore<40 || ("courseUnit = 5")){
        return "0";
    }
    if(courseScore<40 || ("courseUnit = 4")){
        return "0";
    }
    if(courseScore<40 || ("courseUnit = 3")){
        return "0";
    }
    if(courseScore<40 || ("courseUnit = 2")){
        return "0";
    }
    if(courseScore<40 || ("courseUnit = 1")){
        return "0";
    }
     
  }
  

//  document.getElementById("course2").value= courseCode;  
//  document.getElementById("unit2").value= courseUnit;  
//  document.getElementById("grade1").value= courseScore;
  




   





























// var course=window.prompt("Input Course Point")
// function testgetCoursePoint (course) {
//     if(course >= 70){
//         return "5";
//     }

//     if(course >= 60){
//         return "4";
//     }

//     if(course >= 50){
//         return "3";
//     }

//     if(course >= 45) {
//         return "2";
//     }

//     if(course <= 45){
//         return "0";
//     }

// };
// console.log(testgetCoursePoint(course));

// function solveCgpa ({score,courseTitle,courseUnit}){
//     var totalUnit = 0;
//     var totalUnitPoint = 0;
// }
// document.getElementById(grade).innerHTML = 'New text!'