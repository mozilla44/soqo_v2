// pages/api/articles.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://www.carenews.com/data-feed/112/efaaef9b8357cf9c7a74659c0ef3a839/json'); // Replace with your actual URL
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
}
