document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll(".game-container");
    const descriptionBox = document.createElement("div");
    descriptionBox.classList.add("description-box");
    document.body.appendChild(descriptionBox);

    const gameDescriptions = {
        "images/toilet_chronicles.jpg": "Trapped In A Bathroom And You Have To Escape With A Neighbor To Help.",
        "images/henry_stickmin.jpg": "A Choose-Your-Path Game.",
        "images/geometry_dash.jpg": "A Game About Jumping.",
        "images/A_Game_About_Digging_A_Hole.jpg": "A Game About Digging A Very Deep Hole"
    };

    games.forEach(game => {
        const img = game.querySelector(".game-banner");
        img.addEventListener("mouseenter", (event) => {
            const description = gameDescriptions[img.getAttribute("src")] || "No description available.";
            descriptionBox.innerText = description;
            descriptionBox.style.display = "block";
        });

        img.addEventListener("mousemove", (event) => {
            descriptionBox.style.left = event.pageX + 15 + "px";
            descriptionBox.style.top = event.pageY + 15 + "px";
        });

        img.addEventListener("mouseleave", () => {
            descriptionBox.style.display = "none";
        });
    });
});
