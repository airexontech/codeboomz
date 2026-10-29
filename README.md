# Code Boomz - Web Application

A modern, high-performance recreation and upgrade of the [CodeBoomz](https://codeboomz.com/) professional tech education website built with **React**, **Vite**, **React Router v6**, **Lucide React**, and modern modular CSS design tokens.

---

## 🚀 Key Features & Recreated Pages

1. **Homepage (`/`)**
   - **Hero Section**: High-resolution background, code syntax block, floating interactive skill cards, badge, and responsive CTA buttons.
   - **Hiring Partners**: Marquee displaying top hiring companies (Capgemini, Cognizant, Microsoft, TCS).
   - **Advantage & Features**: 8 feature cards with background photography and custom icons.
   - **Path to Mastery**: 4-step progressive learning process.
   - **Quick Query Section**: WhatsApp direct chat (`+91 832-8083619`) and direct calling.
   - **Student Success Stories**: Testimonials with star ratings, quotes, and avatars.

2. **Courses Catalog (`/courses`)**
   - Interactive search and category filtering.
   - 8 comprehensive course tracks with cover images, ratings, student counts, and direct links.

3. **Course Detail Pages (`/courses/:slug`)**
   - Dedicated pages for all 8 tracks:
     - `/courses/java-full-stack`
     - `/courses/python-full-stack`
     - `/courses/mean-stack`
     - `/courses/mern-stack`
     - `/courses/salesforce`
     - `/courses/cyber-security`
     - `/courses/data-science`
     - `/courses/genai`
   - Features: Hero metadata, badges, enrollment figures, curriculum accordion with expandable syllabus modules, prerequisites, course inclusions, and sticky career roadmap application box.

4. **About Us Page (`/about`)**
   - Mission and Vision statements with authentic photography.
   - Key stats counter: 10+ Courses, 5000+ Students, 20+ Experts, 200+ Partners.
   - Interactive FAQ accordion covering common prospective student questions.

5. **Pricing Page (`/pricing`)**
   - Transparent pricing plans:
     - **Self-Paced** (₹4,999)
     - **Live Bootcamp** (₹14,999 - Most Popular)
     - **1:1 Mentorship** (₹29,999)
   - Feature checklists and direct enrollment links.

6. **Contact & Admissions Page (`/contact`)**
   - Custom course selector dropdown with tech logos.
   - Working contact form with Google Apps Script endpoint integration.
   - Direct call card (`+91 832-8083619`) and official email (`codeboomz@gmail.com`).
   - Office location: *5th floor, Sandhya Techno 1, Rai Durg, Hyderabad, Telangana 500032*.
   - Embedded interactive Google Map (HITEC City, Hyderabad).
   - FAQ accordion and animated Success Confirmation Modal.

7. **Brand Showcase (`/be-beauty`)**
   - Recreated vector branding showcase page with SVG bezier curves and champagne gold color palette.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM (v6) with `<ScrollToTop>` helper
- **Icons**: Lucide React
- **Styles**: Vanilla CSS Design System with CSS Custom Properties, Glassmorphism, and responsive breakpoints
- **Backend API**: Serverless Google Apps Script endpoint for contact form inquiries

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:3000/`.

### 3. Production Build
```bash
npm run build
```
This generates the optimized static bundle in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌐 Hostinger Deployment Guide

This project is prepared for deployment to Hostinger Shared, Cloud, or VPS hosting.

### Step 1: Build the Production Bundle
Run the build command on your local machine:
```bash
npm run build
```
This creates a `dist/` folder containing:
- `index.html`
- `.htaccess` (Pre-configured for Single Page Application rewrite rules)
- `logo.png`
- `assets/` (Compiled JS, CSS, and optimized image files)

### Step 2: Upload Files to Hostinger

#### Option A: Using Hostinger File Manager (hPanel)
1. Log in to your **Hostinger Control Panel (hPanel)**.
2. Navigate to **Websites** -> Click **Manage** on your domain.
3. In the left sidebar under **Files**, click **File Manager** (or access `public_html`).
4. **Important**: Before uploading, make a backup of your existing `public_html` files if needed. Do not overwrite the live website until you are ready.
5. Enter the `public_html` directory (or a subdomain directory like `public_html/v2` for staging).
6. Upload all files and folders located **inside** the `dist/` folder (not the `dist` folder itself):
   - `index.html`
   - `.htaccess`
   - `logo.png`
   - `assets/`
7. Ensure that the `.htaccess` file is uploaded. In File Manager, if hidden files are not visible, enable **Show Hidden Files (dotfiles)** in settings.

#### Option B: Using FTP (FileZilla)
1. Retrieve your FTP credentials from Hostinger hPanel (**Files** -> **FTP Accounts**).
2. Connect using FileZilla or your preferred FTP client.
3. Navigate to `/public_html`.
4. Upload all files from the local `dist/` directory directly into `/public_html`.

### Step 3: SPA Routing Verification (`.htaccess`)
The project includes a ready-to-deploy `.htaccess` file inside `public/` (copied automatically to `dist/`). This ensures that client-side routes (e.g., `https://yourdomain.com/courses/java-full-stack`, `https://yourdomain.com/about`) do not produce a 404 error when refreshed.

Content of `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔒 Form Handling & Backend Details

- The inquiry form on `/contact` is wired to the live Google Apps Script endpoint:
  ```
  https://script.google.com/macros/s/AKfycbxdcKVHGyOML3W8ERfNB-See2r-OD22gqAjuFgCe5EVLzfbYdnoQ7U7Qkhm1W7I2_Rd/exec
  ```
- Submissions are sent using `POST` with `mode: 'no-cors'`.
- Upon successful transmission, the form resets and triggers an animated feedback modal.
- If you wish to connect a custom Node.js, Express, PHP, or Python backend in the future, simply update the `GOOGLE_SCRIPT_URL` in `src/pages/Contact.jsx`.

---

## 🎨 Summary of Improvements

1. **Modern Component Modularization**: Clean separation of data (`src/data/`), components (`src/components/`), and pages (`src/pages/`).
2. **Interactive Search & Filtering**: Added real-time course search on the `/courses` listing.
3. **SEO & Metadata**: Added meta tags, OpenGraph previews, and Google Fonts (`Outfit` & `Inter`).
4. **Zero Broken Assets**: All 27 authentic brand assets are locally managed without third-party CDN latency.
5. **Ready-to-Deploy**: Complete `.htaccess` setup for Hostinger hosting environments.
