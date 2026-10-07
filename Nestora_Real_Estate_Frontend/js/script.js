const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");
}));
document.querySelectorAll(".heart").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("liked");b.textContent=b.classList.contains("liked")?"♥":"♡"}));

document.querySelectorAll(".faq button").forEach(btn=>btn.addEventListener("click",()=>{
 const item=btn.parentElement;
 document.querySelectorAll(".faq").forEach(f=>{if(f!==item)f.classList.remove("active")});
 item.classList.toggle("active");btn.querySelector("span").textContent=item.classList.contains("active")?"−":"+";
}));

const toast=document.getElementById("toast");
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();toast.classList.add("show");e.target.reset();setTimeout(()=>toast.classList.remove("show"),4000)});
document.getElementById("searchBtn").addEventListener("click",()=>{toast.querySelector("strong").textContent="Search ready!";toast.querySelector("small").textContent="Explore our available properties below.";toast.classList.add("show");document.getElementById("properties").scrollIntoView({behavior:"smooth"});setTimeout(()=>{toast.classList.remove("show");toast.querySelector("strong").textContent="Thank you!";toast.querySelector("small").textContent="Your inquiry has been received."},4000)});
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.classList.toggle("show",scrollY>500);document.getElementById("header").style.boxShadow=scrollY>20?"0 4px 25px #17231d10":"none"});
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
