
getId('BuyTicket').addEventListener('click',()=>{

scrollBy(0,1150)


})


// console.log(getClass('seats'))

const seats=getClass('seats');
const array=[];

for(const seat of seats){
seat.addEventListener('click',(event)=>{
    if(getInnerValue('SeatValue')==4)return;

event.target.style.background='red'
event.target.style.color='white'

if(array.includes(event.target.innerText)){
    return;
}
array.push(event.target.innerText)



const p=document.createElement('p');
p.innerText=event.target.innerText;
getId('container').appendChild(p);
const p2=document.createElement('p');
p2.innerText='Economoy';
getId('container').appendChild(p2)
const p3=document.createElement('p');
p3.innerText=550;
getId('container').appendChild(p3)


// seatValue;
const seatValue=getInnerValue('SeatValue');
const updatedSeatValue=seatValue+1;

setInnerText('SeatValue',updatedSeatValue)


// seat left
const seatLeft=getInnerValue('SeatLeft');
const updateSeatLeft=seatLeft-1;
setInnerText('SeatLeft',updateSeatLeft)

})


}