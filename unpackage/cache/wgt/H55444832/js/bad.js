
window.onload=function(num){
    var query = window.location.search;
    var params = new URLSearchParams(query);
    var nums= params.get("myParam");
	var change=params.get("myParam2")
	var s=params.get("myParam3");
	var flag=params.get("myParam4");
	
    var id=nums.split(",")
	var c=parseInt(change)
	var sum=parseInt(s)
	var f=parseInt(flag)
	var list=["","暗恋者","咒狐","盗贼","丘比特","觉醒预言家","觉醒愚者",
	"流光伯爵","白昼学者","羊驼","白猫","河豚","子狐","熊","炼金魔女",
	"纯白之女","定序王子","奇迹商人","猎魔人","乌鸦","守墓人","骑士",
	"魔术师","摄梦人","守卫","愚者","猎人","女巫","预言家","平民","寻香魅影",
	"夜之贵族","蚀日侍女","寂夜导师","狼鸦之爪","狼巫","蚀时狼妃","噩梦之影",
	"血月使徒","隐狼","石像鬼","狼美人","恶灵骑士","狼王","白狼王","狼人","觉醒狼王","觉醒隐狼","魔镜少女","觉醒孤独少女"];
    var banner=document.getElementById('bad');
	let html=''
    for(var i=0;i<sum;i++){
		var j=i+1
		if(id[i]==3)
		{
			html += `
				<div class="box">
					<div class="img"><img src=`+`../images/`+c+`.png alt="" /></div>
					<p>`+j+"-"+`${list[c]}</p>
					<p>（盗贼）</p>
			    </div>
			  `;
		}else{
			html += `
				<div class="box">
					<div class="img"><img src=`+`../images/`+id[i]+`.png alt="" /></div>
					<p>`+j+"-"+`${list[id[i]]}</p>
			    </div>
			  `;
		}

		banner.innerHTML = html;
    }

	if(flag!=0)
	{
		html +=`
				<p>本局游戏余下的牌</p>
				<div class="box">
					<div class="img"><img src=`+`../images/`+id[sum]+`.png alt="" /></div>
					<p>${list[id[s]]}</p>
				</div>
				<div class="box">
					<div class="img"><img src=`+`../images/`+id[sum+1]+`.png alt="" /></div>
					<p>${list[id[sum+1]]}</p>
				</div>
		`;
	}
	banner.innerHTML = html;
	
	html+=`
		<a style="--i: 2;"`+`onclick=go()`+`>重新开始游戏</a>
		<footer class="foot">
			<p></p>
		</footer>
	`
	banner.innerHTML = html;
	
}

	