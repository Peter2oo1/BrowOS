const startButton = document.getElementById("startButton");

const startMenu = document.getElementById("startMenu");

const powerButton = document.getElementById("powerButton");

startButton.addEventListener("click", function () {
	startMenu.classList.toggle("show");
});

powerButton.addEventListener("click", async function () {
	if (!confirm("Close this window and all its tabs?")) {
		return;
	}

	const currentWindow = await browser.windows.getCurrent();

	await browser.windows.remove(currentWindow.id);
});
