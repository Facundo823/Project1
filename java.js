
//Monday
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.monForm');
    const addButton = document.querySelector('.monBtn');
    const mondayList = document.getElementById('mondayList');

    // elements for modal
    const modal = document.querySelector('.modal');
    const modalSaveButton = modal.querySelector('.btn-primary');
    const modalCloseButton = modal.querySelector('.btn-secondary');
    const modalBodyText = modal.querySelector('.modal-body p');

    let currentTaskElement;
    let oldTask;

    // Load tasks from local storage
    loadTasks();

    addButton.addEventListener('click', function() {
        const text = inputField.value.trim();
        if (text) {
            storeTask(text);
            displayTask(text);
            inputField.value = ''; // Clear input field
        }
    });

    function storeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('mondayTasks')) || [];
        tasks.push(task);
        localStorage.setItem('mondayTasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('mondayTasks')) || [];
        tasks.forEach(displayTask);
    }

    function displayTask(task) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        
        // Creating an editable input field
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = task;
        input.readOnly = true; // Start as read-only

        // Edit task on Enter key press
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !input.readOnly) {
                oldTask = input.value; // Store old value
                currentTaskElement = input; // Reference current input element
                modalBodyText.textContent = 'Would you like to save the changes to this task?';
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            }
        });

        input.addEventListener('click', function() {
            input.readOnly = false; // Make input editable on click
            input.focus();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Done';
        removeButton.onclick = function() {
            removeTask(task, div);
        };

        div.appendChild(input);
        div.appendChild(removeButton);
        mondayList.appendChild(div);
    }

    modalSaveButton.addEventListener('click', function() {
        const newTask = currentTaskElement.value.trim();
        if (newTask && oldTask !== newTask) {
            updateTask(oldTask, newTask); // Save updated task in localStorage
        }
        closeModal();
    });

    modalCloseButton.addEventListener('click', closeModal);

    function closeModal() {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
        if (currentTaskElement) {
            currentTaskElement.readOnly = true;
            currentTaskElement = null;
        }
    }

    function updateTask(oldTask, newTask) {
        let tasks = JSON.parse(localStorage.getItem('mondayTasks')) || [];
        const taskIndex = tasks.indexOf(oldTask);
        if (taskIndex > -1) {
            tasks[taskIndex] = newTask; // Update task
            localStorage.setItem('mondayTasks', JSON.stringify(tasks));
        }
    }

    function removeTask(task, taskElement) {
        let tasks = JSON.parse(localStorage.getItem('mondayTasks')) || [];
        tasks = tasks.filter(t => t !== task); // Remove task from list
        localStorage.setItem('mondayTasks', JSON.stringify(tasks)); // Update storage
        mondayList.removeChild(taskElement); // Remove task from DOM
    }
});

//Tuesday
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.tueForm');
    const addButton = document.querySelector('.tueBtn');
    const mondayList = document.getElementById('tuesdayList');

    const modal = document.querySelector('.modal');
    const modalSaveButton = modal.querySelector('.btn-primary');
    const modalCloseButton = modal.querySelector('.btn-secondary');
    const modalBodyText = modal.querySelector('.modal-body p');

    let currentTaskElement;
    let oldTask;

    loadTasks();

    addButton.addEventListener('click', function() {
        const text = inputField.value.trim();
        if (text) {
            storeTask(text);
            displayTask(text);
            inputField.value = '';
        }
    });

    function storeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tuesdayTasks')) || [];
        tasks.push(task);
        localStorage.setItem('tuesdayTasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tuesdayTasks')) || [];
        tasks.forEach(displayTask);
    }

    function displayTask(task) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = task;
        input.readOnly = true;

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !input.readOnly) {
                oldTask = input.value;
                currentTaskElement = input;
                modalBodyText.textContent = 'Would you like to save the changes to this task?';
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            }
        });

        input.addEventListener('click', function() {
            input.readOnly = false;
            input.focus();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Done';
        removeButton.onclick = function() {
            removeTask(task, div);
        };

        div.appendChild(input);
        div.appendChild(removeButton);
        mondayList.appendChild(div);
    }

    modalSaveButton.addEventListener('click', function() {
        const newTask = currentTaskElement.value.trim();
        if (newTask && oldTask !== newTask) {
            updateTask(oldTask, newTask);
        }
        closeModal();
    });

    modalCloseButton.addEventListener('click', closeModal);

    function closeModal() {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
        if (currentTaskElement) {
            currentTaskElement.readOnly = true;
            currentTaskElement = null;
        }
    }

    function updateTask(oldTask, newTask) {
        let tasks = JSON.parse(localStorage.getItem('tuesdayTasks')) || [];
        const taskIndex = tasks.indexOf(oldTask);
        if (taskIndex > -1) {
            tasks[taskIndex] = newTask; 
            localStorage.setItem('tuesdayTasks', JSON.stringify(tasks));
        }
    }

    function removeTask(task, taskElement) {
        let tasks = JSON.parse(localStorage.getItem('tuesdayTasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tuesdayTasks', JSON.stringify(tasks));
        mondayList.removeChild(taskElement);
    }
});

//wednesday
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.wedForm');
    const addButton = document.querySelector('.wedBtn');
    const mondayList = document.getElementById('wednesdayList');

    const modal = document.querySelector('.modal');
    const modalSaveButton = modal.querySelector('.btn-primary');
    const modalCloseButton = modal.querySelector('.btn-secondary');
    const modalBodyText = modal.querySelector('.modal-body p');

    let currentTaskElement;
    let oldTask;

    loadTasks();

    addButton.addEventListener('click', function() {
        const text = inputField.value.trim();
        if (text) {
            storeTask(text);
            displayTask(text);
            inputField.value = '';
        }
    });

    function storeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('wednesdayTasks')) || [];
        tasks.push(task);
        localStorage.setItem('wednesdayTasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('wednesdayTasks')) || [];
        tasks.forEach(displayTask);
    }

    function displayTask(task) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = task;
        input.readOnly = true;

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !input.readOnly) {
                oldTask = input.value;
                currentTaskElement = input;
                modalBodyText.textContent = 'Would you like to save the changes to this task?';
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            }
        });

        input.addEventListener('click', function() {
            input.readOnly = false;
            input.focus();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Done';
        removeButton.onclick = function() {
            removeTask(task, div);
        };

        div.appendChild(input);
        div.appendChild(removeButton);
        mondayList.appendChild(div);
    }

    modalSaveButton.addEventListener('click', function() {
        const newTask = currentTaskElement.value.trim();
        if (newTask && oldTask !== newTask) {
            updateTask(oldTask, newTask);
        }
        closeModal();
    });

    modalCloseButton.addEventListener('click', closeModal);

    function closeModal() {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
        if (currentTaskElement) {
            currentTaskElement.readOnly = true;
            currentTaskElement = null;
        }
    }

    function updateTask(oldTask, newTask) {
        let tasks = JSON.parse(localStorage.getItem('wednesdayTasks')) || [];
        const taskIndex = tasks.indexOf(oldTask);
        if (taskIndex > -1) {
            tasks[taskIndex] = newTask; 
            localStorage.setItem('wednesdayTasks', JSON.stringify(tasks));
        }
    }

    function removeTask(task, taskElement) {
        let tasks = JSON.parse(localStorage.getItem('wednesdayTasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('wednesdayTasks', JSON.stringify(tasks));
        mondayList.removeChild(taskElement);
    }
});

//thursday
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.thurForm');
    const addButton = document.querySelector('.thurBtn');
    const mondayList = document.getElementById('thursdayList');

    const modal = document.querySelector('.modal');
    const modalSaveButton = modal.querySelector('.btn-primary');
    const modalCloseButton = modal.querySelector('.btn-secondary');
    const modalBodyText = modal.querySelector('.modal-body p');

    let currentTaskElement;
    let oldTask;

    loadTasks();

    addButton.addEventListener('click', function() {
        const text = inputField.value.trim();
        if (text) {
            storeTask(text);
            displayTask(text);
            inputField.value = '';
        }
    });

    function storeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('thursdayTasks')) || [];
        tasks.push(task);
        localStorage.setItem('thursdayTasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('thursdayTasks')) || [];
        tasks.forEach(displayTask);
    }

    function displayTask(task) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = task;
        input.readOnly = true;

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !input.readOnly) {
                oldTask = input.value;
                currentTaskElement = input;
                modalBodyText.textContent = 'Would you like to save the changes to this task?';
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            }
        });

        input.addEventListener('click', function() {
            input.readOnly = false;
            input.focus();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Done';
        removeButton.onclick = function() {
            removeTask(task, div);
        };

        div.appendChild(input);
        div.appendChild(removeButton);
        mondayList.appendChild(div);
    }

    modalSaveButton.addEventListener('click', function() {
        const newTask = currentTaskElement.value.trim();
        if (newTask && oldTask !== newTask) {
            updateTask(oldTask, newTask);
        }
        closeModal();
    });

    modalCloseButton.addEventListener('click', closeModal);

    function closeModal() {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
        if (currentTaskElement) {
            currentTaskElement.readOnly = true;
            currentTaskElement = null;
        }
    }

    function updateTask(oldTask, newTask) {
        let tasks = JSON.parse(localStorage.getItem('thursdayTasks')) || [];
        const taskIndex = tasks.indexOf(oldTask);
        if (taskIndex > -1) {
            tasks[taskIndex] = newTask; 
            localStorage.setItem('thursdayTasks', JSON.stringify(tasks));
        }
    }

    function removeTask(task, taskElement) {
        let tasks = JSON.parse(localStorage.getItem('thursdayTasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('thursdayTasks', JSON.stringify(tasks));
        mondayList.removeChild(taskElement);
    }
});

//friday
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.friForm');
    const addButton = document.querySelector('.friBtn');
    const mondayList = document.getElementById('fridayList');

    const modal = document.querySelector('.modal');
    const modalSaveButton = modal.querySelector('.btn-primary');
    const modalCloseButton = modal.querySelector('.btn-secondary');
    const modalBodyText = modal.querySelector('.modal-body p');

    let currentTaskElement;
    let oldTask;

    loadTasks();

    addButton.addEventListener('click', function() {
        const text = inputField.value.trim();
        if (text) {
            storeTask(text);
            displayTask(text);
            inputField.value = '';
        }
    });

    function storeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('fridayTasks')) || [];
        tasks.push(task);
        localStorage.setItem('fridayTasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('fridayTasks')) || [];
        tasks.forEach(displayTask);
    }

    function displayTask(task) {
        const div = document.createElement('div');
        div.className = 'input-group mb-2';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = task;
        input.readOnly = true;

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !input.readOnly) {
                oldTask = input.value;
                currentTaskElement = input;
                modalBodyText.textContent = 'Would you like to save the changes to this task?';
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            }
        });

        input.addEventListener('click', function() {
            input.readOnly = false;
            input.focus();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Done';
        removeButton.onclick = function() {
            removeTask(task, div);
        };

        div.appendChild(input);
        div.appendChild(removeButton);
        mondayList.appendChild(div);
    }

    modalSaveButton.addEventListener('click', function() {
        const newTask = currentTaskElement.value.trim();
        if (newTask && oldTask !== newTask) {
            updateTask(oldTask, newTask);
        }
        closeModal();
    });

    modalCloseButton.addEventListener('click', closeModal);

    function closeModal() {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
        if (currentTaskElement) {
            currentTaskElement.readOnly = true;
            currentTaskElement = null;
        }
    }

    function updateTask(oldTask, newTask) {
        let tasks = JSON.parse(localStorage.getItem('fridayTasks')) || [];
        const taskIndex = tasks.indexOf(oldTask);
        if (taskIndex > -1) {
            tasks[taskIndex] = newTask; 
            localStorage.setItem('fridayTasks', JSON.stringify(tasks));
        }
    }

    function removeTask(task, taskElement) {
        let tasks = JSON.parse(localStorage.getItem('fridayTasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('fridayTasks', JSON.stringify(tasks));
        mondayList.removeChild(taskElement);
    }
});

