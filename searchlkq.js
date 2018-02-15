/* test */
function browseLKQ(filter){
//alert(filter);
var bufText="";
document.getElementById("output").innerHTML = "";
var codeList = ["223","265","260","264","283","285","286","284","282","268","263","289","287","261","262","292","281","280","290","291","230","232","196","197","185","190","225","198","189","134","180","192","224","229","163","582","581","584","250","254","255","246","175","348","346","228","142","227","226","168","253","257","259","746","245","111","213","220","212","217","215","218","234","235","239","236","256"];
for (i = 0, len = codeList.length, text = ""; i < len; i++) { 
	//alert(i);
    var url1="http://www.lkqpickyourpart.com/DesktopModules/pyp_vehicleInventory/getVehicleInventory.aspx?page=0&filter="+filter+"&sp=&cl=&carbuyYardCode=1"+codeList[i]+"&pageSize=15&language=en-US&thumbQ=60&fullQ=70";
	//makeCorsRequest(url1);
	ajaxLoad("output", url1, codeList[i]);	
	}

}

function ajaxLoad(id, url1, code){
	var xmlHttp;
	try {// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();		
	} catch (e) {// Internet Explorer
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				//alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	
	xmlHttp.onreadystatechange = function(){
		if (xmlHttp.readyState == 4) {
			//Get the response from the server and extract the section that comes in the body section of the second html page avoid inserting the header part of the second page in your first page's element
			var respText = xmlHttp.responseText;
			
			if (respText.indexOf("No results")==-1) {
				//Insert result
				var url2="https://www.lkqpickyourpart.com/recents?store="+code+"&language=en-US";
				var linkYard="<hr /><h3><a href='" + url2 + "'>Yard "+ code + "</a></h3><br />";
				var newDiv = document.createElement('div');
				newDiv.innerHTML = linkYard + respText;
				document.getElementById(id).appendChild(newDiv);
			}
		}
	}

	var elem = document.getElementById(id);
	if (!elem) {
		//alert('The element with the passed ID doesn\'t exists in your page');
		return;
	}

	xmlHttp.open("GET", url1, true);
	xmlHttp.send(null);
}		
