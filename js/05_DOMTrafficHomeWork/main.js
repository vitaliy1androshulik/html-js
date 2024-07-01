let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

function nextLight() 
{
    document.getElementById(lights[currentLight]).classList.add('hidden');
    currentLight = (currentLight + 1) % lights.length;
    document.getElementById(lights[currentLight]).classList.remove('hidden');
}