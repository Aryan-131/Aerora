/* AERORA — Four-step booking flow */
/* booking flow */
let bk={};
V.book=id=>{const p=PK().find(x=>x.id===id);if(!p)return V.trip(id);if(!me()){sessionStorage.setItem('ae_next','booking.html?id='+id);location.href='login.html';return''}
bk.id=id;bk.step=bk.step||1;const t=p.price*(bk.guests||2);const st=['Trip','Traveler','Review','Confirmation'];
let body='';if(bk.step===1)body=`<div class="form"><div><label>Departure date</label><input type="date" id="bd" value="${bk.date||''}"></div><div><label>Travelers</label><select id="bg2">${[1,2,3,4,5,6].map(n=>`<option ${n==(bk.guests||2)?'selected':''}>${n}</option>`).join('')}</select></div><p class="err" id="er"></p><button class="btn" id="nx">Continue <span>→</span></button></div>`;
if(bk.step===2)body=`<div class="form"><div><label>Lead traveler</label><input id="bn" value="${esc(bk.name||me().name)}"></div><div><label>Email</label><input id="be" type="email" value="${esc(bk.email||me().email)}"></div><p class="err" id="er"></p><button class="btn" id="nx">Continue <span>→</span></button></div>`;
if(bk.step===3)body=`<div class="sum"><div><span>Journey</span>${p.name} — ${p.sub}</div><div><span>Departure</span>${bk.date}</div><div><span>Travelers</span>${bk.guests}</div><div><span>Lead</span>${esc(bk.name)}</div><div><b>Total</b><b>${money(t)}</b></div><button class="btn" id="nx" style="margin-top:20px">Confirm booking <span>→</span></button></div>`;
if(bk.step===4)body=`<div class="ok"><h2>Your journey is <em>confirmed.</em></h2><div class="sum" style="margin-top:28px"><div><span>Booking ID</span>${bk.ref}</div><div><span>Destination</span>${p.name}, ${p.country}</div><div><span>Dates</span>${bk.date}</div><div><span>Travelers</span>${bk.guests}</div><div><b>Total</b><b>${money(t)}</b></div></div><a class="btn ghost" style="margin-top:24px" href="index.html">Back home</a></div>`;
return`<div class="wrap" style="padding-top:56px"><span class="lbl">Booking · ${p.name}</span><div class="steps">${st.map((s,i)=>`<div class="${bk.step>=i+1?'on':''}">0${i+1}<br>${s}</div>`).join('')}</div>${body}</div>`};
V.book.after=id=>{const n=$('#nx');if(!n)return;n.onclick=()=>{const er=$('#er');
if(bk.step===1){if(!$('#bd').value)return er.textContent='Please choose a departure date.';bk.date=$('#bd').value;bk.guests=+$('#bg2').value}
else if(bk.step===2){if(!$('#bn').value||!/\S+@\S+/.test($('#be').value))return er.textContent='Enter a name and valid email.';bk.name=$('#bn').value;bk.email=$('#be').value}
else if(bk.step===3){const p=PK().find(x=>x.id===id),a=S.g('ae_bk',[]);bk.ref='AER-'+(1000+a.length+1+Math.floor(Math.random()*90));a.push({id:bk.ref,pk:id,user:me().email,date:bk.date,guests:bk.guests,total:p.price*bk.guests,status:'Pending'});S.s('ae_bk',a)}
bk.step++;const keep=bk;render();if(keep.step===4)bk={}}};
