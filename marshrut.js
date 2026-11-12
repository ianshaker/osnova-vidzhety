window.Marshrut=(M,c)=>{try{
const D=document,mr=c||D.getElementById('mr'),N={},Ls=a=>[].concat(a??[]).filter(x=>x!=null&&x!==''),o=typeof M.otTebya=='string'?{chto:M.otTebya}:M.otTebya||0,Z=M.zadacha,Q=(s,r=mr)=>r.querySelector(s),A=(s,r=mr)=>[...r.querySelectorAll(s)],rc=x=>x.getBoundingClientRect(),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
tk=(v,k='tekst')=>v&&typeof v=='object'?v[k]||'':v,
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
ln=(i,t,c='',n='')=>t?d('ln '+c,ic(i)+`<span${n&&` title="${e(t)}"`}>${e(t)}</span>`):'',
bt=(a,i,t,x,g)=>`<button class="bn${g?' ok':''}" data-a=${a} data-t="${e(x)}">${i?ic(i):''}<span>${e(t)}</span></button>`,
R={sborshchik:'search',ispolnitel:'tool',mekhanik:'rocket',razvedchik:'world',proveryayushchiy:'eye',opus:'brain'},
T={sonnet:['Sonnet','sey'],opus:['Opus','zhdet'],haiku:['Haiku','da']},
CH={idet:['идёт','sey'],got:['готово','da'],zhd:['в очереди','']},
V=Ls(M.vehi??M.shagi).map(v=>v.map?{n:v[0],s:v[1],it:v[2]}:v),BY=Array.isArray(M.bylo)&&typeof M.bylo[0]=='string'?[M.bylo]:Ls(M.bylo),
nS=V.filter(v=>v.s=='sey').length,vs=V.find(v=>v.s=='sey'),sh=Ls(vs?.shagi);
let st=sh.findIndex(x=>x.s!='da');if(st<0)st=sh.length-1;
const vy=(b,t,f)=>{let r=b.r;if(!r){r=b.r=D.createElement('textarea');r.className='rn';r.readOnly=1;r.oncopy=()=>f('Скопировано ✓ — вставь (⌘V)',1);b.after(r)}r.value=t;r.focus();r.select();f('Выделено — нажми ⌘C',1)},
lc=l=>l?.map?l:l?.big?['','',l]:[l?.rol,l?.model,l?.chto||l?.tekst||'',l?.status,l?.resurs],
row=([r,m,t,s,z])=>{const b=T[m],c=CH[s];
return d('l',ic(R[r]||'user')+(b?`<b class="${b[1]}" title="${b[0]}">${b[0][0]}</b>`:'')+`<span>${e(t)}${z?`<small>${ic('lock')}${e(z)}</small>`:''}</span>`+(c?`<small class="${c[1]}">${c[0]}</small>`:''))},
card=()=>{const x=sh[st],K=x?.knopka;
return d('tp',d('tt',e(vs.n)+`<small>${e(x?.n||'делаю')}</small>`)+(sh.length>1?d('pn',sh.map((y,i)=>`<button data-a=s data-i=${i}${i==st?' class=bn':''}>${y.s=='da'?'✓':i+1}</button>`).join('')):''))+
d('sb',ln('flag',vs.it)+(x?(x.opus?row(['opus','opus',x.opus]):'')+(x.lyudi||[]).map(l=>row(l?.map&&l[0]&&!T[l[1]]?['','',l[0]+': '+l[1],l[2],l[3]]:lc(l))).join('')+ln('arrows-split',x.res)+ln('arrow-right',x.dalshe)+(K?bt('k','player-play',N[st]||tk(K)||'Делай',tk(K,'prompt')||tk(K)||'делай',N[st]):''):''))},
nd=(v,i)=>{const c=`<b class="c ${v==vs?'sey':''}">${ic({da:'check',sey:'circle-dot',zhdet:'hand-stop'}[v.s]||(i==V.length-1?'flag':''))}</b>`;
return v==vs?d('u w',c+d('cd',card())):d('u '+(v.s||''),c+d('pl',d('h',e(v.n))+d('x',e(v.it))))},
dl=ln('arrow-right',M.dalshe),C=tk(o.zapustit),P=tk(o.kopirovat),KD=o.kuda||o.kopirovat?.kuda,KB=Ls(o.knopki||o.knopka),SM=String(o.smotri??'').trim(),NC=/^нечего/i.test(SM),
sw=SM?d('ln sw'+(NC?' nc':''),ic('eye')+`<span>${NC?e(SM.replace(/^нечего(\s+смотреть)?/i,'смотреть нечего')):`<b>Смотри:</b> ${e(SM)}`}</span>`):KB.length?d('er','не сказано, что смотреть: где на странице и было → стало (поле smotri)'):'',
ot=o?d('ot',ln('user','от тебя')+sw+d('ch',e(o.chto||o.tekst||o.vopros))+(C?d('kop',d('km',e(C))+bt('run','player-play','Запустить','запускай: '+C)):'')+
(P?/^\s*(\.?\/|~\/|(sh|bash|zsh|npm|npx|node|python3?|git|gh|cd|brew|curl|make|open|cp|mv|rm)\s)/.test(P)?d('er','Это команда: её кладут в zapustit, не в kopirovat'):d('kop',d('fr',e(P))+bt('kop','corner-down-left','В поле ввода',P)+ln('arrow-right',KD&&(/этот чат/i.test(KD)?'встанет в поле ввода — отправь Enter':'встанет в поле ввода; '+KD+' — здесь ⌘A ⌘X, там ⌘V'))):'')+KB.map(k=>tk(k)?bt('kn','',tk(k),k.prompt||!KB[1]&&o.prompt||tk(k)):d('er','knopka без надписи')).join('')+dl):d('ot da',d('ch',ic('circle-check')+' От тебя ничего')+dl);
const PY=M.priyomka,PV=[['rabotaet','Работает'],['nravitsya','Нравится'],['slaboe','Слабое место'],['kostyl','Не костыль'],['vezde','Везде'],['ne_proveril','Не проверял']].map(([k,t])=>[k,t,String(PY?.[k]??'').trim()]),PM=PV.slice(0,5).filter(x=>!x[2]).map(x=>x[1]).join(', '),
pk=PY?d('pk',ln('clipboard-check','Моя приёмка')+PV.filter(x=>x[2]).map(([k,t,v])=>d('pq'+(k=='slaboe'?' sl':''),`<b>${t}</b><span>${e(v)}</span>`)).join('')+(PM?d('er','в приёмке нет: '+PM):'')):SM&&!NC?d('er','нет приёмки: что сам проверил, нравится ли, слабое место, не костыль, везде (поле priyomka)'):'';
const mn=M.mini,zc=Z?'':' no',zt=Z?e(Z):'Задача Яна не записана — поле zadacha',
tg=x=>`<button class=tg data-a=m aria-expanded=${x}>${x?'Свернуть':'Весь маршрут'}${ic('chevron-'+(x?'up':'down'))}</button>`,
er=nS>1?d('er',`вех «делаю»: ${nS} — оставь одну`):'',
F=d('zh',ln('target','задача')+d('zd'+zc,zt)+ln('corner-down-right',M.podzadacha&&'подзадача: '+M.podzadacha)+(M.blizko||M.zeleno!=null?d('ln bl',(M.zeleno==null?'':`<span class="zn ${M.zeleno?'da':'no'}">${ic(M.zeleno?'check':'x')}</span>`)+`<span>${e(M.blizko)}</span>`):''))+(BY.length?d('bs',BY.slice(0,2).map(([b,s])=>`<span>было</span><span>${e(b)}</span><span>стало</span><span>${e(s)}</span>`).join('')):'')+er+(V.length?d('pt',`<svg class=sv></svg>`+V.map(nd).join('')):'')+ln('tool',M.seychas&&'сейчас: '+M.seychas),
ci=vs?V.indexOf(vs):V.findIndex(v=>v.s=='zhdet'),cu=V[ci],nz=V.filter(v=>v.s=='da').length,fin=V.length>0&&nz==V.length,cn=ci<0?V.findIndex(v=>!v.s):ci,
pd=V.findLastIndex((v,i)=>v.s=='da'&&i<(cn<0?V.length:cn)),nx=V.findIndex((v,i)=>!v.s&&i>cn),r=V.findIndex(v=>v.s!='da'),fa=(r<0?V.length:r)-1,
gm=w=>{const f=w&&fa>1&&w/(V.length+2)<26?fa:0,s=f&&f-1,c=w?w/(V.length+2-s):99,h=(ci+1-s+.5)*c;
return[f,c<24?Math.max(5,Math.min(14,~~(c-6))):Math.min(24,~~(c-8)),Math.ceil(19/c),ci<0||!w?0:h<22?~~(22-h):w-h<32?~~(w-h-32):0,c]},
sk=w=>{const[f,z,m,x,c]=gm(w),lb=k=>k==ci+1||k%m==0&&Math.abs(k-ci-1)>=m,U=[['da','player-play','','старт'],...f?[['da','check','1–'+f,V.slice(0,f).map(v=>v.n).join('\n')]]:[],...V.slice(f).map((v,i)=>[e(v.s),{da:'check',sey:'circle-dot',zhdet:'player-pause'}[v.s],lb(i+f+1)?i+f+1:'',v.n,i+f==ci]),[fin?'da':'','flag','','цель']];
return`<div class="qs${ci<0?' np':''}${z<16?' sm':''}" data-k=${[f,z,m,x]} style="--n:${U.length};--z:${z}px;--g:${z<16?1:2}px">`+U.map(([s,i,n,t,p])=>`<div class="qu ${s}" title="${e(t)}">${p?`<div class=qp${x?` style="left:calc(50% + ${x}px)"`:''}>ты здесь</div>`:''}${d('c',i?ic(i):'')}${d('qm',n)}</div>`).join('')+'</div>'},
tl=(c,i,t,n,x)=>d('qt '+c,`<small>${ic(i)}${t}</small>`+(n?`<b>${e(n)}</b>`:'')+(x?d('qx',e(x)):'')),
pl=M.puls&&d('mc pu',d('mt',ic('activity')+`<span${zc&&' class=no'} title="${e(Z)}">${zt}</span>`)+ln('corner-down-right',M.podzadacha)+(M.lyudi||[]).map(l=>row(lc(l))).join('')+(M.prosnus?ln('alarm','проснусь сам в '+M.prosnus):d('er','пульс без будильника — prosnus: ЧЧ:ММ'))),
mc=mn&&d('mc',d('mt',ic('target')+`<span${zc&&' class=no'} title="${Z?e(Z):zt}">${zt}</span>`+(V.length?`<b class=mn>${nz}<small>/${V.length}</small></b>`:''))+(V.length?sk((mr.clientWidth||28)-28)+er+d('q3',fin?tl('da','circle-check',`готово: все ${nz} частей`):(pd<0?tl('','check','пока ничего не сделано'):tl('da','check','сделано · '+(pd+1),V[pd].n,V[pd].it))+
(cu?cu.s=='sey'?tl('sey','circle-dot','сейчас · '+(ci+1),cu.n,sh.length?`шаг ${st+1} из ${sh.length}${sh[st].n?' — '+sh[st].n:''}`:M.seychas||cu.it):tl('zhdet','player-pause','ждёт тебя · '+(ci+1),cu.n,cu.it):cn<0?'':tl('','arrow-right','дальше · '+(cn+1),V[cn].n))+
(nx<0?tl('','arrow-right','дальше · цель'):tl('','arrow-right','дальше · '+(nx+1),V[nx].n,V.length-nx-1?`потом ещё ${V.length-nx-1} и цель`:'потом цель'))):'')+tg(!1)),
MS=`
.mc{grid-template-columns:minmax(0,1fr) auto;gap:10px 8px;padding:12px 14px;line-height:1.35}
.qs,.q3,.mc>.er{grid-column:1/-1}
.mc>.tg{grid-area:1/2}
.mc .mt{font-size:14px}
.mc .mt i{font-size:16px;color:var(--text-secondary)}
.mc .no{white-space:normal}
.mn{flex:none;font-size:15px}
.mn small{font-size:12px;font-weight:400;color:var(--text-secondary)}
.qs{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));padding-top:20px}
.qu{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px}
.qs.np{padding-top:0}
.qu::after{content:"";position:absolute;top:calc(var(--z)/2 - .75px);left:calc(50% + var(--z)/2 + var(--g));right:calc(-50% + var(--z)/2 + var(--g));border-top:1.5px dashed var(--border-strong)}
.qu.da::after{top:calc(var(--z)/2 - 1px);border-top:2px solid var(--text-success)}
.qu:last-child::after{display:none}
.mc .c{width:var(--z);height:var(--z);overflow:hidden;font-size:calc(var(--z)*.55)}
.qs.sm .c i{display:none}
.qs.sm .c{border-style:solid}
.qs.sm .da .c,.qs.sm .sey .c,.qs.sm .zhdet .c{background:var(--c);border-color:var(--c)}
.qu.sey .c,.qu.zhdet .c{border-width:2px;outline:3px solid var(--b)}
.qm{font-size:11px;font-weight:400;line-height:14px;white-space:nowrap;color:var(--text-muted)}
.qu.sey .qm,.qu.zhdet .qm{font-weight:500;color:var(--c)}
.qp{position:absolute;top:-20px;left:50%;transform:translateX(-50%);padding:0 7px;border-radius:999px;white-space:nowrap;font-size:11px;line-height:16px;background:var(--b);color:var(--c);border:.5px solid var(--r)}
.q3{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr) minmax(0,1fr);gap:8px}
.qt{display:grid;gap:2px;align-content:start;min-width:0;padding:8px 10px;border-radius:10px;overflow-wrap:anywhere;border:.5px var(--d,dashed) var(--r,var(--border-strong));background:var(--b,none);color:var(--c,var(--text-secondary))}
.qt:only-child{grid-column:1/-1}
.qt.sey,.qt.zhdet{border-width:1.5px}
.qt:only-child small{font-size:13px;font-weight:500}
.qt small{display:flex;align-items:center;gap:4px;font-size:11px;white-space:nowrap}
.qt b,.qx{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}
.qt b{font-weight:500;color:var(--c,var(--text-primary))}
.qx{font-size:12px;-webkit-line-clamp:1}
.sey>.qx,.zhdet>.qx{-webkit-line-clamp:2}
@media(max-width:520px){
.mc{grid-template-columns:minmax(0,1fr)}
.mc>.tg{grid-area:auto/1/auto/-1;justify-self:end}
.q3{grid-template-columns:minmax(0,1fr)}
.qt:not(.sey):not(.zhdet){display:flex;align-items:center;gap:8px;padding:6px 10px}
.qt:not(.sey):not(.zhdet)>.qx{display:none}
.qt:not(.sey):not(.zhdet)>b{-webkit-line-clamp:1}
}`;
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
.u{position:relative;z-index:1;display:grid;grid-template:subgrid/minmax(0,1fr);row-gap:7px;justify-items:center;min-width:0}
.c{width:30px;height:30px;font-size:15px;border:1.5px var(--d,dashed) var(--r,var(--border-strong))}
.pl{grid-row:2/span 2;width:100%;padding:7px 9px;display:grid;grid-template:subgrid/minmax(0,1fr);border:1px var(--d,dashed) var(--r,var(--border-strong));border-radius:8px;background:var(--b,none);color:var(--c,var(--text-muted))}
.h,.x{min-width:0;overflow-wrap:break-word}
.h{font-weight:500;line-height:18px}
.x{margin-top:3px;font-size:12px;line-height:17px}
.x:empty{display:none}
.pn button,.tg{cursor:pointer;height:20px;padding:0 8px;line-height:1;font-size:11px;border-radius:10px}
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
.sw{font-size:14px;color:var(--text-primary)}
.sw i{margin-top:1px;font-size:16px;color:var(--text-accent)}
.sw b{font-weight:500;color:var(--text-accent)}
.sw.nc,.sw.nc i{color:var(--text-muted)}
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
.pu .ln span{white-space:normal}
.pu .mt i{color:var(--text-accent)}
.pu .l{background:var(--surface-2)}
.mt{display:flex;gap:8px;align-items:center;font-size:15px;font-weight:500}
.tg{display:inline-flex;align-items:center;gap:4px;flex:none;height:28px;margin-left:auto;padding:0 8px 0 12px;font-size:12px;border:.5px solid var(--border-accent);border-radius:14px;white-space:nowrap;background:var(--bg-accent);color:var(--text-accent)}
.tg i{margin:0;font-size:14px}
.bx{align-items:center}
.bx i{margin:0}
.sg .tg{margin-left:8px}
.sg{display:flex;gap:3px}
.sg>i{flex:1;height:6px;border-radius:3px;background:var(--c,var(--border-strong))}
.sg .sey{flex:2}
.ln.sey{color:var(--text-accent)}
.pk{display:grid;gap:4px;padding:2px 0 2px 12px;border-left:2px solid var(--border-strong);container-type:inline-size}
.pk>.ln{font-weight:500}
.pq{display:grid;grid-template-columns:112px minmax(0,1fr);gap:0 10px}
.pq b{font-weight:400;color:var(--text-muted)}
.pq.sl b{color:var(--text-warning)}
.pq span{overflow-wrap:anywhere}
@container (max-width:380px){.pq{grid-template-columns:minmax(0,1fr)}.pq+.pq{margin-top:3px}}
.fv{display:none;gap:20px}
.mo .fv{display:grid}
.mo .mc{display:none}${mn&&!M.puls?MS:''}
</style>`+(pl?pl+pk+(o?ot:''):mn?mc+(o?d('fv',F)+pk+ot:pk?d('fv',F)+pk+d('fv',ot):d('fv',F+ot))+d('fv',tg(!0)):F+pk+ot);
const qy=()=>{const s=Q('.qs'),w=s?.clientWidth;if(w&&gm(w).slice(0,4)+''!=s.dataset.k)s.outerHTML=sk(w)},
lay=()=>{qy();const box=Q('.pt');if(!box||!box.clientWidth)return;
const U=A('.u',box),k=Math.min(3,U.length,~~((box.clientWidth-28)/150)||1);
box.style.setProperty('--k',k);
let r=1,c=0,f=1;
U.forEach(u=>{const w=u.classList.contains('w');if(w&&c){r++;c=0;f=!f}
u.style.gridRow=r*3-2+'/span 3';u.style.gridColumn=w?'1/-1':f?c+1:k-c;if(w)u.style.flexDirection=f?'row':'row-reverse';u.f=f;
if(w){r++;c=0}else if(++c==k){r++;c=0;f=!f}});
const br=rc(box),P=U.map(u=>{const b=rc(Q('.c',u));return[b.left+b.width/2-br.left,b.top+b.height/2-br.top]});
Q('.sv').outerHTML=`<svg class=sv style="width:${br.width}px;height:${br.height}px">${P.slice(1).map(([X,Y],j)=>{const[x,y]=P[j],v=!U[j+1].f,E=v?br.width-7:7,s=v?1:-1;
return`<path class="${V[j].s=='da'?'sp':''}" d="M${x} ${y}${Math.abs(y-Y)<2?'':`H${E-s*10}Q${E} ${y} ${E} ${y+10}V${Y-10}Q${E} ${Y} ${E-s*10} ${Y}`}H${X}"/>`}).join('')}</svg>`};
mr.onclick=async ev=>{const b=ev.target.closest('[data-a]'),a=b?.dataset.a;if(!a)return;
if(a=='m'){const x=mr.classList.toggle('mo');lay();Q(x?'.fv .tg':'.mc .tg').focus({preventScroll:1});return}
if(a=='s'){st=+b.dataset.i;const c=Q('.cd');c.innerHTML=card();lay();Q(`[data-i="${st}"]`,c).focus();return}
if(Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const t=b.dataset.t,fin=(x,v)=>{b.classList.add('ok');b.lastChild.textContent=x;if(a=='k'&&!v)N[st]=x};
if(window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return fin('Нажато ✓ — не дошло? Нажми ещё раз')}
vy(b,t,fin)};
lay();D.fonts?.ready.then(lay);const ro=window.ResizeObserver&&new ResizeObserver(lay);A('.pt,.mc').forEach(x=>ro?.observe(x));Marshrut.lay=lay}catch(x){const m=c||document.getElementById('mr');if(m)m.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет маршрута не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «виджет не нарисовался» — он перерисует.</p>'}};
