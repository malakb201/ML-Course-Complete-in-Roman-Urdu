
// Sidebar toggle for mobile
const menuToggle=document.getElementById('menuToggle');
const sidebar=document.getElementById('sidebar');
menuToggle.addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelectorAll('#sidebar a').forEach(a=>{
  a.addEventListener('click',()=>{ if(window.innerWidth<=900) sidebar.classList.remove('open'); });
});

// Scroll spy + progress bar
const links=document.querySelectorAll('#sidebar a[href^="#"]');
const sections=[...links].map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
function onScroll(){
  const scrollTop=window.scrollY;
  const docHeight=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById('progressBar').style.width=(docHeight>0?(scrollTop/docHeight*100):0)+'%';

  let current=sections[0];
  for(const sec of sections){
    if(sec.getBoundingClientRect().top-120<=0) current=sec;
  }
  links.forEach(a=>a.classList.remove('active'));
  const match=[...links].find(a=>document.querySelector(a.getAttribute('href'))===current);
  if(match) match.classList.add('active');
}
window.addEventListener('scroll',onScroll);
onScroll();
