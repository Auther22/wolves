
window.onload=function(num){
	var num=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
					0,0,0,0,0,0];
    var pics=new Array();
	var list=["","暗恋者","咒狐","盗贼","丘比特","觉醒预言家","觉醒愚者",
	"流光伯爵","白昼学者","羊驼","白猫","河豚","子狐","熊","炼金魔女",
	"纯白之女","定序王子","奇迹商人","猎魔人","乌鸦","守墓人","骑士",
	"魔术师","摄梦人","守卫","愚者","猎人","女巫","预言家","平民","寻香魅影",
	"夜之贵族","蚀日侍女","寂夜导师","狼鸦之爪","狼巫","蚀时狼妃","噩梦之影",
	"血月使徒","隐狼","石像鬼","狼美人","恶灵骑士","狼王","白狼王","狼人"];
    var banner=document.getElementById('good');
	var sum=0
	let html=''
	html+=`
	<div class="head">
		<div class="fixed_head">
			<div class="small">${sum}</div>
		</div>
	</div>
	`;
	
	
    for(var i=1;i<=45;i++){

		html += `
			<div class="box">
				<div class="img"><img src=`+`../images/`+i+`.png alt="" /></div>
				<p>${list[i]}</p>
				<div>
					<button class="sub" style="width: 30px; height: 30px; border-radius:50%;"`+`onclick=sub(`+i+`)`+`>-</button>
					<b id="`+i+`" style="font-size:15px;">${num[i]}</b>
					<button class="add" style="width: 30px; height: 30px; border-radius:50%;"`+`onclick=add(`+i+`)`+`>+</button>
				</div>
		    </div>
		  `;
		banner.innerHTML = html;

    }
	html+=`
		<a style="--i: 2;"`+`onclick=go()`+`>进入黑夜</a>
		<footer class="foot">
			<p>`+`推研社`+`        `+`Version = 1.14514</p>
		</footer>
	
	`
	banner.innerHTML = html;
	
}

	