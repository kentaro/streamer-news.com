import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export interface Article {
	title: string;
	link: string;
	pubdate: string;
	summary: string;
	category: string;
	count: number;
	thumbnail?: string;
	summary_lines?: string;
}

export async function getAllDates(): Promise<string[]> {
	const dataDir = join(process.cwd(), "data");
	const years = (await readdir(dataDir)).filter((f) => !f.startsWith("."));
	const dates: string[] = [];

	for (const year of years) {
		const yearDir = join(dataDir, year);
		const months = (await readdir(yearDir)).filter((f) => !f.startsWith("."));

		for (const month of months) {
			const monthDir = join(yearDir, month);
			const days = (await readdir(monthDir)).filter((f) => f.endsWith(".json"));

			for (const day of days) {
				dates.push(`${year}-${month}-${day.replace(".json", "")}`);
			}
		}
	}

	return dates.sort().reverse();
}

export async function getLatestDate(): Promise<string> {
	const dates = await getAllDates();
	return dates[0];
}

export async function getArticles(date: string): Promise<Article[]> {
	const [year, month, day] = date.split("-");
	const filePath = join(process.cwd(), "data", year, month, `${day}.json`);
	const content = await readFile(filePath, "utf-8");
	return JSON.parse(content);
}
