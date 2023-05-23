// To show the preloader
function showPreloader() {
    document.getElementById('preloader').style.display = 'flex';
}

// To hide the preloader
function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
}

// Example usage:
// Show preloader when some time-consuming task starts
showPreloader();

// Hide preloader when the task completes
setTimeout(hidePreloader, 1000); // Assuming the task takes 3 seconds


