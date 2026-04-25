const toggle = document.getElementById('pricingToggle');
const basicPrice = document.getElementById('basicPrice');
const proPrice = document.getElementById('proPrice');

const prices = {
    monthly: { basic: 19, pro: 49 },
    yearly: { basic: 199, pro: 499 }
};

toggle.addEventListener('change', () => {
    const mode = toggle.checked ? 'yearly' : 'monthly';
    const duration = toggle.checked ? '/yr' : '/mo';
    
    basicPrice.textContent = prices[mode].basic;
    proPrice.textContent = prices[mode].pro;
    
    document.querySelectorAll('.price small').forEach(small => {
        small.textContent = duration;
    });
});
