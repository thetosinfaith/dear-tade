function toggleMessage() {
    var messageContent = document.getElementById("messageContent");
    if (messageContent.style.display === "none" || messageContent.style.display === "") {
        messageContent.style.display = "block";
    } else {
        messageContent.style.display = "none";
    }
}

function runAway() {
    const btn = document.getElementById('noBtn');
    
    // Switch to absolute so it can fly anywhere
    btn.style.position = 'absolute';

    // Calculate a random spot on the screen
    // We subtract 150 so it doesn't go off the edge
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 150);

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

function showLove() {
  document.getElementById('successOverlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('successOverlay').style.display = 'none';
}