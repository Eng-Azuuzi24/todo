

function addTodo(){
    const inputElement=document.querySelector('input');
    const value=inputElement.value;

    const Todocontainer=document.createElement('div');
    Todocontainer.className='flex justify-between items-center';

    const todoTitle=document.createElement('h4');
    todoTitle.textContent=value;

    const doneButton=document.createElement('button');
    doneButton.textContent='Done';
    doneButton.className='bg-green-500 p-2 rounded-lg';

    Todocontainer.appendChild(todoTitle);
    Todocontainer.appendChild(doneButton);

    const AllTodoscontainer=document.querySelector('#Todoscontainer');
    AllTodoscontainer.appendChild(Todocontainer);

    inputElement.value='';
    

}