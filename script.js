import { Projects } from "./project.js";
import { openLink } from "./openlink.js";
const projectContainer = document.querySelector(".grid"); // Get the grid container element

// Loop through the Projects array
Projects.forEach((project) => {
    // Create a card element for each project
    const card = document.createElement("div");
    card.classList.add("p-4", "bg-white", "rounded", "shadow-md", "flex", "flex-col", "gap-2");
    card.setAttribute("draggable", "true");

    // Create the content for the card
    card.innerHTML = `
    <div class="w-full h-auto overflow-clip">
        <img src="${project.img}" alt="${project.topic}" class="w-full h-auto hover:scale-125 duration-300 hover:rotate-10" draggable="false">
    </div>
        <h2 class="text-xl font-semibold">Topic for Refer : ${project.topic}</h2>
        <p class="text-gray-600">${project.description}</p>
        <div class="flex flex-row justify-between items-center">
        <span class="text-gray-400">Author: ${project.author}</span>
            <img src="./imgs/link.png" class="h-5 w-5 cursor-pointer open-link" data-link="${project.link}" draggable="false"/>
        </div>
    `;

    // Append the card to the grid container
    projectContainer.appendChild(card);
});

//open a new window when user click link icon :
const linkIcons = document.querySelectorAll(".open-link");
linkIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        const link = event.target.getAttribute("data-link");
        openLink(link);
    });
});

