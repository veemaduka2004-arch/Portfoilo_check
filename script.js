const IM={w:"images/workers.jpg",a:"images/assembly.jpg",d:"images/design.jpg",h:"images/hero.jpg"};
const I=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const EXP=[
["Automotive Engineering","Understanding automotive engineering principles, vehicle systems and manufacturing processes.",'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'],
["Manufacturing Processes","Interest and professional engagement in industrial production, manufacturing operations and process efficiency.",'<path d="M3 21V9l6 4V9l6 4V5h6v16z"/>'],
["Quality Assurance","Commitment to precision, product quality, inspection standards and continuous improvement.",'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'],
["Technical Problem Solving","Applying analytical thinking and structured approaches to engineering challenges.",'<path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-1-1-3z"/>'],
["Engineering Operations","Understanding the importance of operational coordination, technical procedures and efficient workflows.",'<rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="14" width="7" height="6" rx="1"/><path d="M10 7h4a3 3 0 0 1 3 3v4"/>'],
["Continuous Improvement","Promoting professional development, innovation and better engineering practices.",'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>']];
document.getElementById('exp').innerHTML=EXP.map(e=>`<article class="card rv">${I(e[2])}<h3>${e[0]}</h3><p>${e[1]}</p></article>`).join('');
// EDITABLE PROJECTS: replace text with real details when supplied
const T="Sample entry. Replace with real details from MaryJane.";
const P=[
["Automotive Manufacturing Processes","Automotive","a","center 55%","An overview of the manufacturing processes involved in building vehicles."],
["Vehicle Assembly and Production","Manufacturing","a","center 90%","A look at how vehicles move through assembly and production."],
["Engineering Quality and Inspection","Quality","w","center","Inspection standards and quality practices in engineering work."],
["Industrial Process Improvement","Manufacturing","w","center 30%","Ways to make industrial processes more efficient and dependable."],
["Mechanical Systems and Engineering","Engineering","d","center","Mechanical systems and the engineering principles behind them."],
["Technical Innovation and Development","Engineering","d","70% center","Exploring new technologies and approaches in vehicle engineering."]];
const pg=document.getElementById('pg');
pg.innerHTML=P.map((p,i)=>`<article class="card pcard rv" data-c="${p[1]}"><img src="${IM[p[2]]}" style="object-position:${p[3]}" alt="${p[0]} (sample image)" loading="lazy"><div class="b"><span class="tag">${p[1]}</span><h3>Project 0${i+1}: ${p[0]}</h3><span class="sample">Editable sample entry</span><p style="font-size:.93rem;color:var(--muted)">${p[4]}</p><button class="btn line" data-i="${i}">View Project</button></div></article>`).join('');
const fb=document.querySelector('.filters');
["All Projects","Automotive","Manufacturing","Quality","Engineering"].forEach((c,i)=>{const b=document.createElement('button');b.textContent=c;b.setAttribute('aria-pressed',i==0);b.onclick=()=>{fb.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x==b));pg.querySelectorAll('.pcard').forEach(k=>k.hidden=i>0&&k.dataset.c!=c)};fb.append(b)});
const dlg=document.getElementById('dlg');
pg.addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(!b)return;const p=P[b.dataset.i];
const di=document.getElementById('di');di.src=IM[p[2]];di.style.objectPosition=p[3];di.alt=p[0]+' (sample image)';
document.getElementById('dt').textContent=p[0];
document.getElementById('dc').innerHTML=["Project overview","Objective","Challenge","Approach","Outcome"].map(h=>`<h4>${h}</h4><p>${h=="Project overview"?p[4]+" ":""}${T}</p>`).join('');
dlg.showModal()});
dlg.querySelector('.x').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target==dlg)dlg.close()});
// nav
const bg=document.querySelector('.burger'),mn=document.getElementById('menu');
bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')};
mn.addEventListener('click',e=>{if(e.target.closest('a')){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
const links=[...document.querySelectorAll('a.l')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
const secs=[...document.querySelectorAll('main>section,main>.strip')];
// Pages: each key is a page (#home, #about...) listing which blocks it shows
const V={home:[0,1,6,8],about:[2,6,8],experience:[4,7,8],expertise:[3,8],projects:[5,8],contact:[9]};
const TT={home:'Engineering Portfolio',about:'About',experience:'Experience',expertise:'Expertise',projects:'Projects',contact:'Contact'};
function route(){let h=location.hash.slice(1);if(!V[h])h='home';
secs.forEach((s,i)=>{const on=V[h].includes(i);s.hidden=!on;s.classList.remove('first')});
if(h!='home')secs[V[h][0]].classList.add('first');
links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')=='#'+h));
document.title='Eng. MaryJane Daniels | '+TT[h];
dlg.open&&dlg.close();scrollTo({top:0,behavior:'instant'})}
addEventListener('hashchange',route);route();
const tp=document.getElementById('top');addEventListener('scroll',()=>tp.classList.toggle('show',scrollY>700),{passive:true});
tp.onclick=()=>scrollTo({top:0});
// reveal + count
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(x=>ro.observe(x));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.disconnect();document.querySelectorAll('[data-to]').forEach(n=>{const t=+n.dataset.to,s=n.dataset.suf||'',f=v=>String(v).padStart(2,'0')+s;if(rm)return;let st;const step=ts=>{st=st||ts;const k=Math.min((ts-st)/1200,1);n.textContent=f(Math.round(t*k));if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)})}),{threshold:.4});
co.observe(document.getElementById('stats'));
// form
const ENDPOINT=""; // SET to a working form service URL (e.g. Formspree) or your serverless function to enable delivery
const f=document.getElementById('f'),st=document.getElementById('status');
f.addEventListener('submit',async ev=>{ev.preventDefault();st.className='';st.textContent='';
let ok=true;const d={};
f.querySelectorAll('input[required],textarea[required]').forEach(i=>{const v=i.value.trim();let m='';
if(!v)m='This field is required.';else if(i.type=='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))m='Enter a valid email address, like name@example.com.';else if(i.name=='message'&&v.length<10)m='Write at least 10 characters.';
i.setAttribute('aria-invalid',!!m);i.nextElementSibling.textContent=m;if(m)ok=false;d[i.name]=v});
if(!ok){f.querySelector('[aria-invalid=true]').focus();return}
if(f.website.value)return; // honeypot
if(!ENDPOINT){st.className='bad';st.innerHTML='Message not sent: the contact form is not connected to an email service yet. Please call 070546969872 or use WhatsApp instead.';return}
const sb=document.getElementById('sb');sb.disabled=true;sb.textContent='Sending…';
try{const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});
if(!r.ok)throw 0;st.className='ok';st.textContent='Message sent. Thank you, MaryJane will reply soon.';f.reset()}
catch(_){st.className='bad';st.textContent='Message not sent. Check your connection and try again, or call 070546969872.'}
sb.disabled=false;sb.textContent='Send Message'});
