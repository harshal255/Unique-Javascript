import { Projects } from "./project.js";
import { openLink } from "./openlink.js";

const projectContainer = document.querySelector(".grid"); // Get the grid container element
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const pageButtonsContainer = document.querySelector(".flex"); // Container for page buttons


const projectsPerPage = 6; // Number of projects to display per page
let currentPage = 1; // Current page

// Function to display projects for the current page
function displayProjects() {
    // Clear the project container
    projectContainer.innerHTML = "";

    // Calculate the starting and ending indices for the current page
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    // Loop through the Projects array for the current page
    for (let i = startIndex; i < endIndex && i < Projects.length; i++) {
        const project = Projects[i];

        // Create a card element for each project
        const card = document.createElement("div");
        card.classList.add("p-4", "bg-white", "rounded", "shadow-md", "flex", "flex-col", "gap-2");
        card.setAttribute("draggable", "true");

        // Create the content for the card
        card.innerHTML = `
        <div class="w-full h-auto overflow-clip cursor-pointer">
            <img src="${project.img}" alt="${project.topic}" class="w-full h-auto hover:scale-125 duration-300 hover:rotate-10" draggable="false">
        </div>
            <h2 class="text-xl font-semibold">Topic for Refer : ${project.topic}</h2>
            <p class="text-gray-600">${project.description}</p>
            <div class="flex flex-row justify-between items-center">
            <span class="text-gray-800"> <span class="author-text"> Author: </span>  ${project.author}</span>
                <img src="./imgs/link.png" class="h-5 w-5 cursor-pointer open-link" data-link="${project.link}" draggable="false"/>
            </div>
        `;

        
        // Append the card to the grid container
        projectContainer.appendChild(card);
    }

    // Enable or disable pagination buttons based on the current page
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = endIndex >= Projects.length;

    // Update page buttons
    updatePageButtons();
}


function icons(){
    // Open a new window when the user clicks the link icon
    const linkIcons = document.querySelectorAll(".open-link");

    linkIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            console.log("Click on open link");
            console.log(icon);
            const link = event.target.getAttribute("data-link");
            openLink(link);
        });
    });
}


// Function to create and update page buttons
function updatePageButtons() {
    // Clear existing page buttons
    pageButtonsContainer.innerHTML = "";

    // Calculate the total number of pages
    const totalPages = Math.ceil(Projects.length / projectsPerPage);

    // Create and add page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        
        pageButton.textContent = i;
        
        pageButton.classList.add(
            "bg-purple-500",
            "text-white",
            "font-semibold",
            "py-2",
            "px-4",
            "rounded"
        );

        // Set the current page button as active
        if (i === currentPage) {
            pageButton.classList.add("bg-purple-200");
            pageButton.classList.toggle("active-page-btn");
            pageButton.disabled = true;
        }

        // Add event listener to handle page navigation
        pageButton.addEventListener("click", () => {
            currentPage = i;
            pageButton.classList.toggle("active-page-btn");
            displayProjects();
            icons();
        });

        // Append the page button to the container
        pageButtonsContainer.appendChild(pageButton);
    }
}

// Add event listeners for pagination buttons
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
        icons();
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(Projects.length / projectsPerPage)) {
        currentPage++;
        displayProjects();
        icons();
    }
});

// Initial display of projects and page buttons
displayProjects();



icons();


