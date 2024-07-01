document.getElementById('addBlockBtn').addEventListener('click', function() 
{
    const block = document.createElement('div');
    block.className = 'block';
    block.style.backgroundColor = getRandomColor();
    block.addEventListener('dblclick', function() 
    {
        block.remove();
    });
    document.getElementById('blocksContainer').appendChild(block);
});

function getRandomColor() 
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}