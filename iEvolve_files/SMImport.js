function smSettings(){
	var jqueryhead= document.getElementsByTagName('head')[0];
	var script1= document.createElement('script');
	script1.type= 'text/javascript';

	var sspopuphead= document.getElementsByTagName('head')[0];
	var script2= document.createElement('script');
	script2.type= 'text/javascript';

	var sspopuplink= document.getElementsByTagName('head')[0];
	var link= document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';

	var widgetsJS= document.getElementsByTagName('head')[0];
	var script4= document.createElement('script');
	script4.type= 'text/javascript';

	var widgets = {
			sit : {
				css : "https://widgetsit.ultimatix.net/UltimatixWidgets/css/helper.css",
				js : "https://widgetsit.ultimatix.net/UltimatixWidgets/js/helperWidget.js"
			}, 
			prod : {
				css : "https://widgets.ultimatix.net/UltimatixWidgets/css/helper.css", 
				js : "https://widgets.ultimatix.net/UltimatixWidgets/js/helperWidget.js"
			}
	};

	$.ajax({
	    type: 'POST',
	    url: '/iEvolve/rest/getScript',
	    dataType: 'json',
	   
	    success: function(result) {
	    	
	    	if(result.JarType == "SSO" ){
	    		
	    		//   script1.src=result.jqueryJsPath;
	    	       script2.src=result.sspopupJsPath;
	    	       link.href=  result.sspopupCssPath;
	    	    //   script4.src = result.helperWidgetJsPath;
	    	       
	    	   //    jqueryhead.appendChild(script1);
	    	       
	    	       sspopuphead.appendChild(script2);
	    	       sspopuplink.appendChild(link);
	    	       
	    	   //    $jq = jQuery.noConflict();
	    	       
	    	       var js = "";
	    	       var css = "";
	    	       
	    	       if(window.location.host == "ievolve.ultimatix.net"){
	    	    	   js = widgets.prod.js;
	    	    	   css = widgets.prod.css;
	    	       }else{
	    	    	   js = widgets.sit.js;
	    	    	   css = widgets.sit.css;
	    	       }
	    	       
	    	       loadWidgets(js,css);

	    	}
	       
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	    	console.log("Error... " + textStatus + "        " + errorThrown);
	    }
	});
};

function loadWidgets(js,css){
	$jq.ajax({
  	  url: js,
	      dataType: "script",
	      cache: true,
	     success: function(result) {
	    	var widgetCSS = css;
			$jq("head").append('<link rel="stylesheet" type="text/css" href="' + widgetCSS + '">');

			HWgetWidget('iEvolve');//Application Name is Provided By the Ultimatix Team
	     },
	     error : function(error){
	    	 console.log("Unable to load widgets !");
	     }
     });
}