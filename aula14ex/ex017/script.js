function calcular(){
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')
    var texto = document.getElementById('texto')
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número para ver sua tabuada!!!')
    }else {
        res.innerHTML = ''
        var n = Number(num.value)
        texto.innerHTML = `Tabuada do ${n}: <br>`
        for (c=1; c<=10; c ++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
    
}
