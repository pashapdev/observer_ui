export const formatDate = (date: string) => {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [day, month, year].join('-');
}

export const formatDateWithTime = (date: string) => {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	let hours = '' + d.getHours();
	let minutes = '' + d.getMinutes();
	let seconds = d.getSeconds();
	let secondsStr = `${seconds}`;
	if (seconds < 10) {
		secondsStr = `0${seconds}`;
	}

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return `${[day, month, year].join('-')} ${hours}:${minutes}:${secondsStr}`;
}