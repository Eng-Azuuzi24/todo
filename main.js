

function addTodo(){
    const inputElement=document.querySelector('input');
    const value=inputElement.value;
    if(value===''){
        return;
    }

    const Todocontainer=document.createElement('div');
    Todocontainer.className='flex justify-between items-center';

    const todoTitle=document.createElement('h4');
    todoTitle.textContent=value;

    const doneButton=document.createElement('button');
    doneButton.textContent='Done';
    doneButton.className='bg-green-500 p-2 rounded-lg';
    doneButton.onclick=MarkAsDone;

    Todocontainer.appendChild(todoTitle);
    Todocontainer.appendChild(doneButton);

    const AllTodoscontainer=document.querySelector('#Todoscontainer');
    AllTodoscontainer.appendChild(Todocontainer);

    inputElement.value='';
    
    

}


function MarkAsDone(event){
const clickButton=event.target;
clickButton.classList.add('hidden');



const todoItem=clickButton.previousElementSibling;
todoItem.classList.add('line-through');

clickButton.textContent='Delete';
clickButton.className='bg-red-500 p-2 rounded-lg shadow-lg';
clickButton.onclick=deletebtn;
// clickButton.classList.add('hidden');







}


function deletebtn(event){
    const deletebtn=event.target;
    
    const deletetodo=deletebtn.previousElementSibling;
    deletetodo.remove();
    deletebtn.remove();

}