import domGenerator from "dom-generator";
/**
 * Creates a search button using domGenerator.
 *
 * @param {Function} handler - The handler function to be invoked on button click.
 * @param {Object} inputValues - The object storing input values.
 * @returns {HTMLElement} - The created search button element.
 */
const searchButton = (handler, inputValues) => {
	// Use domGenerator to create a button element with specific attributes and properties
	return domGenerator({
		tag: "button",
		dataAttributes: { defaultText: "Search" },
		properties: { textContent: "Search" },
		// Attach a click event listener to the search button, invoking the handler function
		eventListeners: {
			click: (evt) => handler(evt, inputValues),
		},
	});
};

export default searchButton;
