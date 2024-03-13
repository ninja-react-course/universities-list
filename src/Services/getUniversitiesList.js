import axios from "axios";

/**
 * Retrieves a list of universities based on the specified country and name.
 *
 * @param {Object} options - Options object for specifying the country and name parameters.
 * @param {string} [options.country=""] - The country parameter for university search.
 * @param {string} [options.name=""] - The name parameter for university search.
 * @returns {Promise} - A Promise that resolves to the result of the axios GET request.
 */
const getUniversitiesList = ({ country = "", name = "" } = {}) => {
	// Define the base URL for the universities API
	const universitiesAPIBaseUrl = "http://universities.hipolabs.com";

	// Construct the complete universities API URL with specified country and name parameters
	const universitiesAPI = `${universitiesAPIBaseUrl}/search?country=${country}&name=${name}`;

	// Create a proxy URL for CORS using corsproxy.io
	const corsProxyUrl = "https://corsproxy.io/";

	// Make an axios GET request to the universities API with the specified parameters
	return axios.get(`${corsProxyUrl}?${encodeURIComponent(universitiesAPI)}`);
};

export default getUniversitiesList;
