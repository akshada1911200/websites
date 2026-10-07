const products=[
{name:"Daily Multivitamin",desc:"Everyday nutritional support · 60 tablets",price:349,old:429,tag:"BESTSELLER",emoji:"🧴",bg:"#e9f5ee",category:"Wellness"},
{name:"Gentle Face Cleanser",desc:"A fresh start for your skin · 150 ml",price:279,old:349,tag:"GENTLE CARE",emoji:"🫧",bg:"#fff0e7",category:"Personal care"},
{name:"Vitamin C Gummies",desc:"A little sunshine in every bite · 30 pcs",price:499,old:599,tag:"POPULAR",emoji:"🍊",bg:"#fff5df",category:"Wellness"},
{name:"First Aid Essentials",desc:"Be prepared for life's little surprises",price:229,old:299,tag:"EVERYDAY",emoji:"🩹",bg:"#f0edff",category:"Personal care"}
];
let count=0,filter="All";const grid=document.getElementById("productGrid");
function render(){grid.innerHTML=products.filter(p=>filter==="All"||p.category===filter).map((p,i)=>`<article class="product"><div class="product-image" style="background:${p.bg}"><small>${p.tag}</small><span>${p.emoji}</span></div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="product-bottom"><div class="price">₹${p.price} <del>₹${p.old}</del></div><button class="add" aria-label="Add ${p.name} to cart" data-index="${products.indexOf(p)}">+</button></div></article>`).join("");}
render();
grid.addEventListener("click",e=>{const b=e.target.closest(".add");if(!b)return;count++;document.getElementById("cartCount").textContent=count;toast(products[+b.dataset.index].name+" added to cart");});
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");b.classList.add("active");filter=b.dataset.filter;render()}));
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2000)}
document.getElementById("cartBtn").addEventListener("click",()=>toast(count?`${count} item(s) in your cart`:"Your cart is waiting for you"));
document.getElementById("searchInput").addEventListener("input",e=>{const q=e.target.value.toLowerCase();grid.innerHTML=products.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)).map(p=>`<article class="product"><div class="product-image" style="background:${p.bg}"><small>${p.tag}</small><span>${p.emoji}</span></div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="product-bottom"><div class="price">₹${p.price} <del>₹${p.old}</del></div><button class="add" data-index="${products.indexOf(p)}">+</button></div></article>`).join("")||'<p>No matching products found.</p>';});
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();toast("Thanks for subscribing!");e.target.reset()});
document.getElementById("menuBtn").addEventListener("click",()=>toast("Explore the page using the category sections"));
