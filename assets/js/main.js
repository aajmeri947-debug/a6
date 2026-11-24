(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
function n(i){var v=parseFloat($(i).value);return isNaN(v)?0:v;}
var FIB={cotton:["Cotton",1.0,"Soft and cheap, but it holds moisture against the skin and loses shape once the elastane goes.","holds water, dries slowly"],
merino:["Merino wool",1.45,"Regulates temperature, resists smell and keeps insulating damp. The fibre is finer, so a thin pair wears through faster than a cushioned one.","warm wet or dry"],
nylon:["Nylon blend",1.7,"The toughest of the common blends. Usually found at the heel and toe of everything else for that reason.","hard-wearing, less breathable"],
bamboo:["Bamboo viscose",0.85,"Very soft and smooth, noticeably less durable. Lovely for a desk day, poor in a boot.","soft, wears quickly"],
wool:["Thick wool",1.3,"Bulk does the insulating. Felts if washed warm, which is what ruins most of them.","warm, needs cool washes"],
poly:["Polyester sport",1.6,"Wicks fast and dries faster. Holds smell more than wool does.","dries fastest"]};
function lifeOut(){var f=FIB[$('lfFib').value],wk=n('lfWear'),temp=$('lfTemp').value,dry=$('lfDry').value,o=$('lfOut');
 if(!(wk>0)){o.innerHTML='<h4>How often?</h4><p>Enter how many times a week that pair goes on.</p>';return;}
 var mult=f[1]*{cold:1.2,warm:1.0,hot:0.7}[temp]*{air:1.15,low:0.95,hot:0.65}[dry];
 var washes=Math.round(90*mult);
 var months=Math.max(1,Math.round(washes/(wk*4.33)));
 o.innerHTML='<h4>'+f[0]+'</h4><span class="big">about '+months+' month'+(months===1?'':'s')+'</span>'+
 '<dl class="kv"><dt>Worn</dt><dd>'+wk+' time'+(wk===1?'':'s')+' a week</dd><dt>Washes before thinning</dt><dd>roughly '+washes+'</dd><dt>Character</dt><dd>'+f[3]+'</dd></dl>'+
 '<p>'+f[2]+'</p><ul>'+
 (temp==='hot'?'<li><b>The wash temperature is the problem.</b> Hot water breaks down the elastane that holds the cuff up, and a sock that will not stay up gets thrown away long before it wears through.</li>':'<li>Keep washing at 30&deg;C. Nothing in a sock needs more, and the elastane lasts far longer.</li>')+
 (dry==='hot'?'<li><b>Hot tumble drying roughly halves the life.</b> Heat and tumbling together are harder on the fibre than wearing them is.</li>':'<li>Air drying flat is kindest, and takes a few hours in a warm room.</li>')+
 '<li>Rotate at least five pairs. Elastane recovers between wears, and a pair worn daily goes baggy months earlier.</li>'+
 '<li>Turn them inside out to wash. The inside is the side that collects skin and oils.</li></ul>'+
 '<p class="note">An estimate for ordinary wear. Shoe fit, how you walk and the toe construction change this more than the fibre does.</p>';}
['lfFib','lfWear','lfTemp','lfDry'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',lifeOut);});
if($('lfFib'))lifeOut();
function pairOut(){var sh=$('prShoe').value,se=$('prSeason').value,ac=$('prAct').value,o=$('prOut');
 var H={boot:["Boot or hiking","crew or taller, above the collar","A boot collar rubs, so the sock must finish above it. A sock that sits below the collar is the single commonest cause of a rubbed ankle."],
 trainer:["Trainer or running shoe","quarter or crew","Low enough to stay hidden, high enough to clear the heel counter."],
 dress:["Dress shoe","mid-calf","No skin between trouser hem and sock when you sit down, which means mid-calf rather than crew."],
 loafer:["Loafer or slip-on","no-show with a heel grip","Look for a silicone heel tab, or it will walk down into the shoe by lunchtime."],
 sandal:["Sandal or clog","ankle, flat seams","Nothing bulky across the instep, where a strap will press the seam into the foot."]}[sh];
 var cush;cush={summer:["light","Thin and fast-drying. Cushion traps heat you do not want."],
 shoulder:["medium","Enough to pad without filling the shoe."],
 winter:["heavy","Cushioning insulates as much as the fibre does."]}[se];
 var fib={desk:["Cotton or bamboo blend","Comfort matters more than performance."],
 walk:["Merino or merino blend","Regulates heat and keeps working if it gets damp."],
 sport:["Polyester or nylon blend","Wicks fast, dries faster, survives the friction."],
 work:["Merino with a nylon heel and toe","All-day wear needs both warmth and abrasion resistance."]}[ac];
 if(sh==='loafer'||sh==='sandal'){cush=[se==='winter'?'medium':'light','A low-cut sock has nowhere to put cushioning, so keep it thin whatever the season.'];}
 var sz=se==='winter'&&sh!=='boot'&&sh!=='loafer'&&sh!=='sandal'?'<li><b>Heavy socks need room.</b> A thick pair in a shoe that already fits snugly makes the fit tighter, not warmer. Cold feet in winter are usually tight feet.</li>':'';
 o.innerHTML='<h4>'+H[0]+'</h4><span class="big">'+H[1]+'</span>'+
 '<dl class="kv"><dt>Cushion</dt><dd>'+cush[0]+'</dd><dt>Fibre</dt><dd>'+fib[0]+'</dd></dl>'+
 '<p>'+H[2]+'</p><ul><li>'+cush[1]+'</li><li>'+fib[1]+'</li>'+sz+
 '<li>Check the toe seam. A flat or linked toe sits under the toes without a ridge; a bulky one is felt within an hour.</li></ul>'+
 '<p class="note">A starting point. Fit in your own shoe beats any rule here, so try a pair before buying six.</p>';}
['prShoe','prSeason','prAct'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',pairOut);});
if($('prShoe'))pairOut();
function blOut(){var ac=$('blAct').value,fit=$('blFit').value,fb=$('blFib').value,hrs=n('blHrs'),o=$('blOut');
 var sc=0;
 sc+={walk:1,run:2,hike:3,stand:1,desk:0}[ac];
 sc+={good:0,loose:2,tight:2}[fit];
 sc+={merino:0,poly:0,nylon:1,cotton:2,bamboo:1}[fb];
 sc+=hrs>8?2:hrs>4?1:0;
 var lvl=sc>=6?['High','hi']:sc>=3?['Moderate','mid']:['Low',''];
 var tips=[];
 if(fit==='loose')tips.push('<b>A loose sock is the biggest single factor.</b> Fabric that slides against the skin is what lifts the top layer. Get the size right before changing anything else.');
 if(fit==='tight')tips.push('<b>Too tight is almost as bad.</b> A stretched sock presses the seams in and stops the fibre moving moisture.');
 if(fb==='cotton')tips.push('<b>Swap the cotton.</b> It holds water against the skin, and wet skin blisters at a fraction of the friction dry skin needs.');
 if(fb==='bamboo')tips.push('Bamboo is smooth but holds damp. For long days, merino or a sport polyester is safer.');
 if(ac==='hike'||ac==='run')tips.push('Carry a spare pair and change at the halfway point. Dry socks halfway is worth more than any product.');
 if(hrs>8)tips.push('Over eight hours, take the shoes off for five minutes somewhere in the middle and let both feet dry.');
 tips.push('Deal with a hot spot the moment you notice it. A blister that has formed takes days; a hot spot takes two minutes of tape.');
 tips.push('Trim toenails straight across. A long nail on a downhill is a blister under the nail, which is the worst kind.');
 o.innerHTML='<h4>Blister risk</h4><span class="big">'+lvl[0]+'</span>'+
 '<p><span class="lvl '+lvl[1]+'">'+lvl[0]+' risk</span></p>'+
 '<dl class="kv"><dt>Activity</dt><dd>'+{walk:'Walking',run:'Running',hike:'Hiking',stand:'On your feet all day',desk:'Mostly seated'}[ac]+'</dd><dt>Sock fit</dt><dd>'+{good:'Correct size',loose:'Loose',tight:'Tight'}[fit]+'</dd><dt>Hours</dt><dd>'+hrs+'</dd></dl>'+
 '<p>Blisters need three things together: friction, moisture and time. Remove any one of the three and the other two rarely matter.</p>'+
 '<ul><li>'+tips.join('</li><li>')+'</li></ul>'+
 '<p class="note">General guidance, not medical advice. A blister that is painful, discoloured or will not heal should be seen by a pharmacist or a doctor.</p>';}
['blAct','blFit','blFib','blHrs'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',blOut);});
if($('blAct'))blOut();
})();
