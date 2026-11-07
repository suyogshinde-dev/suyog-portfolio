# Suyog Shinde — Developer Portfolio

A modern, responsive, high-performance personal developer portfolio built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed with a dark-first aesthetic featuring deep navy/charcoal surfaces and vibrant violet, electric blue, and cyan accents.

---

## 🛠️ Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/)
- **UI Framework:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Architecture

```text
suyog-portfolio/
├── public/
│   ├── favicon.svg                  # Monogram brand favicon
│   └── Suyog_Shinde_Resume.pdf      # Downloadable resume document
├── src/
│   ├── components/
│   │   ├── common/                  # SectionHeader, TechTag
│   │   ├── layout/                  # Navbar, Footer
│   │   └── sections/
│   │       ├── Hero.jsx             # Headline, title, CTA, and social links
│   │       ├── About.jsx            # Developer bio and engineering pillars
│   │       ├── Skills.jsx           # Categorized tech badges
│   │       ├── Experience.jsx       # 3 Internships (organizations and durations only)
│   │       ├── Projects.jsx         # Real-world project showcase cards
│   │       ├── Education.jsx        # Academics, training, and certifications
│   │       └── Contact.jsx          # Working email, LinkedIn, and GitHub links
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all content
│   ├── styles/
│   │   └── index.css                # Global styles and custom utilities
│   ├── App.jsx                      # Page assembly
│   └── main.jsx                     # Application entry point
├── index.html                       # SEO & metadata configuration
├── tailwind.config.js               # Theme customization
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 2. Installation
Dependencies are already installed. If starting in a new clone:
```bash
npm install
```

### 3. Development Server
Start the local server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Compile and bundle the project for production:
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
Preview the generated `dist/` folder locally:
```bash
npm run preview
```

---

## ⚙️ Updating Content

All text, project details, skills, and links are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js).

### Updating Project URLs
When your repository or demo links are ready, update the `projects` section:
```javascript
// src/data/portfolioData.js
{
  id: 1,
  title: "Student Management System",
  githubUrl: "https://github.com/suyogshinde-dev/your-repo-name", // Replaces pending state
  demoUrl: "https://your-demo-url.com",                         // Replaces pending state
  ...
}
```

---

## 🌐 Deployment Options

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite.
4. Click **Deploy**.

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **"Import an existing project from Git"**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

