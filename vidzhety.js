window.Marshrut=(M,c)=>{
const D=document,mr=c||D.getElementById('mr'),N={},o=M.otTebya||0,Z=M.zadacha,Q=(s,r=mr)=>r.querySelector(s),A=(s,r=mr)=>[...r.querySelectorAll(s)],rc=x=>x.getBoundingClientRect(),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
ln=(i,t,c='',n='')=>t?d('ln '+c,ic(i)+`<span${n&&` title="${e(t)}"`}>${e(t)}</span>`):'',
bt=(a,i,t,x,g)=>`<button class="bn${g?' ok':''}" data-a=${a} data-t="${e(x)}">${i?ic(i):''}<span>${e(t)}</span></button>`,
R={sborshchik:'search',ispolnitel:'tool',mekhanik:'rocket',razvedchik:'world',proveryayushchiy:'eye',opus:'brain'},
T={sonnet:['Sonnet','sey'],opus:['Opus','zhdet'],haiku:['Haiku','da']},
CH={idet:['идёт','sey'],got:['готово','da'],zhd:['в очереди','']},
V=(M.vehi??M.shagi??[]).map(v=>v.map?{n:v[0],s:v[1],it:v[2]}:v),
nS=V.filter(v=>v.s=='sey').length,vs=V.find(v=>v.s=='sey'),sh=vs?.shagi||[];
let st=sh.findIndex(x=>x.s!='da');if(st<0)st=sh.length-1;
const cp=async t=>{try{await Promise.race([navigator.clipboard.writeText(t),new Promise((_,n)=>setTimeout(n,500))]);return 1}catch{}
const a=D.createElement('textarea');a.value=t;D.body.append(a);a.select();const k=D.execCommand('copy');a.remove();return k},
row=([r,m,t,s,z])=>{const b=T[m],c=CH[s];
return d('l',ic(R[r]||'user')+(b?`<b class="${b[1]}" title="${b[0]}">${b[0][0]}</b>`:'')+`<span>${e(t)}${z?`<small>${ic('lock')}${e(z)}</small>`:''}</span>`+(c?`<small class="${c[1]}">${c[0]}</small>`:''))},
card=()=>{const x=sh[st],K=x?.knopka;
return d('tp',d('tt',e(vs.n)+`<small>${e(x?.n||'делаю')}</small>`)+(sh.length>1?d('pn',sh.map((y,i)=>`<button data-a=s data-i=${i}${i==st?' class=bn':''}>${y.s=='da'?'✓':i+1}</button>`).join('')):''))+
d('sb',ln('flag',vs.it)+(x?(x.opus?row(['opus','opus',x.opus]):'')+(x.lyudi||[]).map(l=>row(T[l[1]]?l:['','',l[0]+': '+l[1],l[2],l[3]])).join('')+ln('arrows-split',x.res)+ln('arrow-right',x.dalshe)+(K?bt('k','player-play',N[st]||K.tekst||'Делай',K.prompt||K.tekst||'делай',N[st]):''):''))},
nd=(v,i)=>{const c=`<b class="c ${v==vs?'sey':''}">${ic({da:'check',sey:'circle-dot',zhdet:'hand-stop'}[v.s]||(i==V.length-1?'flag':''))}</b>`;
return v==vs?d('u w',c+d('cd',card())):d('u '+(v.s||''),c+d('pl',d('h',e(v.n))+d('x',e(v.it))))},
dl=ln('arrow-right',M.dalshe),C=o.zapustit,P=o.kopirovat,
ot=o?d('ot',ln('user','от тебя')+d('ch',e(o.chto))+(C?d('kop',d('km',e(C))+bt('run','player-play','Запустить','запускай: '+C)):'')+
(P?/^\s*(\.?\/|~\/|(sh|bash|zsh|npm|npx|node|python3?|git|gh|cd|brew|curl|make|open|cp|mv|rm)\s)/.test(P)?d('er','Это команда: её кладут в zapustit, не в kopirovat'):d('kop',d('fr',e(P))+bt('kop','copy','Скопировать',P)+ln('arrow-right',o.kuda&&'вставь '+o.kuda+' (⌘V)')):'')+(o.knopka?bt('kn','',o.knopka,o.prompt||o.knopka):'')+dl):d('ot da',d('ch',ic('circle-check')+' От тебя ничего')+dl);
const mn=M.mini,zc=Z?'':' no',zt=Z?e(Z):'Задача Яна не записана — поле zadacha',
tg=x=>`<button class=tg data-a=m aria-expanded=${x}>${x?'Свернуть ▴':'Весь маршрут ▾'}</button>`,
er=nS>1?d('er',`вех «делаю»: ${nS} — оставь одну`):'',
F=d('zh',(mn?d('ln',ic('target')+'<span>задача</span>'+tg(!0)):ln('target','задача'))+d('zd'+zc,zt)+ln('corner-down-right',M.podzadacha&&'подзадача: '+M.podzadacha)+(M.blizko||M.zeleno!=null?d('ln bl',(M.zeleno==null?'':`<span class="zn ${M.zeleno?'da':'no'}">${ic(M.zeleno?'check':'x')}</span>`)+`<span>${e(M.blizko)}</span>`):''))+((M.bylo||[]).length?d('bs',M.bylo.slice(0,2).map(([b,s])=>`<span>было</span><span>${e(b)}</span><span>стало</span><span>${e(s)}</span>`).join('')):'')+er+(V.length?d('pt',`<svg class=sv></svg>`+V.map(nd).join('')):'')+ln('tool',M.seychas&&'сейчас: '+M.seychas),
mc=mn&&d('mc',d('mt',ic('target')+`<span${zc&&' class=no'} title="${e(Z)}">${zt}</span>`+tg(!1))+(V.length?d('sg',V.map(v=>`<i class="${e(v.s)}" title="${e(v.n)}"></i>`).join('')):'')+er+(vs?ln('circle-dot',`${vs.n??''}${sh.length?` · шаг ${st+1} из ${sh.length}${sh[st].n?' — '+sh[st].n:''}`:''}`,'sey',1):'')+ln('tool',M.seychas&&'сейчас: '+M.seychas,'',1));
mr.innerHTML=`<style>
#mr{display:grid;gap:20px;font-size:13px;line-height:1.4}
#mr *{box-sizing:border-box}
.ln{display:flex;gap:6px;color:var(--text-secondary)}
.ln i{margin-top:2px}
.zh{display:grid;gap:6px}
.zd{font-size:21px;font-weight:500;line-height:1.3}
.bl{font-size:15px}
.c,.zn,.l b{display:grid;place-items:center;border-radius:50%;background:var(--b,var(--surface-2));color:var(--c,var(--text-muted))}
.zn{width:22px;height:22px;flex:none}
.bs{display:grid;grid-template-columns:42px 1fr;gap:4px 10px;color:var(--text-secondary)}
.bs>:nth-child(odd){font-size:12px;color:var(--text-muted)}
.pt{position:relative;display:grid;grid-template-columns:repeat(var(--k,3),1fr);gap:24px 12px;padding:0 14px}
.sv{position:absolute;left:0;top:0;overflow:visible;pointer-events:none;fill:none;stroke:var(--border-strong);stroke-width:2;stroke-dasharray:5 4}
.sp{stroke:var(--text-success);stroke-dasharray:0}
.u{position:relative;z-index:1;display:grid;justify-items:center;gap:7px;min-width:0}
.c{width:30px;height:30px;font-size:15px;border:1.5px var(--d,dashed) var(--r,var(--border-strong))}
.pl{position:relative;width:100%;padding:7px 9px;display:grid;gap:3px;border:1px var(--d,dashed) var(--r,var(--border-strong));border-radius:8px;background:var(--b,none);color:var(--c,var(--text-muted))}
.h,.x{overflow:hidden;columns:1;column-gap:0;column-fill:auto;overflow-wrap:break-word}
.h{font-weight:500;line-height:18px;height:37px}
.x{font-size:12px;line-height:17px;height:52px}
.g,.pn button,.tg{cursor:pointer;height:20px;padding:0 8px;line-height:1;font-size:11px;border-radius:10px}
.g{position:absolute;right:7px;bottom:-10px;background:var(--surface-2)}
.w{display:flex;align-items:start;gap:10px}
.w .c{margin-top:9px;flex:none}
.cd{flex:1;min-width:0;display:grid;gap:9px;padding:12px 14px;border:2px solid var(--border-accent);border-radius:12px;background:var(--surface-2)}
.tp{display:flex;gap:10px}
.tt{flex:1;font-size:16px;font-weight:500;line-height:1.3;color:var(--text-accent)}
.tt small{display:block;font-weight:400}
.pn{display:flex;flex-wrap:wrap;justify-content:end;gap:4px;max-width:60%}
.pn button{min-width:28px;height:28px;border-radius:14px;font-size:12px}
.sb{display:grid;gap:7px}
.l{display:flex;gap:6px;align-items:start;padding:6px 8px;border-radius:8px;background:var(--surface-1)}
.l>i{font-size:15px;margin-top:1px}
.l>span{flex:1;min-width:0}
.l b{flex:none;width:18px;height:18px;font-size:10.5px}
.l span small{display:inline-flex;gap:3px;margin-left:6px;padding:0 6px;border-radius:9px;border:.5px solid var(--border-strong);color:var(--text-secondary);white-space:nowrap}
.l>small{padding:1px 8px;border-radius:10px;white-space:nowrap;background:var(--b,none);color:var(--c,var(--text-muted))}
.bn{cursor:pointer;display:inline-flex;gap:6px;align-items:center;justify-self:start;padding:0 18px;background:var(--fill-accent);color:var(--on-accent);border-color:transparent}
.bn.ok{background:var(--fill-success);color:var(--on-success)}
.ot{display:grid;gap:10px;justify-items:start;padding:14px 16px;border:2px solid var(--border-accent);border-radius:12px}
.ot.da{border:0;background:var(--b);color:var(--c)}
.ch{font-size:16px;font-weight:500}
.kop{display:grid;gap:8px;justify-self:stretch}
.fr,.km,.er{padding:10px 12px;border-radius:var(--radius);overflow-wrap:anywhere;background:var(--surface-1);border:.5px solid var(--border-strong)}
.km{font:13px/1.45 var(--font-mono)}
.rn{width:100%;min-height:56px}
.er{background:var(--bg-danger);color:var(--text-danger);border:0;font-weight:500}
${['da:success','sey:accent','zhdet:warning'].map(x=>{const[k,t]=x.split(':');return`.${k}{--c:var(--text-${t});--b:var(--bg-${t});--r:var(--border-${t});--d:solid}`}).join('\n')}
.no{--c:var(--text-danger);--b:var(--bg-danger);color:var(--c)}
.mc{display:grid;gap:6px;padding:10px 14px;border:.5px solid var(--border-strong);border-radius:12px;background:var(--surface-1)}
.mc>*{min-width:0}
.mc span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mt{display:flex;gap:8px;align-items:center;font-size:15px;font-weight:500}
.tg{flex:none;height:24px;margin-left:auto;padding:0 10px;font-size:12px;border-radius:12px;white-space:nowrap;background:var(--surface-2)}
.sg{display:flex;gap:3px}
.sg i{flex:1;height:6px;border-radius:3px;background:var(--c,var(--border-strong))}
.sg .sey{flex:2}
.ln.sey{color:var(--text-accent)}
.fv{display:none;gap:20px}
.mo .fv{display:grid}
.mo .mc{display:none}
</style>`+(mn?mc+d('fv',F+(o?'':ot))+(o?ot:''):F+ot);
const lay=()=>{const box=Q('.pt');if(!box||!box.clientWidth)return;
const U=A('.u',box),k=Math.min(3,U.length,~~((box.clientWidth-28)/150)||1);
box.style.setProperty('--k',k);
let r=1,c=0,f=1;
U.forEach(u=>{const w=u.classList.contains('w');if(w&&c){r++;c=0;f=!f}
u.style.gridRow=r;u.style.gridColumn=w?'1/-1':f?c+1:k-c;if(w)u.style.flexDirection=f?'row':'row-reverse';u.f=f;
if(w){r++;c=0}else if(++c==k){r++;c=0;f=!f}});
const br=rc(box),P=U.map(u=>{const b=rc(Q('.c',u));return[b.left+b.width/2-br.left,b.top+b.height/2-br.top]});
Q('.sv').outerHTML=`<svg class=sv style="width:${br.width}px;height:${br.height}px">${P.slice(1).map(([X,Y],j)=>{const[x,y]=P[j],v=!U[j+1].f,E=v?br.width-7:7,s=v?1:-1;
return`<path class="${V[j].s=='da'?'sp':''}" d="M${x} ${y}${Math.abs(y-Y)<2?'':`H${E-s*10}Q${E} ${y} ${E} ${y+10}V${Y-10}Q${E} ${Y} ${E-s*10} ${Y}`}H${X}"/>`}).join('')}</svg>`;
A('.pl').forEach(t=>{const q=[...t.children],n=Math.max(...q.map(b=>Math.round(b.scrollWidth/b.clientWidth))),g=Q('.g',t);
if(g?g.dataset.n==n:n<2)return;g?.remove();q.forEach(b=>b.scrollLeft=0);if(n>1)t.insertAdjacentHTML('beforeend',`<button class=g data-a=g data-n=${n}>1/${n} ›</button>`)})};
mr.onclick=async ev=>{const b=ev.target.closest('[data-a]'),a=b?.dataset.a;if(!a)return;
if(a=='m'){const x=mr.classList.toggle('mo');lay();Q(x?'.zh .tg':'.mc .tg').focus();return}
if(a=='s'){st=+b.dataset.i;const c=Q('.cd');c.innerHTML=card();lay();Q(`[data-i="${st}"]`,c).focus();return}
if(a=='g'){const n=+b.dataset.n,p=b.p=((b.p||0)+1)%n;[...b.parentNode.children].forEach(q=>q.scrollLeft=p*q.clientWidth);b.textContent=`${p+1}/${n} ${p+1<n?'›':'‹'}`;return}
if(Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const t=b.dataset.t,fin=x=>{b.classList.add('ok');b.lastChild.textContent=x;if(a=='k')N[st]=x};
if(a!='kop'&&window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return fin('Нажато ✓ — проверь поле ввода')}
if(await cp(t))return fin('Скопировано ✓ — вставь в чат (⌘V)');
const r=D.createElement('textarea');r.className='rn';r.readOnly=1;r.value=t;b.after(r);r.select();fin('Выделено — нажми ⌘C')};
lay();D.fonts?.ready.then(lay);const pt=Q('.pt');window.ResizeObserver&&pt&&new ResizeObserver(lay).observe(pt);Marshrut.lay=lay};
window.Vybor=V=>{
const D=document,vb=D.getElementById('vb'),Q=s=>vb.querySelector(s),A=s=>[...vb.querySelectorAll(s)],Vs=V.voprosy,S=Vs.map(()=>[]),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x,a='')=>`<div class="${c}"${a}>${x}</div>`,
bt=(c,i,t)=>`<button type="button" class="${c}" id="${c}">${ic(i)}<span>${t}</span></button>`,
no=i=>Vs[i].no??i+1,
ans=i=>S[i].length?no(i)+S[i].map(j=>Vs[i].varianty[j].b).join(''):'',
otvet=()=>S.map((_,i)=>ans(i)).filter(Boolean).join(' '),
bez=()=>S.flatMap((s,i)=>s.length?[]:[no(i)]),
P0=(V.pered||'').trim(),
sobrat=()=>otvet()?[V.pered,otvet(),bez().length?`(без ответа: ${bez().join(', ')})`:V.posle].filter(Boolean).join(' ').trim():P0,
vp=(v,i)=>d('vb-v',d('vb-vz',`<span>${e(no(i))}</span>${e(v.zag)}`)+d('vb-pl'+(v.mnogo?' vb-m':''),v.varianty.map((x,j)=>`<button type="button" class="vb-p" aria-pressed="false" data-v="${i}" data-j="${j}"><span class="vb-kr"></span><span class="vb-t"><span><b>${e(x.b)}</b> · ${e(x.chto)}${x.sovet?'<span class="vb-sv">советую</span>':''}</span>${x.poyasn?`<span class="vb-pz">${e(x.poyasn)}</span>`:''}</span></button>`).join(''),` role="group" aria-label="${e(no(i)+'. '+v.zag+(v.mnogo?' — можно несколько':''))}"`));
vb.innerHTML=`<style>
#vb,.vb-v,.vb-otv{display:grid;grid-template-columns:minmax(0,1fr)}
#vb{gap:14px;font-size:13px;line-height:1.4;overflow-wrap:anywhere}
#vb *{box-sizing:border-box}
#vb-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
.vb-zag,.vb-sam,.vb-pod{display:flex;gap:6px}
.vb-zag{gap:8px;font-size:16px;font-weight:500;line-height:1.3}
.vb-zag i{color:var(--text-accent)}
.vb-zag i,.vb-sam i,.vb-pod i{margin-top:1px}
.vb-sam,.vb-pod{font-size:12px;line-height:1.45;color:var(--text-secondary)}
.vb-v{gap:10px;padding:12px 14px;border:.5px solid var(--border-strong);border-radius:12px}
.vb-vz{font-size:15px;font-weight:500;line-height:1.35}
.vb-vz span{margin-right:6px;font-weight:400;color:var(--text-muted)}
.vb-pl{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:8px}
.vb-p{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:10px;align-items:flex-start;min-width:0;padding:9px 14px 9px 11px;border:1.5px solid var(--border-strong);border-radius:20px;line-height:1.35;transition:background .12s,border-color .12s}
.vb-p:only-child{max-width:340px}
.vb-p:hover{border-color:var(--text-accent)}
.vb-p:focus-visible{outline:2px solid var(--text-accent);outline-offset:2px}
.vb-kr{flex:none;display:grid;place-items:center;width:18px;height:18px;margin-top:1px;border:1.5px solid var(--border-stronger,var(--text-muted));border-radius:50%}
.vb-m .vb-kr{border-radius:5px}
.vb-p[aria-pressed=true]{background:var(--bg-accent);border-color:var(--text-accent)}
.vb-p[aria-pressed=true] .vb-kr{background:var(--fill-accent);border-color:var(--fill-accent)}
.vb-p[aria-pressed=true] .vb-kr::after{content:'';width:7px;height:7px;border-radius:50%;background:var(--on-accent)}
.vb-m .vb-p[aria-pressed=true] .vb-kr::after{width:4px;height:8px;border:solid var(--on-accent);border-width:0 2px 2px 0;border-radius:0;background:none;transform:translateY(-1px) rotate(45deg)}
.vb-p[aria-pressed=true] .vb-t{color:var(--text-accent)}
.vb-t{display:flex;flex-direction:column;gap:2px;min-width:0}
.vb-t b{font-weight:500}
.vb-pz{font-size:12px;color:var(--text-secondary)}
.vb-sv{display:inline-block;margin-left:6px;padding:1px 7px;border-radius:999px;font-size:11px;font-weight:500;vertical-align:1px;color:var(--text-success);background:var(--bg-success)}
.vb-otv{gap:10px;padding:14px 16px;border:2px solid var(--border-accent);border-radius:12px}
.vb-chipy{display:flex;flex-wrap:wrap;gap:6px}
.vb-ch{padding:3px 11px;border:1.5px dashed var(--border-strong);border-radius:999px;font-size:14px;font-weight:500;color:var(--text-muted)}
.vb-ch.on{border-style:solid;border-color:var(--text-accent);background:var(--bg-accent);color:var(--text-accent)}
.vb-pole{width:100%;resize:none;overflow:hidden;padding:10px 12px;border:.5px solid var(--border-strong);border-radius:var(--radius,8px);background:var(--surface-1);color:var(--text-primary);font:13px/1.45 var(--font-mono,monospace);overflow-wrap:anywhere}
.vb-ryad{display:flex;flex-wrap:wrap;gap:8px}
.vb-ryad button{cursor:pointer;display:inline-flex;gap:6px;align-items:center;min-height:36px;padding:0 16px;border:1.5px solid var(--text-accent);border-radius:var(--radius,8px);background:none;color:var(--text-accent);font:inherit;font-size:14px}
.vb-ryad .vb-otp{background:var(--fill-accent);border-color:var(--fill-accent);color:var(--on-accent);font-weight:500}
.vb-ryad .vb-otp.gotovo{background:var(--fill-success);border-color:var(--fill-success);color:var(--on-success)}
.vb-ryad .vb-kop.gotovo{border-color:var(--text-success);color:var(--text-success)}
.vb-ryad .vb-zanovo{display:none}
.vb-osh{color:var(--text-danger)}
.vb-osh:empty{display:none}
</style><h2 id="vb-sr">Выбор ответов</h2>`+
d('vb-zag',ic('list-check')+`<span>${e(V.zag)}</span>`)+Vs.map(vp).join('')+
((V.reshilSam||[]).length?d('vb-sam',ic('bulb')+`<span>Решил сам: ${V.reshilSam.map(e).join(' · ')}</span>`):'')+
d('vb-otv',d('vb-chipy','',' id="vb-chipy" aria-live="polite"')+
`<textarea class="vb-pole" id="vb-pole" rows="1" aria-label="Строка ответа — можно править и копировать"></textarea>`+
d('vb-ryad',bt('vb-otp','send','Отправить')+bt('vb-kop','copy','Скопировать')+(Vs.some(v=>v.varianty.some(x=>x.sovet))?bt('vb-vse','checks','Все — как советую'):'')+bt('vb-zanovo','refresh','Собрать строку заново'))+
d('vb-osh','',' id="vb-osh" role="alert"')+d('vb-pod',ic('arrow-right')+`<span>${e(V.chtoBudet)}</span>`,' id="vb-pod"'));
const pole=Q('#vb-pole'),osh=Q('#vb-osh'),zan=Q('#vb-zanovo'),pod=t=>Q('#vb-pod span').textContent=t,
fin=(b,t)=>{b.classList.add('gotovo');b.lastChild.textContent=t},
vys=()=>{pole.style.height='auto';pole.style.height=pole.scrollHeight+'px'},
cp=async()=>{try{await Promise.race([navigator.clipboard.writeText(pole.value),new Promise((_,n)=>setTimeout(n,500))]);return 1}catch{}
try{pole.focus();pole.select();if(D.execCommand('copy'))return 1}catch{}
pole.focus();pole.select()},
sbros=()=>{osh.textContent='';[['otp','Отправить'],['kop','Скопировать']].forEach(([k,t])=>{const b=Q('#vb-'+k);b.classList.remove('gotovo');b.lastChild.textContent=t});pod(V.chtoBudet??'')};
let pv=0,ps=0,K={t:0,i:-1,j:-1},w0=0;
const pokazat=()=>{
A('.vb-p').forEach(p=>p.setAttribute('aria-pressed',S[p.dataset.v].includes(+p.dataset.j)));
Q('#vb-chipy').innerHTML=S.map((s,i)=>s.length?`<span class="vb-ch on">${e(ans(i))}</span>`:`<span class="vb-ch">${e(no(i))} ?</span>`).join('');
if(!pv)pole.value=sobrat();
zan.style.display=pv?'inline-flex':'none';
vys();
Q('#vb-sr').textContent=`${V.zag}. Выбрано ${S.filter(s=>s.length).length} из ${S.length}: ${otvet()||'ничего'}.`;
sbros()};
vb.onclick=async ev=>{const b=ev.target.closest('button');if(!b)return;const c=b.id;
if(b.classList.contains('vb-p')){const i=+b.dataset.v,j=+b.dataset.j;
if(K.i==i&&K.j==j&&Date.now()-K.t<400)return;K={t:Date.now(),i,j};
const s=S[i],k=s.indexOf(j);
if(Vs[i].mnogo){k<0?s.push(j):s.splice(k,1);s.sort((a,b)=>a-b)}else S[i]=k<0?[j]:[];
pokazat();if(pv)osh.textContent='Поле поправлено руками — новый выбор в него не попал. «Собрать строку заново» — взять выбор.'}
else if(c=='vb-vse'){Vs.forEach((v,i)=>{const r=v.varianty.flatMap((x,j)=>x.sovet?[j]:[]);if(r.length)S[i]=v.mnogo?r:r.slice(0,1)});pokazat()}
else if(c=='vb-zanovo'){pv=0;pokazat()}
else if(c=='vb-kop'){fin(b,'Копирую…');fin(b,await cp()?'Скопировано ✓':'Выделено — нажми ⌘C')}
else if(c=='vb-otp'){const t=pole.value.trim();
if(!t||!otvet()&&t==P0){osh.textContent='Выбери хотя бы один ответ — или впиши свой в поле.';return}
if(Date.now()-ps<1500)return;ps=Date.now();
if(window.sendPrompt){setTimeout(()=>window.sendPrompt(t),300);fin(b,'Нажато ✓ — проверь поле ввода');
const n=!pv&&otvet()?bez().length:0;
pod(`В поле ввода должно встать «${t}» — нажми Enter.`+(n?` Без ответа ${n} — они подождут.`:'')+' Не встало — нажми «Отправить» ещё раз или «Скопировать» и ⌘V.')}
else{fin(b,'Копирую…');const k=await cp();fin(b,k?'Скопировано ✓ — вставь в чат (⌘V)':'Выделено — нажми ⌘C');
pod(k?'Строка скопирована — вставь её в поле ввода чата (⌘V) и нажми Enter.':'Строка выделена — нажми ⌘C, потом ⌘V в поле ввода чата.')}}};
pole.oninput=()=>{pv=pole.value.trim()!=sobrat();zan.style.display=pv?'inline-flex':'none';sbros();vys()};
window.ResizeObserver&&new ResizeObserver(([z])=>{const w=Math.round(z.contentRect.width);if(w!=w0){w0=w;requestAnimationFrame(vys)}}).observe(vb);
pokazat()};
window.Otvet=D=>{
const dc=document,ot=dc.getElementById('ot'),A=(s,r=ot)=>[...r.querySelectorAll(s)],
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=(n,c='')=>`<i class="ti ti-${e(n)} ${c}" aria-hidden="true"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
sx=(k,m,t,c='')=>`<div class="o-x ${c}" data-k=${k} data-m=${m}>${e(t)}</div>`,
ln=(i,t,c='')=>t?d('o-ln o-sl '+c,ic(i)+`<span>${e(t)}</span>`):'',
bt=(t,p,c='')=>`<button class="o-b ${c}" data-a=b data-t="${e(p||t)}">${ic('player-play')}<span>${e(t)}</span></button>`,
TN={krasnyj:'rd',zhyoltyj:'yl',zelenyj:'gr',sinij:'bl'},tn=t=>TN[t]?'o-'+TN[t]:'',
MD={opus:['Opus','yl'],sonnet:['Sonnet','bl'],haiku:['Haiku','gr']},
ZT={beda:['rd','alert-triangle'],da:['gr','check'],vopros:['bl','bulb']},
nm=s=>+(String(s).replace(/\s/g,'').replace(',','.').replace('−','-').match(/-?\d+\.?\d*/)||NaN),
cp=async t=>{try{await Promise.race([navigator.clipboard.writeText(t),new Promise((_,n)=>setTimeout(n,500))]);return 1}catch{}
const a=dc.createElement('textarea');a.value=t;dc.body.append(a);a.select();let k=0;try{k=dc.execCommand('copy')}catch{}a.remove();return k},
BL={
chisla:B=>d('o-cs o-gp',(B.e||[]).map(([t,a,b,h])=>{const p=nm(a),q=nm(b);
return d('o-k o-u',sx('c',2,t,'o-cp')+d('o-v o-'+(h==null||p==q||isNaN(p+q)?'bl':(q>p)==!!h?'gr':'rd'),`<span>${e(a)}</span>${ic('arrow-right')}<b>${e(b)}</b>`))}).join('')),
'bylo-stalo':B=>d('o-ls o-pr',(B.e||[]).map(([a,b,h])=>d('o-bs o-u o-gp o-'+(h==null||h?'gr':'rd'),d('o-bc',sx('b',3,a))+ic('arrow-right','o-ar')+d('o-bc o-af',sx('a',3,b)))).join('')),
spisok:B=>d('o-ls',(B.e||[]).map((s,i)=>{const[t,p,c]=[].concat(s);return d('o-r '+tn(c),`<b class="o-c">${i+1}</b><div>`+d('o-t',e(t))+(p?d('o-p',e(p)):'')+'</div>')}).join('')),
'vybor-puti':B=>{const V=(B.e||[]).slice(0,3),h=k=>V.some(v=>v[k]),
pm=(v,k,c)=>h(k)?d('o-ln '+c,(v[k]?ic(k):'')+sx(k[0],2,v[k])):'';
return`<div class="o-cs o-gp" style="--w:180px${h('sovet')?';padding-top:10px':''}">`+V.map(v=>d('o-k o-u'+(v.sovet?' o-s':''),(v.sovet?`<span class="o-bd">${ic('thumb-up')}советую</span>`:'')+sx('t',2,v.n,'o-t')+(h('d')?sx('d',3,v.d):'')+pm(v,'plus','o-gr')+pm(v,'minus','o-rd')+(v.knopka?bt(v.knopka,v.prompt,v.sovet?'':'o-q'):''))).join('')+'</div>'},
shagi:B=>{const S=(B.e||[]).map(s=>[].concat(s)),h=S.some(s=>s[1]);
return d('o-sh o-gp',S.map(([t,p,m],i)=>(i?ic('arrow-right','o-ar'):'')+d('o-k o-u',d('o-st',`<b class="o-c">${i+1}</b>`+(MD[m]?`<b class="o-md o-${MD[m][1]}" title="${MD[m][0]}">${MD[m][0][0]}</b>`:'')+sx('t',2,t,'o-t'))+(h?sx('p',2,p):''))).join(''))},
stroka:B=>ln(B.i||'info-circle',B.t,tn(B.ton))
},
bk=B=>d('o-bk',(B.n?d('o-n',e(B.n)):'')+(BL[B.b]?BL[B.b](B):d('o-er','блок «'+e(B.b)+'» не из списка'))),
Z=ZT[D.ton];
ot.innerHTML=`<style>
#ot{display:grid;gap:14px;font-size:13px;line-height:18px;overflow-wrap:break-word;container-type:inline-size}
#ot *{box-sizing:border-box}
.o-z{display:flex;gap:10px;align-items:start;font-size:20px;line-height:28px;font-weight:500}
.o-zn,.o-c,.o-md{display:grid;place-items:center;flex:none;border-radius:50%;background:var(--b,var(--surface-2));color:var(--c,var(--text-muted))}
.o-zn{width:28px;height:28px;font-size:16px}
.o-c{width:22px;height:22px;font-size:12px}
.o-md{width:18px;height:18px;font-size:10.5px}
.o-bk{display:grid;gap:7px}
.o-bk:empty{display:none}
.o-n{font-size:12px;color:var(--text-muted)}
.o-u{position:relative}
.o-cs{display:grid;grid-template-columns:repeat(auto-fit,minmax(var(--w,110px),1fr));gap:14px 10px}
.o-k{min-width:0;display:flex;flex-direction:column;gap:7px;padding:10px 12px;border:2px solid transparent;border-radius:12px;background:var(--surface-1)}
.o-s{border-color:var(--border-accent)}
.o-x{flex:none;overflow:hidden;columns:1;column-gap:0;column-fill:auto;height:calc(var(--n,1)*18px)}
.o-t{font-size:14px;font-weight:500}
.o-cp,.o-p{color:var(--text-secondary)}
.o-g{position:absolute;right:8px;bottom:-10px;height:20px;padding:0 8px;line-height:1;font-size:11px;border-radius:10px;background:var(--surface-2);cursor:pointer}
.o-v{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 6px;margin-top:auto}
.o-v span{font-size:14px;color:var(--text-muted)}
.o-v i{align-self:center;color:var(--text-muted)}
.o-v b{font-size:22px;line-height:28px;font-weight:500;color:var(--c)}
.o-bd{position:absolute;top:-10px;left:10px;display:inline-flex;gap:4px;align-items:center;height:20px;padding:0 8px;border-radius:10px;font-size:11px;background:var(--fill-accent);color:var(--on-accent)}
.o-ln{display:flex;gap:6px;align-items:start;color:var(--text-secondary)}
.o-ln i{flex:none;margin-top:2px;color:var(--c,var(--text-secondary))}
.o-ln span,.o-ln .o-x,.o-st .o-x,.o-r>div{flex:1;min-width:0}
.o-st .o-x,.o-r>div{margin-top:2px}
.o-sl{color:var(--c,var(--text-secondary))}
.o-st{display:flex;gap:6px;align-items:start}
.o-sh{display:flex;gap:6px}
.o-sh>.o-k{flex:1}
.o-ar{flex:none;align-self:center;color:var(--text-muted)}
.o-ls{display:grid;gap:8px}
.o-pr{gap:14px}
.o-r{display:flex;gap:10px;align-items:start;padding:8px 10px;border-radius:8px;background:var(--surface-1)}
.o-bs{display:grid;grid-template-columns:1fr auto 1fr;gap:8px}
.o-bc{min-width:0;padding:8px 10px;border-radius:8px;background:var(--surface-1);color:var(--text-secondary)}
.o-af{background:var(--b);color:var(--c)}
.o-b{cursor:pointer;display:inline-flex;gap:6px;align-items:center;align-self:start;margin-top:auto;padding:0 18px;background:var(--fill-accent);color:var(--on-accent);border-color:transparent}
.o-b.o-q{background:none;color:var(--text-primary);border-color:var(--border-strong)}
.o-b.o-ok{background:var(--fill-success);color:var(--on-success);border-color:transparent}
.o-rn{width:100%;min-height:56px}
.o-er{padding:10px 12px;border-radius:var(--radius);background:var(--bg-danger);color:var(--text-danger);font-weight:500}
${['gr:success','rd:danger','yl:warning','bl:accent'].map(x=>{const[k,t]=x.split(':');return`.o-${k}{--c:var(--text-${t});--b:var(--bg-${t})}`}).join('\n')}
@container (max-width:460px){.o-z{font-size:18px}.o-bs{grid-template-columns:1fr}.o-sh{flex-direction:column}.o-sh>.o-k{flex:none}.o-ar{transform:rotate(90deg);justify-self:center}}
</style>`+(D.zag?d('o-z',(Z?`<span class="o-zn o-${Z[0]}">${ic(Z[1])}</span>`:'')+`<span>${e(D.zag)}</span>`):'')+(D.bloki||[]).filter(Boolean).map(bk).join('');
ot.role='region';ot.ariaLabel=D.zag||'Ответ';
const lay=()=>{const X=A('.o-x');A('.o-gp').forEach(g=>g.m={});
X.forEach(s=>s.style.height='auto');
X.forEach(s=>{const m=s.closest('.o-gp').m,k=s.dataset.k;m[k]=Math.max(m[k]||1,Math.round(s.scrollHeight/18))});
X.forEach(s=>{s.style.height='';s.style.setProperty('--n',Math.min(s.closest('.o-gp').m[s.dataset.k],s.dataset.m))});
A('.o-u').forEach(u=>{const q=A('.o-x',u),n=Math.max(...q.map(b=>Math.round(b.scrollWidth/b.clientWidth))),g=u.querySelector(':scope>.o-g');
if(g?g.dataset.n==n:n<2)return;g?.remove();q.forEach(b=>b.scrollLeft=0);if(n>1)u.insertAdjacentHTML('beforeend',`<button class=o-g data-a=g data-n=${n}>1/${n} ›</button>`)})};
ot.onclick=async ev=>{const b=ev.target.closest('[data-a]'),a=b?.dataset.a;if(!a)return;
if(a=='g'){const n=+b.dataset.n,p=b.p=((b.p||0)+1)%n;A('.o-x',b.parentNode).forEach(q=>q.scrollLeft=p*q.clientWidth);b.textContent=`${p+1}/${n} ${p+1<n?'›':'‹'}`;return}
if(Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const t=b.dataset.t,fin=s=>{b.classList.add('o-ok');b.lastChild.textContent=s};
if(window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return fin('Нажато ✓ — проверь поле ввода')}
if(await cp(t))return fin('Скопировано ✓ — вставь в чат (⌘V)');
const r=dc.createElement('textarea');r.className='o-rn';r.readOnly=1;r.value=t;b.after(r);r.select();fin('Выделено — нажми ⌘C')};
lay();dc.fonts?.ready.then(lay);let W=ot.clientWidth;window.ResizeObserver&&new ResizeObserver(()=>{if(ot.clientWidth!=W){W=ot.clientWidth;lay()}}).observe(ot);Otvet.lay=lay};
window.Status=D=>{
const W=document,st=W.getElementById('st'),Z=D.zadacha,L=D.sovet,
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
ln=(i,t,c='')=>t?d('sln '+c,ic(i)+`<span>${e(t)}</span>`):'',
bt=(i,o)=>`<button class=sbn data-t="${e(o.prompt||o.knopka)}">${ic(i)}<span>${e(o.knopka)}</span></button>`,
sc=(i,t,x)=>x?d('',d('skp',ic(i)+t)+x):'',
X={sey:'idet',zhdet:'stoit'},
G={papka:['folder','в папке','не записано','stoit'],vetka:['git-branch','в ветке','не влито','idet'],dom:['world','на домене','','da']},
V=(D.shagi??D.vehi??[]).map(v=>{v=v.map?{n:v[0],s:v[1],it:v[2]}:v;return{...v,s:X[v.s]||v.s||''}}),
AC=V.filter(v=>v.s=='idet'||v.s=='stoit'),cu=AC[0],nd=V.filter(v=>v.s=='da').length,fin=nd&&nd==V.length,lk=V.at(-1)?.k,
pi=cu?V.indexOf(cu)+1:fin?V.length+1:V.findIndex(v=>!v.s)+1,
row=v=>{const g=G[v.gde];
return d('sr s'+v.s,`<span class=sic>${v.s?ic('check'):V.indexOf(v)+1}</span>`+d('',`<b>${e(v.n)}</b>`+(v.it?d('sml',e(v.it)):''))+(g?`<span class="sm s${g[3]}">${g[1]}${v.d?' · '+e(v.d):''}</span>`:v.k?`<span class=sm>${e(v.k)}</span>`:''))},
card=u=>d('scd s'+u.s,d('stp',`<span>${ic(u.s=='idet'?'circle-dot':'player-pause')}сейчас · ${u.s=='idet'?'идёт':'стоит'}</span>`+(u.k?`<span>${e(u.k)}</span>`:''))+d('sh2',e(u.n))+(u.it?d('stx',e(u.it)):'')+(u.zhd?d('szh','Ждёт: '+e(u.zhd)):'')+
(u.pod?d('spd',u.pod.map((p,i)=>{p=p.map?p:[p];return`<span class="s${p[1]||''}">${i+1} · ${e(p[0])}</span>`}).join('')):'')),
gd=V.filter(v=>G[v.gde]),
tr=gd.length?d('sst',['papka','vetka','dom'].map((k,i)=>{const g=G[k],l=gd.filter(v=>v.gde==k);
return(i?ic('arrow-right'):'')+d('ssn'+(l.length?' s'+g[3]:''),d('sml',ic(g[0])+' '+g[1]+(g[2]?', '+g[2]:''))+d('snu',l.length)+(l.length?d('sml',l.map(v=>e(v.k||v.n)).join(' · ')):''))}).join('')):'',
fk=(D.fakty||[]).map(([i,t,s])=>ln(i,t,'sfk s'+(s||''))).join(''),
sv=L?d('sol',d('ssv',`<span class=szn>${ic('bulb')}советую</span>`+d('sh2',e(L.n))+(L.it?d('stx',e(L.it)):'')+ln('arrow-right',L.dalshe)+bt('arrow-up-right',L))+
(D.ili?.length?d('sml','или')+d('sil',D.ili.slice(0,2).map(o=>d('sit',`<b>${e(o.n)}</b>`+(o.it?d('sml',e(o.it)):'')+bt('arrow-up-right',o))).join('')):'')):'',
cp=async t=>{try{await Promise.race([navigator.clipboard.writeText(t),new Promise((_,n)=>setTimeout(n,500))]);return 1}catch{}
const a=W.createElement('textarea');a.value=t;W.body.append(a);a.select();const k=W.execCommand('copy');a.remove();return k};
st.innerHTML=`<style>
#st{display:grid;gap:20px;font-size:13px;line-height:1.4;overflow-wrap:break-word}
#st *{box-sizing:border-box}
.ssr{position:absolute;left:-9999px}
.sln{display:flex;gap:6px;color:var(--text-secondary)}
.sln i{margin-top:2px}
.sfk i{color:var(--c)}
.sml{font-size:12px;color:var(--text-secondary)}
.skp{display:flex;align-items:center;gap:6px;margin-bottom:8px;font-size:12px;color:var(--text-secondary)}
.shd{display:flex;justify-content:space-between;align-items:flex-end;gap:16px}
.szd{font-size:21px;font-weight:500;line-height:1.3}
.sno{color:var(--text-danger)}
.scn{flex:none;text-align:right;line-height:1}
.scn b{font-size:30px;font-weight:500}
.scn small{font-size:18px;font-weight:400;color:var(--text-secondary)}
.ser{padding:10px 12px;border-radius:var(--radius);background:var(--bg-danger);color:var(--text-danger);font-weight:500}
.spu{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));padding-top:30px}
.su{position:relative;display:flex;flex-direction:column;align-items:center;gap:5px;padding:0 2px;text-align:center}
.su::after{content:"";position:absolute;top:17px;left:calc(50% + 22px);right:calc(-50% + 22px);border-top:2px dashed var(--border-strong)}
.su.sda::after{top:16.5px;border-top:3px solid var(--text-success)}
.su:last-child::after{display:none}
.sk,.sic{display:grid;place-items:center;border-radius:50%;background:var(--b,var(--surface-2));color:var(--c,var(--text-muted))}
.sk{width:36px;height:36px;font-size:17px;border:1.5px var(--d,dashed) var(--r,var(--border-strong))}
.sidet .sk,.sstoit .sk{border:2px solid var(--c);outline:5px solid var(--b)}
.snm{font-size:12px;line-height:1.3;color:var(--text-secondary)}
.sda .snm{color:var(--text-primary)}
.sidet .snm,.sstoit .snm{font-weight:500;color:var(--c)}
.smn .snm{display:none}
.spn{position:absolute;top:-30px;left:50%;transform:translateX(-50%);padding:2px 9px;border-radius:999px;white-space:nowrap;font-size:11px;background:var(--b,var(--surface-1));color:var(--c,var(--text-secondary));border:.5px solid var(--r,var(--border-strong))}
.scd{display:grid;gap:6px;padding:12px 14px;border:2px solid var(--r);border-radius:12px;background:var(--b);color:var(--c)}
.stp{display:flex;justify-content:space-between;gap:8px;font-size:12px}
.stp span{display:inline-flex;align-items:center;gap:5px}
.sh2{font-size:17px;font-weight:500;line-height:1.3}
.stx{line-height:1.5}
.szh{font-weight:500}
.spd{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}
.spd span{padding:3px 10px;border-radius:999px;font-size:12px;background:var(--surface-2);color:var(--text-secondary);border:.5px solid var(--border)}
.spd .sda,.spd .sidet,.spd .sstoit{background:var(--b);color:var(--c);border-color:var(--r)}
.sls{border:.5px solid var(--border);border-radius:12px}
.sq{border-style:dashed}
.sr{display:grid;grid-template-columns:24px minmax(0,1fr) auto;gap:10px;align-items:start;padding:10px 14px;border-top:.5px solid var(--border)}
.sr:first-child{border-top:0}
.sic{width:24px;height:24px;font-size:14px}
.sr b,.sit b{font-weight:500;font-size:14px}
.sm{padding:2px 9px;border-radius:999px;white-space:nowrap;font-size:11px;background:var(--b,var(--surface-1));color:var(--c,var(--text-secondary))}
.sst{display:grid;grid-template-columns:minmax(0,1fr) 18px minmax(0,1fr) 18px minmax(0,1fr);gap:6px}
.sst>i{align-self:center;font-size:16px;color:var(--text-muted)}
.ssn{padding:10px 12px;border-radius:var(--radius);background:var(--b,var(--surface-1));color:var(--c,inherit)}
.ssn .sml{color:var(--c,var(--text-secondary))}
.snu{font-size:24px;font-weight:500;line-height:1.2}
.sfs{display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:10px}
.sol{display:grid;gap:8px}
.ssv{display:grid;gap:6px;justify-items:start;padding:12px 14px;border:2px solid var(--border-accent);border-radius:12px}
.szn{display:inline-flex;align-items:center;gap:4px;padding:2px 10px;border-radius:var(--radius);font-size:12px;background:var(--bg-accent);color:var(--text-accent)}
.sil{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px}
.sit{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:10px 14px;border:.5px solid var(--border);border-radius:12px}
.sbn{cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:0 18px}
.ssv .sbn{background:var(--fill-accent);color:var(--on-accent);border-color:transparent}
.sit .sbn{margin-top:auto}
.sbn.sok{background:var(--fill-success);color:var(--on-success);border-color:transparent}
.sbn.spg{opacity:.45;pointer-events:none}
.srn{width:100%;min-height:56px}
.spt{display:flex;gap:8px;padding:3px 0;line-height:1.5}
.spt i{margin-top:2px;font-size:16px;color:var(--text-secondary)}
.spt~.sln{margin-top:8px}
${['da:success','idet:accent','stoit:warning'].map(x=>{const[k,t]=x.split(':');return`.s${k}{--c:var(--text-${t});--b:var(--bg-${t});--r:var(--border-${t});--d:solid}`}).join('\n')}
</style>`+`<h2 class=ssr>${e(Z)}: сделано ${nd} из ${V.length}</h2>`+
d('shd',d('',ln('calendar',D.kogda)+d('szd'+(Z?'':' sno'),Z?e(Z):'Задача Яна не записана — поле zadacha')+ln('flag',D.cel))+(V.length?d('scn',`<b>${nd}<small>/${V.length}</small></b>`+d('sml','сделано')):''))+
(AC.length>1?d('ser',`шагов «сейчас»: ${AC.length} — оставь один`):'')+
`<div class="spu${V.length>7?' smn':''}" style="--n:${V.length+2}">`+[['da','player-play',D.start],...V.map(v=>[v.s,{da:'check',idet:'circle-dot',stoit:'player-pause'}[v.s],v.n,v.k]),[fin?'da':'','flag',D.finish||'цель']]
.map(([s,i,n,k],j)=>`<div class="su s${s}">${j==pi?'<span class=spn>ты здесь</span>':''}<span class=sk>${i?ic(i):j}</span>${n?d('snm',e(n)):''}${k?d('sml',e(k)):''}</div>`).join('')+'</div>'+
(cu?card(cu):fin?d('scd sda',d('stp',`<span>${ic('circle-check')}блок пройден</span>`)):'')+
sc('circle-check','сделано',nd?d('sls',V.filter(v=>v.s=='da').map(row).join('')):'')+
(fin?'':sc('route','дальше',d('sls sq',V.filter(v=>!v.s).map(row).join('')+d('sr',`<span class=sic>${ic('flag')}</span>`+d('',`<b>${e(D.finish||'цель')}</b>`)+(lk?`<span class=sm>после ${e(lk)}</span>`:'')))))+
sc('git-merge','где лежит работа',tr+(fk?d('sfs',fk):''))+sv+
sc('user-check','за тобой',(D.tebe||[]).map(t=>d('spt',ic('square')+`<span>${e(t)}</span>`)).join('')+ln('list',D.drugie&&'ещё в этом чате: '+D.drugie));
let T=0;
st.onclick=async ev=>{const b=ev.target.closest('[data-t]');if(!b||b.classList.contains('spg')||Date.now()-T<1500)return;T=Date.now();
const t=b.dataset.t,ok=x=>{b.classList.add('sok');b.lastChild.textContent=x;st.querySelectorAll('[data-t]').forEach(y=>y!=b&&y.classList.add('spg'))};
if(window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return ok('Нажато ✓ — проверь поле ввода')}
if(await cp(t))return ok('Скопировано ✓ — вставь в чат (⌘V)');
const r=W.createElement('textarea');r.className='srn';r.readOnly=1;r.value=t;b.after(r);r.select();ok('Выделено — нажми ⌘C')}};
window.Uborka=U=>{
const D=document,c=D.getElementById('ub'),Q=(s,r=c)=>r.querySelector(s),
e=s=>String(s??'').replace(/[&<>"]/g,x=>'&#'+x.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(k,x)=>`<div class="${k}">${x}</div>`,
ln=(i,t,k='')=>d('ub-ln '+k,ic(i)+`<span>${t}</span>`),
bl=(i,t,a,f)=>a?.length?d('ub-bl',d('ub-kp',ic(i)+t)+f(a)):'',
st=(k,a,i,t,x='')=>d('ub-st'+k,`<button id=ub-${i} class=ub-b data-u=${a}>${ic('copy')}<span>${t}</span></button>`+x+d('ub-pod','')),
s=v=>typeof v=='string'&&v.trim(),
M=U.marshrut,ost=s(U.ostanovilis)&&s(U.prodolzhit),ok=s(U.zhurnal)&&ost,ra=ok&&s(U.rano),
T=!ok?'Уборка не закончена — сжимать рано':ra?'Всё разложено — сжимать пока рано':'Уборка перед сжатием — всё разложено',
B={k:['/compact','✓ /compact скопирован — вставь в поле и Enter','«/compact» выделен: нажми ⌘C, потом вставь в поле и Enter.'],
f:[U.prodolzhit,'✓ скопировано — вставь первым сообщением','Фраза выделена: нажми ⌘C, после /compact вставь её первым сообщением.']},
cp=async t=>{try{await Promise.race([navigator.clipboard.writeText(t),new Promise((_,n)=>setTimeout(n,500))]);return 1}catch{}
try{const a=D.createElement('textarea');a.value=t;a.readOnly=1;a.style.cssText='position:absolute;left:-9999px';D.body.append(a);a.select();const k=D.execCommand('copy');a.remove();return k}catch{}};
c.innerHTML=`<style>
#ub,.ub-niz{display:grid;gap:14px;grid-template-columns:minmax(0,1fr)}
#ub{--o:var(--bg-tint-orange);--ot:var(--text-tint-orange);--of:var(--orange-450,var(--text-tint-orange));padding:.25rem 0 .5rem;font-size:13px;line-height:1.45;container-type:inline-size}
#ub *{box-sizing:border-box}
.ub-sr{position:absolute;left:-9999px}
.ub-sh{display:flex;gap:12px;align-items:flex-start;padding:14px 16px;border-radius:12px;background:var(--o);color:var(--ot)}
.ub-sh>i{font-size:24px}
.ub-z{margin-bottom:3px;font-size:19px;font-weight:500;line-height:1.35}
.ub-bl{display:grid;gap:6px}
.ub-kp{display:flex;gap:5px;align-items:center;font-size:12px;color:var(--text-muted)}
.ub-sp{margin:0;padding-left:22px;font-size:14px;line-height:1.5}
.ub-sp li::marker{color:var(--ot);font-weight:500}
.ub-kd,.ub-ost,.ub-ln,.ub-sp,.ub-st{overflow-wrap:anywhere}
.ub-kd{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 14px}
.ub-f{font:12px var(--font-mono);color:var(--text-secondary)}
.ub-pr{display:flex;flex-wrap:wrap;gap:6px}
.ub-pr span{display:inline-flex;gap:4px;align-items:center;padding:4px 9px;border-radius:999px;font-size:12px;background:var(--bg-success);color:var(--text-success)}
.ub-ln{display:flex;gap:8px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--surface-1)}
.ub-ln>i{margin-top:2px}
.ub-ln code{font:12px var(--font-mono)}
.ub-no{background:var(--bg-danger);color:var(--text-danger);font-weight:500}
.ub-ra,.ub-fr{background:var(--o);color:var(--ot)}
.ub-ra{font-weight:500}
.ub-mr{padding:14px;border:.5px solid var(--border-strong);border-radius:12px;background:var(--surface-2)}
.ub-niz{padding-top:14px;border-top:.5px solid var(--border)}
.ub-ost{padding:12px 14px;border:1.5px solid var(--of);border-radius:12px}
.ub-ot{font-size:16px;font-weight:500;line-height:1.4}
.ub-kak{gap:8px;padding:12px;border:.5px solid var(--border-strong);border-radius:12px;background:var(--surface-2)}
.ub-st{display:grid;grid-template-columns:minmax(0,1fr);justify-items:start;gap:6px;padding:8px;border:1.5px solid transparent;border-radius:10px}
.ub-on{border-color:var(--of)}
.ub-fr{width:100%;padding:8px 11px;border-radius:8px;font-size:14px}
.ub-b{display:inline-flex;gap:8px;align-items:center;max-width:100%;height:auto;min-height:40px;padding:7px 16px;border:1.5px solid var(--of);border-radius:8px;background:none;color:var(--ot);font-size:14px;font-weight:500;line-height:1.3;text-align:left;white-space:normal;cursor:pointer}
.ub-on .ub-b{background:var(--of);color:var(--on-accent)}
.ub-b.gotovo{background:var(--fill-success);color:var(--on-success);border-color:transparent}
.ub-b.gotovo i{display:none}
.ub-pod{font-size:12px;color:var(--text-secondary)}
.ub-pod:empty{display:none}
.ub-rn{width:100%;min-height:56px;font-size:14px}
@container (max-width:480px){.ub-kd{grid-template-columns:1fr}}
</style><h2 class=ub-sr>${T}. ${e(U.povod)}</h2>`+
d('ub-sh',ic('archive')+`<div>${d('ub-z',T)}${e(U.povod)}</div>`)+
bl('notes','собрал из чата',U.sobral,a=>`<ol class=ub-sp>${a.map(x=>`<li>${e(x)}</li>`).join('')}</ol>`)+
bl('folder','куда легло',U.kuda,a=>d('ub-kd',a.map(([x,y])=>`<span>${e(x)}</span><span class=ub-f>${e(y)}</span>`).join('')))+
bl('shield-check','проверил машиной',U.proveril,a=>d('ub-pr',a.map(x=>`<span>${ic('check')}${e(x)}</span>`).join('')))+
(s(U.zhurnal)?ln('file-check',`Строка журнала уборок: <code>${e(U.zhurnal)}</code>`):ln('alert-triangle','Строки в журнале уборок нет — значит, уборка не доведена. Не сжимай: спроси «где строка журнала?»','ub-no'))+
d('ub-niz',
(M?.zadacha?d('ub-mr','<div id=mr></div>'):ln('alert-triangle','Маршрута нет — заполни marshrut: задача и вехи из последнего маршрута «где мы»','ub-no'))+
(ost?d('ub-bl ub-ost',d('ub-kp',ic('map-pin')+'где остановились')+d('ub-ot',e(U.ostanovilis)))+d('ub-bl ub-kak',d('ub-kp',ic('list-numbers')+'как сжать')+(ra?ln('clock','Сжимать пока рано: '+e(U.rano),'ub-ra'):ok?st(' ub-on','k','kn','1 · Скопировать /compact'):'')+st('','f','kf','2 · После сжатия — скопировать «с чего продолжить»',d('ub-fr',e(U.prodolzhit)))):ln('alert-triangle','Не написано, где остановились и с чего продолжить — заполни ostanovilis и prodolzhit. Без них сжимать рано','ub-no')));
c.onclick=async v=>{const b=v.target.closest('[data-u]');if(!b||Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const[t,o,m]=B[b.dataset.u],g=b.closest('.ub-st'),h=Q('.ub-pod',g),
fin=(x,y)=>{b.classList.add('gotovo');b.lastChild.textContent=x;h.textContent=y;c.querySelectorAll('.ub-st').forEach(z=>z.classList.toggle('ub-on',!Q('.gotovo',z)))};
if(await cp(t))return fin(o,'');
let r=Q('.ub-rn',g);if(!r){r=D.createElement('textarea');r.className='ub-rn';r.readOnly=1;h.before(r)}
r.value=t;r.focus();r.select();fin('Выделено — нажми ⌘C',m)};
if(M?.zadacha&&window.Marshrut){const m=Q('#mr');Marshrut(M,m);Q('.ot',m)?.remove()}};
