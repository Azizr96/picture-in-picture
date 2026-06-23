# Picture-in-Picture Screen Viewer

A minimal **Picture-in-Picture (PiP) web application** that allows users to capture their screen and view it in a floating window while continuing to work or watch content.

This project was built to explore modern browser capabilities such as the **Screen Capture API** and **Picture-in-Picture API**, commonly used in productivity tools and video applications.

---

## 🚀 Features

* Capture screen, window, or browser tab
* Activate Picture-in-Picture mode with one click
* Floating video window for multitasking
* Clean, minimal interface
* Automatic media stream handling
* Responsive and browser-native functionality

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* Screen Capture API (`getDisplayMedia`)
* Picture-in-Picture API (`requestPictureInPicture`)

---

## 📁 Project Structure

```text id="pip-project-structure"
picture-in-picture/
│
├── index.html
├── assets/
│   ├── CSS/
│   │   └── style.css
│   └── scripts/
│       └── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Screen Selection

The browser prompts the user to select a screen or window using:

```js id="screen-capture"
navigator.mediaDevices.getDisplayMedia()
```

The selected stream is assigned to a video element:

```js id="video-stream"
videoElement.srcObject = mediaStream;
```

---

### 2. Video Playback

Once metadata is loaded, the video begins playing automatically:

```js id="autoplay"
videoElement.onloadedmetadata = () => {
  videoElement.play();
};
```

---

### 3. Picture-in-Picture Mode

When the user clicks the button, the video enters PiP mode:

```js id="pip-mode"
videoElement.requestPictureInPicture();
```

This enables a floating video window that stays on top of other applications.

---

## 🧠 Key Concepts Practised

### 🖥️ Advanced Browser APIs

* Screen Capture API
* Picture-in-Picture API

---

### ⚡ Asynchronous JavaScript

Handles permission-based media access using `async/await`.

---

### 🎥 Media Stream Handling

Processes live screen capture streams directly in the browser.

---

### 🎯 Event-Driven UI

* Button click triggers PiP mode
* Media stream lifecycle controlled via DOM events

---

## 💡 What I Learned

This project strengthened my understanding of:

* Modern browser-native APIs
* Working with real-time media streams
* Handling user permissions securely
* Building lightweight productivity tools
* Integrating video elements with JavaScript logic

---

## 🔮 Possible Improvements

* Add stop/close stream button
* Allow switching between multiple screens
* Add custom PiP UI controls (simulated overlay window)
* Improve error handling for denied permissions
* Add visual feedback when PiP mode is active

---
📷 Preview
<img width="883" height="606" alt="image" src="https://github.com/user-attachments/assets/2af612de-ac30-464d-ae8f-f679040c5314" />

https://azizr96.github.io/picture-in-picture/
---
## 📄 License

This project is for educational and practice purposes.

---

## 👤 Author

Fictional project created for learning modern browser APIs and screen capture functionality.

---
