const plans=[
  {name:"Starter",monthly:499,yearly:399,features:["5 Projects","10GB Storage","Email Support"],featured:false},
  {name:"Pro",monthly:999,yearly:799,features:["Unlimited Projects","50GB Storage","Priority Support","Custom Domain"],featured:true},
  {name:"Enterprise",monthly:2499,yearly:1999,features:["Everything in Pro","500GB Storage","24/7 Support","SLA Guarantee"],featured:false}
];
let yearly=false;

function switchPlan(){
  yearly=document.getElementById("toggle").checked;
  document.getElementById("mLabel").className=yearly?"text-secondary fw-bold":"fw-bold text-white";
  document.getElementById("yLabel").className=yearly?"fw-bold text-white":"text-secondary";
  render();
}

function render(){
  document.getElementById("cards").innerHTML=plans.map(p=>`<div class="col-md-4"><div class="plan-card ${p.featured?'featured':''}">
    ${p.featured?'<span class="badge mb-3" style="background:#f72585">Most Popular</span><br>':''}
    <h4>${p.name}</h4>
    <div class="price"><sup>₹</sup>${yearly?p.yearly:p.monthly}<sub>/mo</sub></div>
    ${yearly?`<small style="color:#4caf50">Save ₹${(p.monthly-p.yearly)*12}/yr</small>`:''}
    <div class="my-3">${p.features.map(f=>`<div class="feature">✓ ${f}</div>`).join('')}</div>
    <button class="btn-plan">Get Started</button>
  </div></div>`).join('');
}
render();
