if (window.matchMedia("(min-width: 800px)").matches){
    console.log(`[${new Date}] Desktop desing set`);

}else{
    console.log(`[${new Date}] Mobile desing set`);
    // var sysBI = document.getElementsByClassName('sysadmin-bottom-i')
    // for (let i = 0; i < sysBI.length; i++){
    //     var currentObject = sysBI[i]
    //     currentObject.style.display = 'none'
    // }
    var inMobile1 = document.getElementById('inMobile1')
    var inMobile2 = document.getElementById('inMobile2')
    var inMobileC = inMobile1.innerHTML

    inMobile1.innerHTML = inMobile2.innerHTML
    inMobile2.innerHTML = inMobileC

    inMobile1.style.textAlign = 'center'
    inMobile2.style.textAlign = 'left'
}