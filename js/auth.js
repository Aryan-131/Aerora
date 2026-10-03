/* AERORA — Registration, login and logout (Local Storage simulation) */
const authV=(reg)=>`<div class="wrap" style="padding-top:64px"><span class="num">${reg?'Join':'Welcome back'} —</span><h1 style="font-size:clamp(2.4rem,6vw,4.4rem);margin-bottom:36px">${reg?'Create your <em>account</em>':'Log <em>in</em>'}</h1><form class="form" id="af2">${reg?'<div><label>Full name</label><input name="n" required></div>':''}<div><label>Email</label><input name="e" type="email" required></div><div><label>Password</label><input name="p" type="password" minlength="6" required></div><p class="err" id="er"></p><button class="btn">${reg?'Register':'Log in'} <span>→</span></button><p style="font-size:13px;color:var(--mute)">${reg?'Have an account? <a href="login.html"><em>Log in</em></a>':'New here? <a href="register.html"><em>Register</em></a> · Demo admin: admin@aerora.com / admin123'}</p></form></div>`;
V.login=()=>authV(0);V.register=()=>authV(1);
V.login.after=V.register.after=()=>{const reg=document.body.dataset.view==='register';$('#af2').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target),u=S.g('ae_users',[]),em=f.get('e').toLowerCase();let x;
if(reg){if(u.some(y=>y.email===em))return $('#er').textContent='That email is already registered.';x={id:Date.now(),name:f.get('n'),email:em,pw:f.get('p'),role:'user'};u.push(x);S.s('ae_users',u)}
else{x=u.find(y=>y.email===em&&y.pw===f.get('p'));if(!x)return $('#er').textContent='Incorrect email or password.'}
S.s('ae_me',{name:x.name,email:x.email,role:x.role});const n=sessionStorage.getItem('ae_next');sessionStorage.removeItem('ae_next');location.href=n||'index.html'}};

/* log the current user out */
function logout(){localStorage.removeItem('ae_me');location.href='index.html'}
