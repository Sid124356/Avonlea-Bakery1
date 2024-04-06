document.addEventListener('DOMContentLoaded', function() {
    const lactoseCheckbox = document.getElementById('lactose-checkbox');
    const glutenCheckbox = document.getElementById('gluten-checkbox');
    const nutsCheckbox = document.getElementById('nuts-checkbox');

    function filterItems() {
        const bakedGoodsList = document.querySelector('.baked-goods ul');
        const coldDrinksList = document.querySelector('.cold-drinks ul');
        const hotDrinksList = document.querySelector('.hot-drinks ul');

        if (glutenCheckbox.checked) {
            const glutenItems = document.querySelectorAll('.baked-goods ul li[class="gluten"]');
            glutenItems.forEach(item => item.style.display = 'none');
        } else {
            const allItems = document.querySelectorAll('.baked-goods ul li[class="gluten"]');
            allItems.forEach(item => item.style.display = 'block');
        }

        if (lactoseCheckbox.checked) {
            const lactoseItems = document.querySelectorAll('.cold-drinks ul li[id="lactose"], .hot-drinks ul li[class="lactose"]');
            lactoseItems.forEach(item => item.style.display = 'none');
        } else {
            const allItems = document.querySelectorAll('.cold-drinks ul li[id="lactose"], .hot-drinks ul li[class="lactose"]');
            allItems.forEach(item => item.style.display = 'block');
        }

        if (nutsCheckbox.checked) {
            const nutsItems = document.querySelectorAll('.baked-goods ul li[class="nuts"]');
            nutsItems.forEach(item => item.style.display = 'none');
        } else {
            const allItems = document.querySelectorAll('.baked-goods ul li[class="nuts"]');
            allItems.forEach(item => item.style.display = 'block');
        }
    }

    lactoseCheckbox.addEventListener('change', filterItems);
    glutenCheckbox.addEventListener('change', filterItems);
    nutsCheckbox.addEventListener('change', filterItems);
});
