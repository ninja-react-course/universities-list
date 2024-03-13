import "../style.css";
import domGenerator from "dom-generator";
import searchHandler from "./Helpers/searchHandler";
import AppHeader from "./Components/AppHeader";
import SearchInputs from "./Components/SearchInputs";

const App = () => {
	return domGenerator({
		tag: "main",
		children: [
			{ tag: AppHeader() },
			{ tag: SearchInputs(searchHandler) },
			{ tag: "div", attributes: { id: "resultWrapper" } },
		],
	});
};

export default App;
