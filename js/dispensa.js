// declaração produtos "Have"
    function setItensHave(){
        var barCodeHave = document.getElementById('barCodeHave')
        var nameHave = document.getElementById('nameHave')
        var priceHint = document.getElementById('priceHint')
        var amountHave = document.getElementById('amountHave')
        // var idHave = document.getElementById('idHave')

        localStorage.setItem('barCodeHave' + [i], barCodeHave)
        localStorage.setItem('nameHave' + [i], nameHave)
        localStorage.setItem('priceHint' + [i], priceHint)
        localStorage.setItem('amountHave' + [i], amountHave)
        localStorage.setItem('idHave' + [i], idHave)
    }
// fim set itensHave //********************************

// logica "Buy"    
    function setItensBuy(){
        var barCodeBuy = document.getElementById('barCodeBuy')
        var nameBuy = document.getElementById('nameBuy')
        var priceBuy = document.getElementById('priceBuy')
        var amountBuy = document.getElementById('amountBuy')
        var store = document.getElementById('store')
        // var idBuy = document.getElementById('idBuy')

        localStorage.setItem('barCodeBuy' + [i], barCodeBuy)
        localStorage.setItem('nameBuy' + [i], nameBuy)
        localStorage.setItem('priceBuy' + [i], priceBuy)
        localStorage.setItem('amountBuy' + [i], amountBuy)
        localStorage.setItem('store' + [i], store)
        localStorage.setItem('idBuy' + [i], idBuy)
    }
//fim itensBuy //********************************

function cadastraProdutoHave(){
    if( i == 0){        
        setItensHave();
        i++; 
        localStorage.setItem('idHave', i)
    }
    else{
        setItensHave();        
        i++;
        localStorage.setItem('idHave', i)
    }    
}
function cadastraProdutoBuy(){
    if( i == 0){
        setItensBuy();
        i++;
        localStorage.setItem('idBuy', i)
    }
    else{
        setItensBuy();
        i++;
        localStorage.setItem('idBuy', i)
    }
}

// listaHave
var tbodyListaProdutosHave = document.getElementById('listaProdutoHave');

// fim listaHave //********************************

function getItensHave(){
    let barCodeHaveList = document.getElementById('barCodeHaveList')
    let nameHaveList = document.getElementById('nameHaveList')
    let priceHintList = document.getElementById('priceHintList')
    let amountHaveList = document.getElementById('amountHaveList')
    // let idHaveList = document.getElementById('idHaveList')

    barCodeHaveList.innerHTML = localStorage.getItem('barCodeHave'+[i])
    nameHaveList.innerHTML = localStorage.getItem('nameHave'+[i])
    priceHintList.innerHTML = localStorage.getItem('priceHint'+[i])
    amountHaveList.innerHTML = localStorage.getItem('amountHave'+[i])
    // idHaveList
}

function listaProdutoHave(){
    
    i = localStorage.getItem('idHave')

    for (let i = 0; i < i.length; i++){
        var trLista = document.createElement('tr')
            trLista.id = "trListaHave"+[i]

        var tdLista = document.createElement('td')
            tdLista.id = "barCodeHaveList"+[i]
        var tdLista = document.createElement('td')
            tdLista.id = "nameHaveList"+[i]
        var tdLista = document.createElement('td')
            tdLista.id = "priceHintList"+[i]
        var tdLista = document.createElement('td')
            tdLista.id = "amountHaveList"+[i]

        tbodyListaProdutosHave.appendChild(trLista)
            trLista.appendChild(tdLista)
            
        getItensHave();
    }

    
}

// listaBuy
    var tbodyListaProdutosBuy = document.getElementById('listaProdutoBuy');

//fim listaBuy //********************************

function listaProdutoBuy(){   
    
    
    var trLista = document.createElement('tr')
        trLista.id = "trListaBuy"
    var tdLista = document.createElement('td')
        tdLista.id = "tdListaBuy" + [i]

    tbodyListaProdutos.appendChild(trLista)
        trLista.appendChild(tdLista)
}