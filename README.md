# Deep Khatri — Developer Portfolio

> AWS Student Builder Challenge 2026 Submission

[![Built with React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-ff9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/amplify/)

A production-quality personal developer portfolio for **Deep Khatri** — Computer Engineering Student, Full-Stack Developer, AI Enthusiast, and Cloud Learner from Vadodara, India.

---

## 🚀 Live Portfolio

> **Deployment:** Push the repository to GitHub and connect it to [AWS Amplify Hosting](https://aws.amazon.com/amplify/) following the steps in the **AWS Amplify Deployment** section below.  
> The `amplify.yml` build configuration is included and ready to use.

---

## 🎮 DEEP.OS — The Signature Feature

The portfolio features **DEEP.OS**, a fully interactive developer terminal experience embedded in the site.

**How to launch:**
- Press `Ctrl + K` anywhere on the page
- Click the "Launch DEEP.OS" button in the hero or navigation
- On mobile: tap the terminal button

**Available commands:**
| Command | Description |
|---|---|
| `help` | Show all commands |
| `about` | Developer introduction |
| `skills` | Technical toolkit |
| `projects` | Featured projects |
| `journey` | Learning timeline |
| `achievements` | Completed challenges |
| `superpowers` | Developer capabilities |
| `contact` | Contact information |
| `theme <name>` | Change terminal theme (default, matrix, ocean, sunset) |
| `surprise` | 🎉 Easter egg |
| `clear` | Clear terminal |
| `exit` | Close DEEP.OS |

**Keyboard navigation:**
- `↑ ↓` — Browse command history
- `Tab` — Autocomplete command
- `Esc` — Close terminal
- `Ctrl+K` — Toggle terminal

---

## 🧱 Technology Stack

| Category | Technology |
|---|---|
| Frontend | React 18, TypeScript |
| Build tool | Vite 6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | Custom CSS3 design system |
| Fonts | Space Grotesk, Inter, JetBrains Mono |
| Hosting | AWS Amplify |
| CDN | Amazon CloudFront (via Amplify) |
| Storage | Amazon S3 (via Amplify) |

---

## 🌐 AWS Architecture

This portfolio is a **static React SPA hosted on AWS Amplify**.

```
Developer → GitHub → AWS Amplify Build → S3 → CloudFront → Visitor
```

**Services used:**
- **AWS Amplify Hosting** — CI/CD, build automation, HTTPS
- **Amazon CloudFront** (managed by Amplify) — Global CDN
- **Amazon S3** (managed by Amplify) — Static asset storage

No additional services (Lambda, DynamoDB, API Gateway) are configured — the architecture is intentionally simple and honestly documented.

**Build configuration:** See [`amplify.yml`](./amplify.yml)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navigation.tsx     # Sticky nav with mobile menu
│   │   ├── Hero.tsx           # Hero section with DEEP.OS hint
│   │   ├── About.tsx          # About + education
│   │   ├── Skills.tsx         # Interactive skill groups
│   │   ├── Projects.tsx       # Project cards + case study modals
│   │   ├── Achievements.tsx   # Achievement wall
│   │   ├── Journey.tsx        # Learning timeline
│   │   ├── AWS.tsx            # Cloud architecture section
│   │   ├── ChallengeDoc.tsx   # Competition documentation
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Footer.tsx         # Footer
│   │   └── DeepOS.tsx         # 🎮 DEEP.OS terminal (main feature)
│   ├── data/
│   │   └── portfolioData.ts   # All portfolio content (single source of truth)
│   ├── hooks/
│   │   └── useInView.ts       # IntersectionObserver hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Design system + global styles
├── amplify.yml                # AWS Amplify build configuration
├── index.html                 # HTML template with meta tags
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/deepkhatri2410/deep-khatri-portfolio
cd deep-khatri-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server starts at `http://localhost:5173`

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

---

## ☁️ AWS Amplify Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "initial portfolio commit"
git remote add origin https://github.com/deepkhatri2410/deep-khatri-portfolio
git push -u origin main
```

### Step 2: Create Amplify App

1. Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"Create new app"** → **"Host web app"**
3. Connect your GitHub repository
4. Select the `main` branch
5. Amplify auto-detects the build settings from `amplify.yml`
6. Click **"Save and deploy"**

### Step 3: Configure SPA routing

In the Amplify Console:
- Go to **Rewrites and redirects**
- Add rule: `/*` → `/index.html` with status `200`

### Step 4: Custom domain (optional)

In Amplify Console → **Domain management** → Add your custom domain.

---

## 🎨 Design System

The portfolio uses a custom CSS design system defined in `src/index.css` with CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#050810` | Page background |
| `--violet` | `#7c3aed` | Primary accent |
| `--cyan` | `#06b6d4` | Secondary accent |
| `--font-heading` | Space Grotesk | Section headings |
| `--font-body` | Inter | Body text |
| `--font-mono` | JetBrains Mono | Code, labels, terminal |

---

## 🏆 Featured Projects

### StadiumMind AI ⭐ Flagship
AI-powered smart stadium operating system concept. Built with React, TypeScript, Firebase, and Google Gemini API. Focused on crowd monitoring, multilingual AI assistance, and emergency response.

**Demo:** https://lnkd.in/dYp6v8AT

### EcoSphere Pro ⚡ Featured
Interactive sustainability platform with carbon footprint calculator, What-If simulator, and custom SVG charts. Built with vanilla HTML, CSS, and JavaScript.

**Live:** https://ecosphere-pro.vercel.app  
**Code:** https://lnkd.in/eRuXpden

---

## ♿ Accessibility

- Semantic HTML5 throughout
- Keyboard navigation support (all interactive elements)
- Visible focus states
- `prefers-reduced-motion` respect
- Color contrast checked (WCAG AA)
- ARIA labels on icon-only controls

---

## 📜 Competition Documentation

For full AWS Student Builder Challenge documentation, see the **Challenge Documentation** section on the live portfolio, or review [`src/components/ChallengeDoc.tsx`](src/components/ChallengeDoc.tsx).

---

## 👨‍💻 Author

**Deep Khatri**  
Computer Engineering Student | Full-Stack Developer | AI Enthusiast | Cloud Learner  
📍 Vadodara, Gujarat, India

- GitHub: [@deepkhatri2410](https://github.com/deepkhatri2410)
- LinkedIn: [deep-khatri-964306417](https://www.linkedin.com/in/deep-khatri-964306417/)

---

*Built for the AWS Student Builder Challenge 2026. React + TypeScript + AWS Amplify.*

