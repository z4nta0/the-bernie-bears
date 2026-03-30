# 🐾 The Bernie Bears Website

A fun, colorful website for Lilah & Norah — the Bernese Mountain Dog sisters of The Bernie Bears!

Built with **Vite + React + TypeScript + React Router**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
bernie-bears/
├── public/
│   └── paw.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation bar
│   │   ├── Navbar.css
│   │   ├── Footer.tsx         # Site footer
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── Home.css
│   │   ├── About.tsx          # About Lilah & Norah
│   │   ├── About.css
│   │   ├── SocialLinks.tsx    # Social media links page
│   │   ├── SocialLinks.css
│   │   ├── Contact.tsx        # Contact form
│   │   └── Contact.css
│   ├── App.tsx                # Router setup
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles & CSS variables
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization Guide

### Updating Social Media Links
Open `src/pages/SocialLinks.tsx` and replace the placeholder URLs in the `socials` array:
```ts
url: 'https://facebook.com/YOUR_PAGE_URL',
url: 'https://instagram.com/YOUR_HANDLE',
url: 'https://youtube.com/@YOUR_CHANNEL',
url: 'https://tiktok.com/@YOUR_HANDLE',
```

### Adding Real Photos
- **Home hero**: Replace the placeholder `div` in `Home.tsx` with an `<img>` tag pointing to your banner photo.
- **About page**: Replace the `img-card-placeholder` and `img-placeholder-round` divs with real `<img>` tags.
- Place images in the `public/` folder and reference them as `/your-image.jpg`.

### Updating Contact Email
Open `src/pages/Contact.tsx` and replace `hello@theberniebears.com` with your real email.

### Wiring Up the Contact Form
The form currently shows a success message on submit but doesn't send data anywhere. To connect it to a real service, update the `handleSubmit` function in `Contact.tsx` with your preferred method:
- [EmailJS](https://www.emailjs.com/) — send emails directly from the browser
- [Formspree](https://formspree.io/) — simple form backend
- Your own backend API

### Brand Colors
All colors are defined as CSS variables in `src/index.css`:
```css
--pink-hot: #e91e8c;
--pink-soft: #f48fb1;
--brown-warm: #8d6748;
/* etc. */
```

---

## 🌐 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, features, CTA |
| `/about` | About | Lilah & Norah's story |
| `/links` | Social Links | All platform links |
| `/contact` | Contact | Contact form |

---

Made with 🩷 for Lilah & Norah — The Bernie Bears
