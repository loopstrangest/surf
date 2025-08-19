# 🌊 Surf

A modern TikTok/Instagram Reels clone web app featuring 100 curated YouTube shorts with smooth vertical scrolling and responsive design.

## ✨ Features

- **100 Curated YouTube Shorts** - Hand-picked collection of engaging content
- **Vertical Scrolling Feed** - Smooth, mobile-first navigation experience
- **Cross-Platform Support** - Optimized for mobile, tablet, and desktop
- **Autoplay & Loop** - Seamless video playback with original audio
- **Interactive Controls** - Like and share functionality with native Web Share API
- **Keyboard Navigation** - Desktop-friendly shortcuts for power users
- **Random Shuffle** - Videos are randomly ordered for fresh discovery
- **Responsive Design** - Beautiful UI that adapts to any screen size

## 🚀 Quick Start

### Prerequisites
- Node.js (for development)
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/loopstrangest/surf.git
cd surf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:8000`

### Building for Production

Compile TypeScript to JavaScript:
```bash
npm run build
```

## 🎮 Controls

### Mobile/Touch
- **Swipe up/down** - Navigate between videos
- **Tap heart** - Like video
- **Tap share** - Share video

### Desktop/Keyboard
- **↑/k** - Previous video
- **↓/j** - Next video  
- **l/Space** - Like current video
- **s** - Share current video
- **Mouse wheel** - Navigate videos

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, TypeScript
- **Video Platform**: YouTube Embeds
- **Build Tool**: TypeScript Compiler
- **Server**: Static file serving
- **Responsive**: CSS Grid & Flexbox

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge

## 🔧 Development

### Project Structure
```
surf/
├── index.html          # Main HTML structure
├── app.ts              # TypeScript source code
├── app.js              # Compiled JavaScript
├── styles.css          # Responsive styles
├── shorts.txt          # YouTube shorts URLs
├── package.json        # Project configuration
└── README.md          # This file
```

### Scripts
- `npm start` - Start development server
- `npm run dev` - Start development server (alias)
- `npm run build` - Compile TypeScript

## 🌊 Design Philosophy

Surf embraces the ocean wave aesthetic while delivering a familiar social media experience. The app prioritizes:

- **Mobile-first design** - Optimized for touch interactions
- **Performance** - Lightweight and fast loading
- **Accessibility** - Keyboard navigation and responsive design
- **User experience** - Intuitive controls and smooth animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [GitHub Repository](https://github.com/loopstrangest/surf)
- [Live Demo](https://loopstrangest.github.io/surf) *(if deployed)*

---

Built with 🌊 by [loopstrangest](https://github.com/loopstrangest)