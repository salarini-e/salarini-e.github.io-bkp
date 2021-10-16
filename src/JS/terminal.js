inputs_term = document.getElementsByClassName("iterm");

list_t=['t1','t2','t3','t4', 'stop']
list_r=['r1','r2','r3','r4', 'stop']

count_input=0
$("#terminal-form").submit(function(){
    if(list_t[count_input]=='stop'){
        count_input=0
        return false;
    }
    $('#'+list_t[count_input]).prop('disabled', true); 
    document.getElementById(list_r[count_input]).value='teste';
    count_input=count_input+1;
    $('#'+list_t[count_input]).prop('disabled', false);
    document.getElementById(list_t[count_input]).focus(); 
    return false;
});
  
