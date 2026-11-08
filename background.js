// BrowOS Background Script
// Opens BrowOS when the extension icon is clicked in the browser toolbar

const browserAPI = globalThis.browser || globalThis.chrome;

browserAPI.action.onClicked.addListener(async () => {
	const browosUrl = browserAPI.runtime.getURL("index.html");

	try {
		// If BrowOS is already open in the current window, switch to it
		const tabs = await browserAPI.tabs.query({ url: browosUrl, currentWindow: true });

		if (tabs && tabs.length > 0) {
			await browserAPI.tabs.update(tabs[0].id, { active: true });
			return;
		}
	} catch (error) {
		// If query fails, fall back to opening a new tab
	}

	await browserAPI.tabs.create({ url: browosUrl });
});
