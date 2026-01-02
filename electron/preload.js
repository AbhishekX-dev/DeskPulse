const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('deskPulse', {
  getTasks: () => ipcRenderer.invoke('get-tasks'),
  addTask: (text) => ipcRenderer.invoke('add-task', text),
  toggleTask: (id) => ipcRenderer.invoke('toggle-task', id),
  deleteTask: (id) => ipcRenderer.invoke('delete-task', id)
});
