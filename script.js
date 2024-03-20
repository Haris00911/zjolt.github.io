/* Updated style.css */
body, html {
    font-family: 'Sora', sans-serif;
    background: #F6F6F6;
    margin: 0;
    padding: 0;
    width: 100vw; /* Ensure the body takes the full viewport width */
    overflow-x: hidden; /* Hide horizontal scrollbar caused by full viewport width */
    display: flex;
    justify-content: center;
    align-items: center; /* Centering vertically */
    min-height: 100vh;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 40px); /* Adjust for padding */
    max-width: 1200px; /* Set max-width to scale up */
    margin: auto; /* Center the app in the viewport */
    position: relative; /* For absolute positioning of the footer */
    padding-bottom: 20px; /* Space for the footer */
}

.frame {
    display: none; /* Initially hide all frames */
    background: white;
    padding: 40px; /* Increase padding */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 100%; /* Use full width for larger size */
    margin-bottom: 20px; /* Space before footer */
}

.frame.active {
    display: flex; /* Use flex layout to position buttons */
    flex-direction: column; /* Stack elements vertically */
    align-items: center;
    justify-content: center;
}

.question, label, #results-entry {
    font-size: 28px; /* Adjust font size for consistency */
    font-weight: bold;
    margin: 20px 0;
    color: black;
    text-align: center;
}

.button-container {
    width: 100%; /* Full width of the container */
    display: flex;
    justify-content: center; /* Center buttons horizontally */
    align-items: center; /* Center buttons vertically */
    flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
}

button {
    margin: 20px;
    padding: 30px 60px; /* Larger padding for finger-friendly touch */
    font-size: 48px; /* Increased font size */
    font-weight: bold;
    color: white;
    background-color: #A6DA00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex: 1; /* Grow to fit container */
}

button:hover, button:focus {
    background-color: #00B400;
}

button:active {
    background-color: #00B400;
}

.footer {
    text-align: center;
    padding: 5px;
    background: #f8f9fc;
    font-size: 12px;
    /* If you want the footer to grow with the content, remove the position absolute */
    width: 100%;
    /* Use margin-top to push the footer to the bottom if you remove position absolute */
}

.logo-container {
    /* Center the logo container within the footer */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px; /* Adjust the space between the text and the logo */
}

.rotating-logo {
    width: 100px; /* Adjust width as necessary */
    height: auto; /* Maintain aspect ratio */
    display: block;
}

}
/* Responsive adjustments for very small screens */
@media only screen and (max-width: 414px) {
    .question, label, #results-entry, .footer {
        font-size: 18px; /* Slightly smaller font size for small screens */
    }

    button {
        padding: 30px 60px; /* Adjusted padding for smaller buttons */
        font-size: 36px; /* Adjusted font size for button text */
    }

    .frame {
        padding: 10px; /* Reduced padding for frames */
    }

    .footer {
        font-size: 15px; /* Smaller footer font size for mobile screens */
    }
}

/* Apply the same size reductions to other small screens, if desired */
@media only screen and (max-width: 600px) {
    .question, label, #results-entry, .footer {
        font-size: 21px; /* Adjust font size if necessary */
    }

    button {
        padding: 30px 60px; /* Adjust padding if necessary */
        font-size: 36px; /* Adjust font size if necessary */
    }

    .footer {
        font-size: 15px; /* Adjust footer font size if necessary */
    }
}

/* Ensure footer stays at the bottom on all screens */
@media (min-width: 600px) {
    .footer {
        position: absolute; /* Keep footer at the bottom */
        bottom: 0;
        width: 100%;
        font-size: 20px; /* Adjust font size for larger screens */
    }
}
