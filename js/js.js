document.getElementById('calculateBtn').addEventListener('click', function() {

    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;

    base = parseFloat(base);
    height = parseFloat(height);

    const area = 0.5 * base * height;

    document.getElementById('areaResult').innerText = area.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('areaResult').innerText = '';
});