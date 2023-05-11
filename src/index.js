let expr = '';
let dbox = document.getElementById('display-box');
var n1, p='false';

function handleClickEvent(e){
  let keyVal = e.target.dataset.value;
  if(keyVal == 'eq')
    eq();
  else if(keyVal == 'del')
    del();
  else if(keyVal == 'acl')
    acl();
  else if(keyVal == 'per'){
    dbox.value = dbox.value + '% of';
    perc();
  }
  else
    disp(keyVal);
}

function disp(key){
  console.log('d',key);
  expr+=key;
  render(false);
}

function eq(){
  let res;
  try{
    if(p){
      expr = n1/100*expr;
      p=false;
    }
    res = eval(expr);
    expr=res;
  }
  catch (Error){
    expr='invalid syntax';
  }
  finally{
    render(true);
    expr='';
  }
}

function acl(){
  expr='';
  render(false);
}

function del(){
  expr = expr.substring(0,expr.length-1);
  render(false);
}

function perc(){
  n1=expr;
  expr='';
  p = true;
}

function render(rs,arg){
  if(rs){
    dbox.style.textAlign = 'right';
    dbox.style.fontSize = '45px';
  }
  else{
    dbox.style.textAlign = 'left';
    dbox.style.fontSize = '35px';
  }
  dbox.value='';
  dbox.value=expr;
}

function init(){
  document.addEventListener('click',handleClickEvent);
}
init();
