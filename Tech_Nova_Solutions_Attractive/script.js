const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');nav.style.display=nav.classList.contains('open')?'flex':'none'});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');if(innerWidth<=900)nav.style.display='none'}));
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('msg').textContent='✓ Thanks! We will contact you soon.';e.target.reset()});
