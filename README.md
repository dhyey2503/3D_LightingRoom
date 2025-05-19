💡 3DLightingRoom – Advanced Interactive 3D Lighting Environment

"3DLightingRoom" is a cutting-edge, browser-based 3D lighting simulation tool built with **React.js** and **Three.js** (via **React Three Fiber**). It enables users to visualize, place, and configure lighting setups within a customizable virtual room in real-time.

This project merges the power of WebGL, real-time graphics, and intuitive UI/UX design to offer an immersive lighting design experience. From ambient glow to dynamic spotlights, every lighting element is fully interactive and visually accurate—making it a great base for architectural previews, virtual showrooms, interior design mockups, or educational simulations.

---

 📌 Project Objective

The main goal of this project is to provide a platform where users can experiment with different lighting types and behaviors in a realistic 3D environment. The application simulates how light interacts with surfaces, mimicking real-world behaviors such as casting shadows, changing intensity, and bouncing light.

---

 🎯 Key Features

 🧱 Realistic Room Environment
- Five-sided enclosed 3D room with textured walls and floors
- Supports multiple angles and zoom levels via orbit controls

 🔦 Dynamic Light Control
- Add and move lights interactively
- Customize properties like:
  - Light type (spot, directional, ambient)
  - Position and rotation
  - Color, intensity, and spread angle

 🧩 User Interface
- Intuitive radio buttons and sliders for light configuration
- Drag-and-drop support for light elements
- Toggle light animations (blink, pulse, etc.)
- Real-time updates reflected immediately in the scene

 ✨ Visual Fidelity
- Simulated shadows, light fall-off, and reflections
- Smooth transitions and animations using Framer Motion
- Gesture support via `@use-gesture/react` for enhanced interactivity

---

 🛠 Tech Stack

| Technology | Role |
|------------|------|
| [React.js](https://react.dev/) | Frontend framework |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [React Three Fiber](https://github.com/pmndrs/react-three-fiber) | React wrapper for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Helpers & abstractions for R3F |
| [Framer Motion](https://www.framer.com/motion/) | Animation library |
| [React DnD](https://react-dnd.github.io/react-dnd/about) | Drag-and-drop functionality |
| [@use-gesture/react](https://use-gesture.netlify.app/) | Gesture and motion handling |
| [Vite](https://vitejs.dev/) | Fast development bundler |
