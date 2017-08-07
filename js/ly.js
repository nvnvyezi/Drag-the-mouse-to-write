var write = {
	arr :[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],
	switch : false,
	count : 1,
	colors : [],
	main : document.getElementById('main'),
	//判断擦除还是写字
	judge : function(event){
		if(write.switch){
			if(event.ctrlKey){
				write.clean(event);
			}else {
				write.write1(event);
			}
		}
	},
	//写字
	write1 : function (event) {
		console.log(1)
		var div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.left = event.clientX + 'px';
		div.style.top = event.clientY +'px';
		switch(write.count){
			case 1 :div.innerHTML = '女';break;
			case 2 :div.innerHTML = '女';break;
			case 3 :div.innerHTML = '是';break;
			case 4 :div.innerHTML = '个';break;
			case 5 :div.innerHTML = '小';break;
			case 6 :div.innerHTML = '笨';break;
			case 7 :div.innerHTML = '蛋';break;
		}
		write.count+=1;
		if(write.count ==8){
			write.count =1;
		}
		for(var i=0;i<6;i++){
			write.colors[i]=write.arr[Math.floor(Math.random()*16)];
		}
		div.style.color = '#' + write.colors.join('');
		write.main.appendChild(div);
	},
	clean : function(event){
		var target = event.target;
		if(target.tagName.toLowerCase() == 'div' && (target.innerHTML == '女' || target.innerHTML == '女' || target.innerHTML == '是'||target.innerHTML == '个'||target.innerHTML == '小'||target.innerHTML == '笨'||target.innerHTML == '蛋')){
			target.innerHTML = "";
		}
	},
};
write.main.onmousedown = function(){
	write.switch = true;
};
write.main.onmousemove = function(){
	write.judge(event);
};
write.main.onmouseup = function(){
	write.switch  = false;
}