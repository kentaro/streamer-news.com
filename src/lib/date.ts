import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ja";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ja");
dayjs.tz.setDefault("Asia/Tokyo");

export const formatDate = (iso: string) => {
	return dayjs(iso).tz().format("YYYY年M月D日H時mm分");
};

export const formatDatePath = (date: string) => {
	const [year, month, day] = date.split("-");
	return `${year}/${month}/${day}`;
};

export const parseDatePath = (year: string, month: string, day: string) => {
	return `${year}-${month}-${day}`;
};

export const getNextDate = (date: string, dates: string[]) => {
	const index = dates.indexOf(date);
	return index > 0 ? dates[index - 1] : null;
};

export const getPrevDate = (date: string, dates: string[]) => {
	const index = dates.indexOf(date);
	return index < dates.length - 1 ? dates[index + 1] : null;
};
