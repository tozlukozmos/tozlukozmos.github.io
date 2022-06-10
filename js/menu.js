export const menu = () => {
    const menuLinks = document.getElementById("menu-links").getElementsByTagName("a");
    if(document.location.hash.length == 0){
        menuLinks[0].style.color = "var(--color-red)";
    } else {
        for (let index = 0; index < menuLinks.length; index++) {
            if (menuLinks[index].getAttribute("href") == document.location.hash) {
                menuLinks[index].style.color = "var(--color-red)";
            } else {
                menuLinks[index].style.color = "var(--color-dark)";
            }
        }
    }

    window.addEventListener("hashchange", () => {
        for (let index = 0; index < menuLinks.length; index++) {
            if (menuLinks[index].getAttribute("href") == document.location.hash) {
                menuLinks[index].style.color = "var(--color-red)";
            } else {
                menuLinks[index].style.color = "var(--color-dark)";
            }
        }
    });

    const hamburgerMenuLinks = document.getElementById("hamburger-menu-links").getElementsByTagName("a");
    if(document.location.hash.length == 0){
        hamburgerMenuLinks[0].style.color = "var(--color-red)";
    } else {
        for (let index = 0; index < hamburgerMenuLinks.length; index++) {
            if (hamburgerMenuLinks[index].getAttribute("href") == document.location.hash) {
                hamburgerMenuLinks[index].style.color = "var(--color-red)";
            } else {
                hamburgerMenuLinks[index].style.color = "var(--color-dark)";
            }
        }
    }

    window.addEventListener("hashchange", () => {
        for (let index = 0; index < hamburgerMenuLinks.length; index++) {
            if (hamburgerMenuLinks[index].getAttribute("href") == document.location.hash) {
                hamburgerMenuLinks[index].style.color = "var(--color-red)";
            } else {
                hamburgerMenuLinks[index].style.color = "var(--color-dark)";
            }
        }
    });
}