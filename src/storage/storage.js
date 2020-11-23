const ttl = 86400000;
const key = 'data';

const setCachedData = (value) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
    }
	localStorage.setItem(key, JSON.stringify(item));
}

const getCachedData = () => {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null;
    }
	return item.value;
}

const setCachedOompa = (value, id) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
    }
	localStorage.setItem(`oompa-${id}`, JSON.stringify(item));
}

const getCachedOompa = (id) => {
	const itemStr = localStorage.getItem(`oompa-${id}`);
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(`oompa-${id}`)
		return null;
    }
	return item.value;
}

export { setCachedData, getCachedData, setCachedOompa, getCachedOompa };

