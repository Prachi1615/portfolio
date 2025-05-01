# Deploying Your Portfolio Publicly

This project is ready for deployment on Netlify (recommended for Next.js static sites) or Vercel. Your secrets in `.env.local` are server-only, but never commit secrets to public repos.

**To deploy:**
1. Push your code to GitHub (private or public repo).
2. Go to [Netlify](https://app.netlify.com/) and connect your repo, or use the CLI.
3. Set the environment variables `NOTION_TOKEN` and `PORTFOLIO_DATABASE_ID` in the Netlify dashboard (Site settings > Environment variables).
4. Deploy! Your site will be live on a public URL.

**Alternative:** Use Vercel for even simpler Next.js hosting.

**Security Note:** Never expose `.env.local` in your repo. Always use dashboard env vars for secrets.
