const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/data.json');

/* ---------- helpers ---------- */

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

function todayDate() {
  return new Date().toISOString().split('T')[0];
}

/* ---------- core ---------- */

function handleNewDay() {
  const data = readData();
  const today = todayDate();

  // first launch
  if (!data.today.date) {
    data.today.date = today;
    writeData(data);
    return;
  }

  // new day detected
  if (data.today.date !== today) {
    data.today.tasks = data.today.tasks.map(task => ({
      ...task,
      completed: false
    }));

    data.today.date = today;
    writeData(data);
  }
}

/* ---------- API ---------- */

function getTasks() {
  handleNewDay();
  return readData().today.tasks;
}

function addTask(text) {
  const data = readData();

  data.today.tasks.push({
    id: Date.now(),
    text,
    completed: false
  });

  writeData(data);
  return data.today.tasks;
}

function toggleTask(id) {
  const data = readData();

  data.today.tasks = data.today.tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  writeData(data);
  return data.today.tasks;
}

function deleteTask(id) {
  const data = readData();

  data.today.tasks = data.today.tasks.filter(task => task.id !== id);

  writeData(data);
  return data.today.tasks;
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask
};
