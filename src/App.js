import "../style.css";
import domGenerator from "dom-generator";

const App = () => {
	return domGenerator({
		tag: "main",
	});
};

export default App;