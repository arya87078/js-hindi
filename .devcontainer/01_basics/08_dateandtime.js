function getCurrentDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const formatted = now.toLocaleString('en-US', options);
    return formatted;
  }
  
  // Example: log to console
  console.log(getCurrentDateTime());
  
  // Optional: Keep updating every second
  setInterval(() => {
    console.clear();
    console.log(getCurrentDateTime());
  }, 1000);
  