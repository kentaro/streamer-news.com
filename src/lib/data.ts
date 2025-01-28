import fs from "node:fs/promises";
import path from "node:path";

export interface Article {
	title: string;
	url: string;
	publishedAt: string;
	summary: string;
	category: string;
	count: number;
	thumbnail?: string;
}

export async function getArticles(date: string): Promise<Article[]> {
	const [year, month, day] = date.split("-");
	const filePath = path.join(process.cwd(), "data", year, month, `${day}.json`);

	try {
		const data = await fs.readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (error) {
		console.error(`Failed to read file: ${filePath}`, error);
		return [];
	}
}

export async function getAllDates(): Promise<string[]> {
	const dates: string[] = [];
	const dataDir = path.join(process.cwd(), "data");

	try {
		const years = (await fs.readdir(dataDir)).filter((f) => !f.startsWith("."));
		for (const year of years) {
			const yearPath = path.join(dataDir, year);
			const stat = await fs.stat(yearPath);
			if (!stat.isDirectory()) continue;

			const months = await fs.readdir(yearPath);
			for (const month of months) {
				const monthPath = path.join(yearPath, month);
				const days = await fs.readdir(monthPath);

				for (const day of days) {
					if (day.endsWith(".json")) {
						const dateStr = `${year}-${month}-${day.replace(".json", "")}`;
						dates.push(dateStr);
					}
				}
			}
		}
	} catch (error) {
		console.error("Failed to get all dates", error);
	}

	return dates.sort().reverse();
}

export async function getLatestDate(): Promise<string> {
	const dates = await getAllDates();
	return dates[0] || "";
}
