# Notion-Powered Portfolio

A modern, customizable portfolio site built with Next.js and React, featuring dynamic content fetched from your Notion database.

## Features
- **Dynamic Portfolio:** Content is pulled from Notion via API and grouped by tags (Projects, Experience, Education, etc.)
- **Modern UI:** Hero/profile section with animated accents, wavy SVG divider, and social icons
- **Responsive:** Looks great on all devices
- **Easy Theming:** Customize colors, profile image, and more
- **Python Script:** Optionally generate/update Notion content using `generate_portfolio.py`

## Quick Start

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Prachi1615/portfolio.git
cd notion-portfolio/web
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in `web/` with:
```
NOTION_TOKEN=your_notion_integration_token
PORTFOLIO_DATABASE_ID=your_notion_database_id
```

### 3. Start the Dev Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 4. (Optional) Generate Notion Content
If you want to programmatically generate/update your Notion portfolio:
```bash
cd ..
pip install -r requirements.txt
python generate_portfolio.py
```

## Deployment
- Deploy easily to Vercel, Netlify, or any static hosting supporting Next.js
- Make sure your environment variables are set on your deployment platform

## Customization
- Change your profile image: replace `web/public/image.png`
- Edit hero section, bio, and social links in `web/pages/index.js`
- Adjust tag grouping/order in `web/pages/index.js` (`TAG_ORDER`)

## Security
- All external links use `rel="noopener noreferrer"`
- Environment variables are required for Notion API access

## Credits
- Built by Prachi Sethi
- Powered by [Next.js](https://nextjs.org/) and [Notion API](https://developers.notion.com/)

---

_Questions? PRs welcome!_


# portfolio
=======
# Notion Portfolio Generator

This tool helps you create and manage your professional portfolio in Notion.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file with your Notion credentials:
```
NOTION_TOKEN=your_notion_integration_token
PORTFOLIO_DATABASE_ID=your_notion_database_id
```

## Usage

Run the script to generate your portfolio:
```bash
python generate_portfolio.py
```

## Features

- Create a main portfolio page
- Add project pages with descriptions and tags
- Add images to portfolio items
- Organize projects in a Notion database

## Requirements

- Python 3.7+
- Notion account with integration token
- Notion database set up for portfolio items