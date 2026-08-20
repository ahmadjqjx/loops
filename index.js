//function
/*function saygreet(){
    alert("hello im alert; your website has been taken away lolo");
}
saygreet();*/

function sum(){
    console.log(3 + 4);
} 
sum();
sum();
sum();
sum();
//     function WITH parameter

    let bmi = 20;

    if(bmi <18.5){
    console.log("underweight")    
    }
    else if(bmi >=18.5   && bmi < 22.9 ){
        console.log("healthy")
    }
    else if (bmi >= 23  && bmi < 24.9 ){
        console,log("risk to over weight")
    }
    else if ( bmi >=25  && bmi <29.9){
        console.log("overweight")
    }
    else if (bmi >=30  ){
        console.log("obese")
    }


        function calculateBMI(weight,  height) {

        console.log(weight)
        console.log(height)
        let bmi=weight/(height*height)
        console.log("your bmi is:" + bmi)
    }
    //function argument
    //calculateBMI(84,1.8)
    calculateBMI(18.5 )

///// function with parameter
    function calculateBMI(weight, height) {
    console.log(weight);
    console.log(height);

    let bmi = weight / (height * height)

    console.log("your bmi is: " + bmi)
}
// argument,,that gives the cmd to our function
calculateBMI(54, 18.5);
calculateBMI(98, 20.5);
calculateBMI(61, 17.5);

{}






















//simpleInterest //by using (principle, rate, time) its the formula off [p,r,t]


     function simpleInterest (principle, rate, time) {
        let si = (principle * rate * time) / 100;
        console.log("the simple interest si" + si);
        return si;
     }
     let si = simpleInterest( 1000, 5, 2 )
     
     if ( si > 50){
        console.log("too much interest" );
     } else {
        console.log("ok");
     }

     let birthYear = 2008;
     let currentYear = 2026;

     let age = 18 - 2008;
     console.log("age");