const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const taskManager = require('../backend/taskManager');

function createWindow() {
  const win = new BrowserWindow({
    width: 340,
    height: 420,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(
    path.join(__dirname, '../renderer/index.html')
  );
}

/* ---------- IPC handlers ---------- */

ipcMain.handle('get-tasks', () => {
  return taskManager.getTasks();
});

ipcMain.handle('add-task', (_, text) => {
  return taskManager.addTask(text);
});

ipcMain.handle('toggle-task', (_, id) => {
  return taskManager.toggleTask(id);
});

ipcMain.handle('delete-task', (_, id) => {
  return taskManager.deleteTask(id);
});

/* ---------- app lifecycle ---------- */

app.whenReady().then(createWindow);
