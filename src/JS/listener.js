app=document.getElementById('app');
app_body=document.getElementById('appbody');
closer=false

function closerWindow(){
    app.style.display = "none";
    document.getElementById(closer).innerHTML=''
    document.getElementById(closer).style.display = "none";
    closer=false
}

document.getElementById('close').addEventListener("click", function(e){ 
    e.preventDefault();
    closerWindow()
});

portfolio=document.getElementById('portfolio');
portfolio.addEventListener("click", function(e){ 
    e.preventDefault();
    if (closer!=false){
        document.getElementById(closer).style.display = "none";
    }
    closer='port'; 
    closerWindow();
    app.style.display = "flex"; 
    app.style.marginTop='2%';
    app.style.marginLeft='35%';
    app.style.height='600px';
    app.style.width='800px';
    app_body.style.height='575px';
    app_body.style.width='100%';
    document.getElementById('port').style.display = "flex";
    // document.getElementById('port').innerHTML="<div class='m-auto'><h4>Ops! Parece que não há nada aqui ainda...</h4><p>Estava página ainda está em desenvolvimento e hospedada no github para testes.</p><!-- <p>Você pode ver algum trabalho meu no Sobre.</p>--></div>"
    gitUrl='https://api.github.com/users/salarini-e/repos'
    var jqxhr = $.getJSON(gitUrl, function(){
                // console.log('Requisitando...')
            })
            .done(function(data) {
                console.log(data);
                div=document.createElement("div");
                div.classList.add("d-flex");
                div.classList.add("w-100");
                div.id="github-repo";
                document.getElementById('port').appendChild(div)
                folders(data)
            })
            .fail(function() {
                    console.log("Falha ao conectar ao servidor.");
            }); 
    folders=(data)=>{
        data.forEach(element => {
            document.getElementById('github-repo').innerHTML+="<div class='div-github-repo mx-auto d-flex flex-column text-center'><a class='d-flex flex-column' target='_blank' href='https://github.com/salarini-e/"+element.name.toString()+"'><img class='folder-icon-git mx-auto' src='./src/imgs/icons/folder.png'><span>"+element.name.toString()+"</span></a></div>"

        });
    };
    closer='port'; 
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
    document.getElementById('apli').innerHTML="<a id='litlegame' class='p-4' href='#'>Little Game.js</a><a id='plotador' class='p-4' href='#'>Plotador.py</a>"
    document.getElementById('litlegame').addEventListener("click", function(e){
        document.getElementById('apli').innerHTML=''
        var canvas = document.createElement('canvas');
        canvas.width=800;
        canvas.height=575;
        document.getElementById('apli').appendChild(canvas)
        game();
    })
    document.getElementById('plotador').addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById('apli').innerHTML="<iframe class='w-100 h-100' src='https://salarini-e.herokuapp.com/'></iframe>"

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
    document.getElementById('term').innerHTML="<p class='mt-2'>Eduardo.py [versão 10.0.000.2021]</p><p>(N) Nenhum direito reservado.</p><form id='terminal-form' action='' method='get'><input autocomplete='off' type='text' name='' class='w-100 iterm' id='t1'><input autocomplete='off' type='text' name='' class='w-100 iterm' id='r1' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='t2' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='r2' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='t3' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='r3' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='t4' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='r4' disabled><input autocomplete='off' type='text' name='' class='w-100 iterm' id='t5' disabled><button type='submit'></button></form>";
    fterminal();
    closer='term'  

    app.style.height='300px'; 
    app.style.width='600px'; 
    app_body.style.height='300px';
    app_body.style.width='600px';
    document.getElementById('t1').focus();  
    document.getElementById('term').addEventListener("keypress", function(e){
        if(e.key === "Escape") {
            app.style.display = "none";
            document.getElementById(closer).style.display = "none";
            closer=false
        }
      });
});

// sobre=document.getElementById('sobre');
// sobre.addEventListener("click", function(e){ 
//     e.preventDefault();
//     if (closer!=false){
//         document.getElementById(closer).style.display = "none";
//     }
    
//     app.style.display = "flex"; 
//     app.style.marginTop='0%';
//     app.style.marginLeft='0%';
//     app.style.position='Absolute';
//     document.getElementById('sobr').style.display = "flex";      
    
//     app.style.height='100%'; 
//     app.style.width='100%'; 
//     app_body.style.height='625px';
//     app_body.style.width='100%';
//     document.getElementById('sobr').innerHTML="<div class='spinner m-auto'></div>"
//     document.getElementById('sobr').innerHTML="<iframe class='w-100 h-100' src='./sobre' title='Teste'></iframe>"

    // var jqxhr = $.getJSON( "https://salarini-e.herokuapp.com/api/port", function() {
    //     document.getElementById('sobr').innerHTML="<div class='spinner m-auto'></div>"
    // })
    //     .done(function(data) {
    //         document.getElementById('sobr').innerHTML=''
    //         for(var k in data) {
    //             document.getElementById('sobr').innerHTML= document.getElementById('sobr').innerHTML + k +": "+ data[k]+ "<br>";
    //         }                
    //     })
    //     .fail(function() {
    //         alert("server connection error");
    //     })
    // closer='sobr'  
// });


