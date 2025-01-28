import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ja";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ja");
dayjs.tz.setDefault("Asia/Tokyo");

export function formatDate(iso: string): string {
	return dayjs(iso).tz().format("YYYY年M月D日H時mm分");
}

export function formatDatePath(date: string): string {
	const [year, month, day] = date.split("-");
	return `${year}/${month}/${day}`;
}

export function parseDatePath(
	year: string,
	month: string,
	day: string,
): string {
	return `${year}-${month}-${day}`;
}

export function getNextDate(date: string, dates: string[]): string | null {
	const index = dates.indexOf(date);
	return index > 0 ? dates[index - 1] : null;
}

export function getPrevDate(date: string, dates: string[]): string | null {
	const index = dates.indexOf(date);
	return index < dates.length - 1 ? dates[index + 1] : null;
}
