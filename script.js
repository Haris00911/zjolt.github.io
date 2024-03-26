document.addEventListener('DOMContentLoaded', () => {
    // iOS viewport fix
    if (/iPhone/i.test(navigator.userAgent)) {
        document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");
    }

    let currentFrame = document.getElementById('question1-frame');
    currentFrame.classList.add('active');

    const yesButtons = document.querySelectorAll('.yes-btn');
    const noButtons = document.querySelectorAll('.no-btn');
    const calculateButton = document.querySelector('.calculate-btn');
    const homeButton = document.querySelector('.home-btn');
    const contactButton = document.querySelector('.contact-btn');

    // Function to switch frames
    function switchFrame(nextFrameId) {
        currentFrame.classList.remove('active');
        currentFrame = document.getElementById(nextFrameId);
        currentFrame.classList.add('active');
    }

    // Handle Yes/No buttons for questions
    yesButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextFrameId = button.closest('.frame').nextElementSibling.id;
            switchFrame(nextFrameId);
        });
    });

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
        const electricBill = parseFloat(document.getElementById('electric-bill').value);
        const electricRate = parseFloat(document.getElementById('electric-rate').value);
        if (!isNaN(electricBill) && !isNaN(electricRate)) {
            const yearlyBill = electricBill * 12;
            const yearlyUsage = yearlyBill / electricRate;
            const systemSize = yearlyUsage / 1.4;
            const systemCost = systemSize * 2.75;
            const taxCredit = systemCost * 0.3;
            const depreciation = systemCost * 0.3;
            const totalIncentives = taxCredit + depreciation;

            const formattedIncentives = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalIncentives);

            document.getElementById('result-label').textContent = "Customer Qualifies For Free Design";
            document.getElementById('result-label').style.backgroundColor = "#A6DA00";
            document.getElementById('results-entry').textContent = `Tax Savings: ${formattedIncentives}`;
            switchFrame('result-frame');
        } else {
            document.getElementById('results-entry').textContent = "Please Confirm Additional Reqs.";
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