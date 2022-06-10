import { env } from "./env.js";

const init = () => emailjs.init(env.PUBLIC_KEY);

export const contact = () => {
    init();

    const sendButton = document.getElementById("send-button");
    const loading = document.getElementById("loading");

    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();

        sendButton.style.display = "none";
        loading.style.display = "flex";

        emailjs.sendForm(env.SERVICE_ID, env.TEMPLATE_ID, this)
            .then(function() {
                document.getElementById("contact").reset();
                
                sendButton.style.display = "block";
                loading.style.display = "none";
                
                const formElements = document.getElementsByTagName("input");
                for (let index = 0; index < formElements.length; index++) {
                    formElements[index].style.outline = "2px solid green";
                    setTimeout(() => {
                        formElements[index].style.outline = "none";
                    }, 2000);
                }
                document.getElementsByTagName("textarea")[0].style.outline = "2px solid green";
                setTimeout(() => {
                    document.getElementsByTagName("textarea")[0].style.outline = "none";
                }, 2000);
            }, function(error) {
                console.log('FAILED...', error);
                sendButton.style.display = "block";
                loading.style.display = "none";
            });
    });
}