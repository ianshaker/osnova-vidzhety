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
tg=x=>`<button class=tg data-a=m aria-expanded=${x}>${x?'Свернуть':'Весь маршрут'}${ic('chevron-'+(x?'up':'down'))}</button>`,
er=nS>1?d('er',`вех «делаю»: ${nS} — оставь одну`):'',
F=d('zh',(mn?d('ln ct',ic('target')+'<span>задача</span>'+tg(!0)):ln('target','задача'))+d('zd'+zc,zt)+ln('corner-down-right',M.podzadacha&&'подзадача: '+M.podzadacha)+(M.blizko||M.zeleno!=null?d('ln bl',(M.zeleno==null?'':`<span class="zn ${M.zeleno?'da':'no'}">${ic(M.zeleno?'check':'x')}</span>`)+`<span>${e(M.blizko)}</span>`):''))+((M.bylo||[]).length?d('bs',M.bylo.slice(0,2).map(([b,s])=>`<span>было</span><span>${e(b)}</span><span>стало</span><span>${e(s)}</span>`).join('')):'')+er+(V.length?d('pt',`<svg class=sv></svg>`+V.map(nd).join('')):'')+ln('tool',M.seychas&&'сейчас: '+M.seychas),
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
.mc{display:grid;gap:6px;padding:10px 14px;border-radius:12px;background:var(--surface-1);box-shadow:inset 0 0 0 .5px var(--border-strong);line-height:18px}
.mc>*{min-width:0}
.mc span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mt{display:flex;gap:8px;align-items:center;font-size:15px;font-weight:500}
.tg{display:inline-flex;align-items:center;gap:4px;flex:none;height:28px;margin-left:auto;padding:0 8px 0 12px;font-size:12px;border:.5px solid var(--border-accent);border-radius:14px;white-space:nowrap;background:var(--bg-accent);color:var(--text-accent)}
.tg i,.ct i{margin:0;font-size:14px}
.ct{align-items:center}
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
