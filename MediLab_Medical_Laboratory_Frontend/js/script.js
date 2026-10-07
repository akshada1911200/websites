const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const toast=document.getElementById("toast");
function showToast(title="Request received!",msg="Our team will contact you shortly."){
 toast.querySelector("strong").textContent=title;toast.querySelector("small").textContent=msg;
 toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),4000);
}
document.querySelectorAll("[data-search]").forEach(b=>b.addEventListener("click",()=>{
 document.getElementById("testSearch").value=b.dataset.search;
 showToast("Test selected","Scroll down to book your appointment.");
}));
document.getElementById("appointmentForm").addEventListener("submit",e=>{e.preventDefault();showToast("Appointment requested!","We'll contact you to confirm your slot.");e.target.reset()});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();showToast("Message received!","Our support team will get back to you.");e.target.reset()});
document.getElementById("reportBtn").addEventListener("click",()=>showToast("Demo report portal","A backend connection is required to retrieve real reports."));
document.querySelectorAll(".faq button").forEach(btn=>btn.addEventListener("click",()=>{
 const item=btn.parentElement;
 document.querySelectorAll(".faq").forEach(f=>{if(f!==item)f.classList.remove("active")});
 item.classList.toggle("active");btn.querySelector("span").textContent=item.classList.contains("active")?"−":"+";
}));
document.getElementById("date").min=new Date().toISOString().split("T")[0];
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.classList.toggle("show",scrollY>500);document.getElementById("header").style.boxShadow=scrollY>20?"0 4px 22px #12372f12":"none"});
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
