async function getIP() {
  try {
    const response = await fetch('https://api.ipify.org');
    const ip = await response.text();
    return ip;
  } catch (error) {
    console.error(error);
  }
}

async function saveIP(ip) {
  try {
    const response = await fetch('/save-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ip: ip })
    });
    if (response.ok) {
      console.log('IP address saved to file');
    }
  } catch (error) {
    console.error(error);
  }
}

async function displayIP() {
  const ip = await getIP();
  document.getElementById('ip').textContent = ip;
  await saveIP(ip);
}

displayIP();
