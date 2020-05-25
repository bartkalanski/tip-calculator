
document.getElementById('tip-form').onchange = function(){
    let billAmount = Number(document.getElementById('bill-amount').value);
    let bringTipInfo = document.getElementById('service-rating');
    let tipAmount = bringTipInfo.options[bringTipInfo.selectedIndex].text;
    let totalTip = tipAmount / 100 + 1;
    let totalAmount = Math.round(totalTip * billAmount);
    document.getElementById('total').innerHTML = `Price: £${billAmount}<br>Tip: ${tipAmount}%<br>Total: £${totalAmount}<br>`;
    document.getElementById('total').style.display='block';
}


