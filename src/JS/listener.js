app=document.getElementById('app');
app_body=document.getElementById('appbody');
closer=false

document.getElementById('close').addEventListener("click", function(e){ 
    e.preventDefault();
    app.style.display = "none";
    document.getElementById(closer).innerHTML=''
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
    document.getElementById('port').innerHTML="<div class='m-auto'><h4>Ops! Parece que não há nada aqui ainda...</h4><p>Estava página ainda está em desenvolvimento e hospedada no github para testes.</p></div>"
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
    document.getElementById('apli').innerHTML="<a id='litlegame' href='#'>Little Game</a>"
    document.getElementById('litlegame').addEventListener("click", function(e){
        document.getElementById('apli').innerHTML=''
        var canvas = document.createElement('canvas');
        canvas.width=800;
        canvas.height=575;
        document.getElementById('apli').appendChild(canvas)
        game();
    })
    // document.getElementById('apli').innerHTML="<div class='m-auto'><h4>Ops! Parece que não há nada aqui ainda...</h4><p>Estava página ainda está em desenvolvimento e hospedada no github para testes.</p></div>" 
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
    document.getElementById('term').innerHTML="<p class='mt-2'>Eduardo.py [versão 10.0.000.2021]</p><p>(N) Nenhum direito reservado.</p><form id='terminal-form' action='' method='get'><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='t1'><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='r1' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='t2' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='r2' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='t3' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='r3' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='t4' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='r4' disabled><input autocomplete='off' type='text' name=''' class='w-100 iterm' id='t5' disabled><button type='submit'></button></form>"
    
    closer='term'  

    app.style.height='300px'; 
    app.style.width='500px'; 
    app_body.style.height='300px';
    app_body.style.width='500px';
    document.getElementById('t1').focus();  
    document.getElementById('term').addEventListener("keypress", function(e){
        if(e.key === "Escape") {
            app.style.display = "none";
            document.getElementById(closer).style.display = "none";
            closer=false
        }
      });
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

var jqxhr = $.getJSON( "https://salarini-e.herokuapp.com/", function() {
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

