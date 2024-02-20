
function getId(id){
  return  document.getElementById(id)
}
function getClass(Class){

return document.getElementsByClassName(Class)

};

function getInnerValue(id){
  return  parseInt(getId(id).innerText)
};


function setInnerText (id,value){
    getId(id).innerText=value;
}