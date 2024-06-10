//N1
//let name=prompt("Enter your name");
//alert(`Hello, dear `+name);
 
//N2
//let yearOfBirth = +prompt("Enter your year of birth:");
//const currentYear=2024;
//alert(`You ${currentYear-yearOfBirth} years old`); 

//N3
//let length=prompt("Enter the length of the side");
//alert("Your perimeter = "+(4*length));

//N4
//let radius=prompt("Enter the radius");
//alert("Your area = "+(2*3.14*radius));

//N5
//let km = prompt("Enter km from one city to other city");
//let hours=prompt("Enter hours");
//alert("You must moving with speed "+(km/hours)+"km/h"); 

//N6
//let countOfUsd = prompt("Enter your count of USD");
//const EUR=0.92;
//alert("You can buy "+(countOfUsd*EUR)+" EUR.");

//N7
//let value = +prompt("Enter the volume of the flash drive (GB)");
//alert(`You can add to this flash ${Math.floor((value*1000)/820)}`);



//N2.1
//let number =prompt("Enter number");
//let symbol;
//if(number==0)
//{
//    symbol=')';
//}
//else if(number ==1)
//{
//    symbol="!";
//}
//else if(number==2)
//{
//    symbol='@';
//}
//else if(number==3)
//{
//    symbol='#';
//}
//else if(number==4)
//{
//    symbol='$';
//}
//else if(number==5)
//{
//    symbol='%';
//}
//else if(number==6)
//{
//    symbol='^';
//}
//else if(number==7)
//    {
//        symbol='&';
//    }
//    else if(number==8)
//        {
//            symbol='*';
//        }
//        else if(number==9)
//            {
//                symbol='(';
//            }
//else{
//    symbol="Wrong symbol!";
//}
//alert("Your spec. symbol "+(symbol));


//N2.2
//let year=prompt("Enter year");
//if(year%400==0||year%4==0&&year%100!=0)
//    {
//        alert("This is leap year");
//    }
//    else{
//        alert("This is not leap year!");
//    }

//N2.3

let day = parseInt(prompt("Enter day : "));
let month = parseInt(prompt("Enter month : "));
let year = parseInt(prompt("Enter year : "));

let currentDate = new Date(year, month - 1, day);
currentDate.setDate(currentDate.getDate() + 1);
let newDay = currentDate.getDate();
let newMonth = currentDate.getMonth() + 1; 
let newYear = currentDate.getFullYear();

alert(`Next date : ${newDay}.${newMonth}.${newYear}`);

//N2.4
//let day= new Date();
//let flag = true;
//let res;
//let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//while(flag)
//{
//     res=confirm("Are you want to see next day?");
//     if(res)
//        {
//            var nextDay = new Date(day);
//            nextDay.setDate(day.getDate() + 1); 
//            day= nextDay;
//            alert("New day "+days[day.getDay()]);
//        }
//        else{
//            flag = false;
//        }
//}



