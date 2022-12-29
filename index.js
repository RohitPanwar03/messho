function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}
function loadcoupon(){
    document.getElementsByClassName('coupon')[0].style.display='block';
    document.getElementsByClassName('mydark').style.opacity='0.7'
}
const closecoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display='none';
    document.getElementsByClassName('mydark').style.opacity='1'
}