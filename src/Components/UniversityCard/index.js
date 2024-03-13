import "./index.css";
import domGenerator from "dom-generator";

const UniversityCard = (universityInfo) => {
	// Trim and ensure the web page URL starts with "https"
	let web_page = universityInfo.web_pages[0].trim();
	if (!web_page.startsWith("https")) {
		web_page = web_page.replace("http", "https");
	}

	// Generate the location string based on state/province and country
	let location;
	if (universityInfo["state-province"]) {
		location = `${universityInfo["state-province"]}, ${universityInfo.country}`;
	} else {
		location = universityInfo.country;
	}

	return domGenerator({
		tag: "div",
		attributes: { class: "UniversityCard card" },
		children: [
			{
				tag: "div",
				attributes: { class: "image-wrapper" },
				children: [
					{
						tag: "img",
						attributes: { class: "building-img" },
						properties: { src: "/building.png" },
					},
					{
						tag: "div",
						attributes: { class: "country-flag-wrapper" },
						children: {
							tag: "img",
							attributes: { class: "country-flag" },
							properties: {
								src: `https://flagsapi.com/${universityInfo.alpha_two_code}/flat/64.png`,
							},
						},
					},
					{
						tag: "div",
						attributes: { class: "stick-man" },
						properties: {
							innerHTML: /*html*/ `
								<div class="head stickman-color"></div>
								<div class="torso stickman-color"></div>
								<div class="arms">
									<div class="arm left-arm stickman-color"></div>
									<div class="arm right-arm stickman-color"></div>
								</div>
								<div class="legs">
									<div class="leg left-leg stickman-color"></div>
									<div class="leg right-leg stickman-color"></div>
								</div>
							`.trim(),
						},
					},
				],
			},
			{
				tag: "a",
				attributes: { class: "university-name" },
				properties: {
					target: "_blank",
					href: web_page,
					textContent: universityInfo.name,
				},
			},
			{
				tag: "div",
				attributes: { class: "location-info-wrapper" },
				children: [
					{
						tag: "img",
						attributes: { class: "location-icon" },
						properties: { src: "/location.svg" },
					},
					{
						tag: "p",
						properties: { textContent: location },
					},
				],
			},
		],
	});
};

export default UniversityCard;
