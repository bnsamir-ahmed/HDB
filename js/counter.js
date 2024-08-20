function createCountUp(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    let count = start;
  
    const update = () => {
      const diff = end - start;
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      count = Math.floor(start + diff * progress);
      element.textContent = count;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
  
    const startTime = Date.now();
    update();
  }
  
  createCountUp('count-1', 0, 1250, 2000);
  createCountUp('count-2', 50, 401, 3000);
  createCountUp('count-3', 100, 41, 1500);
  createCountUp('count-4', 200, 9, 2500);


  /////////////cards show more////////////////////
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('show-more');
    let currentlyVisible = 6;
  
    showMoreButton.addEventListener('click', function () {
        const cards = document.querySelectorAll('#team-container .col');
        const totalCards = cards.length;
        const cardsToShow = 3;
  
        // Calculate the new number of visible cards
        const newVisible = Math.min(currentlyVisible + cardsToShow, totalCards);
  
        // Show the new set of cards
        for (let i = currentlyVisible; i < newVisible; i++) {
            cards[i].style.display = 'block';
        }
  
        currentlyVisible = newVisible;
  
        // Hide the button if all cards are visible
        if (currentlyVisible >= totalCards) {
            showMoreButton.style.display = 'none';
        }
    });
  });