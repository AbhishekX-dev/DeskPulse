const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');


/* ---------- render tasks ---------- */

function renderTasks(tasks) {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

    /* checkbox */
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    
    checkbox.addEventListener('change', async (e) => {
      e.stopPropagation();
      const updatedTasks = await window.deskPulse.toggleTask(task.id);
      renderTasks(updatedTasks);
    });

    /* task text */
    const span = document.createElement('span');
    span.textContent = task.text;

    /* delete button */
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = '×';
    delBtn.style.marginLeft = 'auto';

    
    delBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    delBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const updatedTasks = await window.deskPulse.deleteTask(task.id);
      renderTasks(updatedTasks);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

/* ---------- load tasks on startup ---------- */

async function loadTasks() {
  const tasks = await window.deskPulse.getTasks();
  renderTasks(tasks);
}

loadTasks();

/* ---------- add task ---------- */

taskInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && taskInput.value.trim()) {
    const updatedTasks = await window.deskPulse.addTask(
      taskInput.value.trim()
    );
    taskInput.value = '';
    renderTasks(updatedTasks);
  }
});


