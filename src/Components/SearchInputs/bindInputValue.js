/**
 * Binds input values to the inputValues object based on the provided event.
 *
 * @param {Event} event - The input event triggering the function.
 * @param {Object} inputValues - The object storing input values.
 */
const bindInputValue = (event, inputValues) => {
	// Get the input element that triggered the event
	const inputEl = event.currentTarget;
	// Update the inputValues object with the current input value
	inputValues[inputEl.name] = inputEl.value;
};

export default bindInputValue;
