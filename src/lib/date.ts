import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ja");
dayjs.tz.setDefault("Asia/Tokyo");

export function formatDate(date: string): string {
	return dayjs(date).format("YYYY年M月D日H時mm分");
}

export function formatDatePath(date: string): string {
	return dayjs(date).format("YYYY/MM/DD");
}

export function parseDatePath(
	year: string,
	month: string,
	day: string,
): string {
	return `${year}-${month}-${day}`;
}

export function getNextDate(
	currentDate: string,
	dates: string[],
): string | null {
	const currentIndex = dates.indexOf(currentDate);
	if (currentIndex <= 0) return null;
	return dates[currentIndex - 1];
}

export function getPrevDate(
	currentDate: string,
	dates: string[],
): string | null {
	const currentIndex = dates.indexOf(currentDate);
	if (currentIndex === -1 || currentIndex === dates.length - 1) return null;
	return dates[currentIndex + 1];
}
