# Quick Start Guide
*How to launch your English teaching website locally*

---

## Prerequisites
Before you start, make sure you have **Node.js** installed on your computer.
- If you don't have it, download it from: https://nodejs.org/
- Choose the "LTS" (recommended) version

---

## Step-by-Step Instructions

### 1. Open Terminal
- 

### 2. Navigate to Your Project
Copy and paste this command, then press Enter:
```bash
cd "/Users/mashadolda/PREP SPEAKING CLUB"
```

### 3. Install Dependencies (First Time Only)
If this is your first time running the website, install the required packages:
```bash
npm install
```
*This might take a few minutes. You'll see lots of text scrolling - that's normal!*

### 4. Start the Website
Launch the development server:
```bash
npm start
```

### 5. View Your Website
- Your website will automatically open in your browser
- If it doesn't open automatically, go to: http://localhost:3000
- The website will refresh automatically when you make changes to files

---

## Quick Commands Summary

For future use, here are the commands in order:

```bash
# Navigate to project
cd "/Users/mashadolda/PREP SPEAKING CLUB"

# Start the website (do this every time)
npm start
```

---

## Troubleshooting

### Problem: "npm: command not found"
**Solution**: You need to install Node.js from https://nodejs.org/

### Problem: Website won't start
**Solution**: Try these commands:
```bash
npm install
npm start
```

### Problem: Port 3000 is already in use
**Solution**: Either:
- Close other applications using port 3000, OR
- When prompted, press `Y` to use a different port

### Problem: Changes not showing on website
**Solution**: 
- Save your files (Cmd+S / Ctrl+S)
- The website should refresh automatically
- If not, refresh your browser (Cmd+R / Ctrl+R)

---

## Stopping the Website

To stop the development server:
- In Terminal, press `Ctrl + C`
- You can then close the Terminal window

---

## Need Help?

If you run into issues:
1. Make sure you're in the correct folder (step 2)
2. Try running `npm install` again
3. Check that Node.js is properly installed
4. Restart Terminal and try again

*Your website will be available at http://localhost:3000 while the development server is running.*
