const url = "https://api.coincap.io/v2";
function getAssets() {
	return fetch(`${url}/assets?limit=20`, {
		mode: "cors",
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => res.data);
}
function getAsset(coinId) {
	return fetch(`${url}/assets/${coinId}`, {
		mode: "cors",
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.then((res) => res.data);
}
function getAssetHistory(coinId) {
	const now = new Date();
	const end = now.getTime();
	now.setDate(now.getDate() - 1);
	const start = now.getTime();
	return fetch(
		`${url}/assets/${coinId}/history?interval=h1&start=${start}&end=${end}`,
		{
			mode: "cors",
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((res) => res.json())
		.then((res) => res.data);
}
export default {
	getAssets,
	getAsset,
	getAssetHistory,
};
