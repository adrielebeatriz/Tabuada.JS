function tabuada() {
    var num = document.getElementById('txt1')
    var tab = document.getElementById('seltab')
    if(num.value == 0){
    let n = Number(num.value)
    window.alert('Digite um número')
    } else{
        let n  = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}