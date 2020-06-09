document.getElementById('tip-form').onchange = function() {
    let billAmount = Number(document.getElementById('bill-amount').value);
    let bringTipInfo = document.getElementById('service-rating');
    let splitAmount = Number(document.getElementById('split-amount').value);
    let tipAmount = bringTipInfo.options[bringTipInfo.selectedIndex].text;
    let totalTip = tipAmount / 100 + 1;
    let totalSplitAmount = Math.round((totalTip * billAmount) / splitAmount);
    let totalAmount = totalSplitAmount * splitAmount
    document.getElementById('total').innerHTML = `Price: £${billAmount}<br>Tip: ${tipAmount}%<br>Split per person: £${totalSplitAmount}<br>Total: £${totalAmount}<br>`;
    document.getElementById('total').style.display = 'block';
}