## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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