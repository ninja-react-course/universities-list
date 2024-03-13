import EmptyState from "../Components/EmptyState";
import UniversityCards from "../Components/UniversityCards";
import getUniversitiesList from "../Services/getUniversitiesList";
import buttonError from "./buttonError";
import buttonLoading from "./buttonLoading";

/**
 * Handles the search event, performs the university search, and updates the result display.
 *
 * @param {Event} event - The event triggering the search.
 * @param {Object} inputValues - The object containing input values for the search.
 */
const searchHandler = async (event, inputValues) => {
	// Clear existing results in the result wrapper
	resultWrapper.replaceChildren();

	// Get the button element triggering the search
	const button = event.currentTarget;

	// Check if both country and name inputs are empty
	if (!inputValues.country && !inputValues.name) {
		// Display an error on the button and return from the function
		return buttonError({
			button,
			error: "Please provide at least one of the inputs",
		});
	}

	// Enable the loading state of the button
	buttonLoading(button);

	// Make an asynchronous request to get a list of universities based on input values
	const { data } = await getUniversitiesList(inputValues);

	// Check if universities were found
	if (data.length) {
		// Display the university cards in the result wrapper
		resultWrapper.replaceChildren(UniversityCards(data));
	} else {
		// Display an empty state message in the result wrapper
		resultWrapper.replaceChildren(EmptyState());
	}

	// Disable the loading state of the button to complete
	buttonLoading(button);
};

export default searchHandler;
