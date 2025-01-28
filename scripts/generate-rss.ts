import RSS from "rss";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { getAllDates, getArticles, type Article } from "../src/lib/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateContentEncoded(article: Article) {
	const summaryLines = article.summary_lines?.split("\n") || [];
	const htmlContent = `
<div>
  <p>${article.summary}</p>
  ${
		summaryLines.length > 0
			? `
  <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">
    ${summaryLines.map((line) => `<p>${line}</p>`).join("")}
  </div>
  `
			: ""
	}
  <p>カテゴリ: ${article.category} / 文字数: ${article.count.toLocaleString()}文字</p>
</div>
	`
		.trim()
		.replace(/\t|\n/g, "");

	return htmlContent;
}

async function generateRSS() {
	const feed = new RSS({
		title: "Streamer News",
		description: "動画配信関連のニュースをまとめるサイト",
		site_url: process.env.BASE_URL || "http://localhost:3000",
		feed_url: `${process.env.BASE_URL || "http://localhost:3000"}/feed.xml`,
		language: "ja",
		ttl: 60,
		custom_namespaces: {
			content: "http://purl.org/rss/1.0/modules/content/",
		},
	});

	const dates = await getAllDates();
	for (const date of dates.slice(0, 30)) {
		const articles = await getArticles(date);
		for (const article of articles) {
			feed.item({
				title: article.title,
				description: article.summary,
				url: article.link,
				date: article.pubdate,
				categories: [article.category],
				custom_elements: [
					{ "content:encoded": { _cdata: generateContentEncoded(article) } },
				],
				enclosure: article.thumbnail
					? {
							url: article.thumbnail,
							type: "image/jpeg",
						}
					: undefined,
			});
		}
	}

	const publicDir = join(dirname(__dirname), "public");
	await fs.mkdir(publicDir, { recursive: true });
	await fs.writeFile(join(publicDir, "feed.xml"), feed.xml({ indent: true }));
}

generateRSS().catch(console.error);
