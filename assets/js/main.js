const menu=document.querySelector('.menu');const links=document.querySelector('.nav-links');if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)})}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href]').forEach(link=>{link.addEventListener('click',event=>{const url=new URL(link.href,location.href);const sameSite=url.origin===location.origin;const samePage=url.pathname===location.pathname&&url.search===location.search;if(!sameSite||samePage||link.target==='_blank'||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||reduceMotion)return;event.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>{location.href=url.href},260)})});
window.addEventListener('pageshow',()=>document.body.classList.remove('page-leaving'));
