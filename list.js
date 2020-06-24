const alert = document.querySelector('.alert');
const form = document.querySelector('.todo-form');

const todo = document.getElementById('todo'); //value added to form

const submitBtn = document.querySelector('.submit-btn');

const container = document.querySelector('.todo-container');
const list = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');



form.addEventListener('submit', addTask);
clearBtn.addEventListener("click", clearList);


function addTask(e){
	e.preventDefault();
	const value = todo.value;

	if(value){

		//add item to list
		const element = document.createElement('article');
		element.classList.add('todo-item');

		element.innerHTML = ` <p class ="title">${value}</p>
          <div class="btn-container">

            
            <button type="button" class = "check-btn">
              <i class="fa fa-check" ></i>
            </button>

          
            <button type="button" class = "delete-btn">
             <i class="fa fa-times" ></i>
            </button>
          </div> `;


          const deleteBtn = element.querySelector('.delete-btn');
          const checkBtn = element.querySelector('.check-btn');
          const title = element.querySelector('.title');
          
          list.appendChild(element);

          container.classList.add('show-container');


          setBackToDefault();

          deleteBtn.addEventListener('click', deleteTask);

          checkBtn.addEventListener('click', function(){

  					title.innerHTML = title.textContent.strike();		
});

          


	} else {

		//empty value, alert the user at the top of the page
		alert.textContent = "emtpy task";
		alert.classList.add('alert-danger');
		setTimeout(function(){
			alert.textContent = "";
		alert.classList.remove('alert-danger');
		},1500)


	}
}
function clearList(){

	const tasks = document.querySelectorAll('.todo-item');
	//check if list > 0

	if(tasks.length>0){

		tasks.forEach(function(task){
			list.removeChild(task);
		});
	}

	container.classList.remove("show-container");
	setBackToDefault();

}


function deleteTask(e){
	//get task-item
	const element = e.currentTarget.parentElement.parentElement;


	//remove task-item
	list.removeChild(element);


	if(list.children.length == 0){
		container.classList.remove('show-container');
	}

	setBackToDefault();

}

function setBackToDefault(){

	todo.value = "";



}




