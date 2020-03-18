
	     
	     function mOver(id)
	     {
	         document.getElementById("c"+id).style.display = "block";
	     }
	     function mOut(id)
	     {
	         document.getElementById("c"+id).style.display = "none";
	     }
	     
	     window.onload = function(){
	    		var url=window.location.pathname;
	    	    //alert(url);
	    	    if(url=="/p/home"){
	    	        document.getElementById("dh1").style.color="#d7cfa8"
	    	    }
	    	    if(url=="/p/product"){
	    	        document.getElementById("dh2").style.color="#d7cfa8"
	    	    }
	    	    if(url=="/p/news"){
	    	        document.getElementById("dh3").style.color="#d7cfa8"
	    	    }
	    	    if(url=="/p/culture"){
	    	        document.getElementById("dh4").style.color="#d7cfa8"
	    	    }
	    	    if(url=="/p/about"){
	    	        document.getElementById("dh5").style.color="#d7cfa8"
	    	    } 	   
	    	    
	    	    
	    	   
	    	    if(url=="/w/home"){
	    	    	document.getElementById("li1").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/cart"){
	    	    	document.getElementById("li3").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/userCenter"){
	    	    	document.getElementById("li4").style.color="#d5d5d5"
	    	    } 
	    	    if(url=="/w/allProduct?homeid=1"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=2"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=3"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=4"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=5"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=6"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=7"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    if(url=="/w/allProduct?homeid=8"){
	    	    	document.getElementById("li2").style.color="#d5d5d5"
	    	    }
	    	    
	    	    
	    	    
	    	    /*var li = document.getElementById("ul_id").getElementsByTagName("li").length;
	    	    for(i =1; i<=li; i++){
				    if(url=="/w/allProduct?homeid="+i){
		    	    	document.getElementById("li2").style.color="#d5d5d5"
		    	    }
				} */
	    	    
	    	    
	    	    
	    	}
	     
	     	     
	     
	     
	     
	     