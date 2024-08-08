const loader = document.getElementById('loader');
const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loader.style.display = 'none';
        root.style.display = 'block';
    }, 3000)
})
