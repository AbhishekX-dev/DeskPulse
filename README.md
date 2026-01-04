# DeskPulse

> **A small desktop task widget built to stay on your screen and keep your daily tasks visible.**

It’s not a full task manager  it’s a quiet reminder that lives on your desktop.  
**No logins. No dashboards. No distractions.**

---

## The problem it solves
Most to-do apps fail because they disappear.  
You open them, add tasks, close the app and forget about them for the rest of the day.

**DeskPulse** fixes this by behaving like a desktop widget instead of a traditional app. Your tasks stay visible while you work.

## What DeskPulse does
*  **Runs as a desktop widget**
*  **Stays on top of your screen** (no taskbar clutter)
*  **Add, complete, and delete tasks quickly**
*  **Tasks reset automatically each new day**
*  **Stores data locally on your machine**
*  **Launches automatically on system startup** (optional).


Use cases
Daily task tracking
Study routines
Habit reminders
Focus sessions
Minimal productivity setups

## What it intentionally does NOT do
* No accounts or sign-ups
* No cloud sync
* No notifications
* No project management features
* No analytics or tracking

*DeskPulse is meant to be simple and calm.*

---

## How it works
DeskPulse is built with **Electron** and uses a small local data file to store tasks.

When a new day is detected, all tasks reset to incomplete making it ideal for daily routines. It behaves like a widget by:
1. Removing the window frame.
2. Staying always visible.
3. Running quietly in the background.

---

## Installation (Development)

### Requirements
* Node.js (v18 or newer)
* npm

### Steps
```bash
git clone [https://github.com/AbhishekX-dev/DeskPulse.git](https://github.com/AbhishekX-dev/DeskPulse.git)
cd DeskPulse
npm install
npm start
This runs DeskPulse in development mode.
## Build a Windows executable
To create the standalone application:


npm run build

After building, you’ll find the app here: dist/win-unpacked/DeskPulse.exe
This is a portable executable — no installer required.

Using DeskPulse as a desktop widget
Move the win-unpacked folder to a permanent location

(example: C:\Apps\DeskPulse\)
Create a shortcut of DeskPulse.exe.
Place the shortcut on your Desktop.
To start DeskPulse automatically on boot:
Press Win + R

Type shell:startup and hit Enter.
Paste the shortcut into the folder that opens.
DeskPulse will now open automatically when Windows starts.


Project structure
DeskPulse/
├── electron/
│   ├── main.js
│   └── preload.js
├── renderer/
│   ├── index.html
│   ├── style.css
│   └── renderer.js
├── backend/
│   └── taskManager.js
├── package.json
└── README.md
```
License
MIT License Free to use, modify, and share.

