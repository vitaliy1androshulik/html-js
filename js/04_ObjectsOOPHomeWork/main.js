//N1
// class Selector 
//     {
//     constructor(name) 
//     {
//       this.name = name;
//       this.styles = {};
//     }
//     addProperty(name, value) 
//     {
//       this.styles[name] = value;
//     }
//     removeProperty(name) 
//     {
//       delete this.styles[name];
//     }
//     getCSS() 
//       {
//       let cssString = ${this.name} {\n;
//       for (const [property, value] of Object.entries(this.styles)) 
//       {
//         cssString +=   ${property}: ${value};\n;
//       }
//       cssString += '}';
//       return cssString;
//     }
//   }

//N2
//class Button 
//{
//    constructor(width, height, text) 
//    {
//      this.width = width;
//      this.height = height;
//      this.text = text;
//    }
//
//    showBtn() 
//    {
//      document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button>`);
//    }
//  }
//
//  class BootstrapButton extends Button 
//  {
//    constructor(width, height, text, color) 
//    {
//      super(width, height, text);
//      this.color = color;
//    }
//
//    showBtn() 
//    {
//      document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color};">${this.text}</button>`);
//    }
//}
//let button = new Button(120, 120,'Hello');
//button.showBtn();
//
//let exbutton = new BootstrapButton(120, 120,'Goodbye', 'yellow');
//exbutton.showBtn();

//N3
class Datee
{
    constructor(year, month, day)
    {
        this.day=day;
        this.month=month;
        this.year=year;
    }
    showDate()
    {
        document.write(`${this.day}  ${this.month}  ${this.year}`);
    }
}

class ExtendedDate extends Datee
{
    constructor(year,month,day)
    {
        super(year,month,day);
    }
    showDate()
    {
        document.write(`${this.day}  ${this.month}  ${this.year}`);
    }
    futureDate() 
    {
        const now = new Date();
        return this >= now;
    }
    leapYear() 
    {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }
}
//let date = new Datee(1,2,2024);
//date.showDate();

let date = new ExtendedDate(2025,2,1);
date.showDate();
alert("Are your date is future?"+` ${date.futureDate()}`);
alert("Are your year is leap?"+` ${date.leapYear()}`);


