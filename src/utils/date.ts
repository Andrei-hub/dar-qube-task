import { format } from 'date-fns';

export function toDate(date: string | number, transform: string = 'yyyy-MM-dd'): string {
	if (typeof date === 'number') {
		return format(new Date(date * 1000), transform);
	}
	return format(new Date(date), transform);
}
