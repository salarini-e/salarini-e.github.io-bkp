function fterminal(){
    inputs_term = document.getElementsByClassName("iterm");

    list_t=['t1','t2','t3','t4', 't5']
    list_r=['r1','r2','r3','r4', 'r4']

    count_input=0
    loop=false
    pass=false

    $("#terminal-form").submit(function(){        
        req=document.getElementById(list_t[count_input]).value;
        if(list_t[count_input]=='t5'){
            if(loop==false){
                count_input=0
                change=list_t
                list_t=list_r
                list_r=change
                document.getElementById('terminal-form').reset()
                loop=true
                }
        }
        if (pass==true){
            var jqxhr = $.getJSON( "https://salarini-e.herokuapp.com//api/pw"+req, function() {
                
            })
            .done(function(data) {
                // document.getElementById(list_r[count_input]).value='';   
                document.getElementById(list_r[count_input]).value=data;  
                $('#'+list_t[count_input]).prop('disabled', true); 
                if(list_t[count_input]=='t5'){
                    count_input=-1
                    // return false;
                }                
                if (loop==true){
                    $('#'+list_t[count_input]).prop('disabled', false);
                    document.getElementById(list_t[count_input]).focus(); 
                    loop=false                 
                }else{
                    count_input=count_input+1;
                    $('#'+list_t[count_input]).prop('disabled', false);
                    document.getElementById(list_t[count_input]).focus(); 
                }
                if (data=='password'){
                    document.getElementById(list_t[count_input]).type='password';
                    pass=true;
                }else{
                    pass=false
                }
                
            })
            .fail(function() {
                alert("server connection error");
            });   
        }else{
            var jqxhr = $.getJSON( "https://salarini-e.herokuapp.com//api/"+req, function() {
                
            })
            .done(function(data) {
                // document.getElementById(list_r[count_input]).value='';   
                document.getElementById(list_r[count_input]).value=data;  
                $('#'+list_t[count_input]).prop('disabled', true); 
                if(list_t[count_input]=='t5'){
                    count_input=-1
                    // return false;
                }                
                if (loop==true){
                    $('#'+list_t[count_input]).prop('disabled', false);
                    document.getElementById(list_t[count_input]).focus(); 
                    loop=false                 
                }else{
                    count_input=count_input+1;
                    $('#'+list_t[count_input]).prop('disabled', false);
                    document.getElementById(list_t[count_input]).focus(); 
                }
                if (data=='password'){
                    document.getElementById(list_t[count_input]).type='password';
                    pass=true;
                }
                
            })
            .fail(function() {
                alert("Falha ao conectar ao servidor.");
            });   
        }
        
       
        
        return false;
    });
}