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

// VULNERABILITY: Hardcoded API key in JavaScript
var API_KEY = 'sk_live_1234567890abcdef';

function makeAPICall() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
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