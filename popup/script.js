// Configuration
const CONFIG = {
    // URL para onde o usuário será redirecionado após inserir o email
    redirectUrl: 'https://maximedeschamps.store',
    // Tempo de delay antes do redirecionamento (em milissegundos)
    redirectDelay: 2000,
    // Tempo para mostrar o pop-up após carregar a página (em milissegundos)
    popupDelay: 500
};

// DOM elements
const modal = document.getElementById('popup-modal');
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const submitBtn = document.querySelector('.submit-btn');
const loadingOverlay = document.getElementById('loading-overlay');

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show loading overlay
function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

// Animate button loading state
function setButtonLoading(isLoading) {
    if (isLoading) {
        submitBtn.innerHTML = '<div class="button-spinner"></div>ENVOI...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.8';
    } else {
        submitBtn.innerHTML = 'S\'INSCRIRE';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
}

// Store email (you can modify this to send to your server)
function storeEmail(email) {
    // Store in localStorage for now
    localStorage.setItem('userEmail', email);
    localStorage.setItem('emailSubmittedAt', new Date().toISOString());
    
    // You can add here your logic to send the email to your server
    console.log('Email captured:', email);
    
    // Optional: Send to your server
    // fetch('/api/store-email', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email })
    // });
}

// Redirect to main offer
function redirectToOffer() {
    showLoading();
    
    setTimeout(() => {
        window.location.href = CONFIG.redirectUrl;
    }, CONFIG.redirectDelay);
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Veuillez entrer votre adresse e-mail');
        emailInput.focus();
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse e-mail valide');
        emailInput.focus();
        return;
    }
    
    // Set button loading state
    setButtonLoading(true);
    
    // Store the email
    storeEmail(email);
    
    // Simulate processing time
    setTimeout(() => {
        setButtonLoading(false);
        
        // Show success message briefly
        submitBtn.innerHTML = '✓ INSCRIT !';
        submitBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        
        setTimeout(() => {
            redirectToOffer();
        }, 1000);
        
    }, 1500);
}

// Add button spinner CSS dynamically
function addButtonSpinnerCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .button-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 8px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize the page
function init() {
    // Add button spinner CSS
    addButtonSpinnerCSS();
    
    // Show modal after delay
    setTimeout(() => {
        modal.style.display = 'flex';
    }, CONFIG.popupDelay);
    
    // Add form submit event listener
    emailForm.addEventListener('submit', handleFormSubmit);
    
    // Add enter key support for email input
    emailInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleFormSubmit(event);
        }
    });
    
    // Focus on email input after modal appears
    setTimeout(() => {
        emailInput.focus();
    }, CONFIG.popupDelay + 300);
    
    // Prevent modal close by clicking outside (force interaction)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            // Animate modal to draw attention instead of closing
            modal.querySelector('.modal-content').style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                modal.querySelector('.modal-content').style.animation = 'slideUp 0.6s ease-out';
            }, 500);
        }
    });
}

// Add shake animation CSS
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Optional: Add analytics tracking
function trackEvent(eventName, properties = {}) {
    // Add your analytics tracking here
    console.log('Event tracked:', eventName, properties);
    
    // Example for Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, properties);
    // }
    
    // Example for Facebook Pixel
    // if (typeof fbq !== 'undefined') {
    //     fbq('track', eventName, properties);
    // }
}

// Track page view
trackEvent('popup_viewed', {
    timestamp: new Date().toISOString(),
    page_url: window.location.href
});

// Export functions for potential external use
window.LandingPagePopup = {
    redirectToOffer,
    storeEmail,
    trackEvent
};

