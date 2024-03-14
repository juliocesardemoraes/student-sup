const image = document.getElementById('menu-informational');

image.addEventListener('mouseover', () => {
      image.style.transform = 'translateY(-2px)';
    });

    image.addEventListener('mouseout', () => {
      image.style.transform = 'translateY(0)';
    });