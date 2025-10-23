# DoneWithIt — Mosh Course (Modernized / Expo)

This repository contains my (Ahmad) updated implementation of Mosh Hamedani's **DoneWithIt** React Native course, modernized for current Expo / React Native versions.  
I kept Mosh's original learning flow and added notes and fixes where APIs changed.

> The project includes:
- `app/` — React Native (Expo) client app (updated to modern Expo APIs).
- `backend/` — optional local Node backend (historical code used in the course, you could download the backend from mosh website).
- `ReadMe-Course.txt` — lesson-by-lesson notes & migration tips (this file is intentionally updated frequently).
- This `README.md` — high-level overview and setup instructions.

## Why this repo
Mosh's course is excellent but was recorded with older Expo versions. This repo:
- Documents exactly what changed and why.
- Provides up-to-date, working code for modern Expo.
- Helps other learners follow along without hitting API breakage.

## Quick Start (Client)

Clone this repository:
```bash
git clone https://github.com/ahmadk92/DoneWithIt-Mosh-UpdatedExpo.git
cd DoneWithIt-Mosh-UpdatedExpo

# Then install dependencies and start Expo:
npm install
npx expo start