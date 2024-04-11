
window.onload=function(num){
    var query = window.location.search;
    var params = new URLSearchParams(query);
    var nums= params.get("myParam");
    var id=nums.split(",")
	var list=["","暗恋者","咒狐","盗贼","丘比特","觉醒预言家","觉醒愚者",
	"流光伯爵","白昼学者","羊驼","白猫","河豚","子狐","熊","炼金魔女",
	"纯白之女","定序王子","奇迹商人","猎魔人","乌鸦","守墓人","骑士",
	"魔术师","摄梦人","守卫","愚者","猎人","女巫","预言家","平民","寻香魅影",
	"夜之贵族","蚀日侍女","寂夜导师","狼鸦之爪","狼巫","蚀时狼妃","噩梦之影",
	"血月使徒","隐狼","石像鬼","狼美人","恶灵骑士","狼王","白狼王","狼人"];
    var banner=document.getElementById('bad');
	let html=''
    for(var i=0;i<id.length;i++){
		var j=i+1
		html += `
			<div class="box">
				<div class="img"><img src=`+`../images/`+id[i]+`.png alt="" /></div>
				<p>`+j+"-"+`${list[id[i]]}</p>
		    </div>
		  `;
		banner.innerHTML = html;
    }
	html+=`
		<a style="--i: 2;"`+`onclick=go()`+`>重新开始游戏</a>
		<footer class="foot">
			<p></p>
		</footer>
	`
	banner.innerHTML = html;
	
}

	