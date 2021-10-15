app=document.getElementById('app');
app_body=document.getElementById('appbody');
closer=false

document.getElementById('close').addEventListener("click", function(e){ 
    e.preventDefault();
    app.style.display = "none";
    document.getElementById(closer).style.display = "none";
    closer=false
});

portfolio=document.getElementById('portfolio');
portfolio.addEventListener("click", function(e){ 
    e.preventDefault();
    app.style.display = "flex"; 
    if (closer!=false){
        document.getElementById(closer).style.display = "none";
    }
    app.style.marginTop='2%';
    app.style.marginLeft='35%';
    app.style.height='600px';
    app.style.width='800px';
    app_body.style.height='575px';
    app_body.style.width='100%';
    document.getElementById('port').style.display = "flex";
    closer='port'  
});

aplicativos=document.getElementById('aplicativos');
aplicativos.addEventListener("click", function(e){ 
    e.preventDefault();
    if (closer!=false){
        document.getElementById(closer).style.display = "none";
    }
    app.style.display = "flex"; 
    app.style.marginTop='4%';
    app.style.marginLeft='16%';
    app.style.height='600px'; 
    app.style.width='800px'; 
    app_body.style.height='600px';
    app_body.style.width='800px';
    app.style.marginTop='2%';
    document.getElementById('apli').style.display = "flex";  
    closer='apli'  
});

terminal=document.getElementById('terminal');
terminal.addEventListener("click", function(e){ 
    e.preventDefault();
    if (closer!=false){
        document.getElementById(closer).style.display = "none";
    }
    app.style.display = "flex"; 
    app.style.marginTop='4%';
    app.style.marginLeft='25%';
    document.getElementById('term').style.display = "flex";  
    closer='term'  

    app.style.height='300px'; 
    app.style.width='500px'; 
    app_body.style.height='300px';
    app_body.style.width='500px';
});

sobre=document.getElementById('sobre');
sobre.addEventListener("click", function(e){ 
    e.preventDefault();
    if (closer!=false){
        document.getElementById(closer).style.display = "none";
    }
    app.style.display = "flex"; 
    app.style.marginTop='2%';
    app.style.marginLeft='10%';
    
    document.getElementById('sobr').style.display = "flex";      
    
    app.style.height='600px'; 
    app.style.width='85%'; 
    app_body.style.height='625px';
    app_body.style.width='100%';

    var jqxhr = $.getJSON( "https://salarini-e.herokuapp.com/api/port", function() {
        document.getElementById('sobr').innerHTML="<div class='spinner m-auto'></div>"
    })
        .done(function(data) {
            document.getElementById('sobr').innerHTML=''
            for(var k in data) {
                document.getElementById('sobr').innerHTML= document.getElementById('sobr').innerHTML + k +": "+ data[k]+ "<br>";
            }                
        })
        .fail(function() {
            alert("server connection error");
        })
    closer='sobr'  
});



