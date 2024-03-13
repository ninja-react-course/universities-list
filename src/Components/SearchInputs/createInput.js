import domGenerator from "dom-generator";
import bindInputValue from "./bindInputValue";

/**
 * Creates an input element based on the provided name and placeholder.
 *
 * @param {string} inputName - The name attribute for the input element.
 * @param {string} [inputPlaceholder=""] - The placeholder text for the input element.
 * @param {Object} inputValues - The object storing input values.
 * @returns {HTMLElement} - The created input element wrapped in a div.
 */
const createInput = (inputName, inputPlaceholder = "", inputValues) => {
	// Use domGenerator to create a div with an input element inside
	return domGenerator({
		tag: "div",
		attributes: { class: "inputWrapper" },
		children: [
			{
				tag: "input",
				// Attach the bindInputValue function to the 'input' event
				eventListeners: {
					input: (evt) => bindInputValue(evt, inputValues),
				},
				properties: {
					id: `${inputName}-input`,
					name: inputName,
					placeholder: inputPlaceholder,
				},
			},
		],
	});
};

export default createInput;
