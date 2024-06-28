document.addEventListener('DOMContentLoaded', () => {
    // iOS viewport fix
    if (/iPhone/i.test(navigator.userAgent)) {
        document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");
    }

    let currentFrame = document.getElementById('question1-frame');
    currentFrame.classList.add('active');

    const noButtons = document.querySelectorAll('.no-btn');
    const calculateButton = document.querySelector('.yes-btn');
    const homeButton = document.querySelector('.home-btn');
    const contactButton = document.querySelector('.contact-btn');

    // Function to switch frames
    function switchFrame(nextFrameId) {
        currentFrame.classList.remove('active');
        currentFrame = document.getElementById(nextFrameId);
        currentFrame.classList.add('active');
    }


    noButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchFrame('result-frame');
            document.getElementById('result-label').textContent = "Customer Does Not Qualify";
            document.getElementById('result-label').style.backgroundColor = "#FF6347";
            document.getElementById('results-entry').textContent = "No Available Incentives";
        });
    });

    // Handle Calculate button
    calculateButton.addEventListener('click', () => {
        const averageBill = parseFloat(document.getElementById('average-bill').value);
        const increaseRate = parseFloat(document.getElementById('increase-rate').value) / 100 + 1; // Convert percentage to multiplier
        if (!isNaN(averageBill) && !isNaN(increaseRate)) {
            let result = averageBill;
            for (let year = 1; year <= 25; year++) {
                result *= increaseRate;
            }

            const formattedResult = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result);

            document.getElementById('result-label').textContent = "Monthly Bill in 25 Years";
            document.getElementById('results-entry').textContent = `${formattedResult}`;
            switchFrame('result-frame');
        } else {
            document.getElementById('result-label').textContent = "Invalid Input";
            document.getElementById('results-entry').textContent = "Please enter valid numbers.";
        }
    });

    // Handle Home button
    homeButton.addEventListener('click', () => {
        switchFrame('question1-frame');
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.value = '';
        });
    });

    // Handle Contact button
    contactButton.addEventListener('click', () => {
        // Implement contact form or redirect to contact page
        alert("Contact us for more information!");
    });
});