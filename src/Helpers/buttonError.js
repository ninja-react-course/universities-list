/**
 * Updates a button's content and style to indicate an error temporarily.
 *
 * @param {Object} options - Options object containing button, error, and timer properties.
 * @param {HTMLElement} options.button - The button element to be updated.
 * @param {string} options.error - The error message to be displayed on the button.
 * @param {number} [options.timer=3000] - The duration (in milliseconds) for which the error indication persists.
 * @returns {number} - The timeout ID for clearing the error indication after the specified duration.
 */
const buttonError = ({ button, error, timer = 3000 }) => {
	// Save the current button text content as the default text for later restoration
	button.dataset.defaultText = button.textContent;

	// Set the button text content to the provided error message
	button.textContent = error;

	// Change the text color of the button to indicate an error
	button.style.color = "#ff5a5a";

	// Return a timeout ID for clearing the error indication after the specified duration
	return setTimeout(() => {
		// Reset the text color and content of the button to its default values
		button.style.color = "";
		button.textContent = button.dataset.defaultText;
	}, timer);
};

export default buttonError;
