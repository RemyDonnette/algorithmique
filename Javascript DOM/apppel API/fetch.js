export async function fetchData({url, query, method, data}) {
    const result = await fetch(`${url}${query ? query : ''}`, {
        method: method || 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : data,
    });

    if (result.ok) {
        return result.json();
    } 
    throw new Error('Erreur request')
}

export function drawCircularGauge(percentage) {

    const canvas = document.getElementById('gaugeCanvas');
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.lineWidth = radius * 0.4;
    context.strokeStyle = '#d3d3d3';
    context.stroke();

    context.beginPath();
    context.arc(centerX, centerY, radius, -0.5 * Math.PI, (percentage / 100) * (2 * Math.PI) - 0.5 * Math.PI);
    context.lineWidth = radius * 0.4;
    context.strokeStyle = '#4caf50';
    context.stroke();

    context.fillStyle = '#000';
    context.font = 'bold ' + radius * 0.6 + 'px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(percentage + '%', centerX, centerY);
}