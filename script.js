document.getElementById('noButton').addEventListener('mouseover', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = this;
    yesButton.style.fontSize = '24px';
    yesButton.style.padding = '15px 30px';
    noButton.style.fontSize = '16px';
    noButton.style.padding = '5px 10px';

    // Randomly position the 'No' button
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
