// script.js

// Define an array to store tasks.
const tasks = [];
let editIndex = -1; // Initialize to -1, indicating no task is being edited.

function addTask() {
    // Get the title and description of the task from the input fields.
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    // Get the values from the input fields.
    const title = titleInput.value;
    const description = descriptionInput.value;

    // Check if both fields are filled.
    if (!title || !description) {
        alert('Both Title and Description are required.');
        return; // Exit the function if the fields are not filled.
    }

    if (editIndex === -1) {
        // If not in edit mode, create a new task.
        const task = {
            title,
            description
        };
        tasks.push(task);
    } else {
        // If in edit mode, update the task.
        tasks[editIndex].title = title;
        tasks[editIndex].description = description;
        editIndex = -1; // Exit edit mode.
    }

    // Clear the input fields.
    titleInput.value = '';
    descriptionInput.value = '';

    // Display the to-do list.
    displayTasks();
}

function displayTasks() {
    const tableBody = document.querySelector('tbody');

    // Clear the existing table rows.
    tableBody.innerHTML = '';

    // Loop through the tasks and add them to the table.
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const row = tableBody.insertRow();
        const titleCell = row.insertCell(0);
        const descriptionCell = row.insertCell(1);
        const deleteCell = row.insertCell(2);
        const editCell = row.insertCell(3);

        titleCell.textContent = task.title;
        descriptionCell.textContent = task.description;
        deleteCell.innerHTML = '<a href="#" onclick="deleteTask(' + i + ')"><i class="fas fa-trash-alt"></i></a>';
        editCell.innerHTML = '<a href="#" onclick="editTask(' + i + ')"><i class="fas fa-edit"></i></a>';
    }
}

function deleteTask(index) {
    // Remove the task at the specified index from the tasks array.
    tasks.splice(index, 1);

    // Redisplay the tasks.
    displayTasks();
}

function editTask(index) {
    // Set the editIndex to the index of the task being edited.
    editIndex = index;

    // Populate the input fields with the task details for editing.
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
}
