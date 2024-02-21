
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
setInnerText('SeatLeft',updateSeatLeft);

// 
const ticketPrice=550;
const totalUpdatedPrice=getInnerValue('totalPrice')+ticketPrice;
setInnerText('totalPrice',totalUpdatedPrice)
setInnerText('totalGrandPrice',totalUpdatedPrice);
if(array.length===4){
    getId('apply').removeAttribute('disabled');

getId('apply').addEventListener('click',(e)=>{
    
    e.target.style.background='blue';
const CopInputValue=getId('inputCop').value ;
if(CopInputValue=='NEW15'){
    const discount=totalUpdatedPrice * 0.15;
const h1=document.createElement('h1');
h1.style.fontWeight='bold'
h1.innerText='Discount:';
const h2=document.createElement('h2');
h2.style.fontWeight='bold'
h2.innerText=discount;
getId('discount').appendChild(h1);
getId('discount').appendChild(h2)
    const DiscountGrandTotal=totalUpdatedPrice - discount;
setInnerText('totalGrandPrice',DiscountGrandTotal);
hideById('Code');
}
else if(CopInputValue=='Couple 20'){

const discount=totalUpdatedPrice * 0.2;
const h1=document.createElement('h1');
h1.style.fontWeight='bold'
h1.innerText='Discount:';
const h2=document.createElement('h2');
h2.style.fontWeight='bold'
h2.innerText=discount;
getId('discount').appendChild(h1);
getId('discount').appendChild(h2);
const DiscountGrandTotal=totalUpdatedPrice-discount;
setInnerText('totalGrandPrice',DiscountGrandTotal);
hideById('Code')


 }
else{return alert('Bhai Paknami korte ais na')}



})


}


const number=getId('Number').value;
if(array.length>0&&number.length>4)
{
getId('next').removeAttribute('disabled')
}

getId('Number').addEventListener('input',(e)=>{
    if(array.length>0&&e.target.value.length>4){
        getId('next').removeAttribute('disabled')
    }
})


})


}


getId('next').addEventListener('click',()=>{
    
showElementById('success');
getId('success').classList.add('flex');
getId('main').classList.add('blur-sm');
getId('header').classList.add('blur-sm');
getId('success').classList.add('blur-none');


});

getId('continue').addEventListener('click',()=>{

    hideById('success');
    getId('main').classList.remove('blur-sm');
getId('header').classList.remove('blur-sm');
getId('success').classList.remove('blur-none');


})