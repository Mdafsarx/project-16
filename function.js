
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
};

const showElementById=(id)=>{

  getId(id).classList.remove('hidden')

};
function hideById(id){
  getId(id).classList.add('hidden')
}