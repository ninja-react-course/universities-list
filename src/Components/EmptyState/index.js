import "./index.css";
import domGenerator from "dom-generator";

const EmptyState = () => {
	return domGenerator({
		tag: "div",
		attributes: { class: "emptyState" },
		children: [
			{
				tag: "img",
				properties: { src: "/empty-state.svg" },
			},
			{
				tag: "p",
				properties: { textContent: "No Uni Found!" },
			},
		],
	});
};

export default EmptyState;
