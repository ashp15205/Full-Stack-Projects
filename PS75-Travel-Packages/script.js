const packages = [
  { name: "Goa Beach Escape", desc: "5 days of sun, sand, and sea.", price: "₹18,999", duration: "5 Days", img: "https://picsum.photos/id/164/400/200" },
  { name: "Kerala Backwaters", desc: "Houseboat stay and spice village tour.", price: "₹22,500", duration: "6 Days", img: "https://picsum.photos/id/188/400/200" },
  { name: "Rajasthan Royal Tour", desc: "Forts, palaces, and desert safari.", price: "₹28,000", duration: "7 Days", img: "https://picsum.photos/id/116/400/200" },
  { name: "Himachal Adventure", desc: "Mountain trails, camping, and snow.", price: "₹15,000", duration: "4 Days", img: "https://picsum.photos/id/10/400/200" },
  { name: "Andaman Getaway", desc: "Crystal waters and pristine beaches.", price: "₹35,000", duration: "6 Days", img: "https://picsum.photos/id/20/400/200" },
  { name: "Coorg Coffee Trail", desc: "Misty hills, waterfalls, and homestays.", price: "₹12,500", duration: "3 Days", img: "https://picsum.photos/id/50/400/200" }
];

document.getElementById("packages").innerHTML = packages.map(p => `
  <div class="col-md-4 col-sm-6">
    <div class="pkg-card">
      <img src="${p.img}" alt="${p.name}">
      <div class="pkg-body">
        <h5>${p.name}</h5>
        <p>${p.desc}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="pkg-price">${p.price} <small>/ person</small></span>
          <span class="badge" style="background:rgba(108,99,255,.3);color:#aab4fc">${p.duration}</span>
        </div>
        <button class="btn-book" onclick="alert('Booking: ${p.name}')">Book Now</button>
      </div>
    </div>
  </div>`).join('');
