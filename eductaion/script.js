const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 document.getElementById("formMsg").textContent="Thank you! Your enquiry has been submitted.";
 e.target.reset();
});
const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.style.opacity=1;x.target.style.transform="translateY(0)"}}),{threshold:.1});
document.querySelectorAll(".card,.event-grid article,.gallery-grid img").forEach(el=>{el.style.opacity=0;el.style.transform="translateY(20px)";el.style.transition="opacity .6s, transform .6s";observer.observe(el)});
