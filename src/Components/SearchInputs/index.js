import "./index.css";
import domGenerator from "dom-generator";
import createInput from "./createInput";
import searchButton from "./searchButton";

const SearchInputs = (handler) => {
	// Initialize an object to store input values with default values for 'country' and 'name'
	const inputValues = {
		country: "",
		name: "",
	};

	// Create button element for initiating the search process
	const searchButtonElement = searchButton(handler, inputValues);

	// Create input element for 'country' with corresponding placeholder
	const countryInput = createInput(
		"country",
		"Country in which the university is located",
		inputValues
	);

	// Create input element for 'name' with corresponding placeholder
	const nameInput = createInput(
		"name",
		"Name of the university",
		inputValues
	);

	// Add event listener to each input for handling 'Enter' keypress
	[countryInput, nameInput].forEach((input) => {
		input.addEventListener(
			"keyup",
			(event) => event.key === "Enter" && searchButtonElement.click()
		);
	});

	return domGenerator({
		tag: "div",
		attributes: { class: "SearchInputsWrapper" },
		children: [
			{ tag: countryInput },
			{ tag: nameInput },
			{
				tag: "div",
				attributes: { class: "button-wrapper" },
				children: { tag: searchButtonElement },
			},
		],
	});
};

export default SearchInputs;
