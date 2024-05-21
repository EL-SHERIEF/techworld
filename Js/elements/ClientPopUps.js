// Function to handle hover events for clients
function handleClientHover(client, marquee, backgroundColor) {
    marquee.addEventListener('mouseover', function () {
        marquee.style.opacity = '1';
        marquee.style.visibility = 'visible';
        marquee.style.bottom = '100px';
    });

    marquee.addEventListener('mouseout', function () {
        marquee.style.bottom = '0px';
        marquee.style.opacity = '0';
        marquee.style.visibility = 'hidden';
    });

    client.addEventListener('mouseover', function () {
        marquee.style.backgroundColor = backgroundColor;
        marquee.style.opacity = '1';
        marquee.style.visibility = 'visible';
        marquee.style.bottom = '100px';
    });

    client.addEventListener('mouseout', function () {
        marquee.style.bottom = '0px';
        marquee.style.opacity = '0';
        marquee.style.visibility = 'hidden';
    });
}

// Handle multiple clients dynamically
const clients = document.querySelectorAll('.client');
const marquees = document.querySelectorAll('.clientPopUpMarquee');

for (let i = 0; i < clients.length; i++) {
    handleClientHover(clients[i], marquees[i], '#181818');
}