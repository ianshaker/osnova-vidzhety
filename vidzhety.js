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
PO=/^\s*(по[\s-]+ходу|попутно|заодно)(\s+-|\s*[:：—–―])\s*/i,
V=Ls(M.vehi??M.shagi).map(v=>{v=v.map?{n:v[0],s:v[1],it:v[2],pr:v[3]}:v;return PO.test(v.n)||v.po?{...v,po:1,n:String(v.n??'').replace(PO,''),pr:v.s=='da'&&v.pr&&/^(string|number)$/.test(typeof v.pr)?String(v.pr).trim():''}:v}),BY=Array.isArray(M.bylo)&&typeof M.bylo[0]=='string'?[M.bylo]:Ls(M.bylo),
PH=V.filter(v=>v.po),PE=PH.filter(v=>!v.pr),NL=(a=>V.map(v=>v.po?'+'+ ++a[1]:''+ ++a[0]))([0,0]),PI=d('po',ic('corner-down-right')+'по ходу'),
nS=V.filter(v=>v.s=='sey').length,vs=V.find(v=>v.s=='sey'),sh=Ls(vs?.shagi);
let st=sh.findIndex(x=>x.s!='da');if(st<0)st=sh.length-1;
const vy=(b,t,f)=>{let r=b.r;if(!r){r=b.r=D.createElement('textarea');r.className='rn';r.readOnly=1;r.oncopy=()=>f('Скопировано ✓ — вставь (⌘V)',1);b.after(r)}r.value=t;r.focus();r.select();f('Выделено — нажми ⌘C',1)},
lc=l=>l?.map?l:l?.big?['','',l]:[l?.rol,l?.model,l?.chto||l?.tekst||'',l?.status,l?.resurs],
row=([r,m,t,s,z])=>{const b=T[m],c=CH[s];
return d('l',ic(R[r]||'user')+(b?`<b class="${b[1]}" title="${b[0]}">${b[0][0]}</b>`:'')+`<span>${e(t)}${z?`<small>${ic('lock')}${e(z)}</small>`:''}</span>`+(c?`<small class="${c[1]}">${c[0]}</small>`:''))},
card=()=>{const x=sh[st],K=x?.knopka;
return d('tp',d('tt',(vs.po?PI:'')+e(vs.n)+`<small>${e(x?.n||'делаю')}</small>`)+(sh.length>1?d('pn',sh.map((y,i)=>`<button data-a=s data-i=${i}${i==st?' class=bn':''}>${y.s=='da'?'✓':i+1}</button>`).join('')):''))+
d('sb',ln('flag',vs.it)+(x?(x.opus?row(['opus','opus',x.opus]):'')+(x.lyudi||[]).map(l=>row(l?.map&&l[0]&&!T[l[1]]?['','',l[0]+': '+l[1],l[2],l[3]]:lc(l))).join('')+ln('arrows-split',x.res)+ln('arrow-right',x.dalshe)+(K?bt('k','player-play',N[st]||tk(K)||'Делай',tk(K,'prompt')||tk(K)||'делай',N[st]):''):''))},
nd=(v,i)=>{const c=`<b class="c ${v==vs?'sey':''}">${ic({da:'check',sey:'circle-dot',zhdet:'hand-stop'}[v.s]||(i==V.length-1?'flag':''))}</b>`;
return v==vs?d('u w',c+d('cd',card())):d('u '+(v.s||''),c+d('pl',d('h',(v.po?PI:'')+e(v.n))+d('x',e(v.it)+(v.po?v.pr?d('pr da',ic('circle-check')+`<span title="${e(v.pr)}">проверено: ${e(v.pr)}</span>`):v.s=='da'?d('pr zhdet',ic('clipboard-list')+'<span>в проверку</span>'):'':''))))},
dl=ln('arrow-right',M.dalshe),C=tk(o.zapustit),P=tk(o.kopirovat),KD=o.kuda||o.kopirovat?.kuda,KB=Ls(o.knopki||o.knopka),SM=String(o.smotri??'').trim(),NC=/^нечего/i.test(SM),
sw=SM?d('ln sw'+(NC?' nc':''),ic('eye')+`<span>${NC?e(SM.replace(/^нечего(\s+смотреть)?/i,'смотреть нечего')):`<b>Смотри:</b> ${e(SM)}`}</span>`):KB.length?d('er','не сказано, что смотреть: где на странице и было → стало (поле smotri)'):'',
ot=o?d('ot',ln('user','от тебя')+sw+d('ch',e(o.chto||o.tekst||o.vopros))+(C?d('kop',d('km',e(C))+bt('run','player-play','Запустить','запускай: '+C)):'')+
(P?/^\s*(\.?\/|~\/|(sh|bash|zsh|npm|npx|node|python3?|git|gh|cd|brew|curl|make|open|cp|mv|rm)\s)/.test(P)?d('er','Это команда: её кладут в zapustit, не в kopirovat'):d('kop',d('fr',e(P))+bt('kop','corner-down-left','В поле ввода',P)+ln('arrow-right',KD&&(/этот чат/i.test(KD)?'встанет в поле ввода — отправь Enter':'встанет в поле ввода; '+KD+' — здесь ⌘A ⌘X, там ⌘V'))):'')+KB.map(k=>tk(k)?bt('kn','',tk(k),k.prompt||!KB[1]&&o.prompt||tk(k)):d('er','knopka без надписи')).join('')+dl):d('ot da',d('ch',ic('circle-check')+' От тебя ничего')+dl);
const PY=M.priyomka,PV=[['rabotaet','Работает'],['nravitsya','Нравится'],['slaboe','Слабое место'],['kostyl','Не костыль'],['vezde','Везде'],['ne_proveril','Не проверял']].map(([k,t])=>[k,t,String(PY?.[k]??'').trim()]),PM=PV.slice(0,5).filter(x=>!x[2]).map(x=>x[1]).join(', '),
pk=PY?d('pk',ln('clipboard-check','Моя приёмка')+PV.filter(x=>x[2]).map(([k,t,v])=>d('pq'+(k=='slaboe'?' sl':''),`<b>${t}</b><span>${e(v)}</span>`)).join('')+(PM?d('er','в приёмке нет: '+PM):'')):SM&&!NC?d('er','нет приёмки: что сам проверил, нравится ли, слабое место, не костыль, везде (поле priyomka)'):'';
const mn=M.mini,zc=Z?'':' no',zt=Z?e(Z):'Задача Яна не записана — поле zadacha',
tg=x=>`<button class=tg data-a=m aria-expanded=${x}>${x?'Свернуть':'Весь маршрут'}${ic('chevron-'+(x?'up':'down'))}</button>`,
ec=PE.length&&(V.every(v=>v.s=='da')||V.some(v=>!v.po&&v.s=='da'&&/^\s*проверено/i.test(v.n))),
er=(nS>1?d('er',`вех «делаю»: ${nS} — оставь одну`):'')+(ec?d('er','по ходу не проверено: '+PE.map(v=>`«${e(v.n)}»`).join(', ')+' — проверь и впиши, чем проверено (pr)'):''),
F=d('zh',ln('target','задача')+d('zd'+zc,zt)+ln('corner-down-right',M.podzadacha&&'подзадача: '+M.podzadacha)+(M.blizko||M.zeleno!=null?d('ln bl',(M.zeleno==null?'':`<span class="zn ${M.zeleno?'da':'no'}">${ic(M.zeleno?'check':'x')}</span>`)+`<span>${e(M.blizko)}</span>`):'')+(PH.length?ln('clipboard-list',`в проверку: ${V.length-PH.length} по плану · ${PH.length} по ходу, проверено ${PH.length-PE.length}`):''))+(BY.length?d('bs',BY.slice(0,2).map(([b,s])=>`<span>было</span><span>${e(b)}</span><span>стало</span><span>${e(s)}</span>`).join('')):'')+er+(V.length?d('pt',`<svg class=sv></svg>`+V.map(nd).join('')):'')+ln('tool',M.seychas&&'сейчас: '+M.seychas),
ci=vs?V.indexOf(vs):V.findIndex(v=>v.s=='zhdet'),cu=V[ci],nz=V.filter(v=>v.s=='da').length,fin=V.length>0&&nz==V.length,cn=ci<0?V.findIndex(v=>!v.s):ci,
pd=V.findLastIndex((v,i)=>v.s=='da'&&i<(cn<0?V.length:cn)),nx=V.findIndex((v,i)=>!v.s&&i>cn),r=V.findIndex(v=>v.s!='da'),fa=(r<0?V.length:r)-1,
gm=w=>{const f=w&&fa>1&&w/(V.length+2)<26?fa:0,s=f&&f-1,c=w?w/(V.length+2-s):99,h=(ci+1-s+.5)*c;
return[f,c<24?Math.max(5,Math.min(14,~~(c-6))):Math.min(24,~~(c-8)),Math.ceil(19/c),ci<0||!w?0:h<22?~~(22-h):w-h<32?~~(w-h-32):0,c]},
sk=w=>{const[f,z,m,x,c]=gm(w),kp=V.slice(0,f).filter(v=>v.po).length,lp=f-kp,lb=k=>k==ci+1||k%m==0&&Math.abs(k-ci-1)>=m,U=[['da','player-play','','старт'],...f?[['da','check',(lp?lp>1?'1–'+lp:'1':'')+(kp?(lp?'<br>+':'+1–+')+kp:''),V.slice(0,f).map(v=>(v.po?'по ходу: ':'')+v.n).join('\n')]]:[],...V.slice(f).map((v,i)=>[e(v.s),{da:'check',sey:'circle-dot',zhdet:'player-pause'}[v.s],lb(i+f+1)?NL[i+f]:'',(v.po?'по ходу: ':'')+v.n,i+f==ci,v.po]),[fin?'da':'','flag','','цель']];
return`<div class="qs${ci<0?' np':''}${z<16?' sm':''}" data-k=${[f,z,m,x]} style="--n:${U.length};--z:${z}px;--g:${z<16?1:2}px">`+U.map(([s,i,n,t,p,q])=>`<div class="qu ${s}${q?' p':''}" title="${e(t)}">${p?`<div class=qp${x?` style="left:calc(50% + ${x}px)"`:''}>ты здесь</div>`:''}${d('c',i?ic(i):'')}${d('qm',n)}</div>`).join('')+'</div>'},
tl=(c,i,t,n,x)=>d('qt '+c,`<small>${ic(i)}${t}</small>`+(n?`<b>${e(n)}</b>`:'')+(x?d('qx',e(x)):'')),
pl=M.puls&&d('mc pu',d('mt',ic('activity')+`<span${zc&&' class=no'} title="${e(Z)}">${zt}</span>`)+ln('corner-down-right',M.podzadacha)+(M.lyudi||[]).map(l=>row(lc(l))).join('')+(M.prosnus?ln('alarm','проснусь сам в '+M.prosnus):d('er','пульс без будильника — prosnus: ЧЧ:ММ'))),
PJ=ec?PE:PH.filter(v=>v.s=='da'&&!v.pr),mc=mn&&d('mc',d('mt',ic('target')+`<span${zc&&' class=no'} title="${Z?e(Z):zt}">${zt}</span>`+(V.length?`<b class=mn>${nz}<small>/${V.length}</small></b>`:'')+(PH.length?d('po',ic('corner-down-right')+`по ходу ${PH.length}`+(PJ.length?` · в проверку ${PJ.length}`:'')):''))+(V.length?sk((mr.clientWidth||28)-28)+er+d('q3',fin?tl('da','circle-check',`готово: все ${nz} частей`):(pd<0?tl('','check','пока ничего не сделано'):tl('da','check','сделано · '+NL[pd],V[pd].n,V[pd].it))+
(cu?cu.s=='sey'?tl('sey','circle-dot','сейчас · '+NL[ci],cu.n,sh.length?`шаг ${st+1} из ${sh.length}${sh[st].n?' — '+sh[st].n:''}`:M.seychas||cu.it):tl('zhdet','player-pause','ждёт тебя · '+NL[ci],cu.n,cu.it):cn<0?'':tl('','arrow-right','дальше · '+NL[cn],V[cn].n))+
(nx<0?tl('','arrow-right','дальше · цель'):tl('','arrow-right','дальше · '+NL[nx],V[nx].n,V.length-nx-1?`потом ещё ${V.length-nx-1} и цель`:'потом цель'))):'')+tg(!1)),
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
}`,
PS=`
.po{display:flex;flex:none;align-items:center;gap:3px;width:max-content;padding:0 7px;border-radius:999px;font-size:11px;font-weight:400;line-height:16px;background:var(--surface-2);color:var(--text-secondary);border:.5px solid var(--border-strong)}
.po i{margin:0;font-size:12px}
.h>.po,.tt>.po{margin-bottom:4px}
.pr{display:flex;gap:5px;margin-top:5px;padding:3px 7px;border-radius:6px;background:var(--surface-2);color:var(--c)}
.pr.zhdet{background:var(--b)}
.pr i{flex:none;margin-top:2px}
.qu.p .c{border-radius:min(7px,calc(var(--z)*.3))}
.mc:not(.pu) .mt>span{white-space:normal}
.pr span{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}
@media(max-width:520px){.mt{flex-wrap:wrap;row-gap:4px}.mt>span{flex-basis:60%}.mt>.po{margin-left:24px}}`;
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
.mo .mc{display:none}${mn&&!M.puls?MS:''}${PH.length?PS:''}
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
window.Vybor=V=>{try{
const D=document,vb=D.getElementById('vb'),Q=s=>vb.querySelector(s),A=s=>[...vb.querySelectorAll(s)],Ls=a=>[].concat(a??[]).filter(x=>x!=null&&x!==''),Vs=Ls(V.voprosy).map(v=>({...v,varianty:Ls(v.varianty)})),S=Vs.map(()=>[]),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x,a='')=>`<div class="${c}"${a}>${x}</div>`,
bt=(c,i,t)=>`<button type="button" class="${c}" id="${c}">${ic(i)}<span>${t}</span></button>`,
no=i=>Vs[i].no??i+1,
SM=String(V.smotri??'').trim(),NC=/^нечего/i.test(SM),
sw=SM?d('vb-sw'+(NC?' vb-nc':''),ic('eye')+`<span>${NC?e(SM.replace(/^нечего(\s+смотреть)?/i,'смотреть нечего')):`<b>Смотри:</b> ${e(SM)}`}</span>`):d('vb-er','не сказано, что смотреть: где на странице и было → стало (поле smotri)'),
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
.vb-sw{display:flex;gap:6px;font-size:14px;line-height:1.4;color:var(--text-primary)}
.vb-sw i{margin-top:1px;font-size:16px;color:var(--text-accent)}
.vb-sw b{font-weight:500;color:var(--text-accent)}
.vb-sw.vb-nc,.vb-sw.vb-nc i{color:var(--text-muted)}
.vb-er{padding:10px 12px;border-radius:var(--radius,8px);background:var(--bg-danger);color:var(--text-danger);font-weight:500}
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
d('vb-zag',ic('list-check')+`<span>${e(V.zag)}</span>`)+sw+Vs.map(vp).join('')+
((V.reshilSam||[]).length?d('vb-sam',ic('bulb')+`<span>Решил сам: ${V.reshilSam.map(e).join(' · ')}</span>`):'')+
d('vb-otv',d('vb-chipy','',' id="vb-chipy" aria-live="polite"')+
`<textarea class="vb-pole" id="vb-pole" rows="1" aria-label="Строка ответа — можно править и копировать"></textarea>`+
d('vb-ryad',bt('vb-otp','send','Отправить')+(window.sendPrompt?'':bt('vb-kop','copy','Скопировать'))+(Vs.some(v=>v.varianty.some(x=>x.sovet))?bt('vb-vse','checks','Все — как советую'):'')+bt('vb-zanovo','refresh','Собрать строку заново'))+
d('vb-osh','',' id="vb-osh" role="alert"')+d('vb-pod',ic('arrow-right')+`<span>${e(V.chtoBudet)}</span>`,' id="vb-pod"'));
const pole=Q('#vb-pole'),osh=Q('#vb-osh'),zan=Q('#vb-zanovo'),pod=t=>Q('#vb-pod span').textContent=t,
fin=(b,t)=>{b.classList.add('gotovo');b.lastChild.textContent=t},
vys=()=>{pole.style.height='auto';pole.style.height=pole.scrollHeight+'px'},
vy=b=>{pole.focus();pole.select();fin(b,'Выделено — нажми ⌘C');pod('Строка выделена — нажми ⌘C, потом ⌘V в поле ввода чата и Enter.')},
sbros=()=>{osh.textContent='';[['otp','Отправить'],['kop','Скопировать']].forEach(([k,t])=>{const b=Q('#vb-'+k);if(b){b.classList.remove('gotovo');b.lastChild.textContent=t}});pod(V.chtoBudet??'')};
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
else if(c=='vb-kop')vy(b)
else if(c=='vb-otp'){const t=pole.value.trim();
if(!t||!otvet()&&t==P0){osh.textContent='Выбери хотя бы один ответ — или впиши свой в поле.';return}
if(Date.now()-ps<1500)return;ps=Date.now();
if(window.sendPrompt){setTimeout(()=>window.sendPrompt(t),300);fin(b,'Нажато ✓ — не дошло? Нажми ещё раз');
const n=!pv&&otvet()?bez().length:0;
pod(`В поле ввода должно встать «${t}» — нажми Enter.`+(n?` Без ответа ${n} — они подождут.`:'')+' Не встало — нажми «Отправить» ещё раз.')}
else vy(b)}};
pole.oncopy=()=>{const k=Q('#vb-kop');k&&fin(k,'Скопировано ✓');pod('Скопировано — вставь в поле ввода чата (⌘V) и нажми Enter.')};
pole.oninput=()=>{pv=pole.value.trim()!=sobrat();zan.style.display=pv?'inline-flex':'none';sbros();vys()};
window.ResizeObserver&&new ResizeObserver(([z])=>{const w=Math.round(z.contentRect.width);if(w!=w0){w0=w;requestAnimationFrame(vys)}}).observe(vb);
pokazat()}catch(x){const c=document.getElementById('vb');if(c)c.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет выбора не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «виджет не нарисовался» — он перерисует.</p>'}};
window.Otvet=D=>{try{
const dc=document,ot=dc.getElementById('ot'),Ls=a=>[].concat(a??[]).filter(x=>x!=null&&x!==''),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=(n,c='')=>`<i class="ti ti-${e(n)} ${c}" aria-hidden="true"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
cl=n=>n==4?2:Math.min(n,3)||1,
ln=(i,t,c='')=>t?d('o-ln o-sl '+c,ic(i)+`<span>${e(t)}</span>`):'',
bt=(t,p,c='')=>`<div class="o-bw"><button class="o-b ${c}" data-a=b data-t="${e(p||t)}">${ic('player-play')}<span>${e(t)}</span></button></div>`,
TN={krasnyj:'rd',zhyoltyj:'yl',zelenyj:'gr',sinij:'bl'},tn=t=>TN[t]?'o-'+TN[t]:'',
MD={opus:['Opus','yl'],sonnet:['Sonnet','bl'],haiku:['Haiku','gr']},
ZT={beda:['rd','alert-triangle'],da:['gr','check'],vopros:['bl','bulb']},
nm=s=>+(String(s).replace(/\s/g,'').replace(',','.').replace('−','-').match(/-?\d+\.?\d*/)||NaN),
vy=(b,t,f)=>{let r=b.r;if(!r){r=b.r=dc.createElement('textarea');r.className='o-rn';r.readOnly=1;r.oncopy=()=>f('Скопировано ✓ — вставь в чат (⌘V)');b.after(r)}r.value=t;r.focus();r.select();f('Выделено — нажми ⌘C')},
nz=q=>/^[A-ZА-ЯЁ0-9]/.test(q)&&/[A-Za-zА-Яа-яЁё]/.test(q)&&!/[.!?…]$/.test(q)&&q.split(' ').length<5,
tx=s=>String(s??'').split(/(«[^«»\n]{1,28}»)/).map((p,k)=>k%2&&nz(p.slice(1,-1))?`<span class="o-im">${e(p.slice(1,-1))}</span>`:e(p)).join(''),
sx=h=>{if(h==null||h===''||h===false)return'';let x;const mc=(l,t,g)=>d('o-mc'+(g?' o-mg':''),`<span class="o-ml">${e(l)}</span>`+tx(t));
if(typeof h!='object'||Array.isArray(h)){const S=Ls(h);if(!S.length)return'';x=d('o-pt',S.map(v=>`<span class="o-pc">${tx(v)}</span>`).join(ic('arrow-right','o-pa')))}
else if(h.varianty){const V=Ls(h.varianty).slice(0,3);if(!V.length)return'';x=d('o-mv',V.map(v=>{const[n,p,s]=v&&v.constructor==Object?[v.n,v.d??v.p??v.t,v.sovet]:[].concat(v);return mc((n??'')+(s?' · мой совет':''),p,s)}).join(''))}
else if('seychas'in h||'budet'in h)x=d('o-mb',mc('сейчас',h.seychas)+ic('arrow-right','o-pa')+mc('будет',h.budet,1));
else if('bylo'in h||'stalo'in h)x=d('o-mb',mc('было',h.bylo)+ic('arrow-right','o-pa')+mc('стало',h.stalo,1));
else if(h.dolya!=null){const D=[].concat(h.dolya),[n,z]=D,w=z>0?Math.max(0,Math.min(100,n/z*100))||0:0,t=h.t?' · '+tx(h.t):'';x=d('o-dl',D.length==2?`<div class="o-dk"><i style="width:${w}%"></i></div><span><b class="o-nm">${e(n)} из ${e(z)}</b>${t}</span>`:`<span>${tx(D.join(' '))}${t}</span>`)}
else x=d('o-er','схема «'+e(Object.keys(h)[0]??'')+'» не из списка');
return d('o-mx',x)},
BL={
chisla:B=>{const E=B.e||[];return`<div class="o-cs" style="--c:${cl(E.length)};--r:2">`+E.map(([t,a,b,h])=>{const p=nm(a),q=nm(b);
return d('o-k',d('o-cp',e(t))+d('o-v o-'+(h==null||p==q||isNaN(p+q)?'bl':(q>p)==!!h?'gr':'rd'),`<span>${e(a)}</span>${ic('arrow-right')}<b>${e(b)}</b>`))}).join('')+'</div>'},
'bylo-stalo':B=>d('o-ls o-pr',(B.e||[]).map(([a,b,h])=>d('o-bs o-'+(h==null||h?'gr':'rd'),d('o-bc',e(a))+ic('arrow-right','o-ar')+d('o-bc o-af',e(b)))).join('')),
spisok:B=>d('o-ls',(B.e||[]).map((s,i)=>{const o=s&&s.constructor==Object?s:(([t,p,c])=>({t,p,ton:c}))([].concat(s));
const P=o.p??o.d,F=v=>v===1||v===true?'':v,sv=F(o.sovet),ina=F(o.inache);
return d('o-r '+tn(o.ton),(o.i&&!/-filled$/.test(o.i)?`<b class="o-c o-ci">${ic(o.i)}</b>`:`<b class="o-c">${i+1}</b>`)+'<div>'+d('o-t',tx(o.t??o.n))+(P?d('o-p',tx(P)):'')+sx(o.sh)+(sv?d('o-sv',ic('thumb-up')+`<span><b>Мой совет</b> — ${tx(sv)}</span>`):'')+(ina?d('o-in',ic('corner-down-right')+`<span>Если иначе: ${tx(ina)}</span>`):'')+'</div>')}).join('')),
'vybor-puti':B=>{const V=(B.e||[]).slice(0,3),h=k=>V.some(v=>v[k]),
pm=(v,k,c)=>h(k)?d('o-ln '+c,(v[k]?ic(k):'')+`<span>${e(v[k])}</span>`):'';
return`<div class="o-cs" style="--c:${cl(V.length)};--r:${1+h('d')+h('plus')+h('minus')+h('knopka')}${h('sovet')?';padding-top:10px':''}">`+V.map(v=>d('o-k'+(v.sovet?' o-s':''),(v.sovet?`<span class="o-bd">${ic('thumb-up')}советую</span>`:'')+d('o-t',e(v.n))+(h('d')?d('',e(v.d)):'')+pm(v,'plus','o-gr')+pm(v,'minus','o-rd')+(v.knopka?bt(v.knopka.tekst||v.knopka,v.knopka.prompt||v.prompt,v.sovet?'':'o-q'):''))).join('')+'</div>'},
shagi:B=>{const S=(B.e||[]).map(s=>[].concat(s)),h=S.some(s=>s[1]),c=cl(S.length);
return`<div class="o-cs o-sh" style="--c:${c};--r:${2+h}">`+S.map(([t,p,m],i)=>d('o-k'+(i%c?'':' o-f'),(i?ic('arrow-right','o-ar'):'')+d('o-st',`<b class="o-c">${i+1}</b>`+(MD[m]?`<b class="o-md o-${MD[m][1]}" title="${MD[m][0]}">${MD[m][0][0]}</b>`:''))+d('o-t',e(t))+(h?d('',e(p)):''))).join('')+'</div>'},
stroka:B=>ln(B.i||'info-circle',B.t,tn(B.ton)),
reshenie:B=>{const L=Ls(B.luchshe).slice(0,2),
hd=(i,t,c)=>d('o-ph '+c,`<b class="o-pi">${ic(i)}</b><span>${t}</span>`),
lb=(i,t,x,c)=>x?d('o-ln '+c,ic(i)+`<span><b class="o-nm">${t}</b> ${tx(x)}</span>`):'',
pr=B.pravilno?d('o-sx',tx(B.pravilno)):'',nk=B.ne_kostyl?d('o-sx',tx(B.ne_kostyl)):'',
lu=L.length?d('o-sx',L.map(v=>{const[n,p]=[].concat(v);return d('o-ot',ic('x')+`<span><b>${tx(n)}</b>${p?' — '+tx(p):''}</span>`)}).join('')):'',
k=[pr,nk,lu].filter(Boolean).length,
pv=String(B.proveril??'').trim(),nv=/^не\s+(провер|смотр)/i.test(pv)?pv.includes(':')&&pv.slice(pv.indexOf(':')+1).trim()||pv:'',
st=(t,c,x)=>d('o-st2'+(x?'':' o-no'),d('o-sh2',`<b class="o-ok2">${x?ic('check'):'?'}</b><span><b>${t}</b><small>${c}</small></span>`)+(x||'<span class="o-nd">не доказано</span>'));
return d('o-rs',d('o-pl',hd('alert-circle','Проблема','o-hp')+(B.problema?d('o-pz',tx(B.problema)):d('o-er','нет проблемы'))+sx(B.psh)+lb('flame','Чем грозит:',B.grozit,'o-cn'))
+d('o-ay',ic('arrow-down'))
+d('o-pl o-pr2',hd('bulb','Решение','o-hr')+(B.reshenie?d('o-pz',tx(B.reshenie)):d('o-er','нет решения'))
+(B.sh&&B.sh.varianty?d('o-er','в решении — одно решение, варианты только на вкус'):sx(B.sh&&Object.keys(B.sh).length?B.sh:'')||d('o-er','нет схемы решения'))
+d('o-pf',d('o-pq2',`<span>Почему это лучшее</span><b class="o-sc${k<3?' o-sc-w':''}">${k} из 3 доказано</b>`)
+d('o-sg',st('Правильное','лечит причину, а не прячет',pr)+st('Не костыль','без обходов, выдержит рост',nk)+st('Лучше других','сравнил с другими путями',lu))
+(nv?d('o-ln o-pv o-pv-n',ic('alert-circle')+`<span>Не проверено: ${tx(nv)}</span>`):B.proveril?lb('clipboard-check','Проверил:',B.proveril,'o-pv'):d('o-ln o-pv o-pv-n',ic('alert-circle')+'<span>Не проверено — доводы на словах</span>')))
+lb('info-circle','Исхожу из:',B.ishozhu,'o-cn')+lb('coin','Цена:',B.cena,'o-cn')
+d('o-ac',(B.knopka?bt(B.knopka,B.prompt):'')+d('o-ln o-nt',ic('pencil')+'<span>Не так — напиши словами, что поменять: пришлю новое решение</span>'))))}
},
bk=B=>{const k=B.b||B.tip||Object.keys(BL).find(x=>B[x]),X={...B,b:k,e:Ls(B.b?B.e:B.e||B[k]||B.strok||B.punkty||B.stroki)};
return d('o-bk',(X.n?d('o-n',e(X.n)):'')+(BL[X.b]?BL[X.b](X):d('o-er','блок «'+e(X.b)+'» не из списка')))},
Z=ZT[D.ton];
ot.innerHTML=`<style>
#ot{display:grid;gap:14px;font-size:13px;line-height:18px;overflow-wrap:break-word;hyphens:manual;container-type:inline-size}
#ot *{box-sizing:border-box}
.o-z{display:flex;gap:10px;align-items:start;font-size:20px;line-height:28px;font-weight:500}
.o-zn,.o-c,.o-md{display:grid;place-items:center;flex:none;border-radius:50%;background:var(--b,var(--surface-2));color:var(--c,var(--text-muted))}
.o-zn{width:28px;height:28px;font-size:16px}
.o-c{width:22px;height:22px;font-size:12px}
.o-md{width:18px;height:18px;font-size:10.5px}
.o-bk{display:grid;gap:7px}
.o-bk:empty{display:none}
.o-n{font-size:12px;color:var(--text-muted)}
.o-cs{display:grid;grid-template-columns:repeat(var(--c,3),minmax(0,1fr));gap:14px 10px}
.o-k{position:relative;min-width:0;display:grid;grid-row:span var(--r,2);grid-template:subgrid/minmax(0,1fr);row-gap:7px;padding:10px 12px;border:2px solid transparent;border-radius:12px;background:var(--surface-1)}
.o-s{border-color:var(--border-accent)}
.o-t{font-size:14px;font-weight:500}
.o-cp,.o-p{color:var(--text-secondary)}
.o-v{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 6px;margin-top:auto}
.o-v span{font-size:14px;color:var(--text-muted)}
.o-v i{align-self:center;color:var(--text-muted)}
.o-v b{font-size:22px;line-height:28px;font-weight:500;color:var(--c)}
.o-bd{position:absolute;top:-10px;left:10px;display:inline-flex;gap:4px;align-items:center;height:20px;padding:0 8px;border-radius:10px;font-size:11px;background:var(--fill-accent);color:var(--on-accent)}
.o-ln{display:flex;gap:6px;align-items:start;color:var(--text-secondary)}
.o-ln i{flex:none;margin-top:2px;color:var(--c,var(--text-secondary))}
.o-ln span,.o-r>div{flex:1;min-width:0}
.o-r>div{margin-top:2px}
.o-im{white-space:nowrap;padding:0 5px;border-radius:5px;background:var(--surface-2);box-shadow:inset 0 0 0 .5px var(--border-strong);color:var(--text-primary)}
.o-nm{font-weight:500;color:var(--text-primary)}
.o-ci{font-size:13px}
.o-mx{margin-top:8px}
.o-pt{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
.o-pc{min-width:0;overflow-wrap:anywhere;padding:3px 8px;border-radius:6px;background:var(--surface-2);box-shadow:inset 0 0 0 .5px var(--border-strong);color:var(--text-primary);font-size:12px;line-height:16px}
.o-pa{flex:none;color:var(--text-muted)}
.o-mb{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:8px;align-items:center}
.o-mv{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.o-mc{min-width:0;align-self:stretch;padding:7px 9px;border-radius:8px;background:var(--surface-2);box-shadow:inset 0 0 0 .5px var(--border-strong);color:var(--text-secondary);font-size:12px;line-height:16px}
.o-mg{box-shadow:inset 0 0 0 1.5px var(--border-success)}
.o-ml{display:block;font-size:11px;color:var(--text-muted);margin-bottom:2px}
.o-mg .o-ml{color:var(--text-success)}
.o-dl{display:flex;gap:8px;align-items:center;color:var(--text-secondary)}
.o-dk{flex:0 1 120px;min-width:48px;height:6px;border-radius:3px;background:var(--surface-2);box-shadow:inset 0 0 0 .5px var(--border-strong);overflow:hidden}
.o-dk i{display:block;height:100%;background:var(--c,var(--fill-accent))}
.o-sv{display:flex;gap:6px;align-items:start;margin-top:8px;padding:7px 9px;border-radius:8px;background:var(--bg-success);color:var(--text-success)}
.o-sv b{font-weight:500}
.o-in{display:flex;gap:6px;align-items:start;margin-top:6px;color:var(--text-muted);font-size:12px}
.o-sv i,.o-in i{flex:none;margin-top:2px}
.o-sv>span,.o-in>span,.o-dl>span{flex:1;min-width:0}
.o-mc .o-im,.o-pc .o-im{white-space:normal}
.o-sl{color:var(--c,var(--text-secondary))}
.o-st{display:flex;gap:6px;align-items:center}
.o-sh{column-gap:28px}
.o-ar{flex:none;align-self:center;color:var(--text-muted)}
.o-k>.o-ar{position:absolute;left:-30px;top:calc(50% - 14px);width:28px;height:28px;display:grid;place-items:center}
.o-f>.o-ar{display:none}
.o-ls{display:grid;gap:8px}
.o-pr{gap:14px}
.o-r{display:flex;gap:10px;align-items:start;padding:8px 10px;border-radius:8px;background:var(--surface-1)}
.o-bs{display:grid;grid-template-columns:1fr auto 1fr;gap:8px}
.o-bc{min-width:0;padding:8px 10px;border-radius:8px;background:var(--surface-1);color:var(--text-secondary)}
.o-af{background:var(--b);color:var(--c)}
.o-bw{display:flex;flex-direction:column;align-items:flex-start;gap:7px;align-self:end}
.o-b{cursor:pointer;display:inline-flex;gap:6px;align-items:center;padding:0 18px;background:var(--fill-accent);color:var(--on-accent);border-color:transparent}
.o-b.o-q{background:none;color:var(--text-primary);border-color:var(--border-strong)}
.o-b.o-ok{background:var(--fill-success);color:var(--on-success);border-color:transparent}
.o-rn{width:100%;min-height:56px}
.o-er{padding:10px 12px;border-radius:var(--radius);background:var(--bg-danger);color:var(--text-danger);font-weight:500}
.o-rs{display:grid}
.o-pl{display:grid;gap:10px;min-width:0;padding:14px 16px;border-radius:14px;background:var(--surface-2);box-shadow:0 0 0 1px color-mix(in srgb,var(--border-strong) 45%,transparent),0 1px 3px color-mix(in srgb,var(--text-primary) 6%,transparent)}
.o-pr2{box-shadow:0 0 0 1.5px var(--border-accent),0 6px 18px color-mix(in srgb,var(--fill-accent) 12%,transparent)}
.o-pl .o-mx{margin-top:0}
.o-pl .o-er{background:var(--surface-2);box-shadow:inset 0 0 0 1px var(--text-danger)}
.o-ph{display:flex;gap:8px;align-items:center;font-size:12.5px;line-height:16px;font-weight:600;color:var(--text-secondary)}
.o-pi{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:8px;font-size:15px}
.o-hp .o-pi{background:var(--bg-danger);color:var(--text-danger)}
.o-hr{color:var(--text-accent)}
.o-hr .o-pi{background:var(--bg-accent);color:var(--text-accent)}
.o-pz{font-size:16px;line-height:23px;font-weight:600;color:var(--text-primary)}
.o-pl .o-pc,.o-pl .o-mc{background:var(--surface-1);box-shadow:none}
.o-pr2 .o-mg{background:var(--surface-2);box-shadow:inset 0 0 0 1.5px var(--border-accent)}
.o-pr2 .o-mg .o-ml{color:var(--text-accent)}
.o-ay{display:grid;place-items:center;height:30px}
.o-ay i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--surface-2);box-shadow:0 0 0 1px color-mix(in srgb,var(--border-strong) 45%,transparent);color:var(--text-muted);font-size:13px}
.o-pf{display:grid;gap:8px;padding-top:12px;border-top:1px solid color-mix(in srgb,var(--border-strong) 35%,transparent)}
.o-pq2{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px;line-height:18px;font-weight:600;color:var(--text-primary)}
.o-sc{flex:none;padding:2px 9px;border-radius:999px;background:var(--bg-accent);color:var(--text-accent);font-size:11.5px;line-height:16px;font-weight:600}
.o-sc-w{background:var(--bg-warning);color:var(--text-warning)}
.o-sg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.o-st2{display:grid;grid-row:span 2;grid-template-rows:subgrid;align-content:start;row-gap:6px;min-width:0;padding:10px 11px;border-radius:10px;background:var(--surface-1)}
.o-sh2{display:flex;gap:8px;align-items:start}
.o-sh2>span{display:grid;min-width:0}
.o-sh2 b{font-weight:600;font-size:13px;line-height:17px;color:var(--text-primary)}
.o-sh2 small{font-size:11.5px;line-height:15px;color:var(--text-muted)}
.o-sh2 .o-ok2{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:50%;background:var(--fill-accent);color:var(--on-accent);font-size:12px}
.o-no .o-ok2{background:none;box-shadow:inset 0 0 0 1.5px var(--border-strong);color:var(--text-muted)}
.o-sx{display:grid;gap:4px;font-size:12.5px;line-height:17px;color:var(--text-secondary)}
.o-nd{font-size:12px;line-height:16px;color:var(--text-warning)}
.o-ot{display:flex;gap:5px;align-items:start}
.o-ot i{flex:none;margin-top:2px;color:var(--text-danger)}
.o-ot>span{flex:1;min-width:0}
.o-ot b{font-weight:500;color:var(--text-primary)}
.o-pv{--c:var(--text-accent);font-size:12.5px;line-height:17px}
.o-pv-n{--c:var(--text-warning);color:var(--text-warning)}
.o-cn{--c:var(--text-secondary)}
.o-ac{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center}
.o-ac>.o-bw{align-self:center}
.o-nt{--c:var(--text-secondary);flex:1 1 220px;font-size:12px;line-height:16px}
${['gr:success','rd:danger','yl:warning','bl:accent'].map(x=>{const[k,t]=x.split(':');return`.o-${k}{--c:var(--text-${t});--b:var(--bg-${t})}`}).join('\n')}
@container (max-width:460px){.o-z{font-size:18px}.o-mb{grid-template-columns:minmax(0,1fr)}.o-mb>.o-pa{transform:rotate(90deg);justify-self:center}.o-bs{grid-template-columns:1fr}.o-bs>.o-ar{transform:rotate(90deg);justify-self:center}}
@container (max-width:559px){.o-cs{grid-template-columns:minmax(0,1fr)}.o-sh{row-gap:28px}.o-k>.o-ar{left:calc(50% - 14px);top:-30px;transform:rotate(90deg)}.o-f>.o-ar{display:grid}}
@container (max-width:520px){.o-sg{grid-template-columns:minmax(0,1fr)}}
@container (max-width:460px){.o-ac{flex-direction:column;align-items:flex-start}.o-ac>.o-bw{align-self:flex-start}.o-nt{flex:none}}
</style>`+(D.zag?d('o-z',(Z?`<span class="o-zn o-${Z[0]}">${ic(Z[1])}</span>`:'')+`<span>${e(D.zag)}</span>`):'')+Ls(D.bloki).filter(Boolean).map(bk).join('');
ot.role='region';ot.lang='ru';ot.ariaLabel=D.zag||'Ответ';
ot.onclick=async ev=>{const b=ev.target.closest('[data-a]');if(!b)return;
if(Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const t=b.dataset.t,fin=s=>{b.classList.add('o-ok');b.lastChild.textContent=s};
if(window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return fin('Нажато ✓ — не дошло? Нажми ещё раз')}
vy(b,t,fin)}}catch(x){const c=document.getElementById('ot');if(c)c.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет ответа не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «виджет не нарисовался» — он перерисует.</p>'}};
window.Status=D=>{try{
const W=document,st=W.getElementById('st'),Z=D.zadacha,L=D.sovet,Ls=a=>[].concat(a??[]).filter(x=>x!=null&&x!==''),
e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(c,x)=>`<div class="${c}">${x}</div>`,
ln=(i,t,c='')=>t?d('sln '+c,ic(i)+`<span>${e(t)}</span>`):'',
bt=(i,o,k=o.knopka?.tekst||o.knopka)=>`<button class=sbn data-t="${e(o.knopka?.prompt||o.prompt||k)}">${ic(i)}<span>${e(k)}</span></button>`,
sc=(i,t,x)=>x?d('',d('skp',ic(i)+t)+x):'',
X={sey:'idet',zhdet:'stoit'},
G={papka:['folder','в папке','не записано','stoit'],vetka:['git-branch','в ветке','не влито','idet'],dom:['world','на домене','','da']},
PO=/^\s*(по[\s-]+ходу|попутно|заодно)(\s+-|\s*[:：—–―])\s*/i,
V=(a=>Ls(D.shagi??D.vehi).map(v=>{v=v.map?{n:v[0],s:v[1],it:v[2]}:v;const p=v.po||PO.test(v.n);return{...v,s:X[v.s]||v.s||'',...p&&{po:++a,n:String(v.n??'').replace(PO,'')}}}))(0),
AC=V.filter(v=>v.s=='idet'||v.s=='stoit'),cu=AC[0],nd=V.filter(v=>v.s=='da').length,fin=nd&&nd==V.length,lk=V.at(-1)?.k,
pi=cu?V.indexOf(cu)+1:fin?V.length+1:V.findIndex(v=>!v.s)+1,
row=v=>{const g=G[v.gde];
return d('sr s'+v.s+(v.po?' spo':''),`<span class=sic>${v.s?ic('check'):V.indexOf(v)+1}</span>`+d('',`<b>${e(v.n)}</b>`+(v.it?d('sml',e(v.it)):''))+(g?`<span class="sm s${g[3]}">${v.po?'+'+v.po+' · ':''}${g[1]}${v.d?' · '+e(v.d):''}</span>`:v.k||v.po?`<span class=sm>${e(v.k||'+'+v.po)}</span>`:''))},
card=u=>d('scd s'+u.s,d('stp',`<span>${ic(u.s=='idet'?'circle-dot':'player-pause')}сейчас · ${u.s=='idet'?'идёт':'стоит'}</span>`+(u.k||u.po?`<span>${e(u.k||'+'+u.po)}</span>`:''))+d('sh2',e(u.n))+(u.it?d('stx',e(u.it)):'')+(u.zhd?d('szh','Ждёт: '+e(u.zhd)):'')+
(u.pod?d('spd',Ls(u.pod).map((p,i)=>{p=p.map?p:[p];return`<span class="s${p[1]||''}">${i+1} · ${e(p[0])}</span>`}).join('')):'')),
gd=V.filter(v=>G[v.gde]),
tr=gd.length?d('sst',['papka','vetka','dom'].map((k,i)=>{const g=G[k],l=gd.filter(v=>v.gde==k);
return(i?ic('arrow-right'):'')+d('ssn'+(l.length?' s'+g[3]:''),d('sml',ic(g[0])+' '+g[1]+(g[2]?', '+g[2]:''))+d('snu',l.length)+(l.length?d('sml',l.map(v=>e(v.k||v.n)).join(' · ')):''))}).join('')):'',
fk=Ls(D.fakty).map(([i,t,s])=>ln(i,t,'sfk s'+(s||''))).join(''),
IL=Ls(D.ili),sv=L?d('sol',d('ssv',`<span class=szn>${ic('bulb')}советую</span>`+d('sh2',e(L.n))+(L.it?d('stx',e(L.it)):'')+ln('arrow-right',L.dalshe)+bt('arrow-up-right',L))+
(IL.length?d('sml','или')+d('sil',IL.slice(0,2).map(o=>d('sit',`<b>${e(o.n)}</b>`+(o.it?d('sml',e(o.it)):'')+bt('arrow-up-right',o))).join('')):'')):'',
vy=(b,t,f)=>{let r=b.r;if(!r){r=b.r=W.createElement('textarea');r.className='srn';r.readOnly=1;r.oncopy=()=>f('Скопировано ✓ — вставь в чат (⌘V)');b.after(r)}r.value=t;r.focus();r.select();f('Выделено — нажми ⌘C')};
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
${['da:success','idet:accent','stoit:warning'].map(x=>{const[k,t]=x.split(':');return`.s${k}{--c:var(--text-${t});--b:var(--bg-${t});--r:var(--border-${t});--d:solid}`}).join('\n')}${V.some(v=>v.po)?'\n.spo .sk,.spo .sic{border-radius:7px}':''}
</style>`+`<h2 class=ssr>${e(Z)}: сделано ${nd} из ${V.length}</h2>`+
d('shd',d('',ln('calendar',D.kogda)+d('szd'+(Z?'':' sno'),Z?e(Z):'Задача Яна не записана — поле zadacha')+ln('flag',D.cel))+(V.length?d('scn',`<b>${nd}<small>/${V.length}</small></b>`+d('sml','сделано')):''))+
(AC.length>1?d('ser',`шагов «сейчас»: ${AC.length} — оставь один`):'')+
`<div class="spu${V.length>7?' smn':''}" style="--n:${V.length+2}">`+[['da','player-play',D.start],...V.map(v=>[v.s,{da:'check',idet:'circle-dot',stoit:'player-pause'}[v.s],v.n,v.k||v.po&&'+'+v.po,v.po]),[fin?'da':'','flag',D.finish||'цель']]
.map(([s,i,n,k,p],j)=>`<div class="su s${s}${p?' spo':''}">${j==pi?'<span class=spn>ты здесь</span>':''}<span class=sk>${i?ic(i):j}</span>${n?d('snm',e(n)):''}${k?d('sml',e(k)):''}</div>`).join('')+'</div>'+
(cu?card(cu):fin?d('scd sda',d('stp',`<span>${ic('circle-check')}блок пройден</span>`)):'')+
sc('circle-check','сделано',nd?d('sls',V.filter(v=>v.s=='da').map(row).join('')):'')+
(fin?'':sc('route','дальше',d('sls sq',V.filter(v=>!v.s).map(row).join('')+d('sr',`<span class=sic>${ic('flag')}</span>`+d('',`<b>${e(D.finish||'цель')}</b>`)+(lk?`<span class=sm>после ${e(lk)}</span>`:'')))))+
sc('git-merge','где лежит работа',tr+(fk?d('sfs',fk):''))+sv+
sc('user-check','за тобой',Ls(D.tebe).map(t=>d('spt',ic('square')+`<span>${e(t)}</span>`)).join('')+ln('list',D.drugie&&'ещё в этом чате: '+D.drugie));
let T=0;
st.onclick=async ev=>{const b=ev.target.closest('[data-t]');if(!b||b.classList.contains('spg')||Date.now()-T<1500)return;T=Date.now();
const t=b.dataset.t,ok=x=>{b.classList.add('sok');b.lastChild.textContent=x;st.querySelectorAll('[data-t]').forEach(y=>y!=b&&y.classList.add('spg'))};
if(window.sendPrompt){setTimeout(()=>sendPrompt(t),300);return ok('Нажато ✓ — не дошло? Нажми ещё раз')}
vy(b,t,ok)}}catch(x){const c=document.getElementById('st');if(c)c.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет статуса не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «виджет не нарисовался» — он перерисует.</p>'}};
window.Uborka=U=>{try{
const D=document,c=D.getElementById('ub'),Q=(s,r=c)=>r.querySelector(s),
e=s=>String(s??'').replace(/[&<>"]/g,x=>'&#'+x.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}"></i>`,
d=(k,x)=>`<div class="${k}">${x}</div>`,
ln=(i,t,k='')=>d('ub-ln '+k,ic(i)+`<span>${t}</span>`),
bl=(i,t,a,f)=>(a=[].concat(a??[]).filter(x=>x!=null&&x!=='')).length?d('ub-bl',d('ub-kp',ic(i)+t)+f(a)):'',
st=(a,i,x)=>`<button id=ub-${i} class=ub-b data-u=${a}><span class=ub-c>${ic('check')}</span>${x}</button>`,
po=a=>`<div class=ub-pod id=ub-p${a}></div>`,
s=v=>typeof v=='string'&&v.trim(),
tr=v=>v.trim().replace(/[.;:,\s]+$/,''),
pt=x=>x+(/[?!…]$/.test(x)?'':'.'),
dv=(k,v)=>d('ub-ot',`<span class=ub-ol>${k}</span> ${e(v)}`),
M=U.marshrut,sa=s(U.ostanovilis),nw=sa&&s(U.dalshe),old=sa&&!nw&&s(U.prodolzhit),
zd=s(M?.zadacha)&&tr(M.zadacha),pz=s(M?.podzadacha)&&tr(M.podzadacha),pr=s(U.prinyal)&&tr(U.prinyal),
G=[].concat(U.gde).filter(s).map(tr).filter(Boolean),gj=G.join('; '),ps=pz&&pz!==zd,
H=ps?`Продолжаем: ${pz}${zd?` (задача — «${zd}»)`:''}`:`Продолжаем${zd?` «${zd}»`:''}`,hd=ps&&!zd?pt(H):H+'.',
nu=[!pr&&['«Ты принял»','prinyal — что Ян принял последним, его словами и время («13:00 «Годится» — …»; не принимал — «ещё ничего: ждёт твоего взгляда на …»)'],!gj&&['«Лежит»','gde — файлы, кадры, ветка, id фона']].filter(Boolean),
F=nw?`${hd}${pr?` Ты принял: ${pt(pr)}`:''} Перед сжатием: ${pt(tr(U.ostanovilis))}${gj?` Лежит: ${pt(gj)}`:''} Следующий шаг: ${pt(tr(U.dalshe))}`:old?U.prodolzhit:'',
ost=!!F,ok=s(U.zhurnal)&&ost,ra=ok&&s(U.rano),
T=!ok?'Уборка не закончена — сжимать рано':ra?'Всё разложено — сжимать пока рано':'Уборка перед сжатием — всё разложено',
B={k:['/compact','«/compact» выделен: нажми ⌘C, потом вставь в поле и Enter.'],
f:[F,'Фраза выделена: нажми ⌘C, после /compact вставь её первым сообщением.']},
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
.ub-kd,.ub-ost,.ub-ln,.ub-sp,.ub-t{overflow-wrap:anywhere}
.ub-kd{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 14px}
.ub-f{font:12px var(--font-mono);color:var(--text-secondary)}
.ub-pr{display:flex;flex-wrap:wrap;gap:6px}
.ub-pr span{display:inline-flex;gap:4px;align-items:center;padding:4px 9px;border-radius:999px;font-size:12px;background:var(--bg-success);color:var(--text-success)}
.ub-ln{display:flex;gap:8px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--surface-1)}
.ub-ln>i{margin-top:2px}
.ub-ln code{font:12px var(--font-mono)}
.ub-no{background:var(--bg-danger);color:var(--text-danger);font-weight:500}
.ub-ra{background:var(--o);color:var(--ot)}
.ub-ra{font-weight:500}
.ub-mr{padding:14px;border:.5px solid var(--border-strong);border-radius:12px;background:var(--surface-2)}
.ub-niz{padding-top:14px;border-top:.5px solid var(--border)}
.ub-ost{padding:12px 14px;border:1.5px solid var(--of);border-radius:12px}
.ub-ot{font-size:16px;font-weight:500;line-height:1.4}
.ub-gd{display:grid;gap:2px;margin-top:2px}
.ub-ol{font-weight:400;color:var(--text-secondary)}
.ub-kak{gap:8px;padding:10px 12px;border:.5px solid var(--border-strong);border-radius:12px;background:var(--surface-2)}
.ub-rw{display:flex;flex-wrap:wrap;gap:8px}
.ub-b{display:flex;gap:8px;align-items:center;min-width:0;height:32px;padding:0 12px 0 8px;border:1px solid var(--of);border-radius:8px;background:var(--o);color:var(--ot);font-size:13px;font-weight:500;line-height:1;text-align:left;cursor:pointer}
#ub-kn{font-family:var(--font-mono)}
#ub-kf{flex:1 1 300px}
.ub-b>i{flex:none;font-size:14px}
.ub-c{display:grid;place-items:center;flex:none;width:16px;height:16px;border:1.5px dashed var(--of);border-radius:50%;font-size:11px;opacity:.6}
.gotovo .ub-c{border-style:solid;border-color:var(--fill-success);background:var(--fill-success);color:var(--on-success);opacity:1}
.ub-l{flex:none;white-space:nowrap}
.ub-t{flex:1;min-width:0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-size:12px;font-weight:400;line-height:14px;color:var(--text-secondary)}
.ub-pod{font-size:12px;color:var(--text-secondary)}
.ub-pod:empty{display:none}
.ub-rn{width:100%;min-height:56px;font-size:14px}
@container (max-width:480px){.ub-kd{grid-template-columns:1fr}}
</style><h2 class=ub-sr>${T}. ${e(U.povod)}</h2>`+
d('ub-sh',ic('archive')+`<div>${d('ub-z',T)}${e(U.povod)}</div>`)+
bl('notes','собрал из чата',U.sobral,a=>`<ol class=ub-sp>${a.map(x=>`<li>${e(x)}</li>`).join('')}</ol>`)+
bl('folder','куда легло',U.kuda,a=>d('ub-kd',a.map(k=>{const[x,y]=[].concat(k);return`<span>${e(x)}</span><span class=ub-f>${e(y)}</span>`}).join('')))+
bl('shield-check','проверил машиной',U.proveril,a=>d('ub-pr',a.map(x=>`<span>${ic('check')}${e(x)}</span>`).join('')))+
(s(U.zhurnal)?ln('file-check',`Строка журнала уборок: <code>${e(U.zhurnal)}</code>`):ln('alert-triangle','Строки в журнале уборок нет — значит, уборка не доведена. Не сжимай: спроси «где строка журнала?»','ub-no'))+
d('ub-niz',
(M?.zadacha?d('ub-mr','<div id=mr></div>'):ln('alert-triangle','Маршрута нет — заполни marshrut: задача и вехи из последнего маршрута «где мы»','ub-no'))+
(ost?d('ub-bl ub-ost',d('ub-kp',ic('map-pin')+'где остановились')+(nw?(pr?dv('ты принял:',U.prinyal):'')+dv('сделано перед сжатием:',U.ostanovilis)+(gj?d('ub-ot',`<span class=ub-ol>лежит:</span>`+d('ub-gd',G.map(x=>d('ub-f',e(x))).join(''))):'')+dv('следующий шаг:',U.dalshe):d('ub-ot',e(U.ostanovilis))))+d('ub-bl ub-kak',d('ub-kp',ic('list-numbers')+'как сжать')+(ra?ln('clock','Сжимать пока рано: '+e(U.rano),'ub-ra'):'')+(old?ln('alert-triangle','Фраза по-старому: напиши ostanovilis — что сделали прямо перед сжатием, и dalshe — что дальше по маршруту; фразу виджет соберёт сам','ub-no'):'')+(nw&&nu.length?ln('alert-triangle',`Фраза без ${nu.map(x=>x[0]).join(' и ')}: допиши ${nu.map(x=>x[1]).join(', и ')}`,'ub-no'):'')+(nw&&zd&&!pz?ln('info-circle','Нет podzadacha в marshrut — первым во фразе встанет общий заголовок задачи','ub-ra'):'')+d('ub-rw',(ok&&!ra?st('k','kn','<span>/compact</span>'):'')+st('f','kf',`<span class=ub-l>после сжатия</span><span class=ub-t title="${e(F)}">${e(F)}</span>${ic('copy')}`))+(ok&&!ra?po('k'):'')+po('f')):ln('alert-triangle','Не написано, где остановились — заполни ostanovilis (что сделали перед сжатием) и dalshe (что дальше по маршруту). Без них сжимать рано','ub-no')));
c.onclick=async v=>{const b=v.target.closest('[data-u]');if(!b||Date.now()-(b.t||0)<1500)return;b.t=Date.now();
const k=b.dataset.u,[t,m]=B[k],h=Q('#ub-p'+k),g=()=>b.classList.add('gotovo'),sp=k=='f'&&window.sendPrompt?()=>setTimeout(()=>sendPrompt(t),300):0;
if(await cp(t)){g();if(sp){sp();h.textContent='Фраза в буфере и ставлю её в поле ввода: встала — Enter, не встала — ⌘V.'}return}
let r=b.r;if(!r){r=b.r=D.createElement('textarea');r.className='ub-rn';r.readOnly=1;r.oncopy=g;h.before(r)}
r.value=t;r.focus();r.select();h.textContent=m+(sp?' Ещё ставлю её в поле ввода — встала, жми Enter.':'');sp&&sp()};
if(M?.zadacha&&window.Marshrut){const m=Q('#mr');Marshrut(M,m);Q('.ot',m)?.remove()}
}catch(x){const c=document.getElementById('ub');if(c)c.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет уборки не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «уборка не нарисовалась» — он перерисует (поля — шаблоны/uborka/README.md).</p>'}};
window.Generaciya=G=>{try{
const D=document,g=D.getElementById('gn'),Ls=a=>[].concat(a??[]).filter(x=>x!=null&&x!==''),e=s=>String(s??'').replace(/[&<>"]/g,c=>'&#'+c.charCodeAt()+';'),
ic=n=>`<i class="ti ti-${n}" aria-hidden="true"></i>`,d=(c,x)=>`<div class="${c}">${x}</div>`,
ch=x=>Number(x).toLocaleString('ru-RU'),er=t=>d('gn-er',ic('alert-triangle')+e(t)),
S={da:['gn-da','circle-check','принято'],net:['gn-net','circle-x','не вышло'],zhdet:['gn-zh','hand-stop','ждёт тебя']},
s=S[G.itog]||S.zhdet,B=G.balans||[],
pl=(i,k,v,m,x)=>d('gn-pl',d('gn-k',ic(i)+k)+d('gn-v',v?e(v):x||'')+(m?d('gn-m',e(m)):'')),
cena=G.cena!=null?ch(G.cena)+' '+(G.cena%1?'кредита':G.cena%10==1&&G.cena%100!=11?'кредит':G.cena%10>1&&G.cena%10<5&&(G.cena%100<12||G.cena%100>14)?'кредита':'кредитов'):'',
kn=Ls(G.knopki),VH=Ls(G.vhod),PR=Ls(G.proverka);
g.innerHTML=`<style>
#gn{display:grid;gap:14px;font-size:13px;line-height:1.45}
#gn *{box-sizing:border-box}
.gn-t{display:flex;gap:10px;align-items:flex-start;justify-content:space-between}
.gn-l{display:flex;gap:6px;align-items:center;color:var(--text-secondary);font-size:12px}
.gn-z{font-size:17px;font-weight:500;margin-top:2px;overflow-wrap:anywhere}
.gn-s{flex:none;display:inline-flex;gap:5px;align-items:center;padding:3px 10px;border-radius:12px;font-size:12px}
.gn-da{background:var(--bg-success);color:var(--text-success)}
.gn-net{background:var(--bg-danger);color:var(--text-danger)}
.gn-zh{background:var(--bg-warning);color:var(--text-warning)}
.gn-r{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px}
.gn-pl{padding:10px 12px;border-radius:10px;background:var(--surface-1);min-width:0}
.gn-k{display:flex;gap:5px;align-items:center;color:var(--text-secondary);font-size:12px}
.gn-v{font-size:16px;font-weight:500;margin-top:3px;overflow-wrap:anywhere}
.gn-m{color:var(--text-secondary);font-size:12px;margin-top:1px;overflow-wrap:anywhere}
.gn-su{display:flex;gap:8px;align-items:flex-start;padding:10px 12px;border-radius:10px;background:var(--bg-accent);color:var(--text-accent)}
.gn-su i{margin-top:2px;flex:none}
.gn-h{color:var(--text-secondary);font-size:12px;margin-bottom:5px}
.gn-st{display:grid;grid-template-columns:auto 1fr;gap:4px 10px}
.gn-st b{font-weight:500;white-space:nowrap}
.gn-st span{overflow-wrap:anywhere;min-width:0}
.gn-p{display:flex;gap:7px;align-items:flex-start;padding:2px 0}
.gn-p i{margin-top:2px;flex:none}
.gn-ok i{color:var(--text-success)}
.gn-no i{color:var(--text-danger)}
.gn-nw i{color:var(--text-secondary)}
.gn-f{color:var(--text-secondary);font-size:11.5px;font-family:var(--font-mono);overflow-wrap:anywhere;border-top:.5px solid var(--border);padding-top:9px}
.gn-er{display:flex;gap:6px;align-items:center;color:var(--text-danger);font-size:12px}
.gn-b{display:flex;gap:8px;flex-wrap:wrap}
.gn-b button{padding:7px 14px;border-radius:8px;border:.5px solid var(--border-strong);background:transparent;color:inherit;font:inherit;cursor:pointer}
.gn-b button:first-child{background:var(--fill-accent);color:var(--on-accent);border-color:transparent}
.gn-b button.ok{background:var(--bg-success);color:var(--text-success);border-color:transparent}
</style>`+
d('gn-t',`<div>${d('gn-l',ic('sparkles')+'готовая генерация')}${d('gn-z',e(G.zag))}</div><span class="gn-s ${s[0]}">${ic(s[1])}${e(G.itogTekst||s[2])}</span>`)+
(G.kto?'':er('Не сказано, кто нарисовал — поле kto'))+(G.cena==null?er('Не сказана цена — поле cena'):'')+(B.length==2?'':er('Не сказан баланс до и после — поле balans'))+
d('gn-r',pl('brush','кто нарисовал',G.kto,G.gde)+pl('photo','что вышло',G.vyshlo,G.razmer)+pl('coin','цена',cena,B.length==2?`баланс ${ch(B[0])} → ${ch(B[1])}`:''))+
(VH.length?`<div>${d('gn-h','что подали на вход')}${d('gn-st',VH.map(([k,v])=>`<b>${e(k)}</b><span>${e(v)}</span>`).join(''))}</div>`:'')+
(G.sut?d('gn-su',ic('eye')+`<span>${e(G.sut)}</span>`):'')+(PR.length?`<div>${d('gn-h','проверка качества')}${PR.map(([o,t])=>d('gn-p '+(o===1?'gn-ok':o===0?'gn-no':'gn-nw'),ic(o===1?'check':o===0?'x':'info-circle')+`<span>${e(t)}</span>`)).join('')}</div>`:'')+
(G.dalshe?d('gn-p gn-nw',ic('arrow-right')+`<span>${e(G.dalshe)}</span>`):'')+((G.nomer||G.lezhit)?d('gn-f',(G.nomer?'№ '+e(G.nomer):'')+(G.nomer&&G.lezhit?'<br>':'')+e(G.lezhit)):'')+
(kn.length?d('gn-b',kn.map(k=>`<button data-t="${e(k.prompt||k.tekst)}">${e(k.tekst)}</button>`).join('')):'');
g.onclick=ev=>{const b=ev.target.closest('button[data-t]');if(!b||Date.now()-(b.t||0)<1500)return;b.t=Date.now();b.classList.add('ok');const t=b.dataset.t;if(window.sendPrompt){b.textContent='Нажато ✓ — не дошло? Нажми ещё раз';setTimeout(()=>sendPrompt(t),300)}else{b.textContent='Выделено — нажми ⌘C';let r=b.r;if(!r){r=b.r=D.createElement('textarea');r.readOnly=1;r.style.cssText='width:100%;min-height:56px';r.oncopy=()=>b.textContent='Скопировано ✓ — вставь в чат (⌘V)';b.parentNode.after(r)}r.value=t;r.focus();r.select()}}}catch(x){const c=document.getElementById('gn');if(c)c.innerHTML='<p style="color:var(--text-danger);font-size:14px">Виджет генерации не нарисовался: '+String(x?.message??x).replace(/[<&]/g,'')+'. Скажи чату «виджет не нарисовался» — он перерисует.</p>'}};
