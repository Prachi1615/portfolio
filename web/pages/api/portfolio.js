import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  try {
    const response = await notion.databases.query({
      database_id: process.env.PORTFOLIO_DATABASE_ID,
    });
    res.status(200).json(response.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
