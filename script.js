function myFunction(x) {
    // Select the existing menu button if it exists
    let existingButton = document.querySelector("#menuButton");
    let navbarOptions = document.querySelector(".navbar");

    if (x.matches) {
        // let logo_a=document.querySelector("#logo_a");
        // logo_a.getAttribute("class");
        // logo_a.classList.add("menuchange")

        // If media query matches (screen width <= 990px) and the button doesn't exist, create it
        if (!existingButton) {
            let menuButton = document.createElement("button");
            menuButton.innerText = "Menu";
            menuButton.className = "menu-button";
            menuButton.style.background="green";
            menuButton.id = "menuButton";  // Assign an ID to the new button

            let div = document.querySelector(".menuchange");
            div.after(menuButton);

            // Move the navbar options into the menu button for display on click
            menuButton.appendChild(navbarOptions);

            // Add click event to toggle display of navbar options
            menuButton.addEventListener('click', () => {
                navbarOptions.classList.toggle('hidden');
            });
        }
    } else {
        // If the media query does not match (screen width > 990px), remove the button if it exists
        if (existingButton) {
            document.body.insertBefore(navbarOptions, existingButton);
            existingButton.remove();
            navbarOptions.classList.remove('hidden');  // Ensure navbar options are visible
        }
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 790px)");
// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", myFunction);
