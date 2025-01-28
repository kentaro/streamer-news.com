import { getArticles, getAllDates, getLatestDate } from "./data";
import { formatDate, formatDatePath, parseDatePath } from "./date";

async function test() {
	console.log("=== Testing data functions ===");

	const dates = await getAllDates();
	console.log("All dates:", dates);

	const latestDate = await getLatestDate();
	console.log("Latest date:", latestDate);

	const articles = await getArticles(latestDate);
	console.log("Articles:", articles);

	console.log("\n=== Testing date functions ===");

	const formattedDate = formatDate(articles[0].publishedAt);
	console.log("Formatted date:", formattedDate);

	const datePath = formatDatePath(latestDate);
	console.log("Date path:", datePath);

	const parsedDate = parseDatePath("2025", "1", "28");
	console.log("Parsed date:", parsedDate);
}

test().catch(console.error);
