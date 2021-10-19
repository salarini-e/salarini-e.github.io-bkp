inputs_term = document.getElementsByClassName("iterm");

list_t=['t1','t2','t3','t4', 't5']
list_r=['r1','r2','r3','r4', 'r4']

count_input=0
loop=false

$("#terminal-form").submit(function(){
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
    $('#'+list_t[count_input]).prop('disabled', true); 
    document.getElementById(list_r[count_input]).value='teste';
    if(list_t[count_input]=='t5'){
        count_input=-1
        // return false;
    }
    if (loop==true){
        count_input=count_input;
        $('#'+list_t[count_input]).prop('disabled', false);
        document.getElementById(list_t[count_input]).focus(); 
    }else{
        count_input=count_input+1;
        $('#'+list_t[count_input]).prop('disabled', false);
        document.getElementById(list_t[count_input]).focus(); 
    }
    loop=false
    return false;
});
  
