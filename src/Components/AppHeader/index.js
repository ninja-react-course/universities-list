import domGenerator from "dom-generator";

const AppHeader = () => {
	return domGenerator({
		tag: "div",
		children: [
			{
				tag: "h1",
				properties: { textContent: "Universities List" },
			},
			{
				tag: "p",
				properties: {
					textContent:
						"A list of almost all universities across the world",
				},
			},
		],
	});
};

export default AppHeader;
