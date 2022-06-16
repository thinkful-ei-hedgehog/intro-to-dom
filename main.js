const button = document.querySelector('button.btn');
const todos = document.querySelector('ul.todos');//referencing the ul in the html
console.log(button)
button.addEventListener('click', () => {
    
    let item = document.querySelector('input#item'); //referencing the text input
    if(item.value !==''){
    let li = document.createElement('li'); //creating a list item element
    li.id='new'
    li.style.backgroundColor = 'pink';
    li.innerHTML = item.value; //putting the text from the input into the li element
    todos.appendChild(li);//adding the newly created element to the ul (DOM)
    } else{
        console.log('No list item entered')
    }
})



