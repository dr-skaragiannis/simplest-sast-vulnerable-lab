// VULNERABILITY: Client-side XSS vulnerabilities

function displayUserContent() {
    // FIXED: textContent inserts text, never HTML
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').textContent = userInput;
}

function loadExternalScript() {
    // FIXED: only scripts from a fixed allow-list can be loaded
    var allowed = { chart: '/static/js/chart.js', map: '/static/js/map.js' };
    var key = document.getElementById('scriptUrl').value;
    if (!Object.prototype.hasOwnProperty.call(allowed, key)) return;
    var script = document.createElement('script');
    script.src = allowed[key];
    document.head.appendChild(script);
}

function setCookie() {
    // VULNERABILITY: Setting cookie without HttpOnly flag
    var sessionId = document.getElementById('sessionId').value;
    document.cookie = "session=" + sessionId + "; path=/";
}

function processJSON() {
    // VULNERABILITY: Using eval to parse JSON
    var jsonStr = document.getElementById('jsonData').value;
    var data = eval('(' + jsonStr + ')');
    console.log(data);
}

function sendData() {
    // VULNERABILITY: Sending sensitive data over HTTP
    var creditCard = document.getElementById('creditCard').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://insecure-endpoint.com/api/payment', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ card: creditCard }));
}

// FIXED: no key in the browser; the server calls the API on our behalf

function makeAPICall() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/data', true);
    xhr.send();
}

// VULNERABILITY: Insecure random number generation for security purposes
function generateToken() {
    var token = '';
    for (var i = 0; i < 32; i++) {
        token += Math.random().toString(36).substr(2, 1);
    }
    return token;
}