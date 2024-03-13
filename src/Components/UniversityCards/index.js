import "./index.css";
import domGenerator from "dom-generator";
import UniversityCard from "../UniversityCard";

const UniversityCards = (universitiesInfo) => {
	return domGenerator({
		tag: "div",
		attributes: { class: "UniversityCards" },
		children: universitiesInfo.map((uniInfo) => ({
			tag: UniversityCard(uniInfo),
		})),
	});
};

export default UniversityCards;
