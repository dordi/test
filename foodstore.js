var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;
    if (window.ActiveXObject) {
        try {
            
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
            xmlHttp = false;
        }
        
    }else {
        try {
            xmlHttp = new XMLHttpRequest();
        }catch (e){
            xmlHttp = false;
        }
    }
    if(!xmlHttp) alert("cannot create that object");
    else return xmlHttp;
}

function process(){
    if(xmlHttp.readyState == 0 || xmlHttp.status == 4){
        var food = encodeURIComponent(document.getElementById('userInput').value);
        xmlHttp.open("GET",'foodstore.php?food=' + food,true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else {
        setTimeout('process()',1000);
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            xmlresponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlresponse.documentElement;
            message = xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
            setTimeout('process()',1000);
        }else{
            alert("Something went wrong!" + xmlHttp.status + " " + xmlHttp.readyState);
        }
    }
}
