//N1
//let text = prompt("Enter text : ");
//
//function space(txt)
//{
//    let count=0;
//    for(let i=0; i<txt.length; i++)
//        {
//            if(txt[i]===' ')
//                {
//                    count++;
//                }
//        }
//    return count;
//}
//let count=space(text);
//alert("You have : "+count+" spaces");

//N2
//let text=prompt("Enter text : ");
//function upperLetter(txt)
//{
//    let newText=txt[0].toUpperCase() + txt.slice(1);
//    return newText;
//}
//let newText=upperLetter(text);
//alert(newText);

//N3
//let text=prompt("Enter text : ");
//function countOfWords(txt)
//{
//    let countOfWords=text.split(' ').length;
//    return countOfWords;
//}
//let count=countOfWords(text);
//alert(count);

//N4
//let text=prompt("Enter text : ");
//function abr(txt)
//{
//    let text = txt.split(' ');
//    let abbre='';
//    for(let i =0; i<txt.length; i++)
//        {
//            if(text[i])
//                {
//                    abbre += text[i].charAt(0).toUpperCase();
//                }
//        }
//        return abbre;
//}
//let newText=abr(text);
//alert(newText);

//N5
//let text = prompt("Enter text :");
//function Palindrome(txt) 
//{
//    let first = txt.toLowerCase();
//    let second = first.split('').reverse().join('');
//    return first == second;
//}
//let res = Palindrome(text);
//if(res)
//    {
//        alert("Your text is Palindrome!");
//    }
//    else
//    {
//        alert("Your text is not Palindrome!");
//    }

//N6
//https://itstep.org/ua/about
function getInformationFromURL(url)
{
        let newUrl = new URL(url);
        let res = `Protocol : ${newUrl.protocol}     Domain : ${newUrl.hostname}     Path : ${newUrl.pathname}`;
        return res;
}

let url = prompt("Enter url : ");
alert(getInformationFromURL(url));