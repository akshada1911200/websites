const menuBtn=document.getElementById("menuBtn"),navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));

const faqButtons=document.querySelectorAll(".faq button");
faqButtons.forEach(btn=>btn.addEventListener("click",()=>{
  const item=btn.parentElement;
  document.querySelectorAll(".faq").forEach(f=>{if(f!==item)f.classList.remove("active");});
  item.classList.toggle("active");
  btn.querySelector("span").textContent=item.classList.contains("active")?"−":"+";
}));

const form=document.getElementById("bookingForm"),toast=document.getElementById("toast");
form.addEventListener("submit",e=>{
  e.preventDefault();
  toast.classList.add("show");
  form.reset();
  setTimeout(()=>toast.classList.remove("show"),4500);
});

const backTop=document.getElementById("backTop");
window.addEventListener("scroll",()=>{
  backTop.classList.toggle("show",window.scrollY>500);
  const header=document.getElementById("header");
  header.style.boxShadow=window.scrollY>20?"0 5px 25px rgba(17,24,39,.06)":"none";
});
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.querySelector('input[type="date"]').min=new Date().toISOString().split("T")[0];

const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll("nav a:not(.nav-cta)")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>observer.observe(s));
