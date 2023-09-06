function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const now = new Date();
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDateTime;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
