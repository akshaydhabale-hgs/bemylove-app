# BeMyLove App 💕

A fun and interactive Valentine's Day proposal app built with React and Vite. The app directly shows a personalized proposal for Nameeta from Akshay.

## Features

💕 **Personalized Proposal** - Direct proposal message with hardcoded names
🎉 **Celebration Effects** - Beautiful confetti animation when they say "Yes"
💔 **Graceful Rejection** - Cute sad message if they decline
😈 **Unclickable No Button** - The "No" button moves away when hovered!

## How It Works

When someone visits the site:
- They see the message: "Nameeta, will you be my Valentine? ❤️"
- Two buttons appear: "Yes" and "No"
- The "No" button moves around the screen when they try to click it!
- Clicking "Yes" triggers a celebration with confetti and a love message from Akshay
- Clicking "No" shows a sad message with retry option

## Tech Stack

- **React 18** - UI framework
- **Vite 6** - Build tool and dev server
- **canvas-confetti** - Celebration effects
- **CSS3** - Styling with animations

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `bemylove-app`)
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bemylove-app.git
   git push -u origin main
   ```

### Step 2: Update Vite Config

In `vite.config.js`, update the `base` property to match your repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/bemylove-app/', // Change this to your repo name
})
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions

### Step 4: Deploy

The GitHub Actions workflow is already set up! Just push to the main branch:
```bash
git push origin main
```

The site will automatically build and deploy. Check the **Actions** tab to see the deployment progress.

Your site will be live at: `https://YOUR_USERNAME.github.io/bemylove-app/`

## Project Structure

```
bemylove-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Proposal.jsx        # Main proposal component
│   │   ├── Proposal.css        # Proposal page styles
│   │   ├── Setup.jsx           # (Unused - kept for reference)
│   │   └── Setup.css           # (Unused - kept for reference)
│   ├── App.jsx                 # Main app with hardcoded names
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## Customization

To change the names or settings, edit [src/App.jsx](src/App.jsx):

```javascript
const proposalData = {
  name: 'Nameeta',        // Recipient's name
  sender: 'Akshay',       // Your name
  restrictNo: true        // Make "No" button unclickable
}
```

## License

Free to use and modify for personal projects!

---

Made with ❤️ for Valentine's Day
