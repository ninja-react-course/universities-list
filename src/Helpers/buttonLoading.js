/**
 * Toggles the loading state of a button, updating its appearance and content accordingly.
 *
 * @param {HTMLElement} button - The button element to toggle the loading state.
 */
const buttonLoading = (button) => {
	// Check if the button is already in the loading state
	if (button.dataset.isLoading === "true") {
		// Reset button properties to their default values
		button.dataset.isLoading = false;
		button.style.cursor = "";
		button.textContent = button.dataset.defaultText;

		// Exit the function as loading state is toggled off
		return;
	}

	// Set button properties for the loading state
	button.dataset.isLoading = true;
	button.style.cursor = "not-allowed";
	button.textContent = "Loading";

	// Initialize a counter for tracking the number of dots in the loading animation
	let dotCounter = 0;

	// Set an interval for updating the loading animation every 0.5 seconds
	const dotInterval = setInterval(() => {
		// Check if loading state has been toggled off during the interval
		if (button.dataset.isLoading !== "true") {
			// Clear the interval if loading state is toggled off
			return clearInterval(dotInterval);
		}

		// Update the loading animation with a dot
		if (dotCounter < 3) {
			button.textContent += ".";
			dotCounter++;
		} else {
			// Reset the loading animation after displaying three dots
			button.textContent = "Loading";
			dotCounter = 0;
		}
	}, 500);
};

export default buttonLoading;
