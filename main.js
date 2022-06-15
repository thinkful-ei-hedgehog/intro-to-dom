/*console.log("Hello World!")
console.log(document.querySelector('div.greeting'))
console.log(document.querySelector('.greeting').innerText);


let firstItem = document.querySelector('li.first').innerText;
console.log(`The first thing i need to do is ${firstItem}`);
*/

let lis= document.querySelectorAll('li'); //searching for all li in the html doc
console.log(lis);
let sum = 0;
for(let li of lis.values()){ //looping through all found list items
    //sum += Number(li.innerText);
    console.log(li) //outputing each list item
}
console.log(`Total Cost ${sum}`)
console.log(document.querySelectorAll('div'));
document.querySelector('button').addEventListener('click',function(){
    document.querySelector('h3').innerText='Expenses have been paid!'
})