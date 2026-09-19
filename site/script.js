const categories = [
  {name:'Breakfast',desc:'Maggi, parathas, sandwiches, pakodas and morning favourites.'},
  {name:'Chinese Combo & Soya Chaap',desc:'Manchurian, fried rice, noodles and flavour-packed chaap.'},
  {name:'Starters',desc:'Noodles, spring rolls, pasta, chilli potato and Manchurian.'},
  {name:'MFC Special Signature',desc:'Kati Kabab and Kati Kabab with Rumali Roti.'},
  {name:'Premium Special Thalis',desc:'Ghar Ki Thali and Special Festive Thali.'},
  {name:'North Indian Specialties',desc:'Dal, paneer, kofta, chole, aloo, mushroom and more.'},
  {name:'Rice, Soup & Raita',desc:'Plain rice, jeera rice, pulao and biryani.'}
];

const menu = {
  'Breakfast': [
    ['Plain Maggi',70],['Veg Maggi',90],['Butter Maggi',100],['Veg Sandwich',100],['Butter Toast',100],['Grilled Sandwich',120],['Aloo Paratha',100],['Aloo Onion Paratha',100],['Paneer Pakoda',130],['Mix Pakoda (8 Pcs)',110],['Stuffed Paratha + Curd',120],['Paneer Paratha + Curd',130],['Poha',90],['Poori Bhaji (4 Pcs)',90]
  ],
  'Chinese Combo & Soya Chaap': [
    ['Manchurian & Fried Rice Combo',200],['Manchurian & Noodles Combo',200],['Masala Chaap',200],['Punjabi Spicy Chaap',200],['Tandoori Chaap Tikka',200],['Malai Chaap',220],['Afghani Chaap',220],['Honey Chilli Chaap',240]
  ],
  'Starters': [
    ['Veg Noodles',140],['Hakka Noodles / Spring Roll',160],['Schezwan Noodles',170],['Red Sauce Pasta',160],['White Sauce Pasta',180],['Pink Sauce Pasta',200],['Chilli Potato',160],['Honey Chilli Potato',180],['Dry Manchurian',180]
  ],
  'MFC Special Signature': [
    ['Kati Kabab',160],['Kati Kabab + Rumali Roti',200]
  ],
  'Premium Special Thalis': [
    ['Ghar Ki Thali',200],['Special Festive Thali',280]
  ],
  'North Indian Specialties': [
    ['Dal Arhar',140],['Dal Tadka',150],['Aloo Chole',150],['Dal Handi',170],['Dal Makhani',180],['Matar Paneer',180],['Shahi Paneer',200],['Butter Paneer Masala',220],['Paneer Bhurji',220],['Khadai Paneer',240],['Palak Paneer',240],['Handi Paneer Masala',260],['Malai Kofta',280],['Mix Veg',160],['Chole Masala',160],['Jeera Aloo',140],['Aloo Matar',140],['Methi Matar Malai',180],['Dum Aloo',180],['Aloo Matar',220],['Mushroom Masala',220],['Paneer Mushroom',240],['Mushroom Do Pyaza',240],['Kadi Pakoda',160],['Sev Tamatar',160],['Gobi Aloo',160],['Sev Bhaji',160]
  ],
  'Rice, Soup & Raita': [
    ['Plain Rice',100],['Jeera Rice',110],['Veg Pulao',140],['Veg Biryani',170]
  ]
};

const categoryGrid=document.getElementById('categoryGrid');
categoryGrid.innerHTML=categories.map((c,i)=>`<article class="category-card" data-category="${c.name}"><div class="cat-image menu-cat-image"><span>${String(i+1).padStart(2,'0')}</span></div><div class="cat-body"><span>${Object.keys(menu[c.name]).length || menu[c.name].length} dishes • Category</span><h3>${c.name}</h3><p>${c.desc}</p></div></article>`).join('');

const dishGrid=document.getElementById('dishGrid');
function dishCards(category){
  return menu[category].map(([name,price],i)=>`<article class="dish-card" data-category="${category}"><div class="dish-image photo-placeholder"><span>Food photo ${String(i%6+1).padStart(2,'0')}<br><small>Add the actual ${name} photo here</small></span></div><div class="dish-info"><h4>${name}</h4><p>₹${price}</p></div></article>`).join('');
}

dishGrid.innerHTML=Object.keys(menu).flatMap(cat=>menu[cat].map(([name,price],i)=>`<article class="dish-card" data-category="${cat}"><div class="dish-image photo-placeholder"><span>Food photo ${String(i%6+1).padStart(2,'0')}<br><small>Add the actual dish photo here</small></span></div><div class="dish-info"><h4>${name}</h4><p>₹${price}</p></div></article>`)).join('');

function showCategory(category){
  document.querySelector('.menu-showcase').scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.dish-card').forEach(d=>d.style.display=d.dataset.category===category?'block':'none');
  const heading=document.querySelector('.menu-showcase h2');
  if(heading) heading.textContent=category;
}
categoryGrid.querySelectorAll('.category-card').forEach(card=>card.addEventListener('click',()=>showCategory(card.dataset.category)));

const menuShowcase=document.querySelector('.menu-showcase');
const reset=document.createElement('button');reset.className='btn btn-dark';reset.textContent='Show all dishes';reset.style.marginBottom='20px';reset.addEventListener('click',()=>{document.querySelectorAll('.dish-card').forEach(d=>d.style.display='block');document.querySelector('.menu-showcase h2').textContent='Choose what you are craving';});menuShowcase.querySelector('.container').insertBefore(reset,menuShowcase.querySelector('.dish-grid'));

document.getElementById('viewFullMenu')?.addEventListener('click',()=>openLightbox('assets/madhav-menu.jpeg'));

const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>openLightbox(item.dataset.img)));
const dialog=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightboxImg');
function openLightbox(src){lightboxImg.src=src;dialog.showModal()}
document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),phone=document.getElementById('phone').value.trim(),inDate=document.getElementById('checkin').value,outDate=document.getElementById('checkout').value,guests=document.getElementById('guests').value,msg=document.getElementById('message').value.trim();const text=`Hello, I would like to enquire about a room at Madhav Villas.\n\nName: ${name}\nPhone: ${phone}\nCheck-in: ${inDate}\nCheck-out: ${outDate}\nGuests: ${guests}\nRequirement: ${msg||'None'}`;window.open(`https://wa.me/919837283666?text=${encodeURIComponent(text)}`,'_blank')});
