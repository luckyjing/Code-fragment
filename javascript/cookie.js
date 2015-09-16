var Cookie = {
	get: function (name){
		var cookieName = encodeURIComponent(name) + '=',
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null;
		if (cookieStart >-1){
			//查找到此cookie值
			var cookieEnd = document.cookie.indexOf(';',cookieStart);
			if (cookieEnd == -1){
				//未找到分号，说明该cookie是字符串中的最后一个，则余下的字符全部为cookie的值 
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
		}
		return cookieValue;
	},
	
	set: function (name,value,days,path,domain,secure){
		var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		 if (days) {
			 var time = null;
			 if(days == -1){
				 //设置过期时间，用以删除
				time = new Date(0);
				cookieText += '; expires='+time.toGMTString();
			 }else{
			    time = new Date();
				time.setTime(time.getTime() + days * 24 * 60 * 60 * 1000);
				cookieText += '; expires='+time.toGMTString();
			 }
		 }
		 if (path) {
			 cookieText += '; path=' + path;
		 }
		 if (domain) {
			 cookieText += '; domain=' + domain;
		 }
		 if(secure) {
			 cookieText += '; secure';
		 }
		 document.cookie = cookieText;
	},
	
	unset: function(name,path,domain,secure){
		this.set(name,"",-1,path,domain,secure);
	}
};