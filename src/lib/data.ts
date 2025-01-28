import fs from "node:fs/promises";
import path from "node:path";

export interface Article {
	title: string;
	link: string;
	pubdate: string;
	summary: string;
	category: string;
	count: number;
	thumbnail?: string;
}

export async function getArticles(date: string): Promise<Article[]> {
	const [year, month, day] = date.split("-");
	const filePath = path.join(
		process.cwd(),
		`data/${year}/${month}/${day}.json`,
	);
	const data = await fs.readFile(filePath, "utf-8");
	return JSON.parse(data);
}

export async function getAllDates(): Promise<string[]> {
	const dates: string[] = [];
	const dataDir = path.join(process.cwd(), "data");
	const years = (await fs.readdir(dataDir)).filter((f) => !f.startsWith("."));

	for (const year of years) {
		const yearDir = path.join(dataDir, year);
		const months = (await fs.readdir(yearDir)).filter(
			(f) => !f.startsWith("."),
		);

		for (const month of months) {
			const monthDir = path.join(yearDir, month);
			const days = (await fs.readdir(monthDir)).filter((f) =>
				f.endsWith(".json"),
			);

			for (const day of days) {
				dates.push(`${year}-${month}-${day.replace(".json", "")}`);
			}
		}
	}

	return dates.sort().reverse();
}

export async function getLatestDate(): Promise<string | null> {
	const dates = await getAllDates();
	return dates[0] || null;
}
