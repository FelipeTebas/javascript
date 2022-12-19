function verificar() {
    var numi = document.getElementById('ini')
    var numf = document.getElementById('fim')
    var nump = document.getElementById('passo')
    var res = document.getElementById('saida')

    if (numi.value.length == 0  || numf.value.length == 0 || nump.value.length == 0) {
        res.innerHTML = 'Nenhum início ou fim determinado, impossível contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        //convertendo para números
        var i = Number(numi.value)
        var f = Number(numf.value)
        var p = Number(nump.value)

        if (p <= 0){
            alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} `
                res.innerHTML += '👉🏻'
            }
        }else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
                res.innerHTML += '👉🏻'
            }
        }
        res.innerHTML += '👍🏻'
    }
}