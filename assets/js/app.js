const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(el=>io.observe(el));

const levels = document.querySelectorAll('.level');
const title = document.getElementById('level-title');
const text = document.getElementById('level-text');
const image = document.getElementById('level-image');
levels.forEach(btn=>{
  btn.addEventListener('click',()=>{
    levels.forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    title.textContent = btn.dataset.title;
    text.textContent = btn.dataset.text;
    if(image && btn.dataset.image){
      image.src = btn.dataset.image;
      image.alt = btn.dataset.title;
    }
  });
});
