
function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    

    if(username.value === 'admin' && password.value === 'admin') {
        window.location.href = './pages/home.html';
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.classList.remove('hide');
    }
}


function darkMode(){
    const card = document.getElementById("card");
    card.classList.toggle("dark-mode");
}


// REGISTRO

function checkIn(){
  window.location.href = './pages/checkin.html';  

    const dataUser = {
      name: dataUser[0].value, 
      lastName: dataUser [1].value, 
      user: dataUser[2].value,
      date: dataUser[3].value,
      email: dataUser[4].value, 
      colorUser: dataUser[5].value, 
      password: dataUser[6].value 
    }
}

		let tasks = [];

		const newTaskInput = document.getElementById("new-task-input");
		const taskList = document.getElementById("task-list");

		function addTask() {
			const taskName = newTaskInput.value;
			const newTask = {
				id: Date.now(),
				name: taskName,
				completed: false
			};

			tasks.push(newTask);
			updateTaskList();
		}

		function updateTaskList() {
			taskList.innerHTML = "";

			tasks.forEach(function(task) {
				const li = document.createElement("li");

				const checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.checked = task.completed;
				checkbox.onchange = function() {
					task.completed = checkbox.checked;
				};

				const textInput = document.createElement("input");
				textInput.type = "text";
				textInput.value = task.name;
				textInput.onchange = function() {
					task.name = textInput.value;
				};

				const deleteButton = document.createElement("button");
				deleteButton.innerText = "Delete";
				deleteButton.onclick = function() {
					tasks = tasks.filter(function(t) {
						return t.id !== task.id;
					});
					updateTaskList();
				};

				li.appendChild(checkbox);
				li.appendChild(textInput);
				li.appendChild(deleteButton);

				taskList.appendChild(li);
			});
		}