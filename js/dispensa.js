// declaração produtos "Have"
    function setItensHave(){
        var barCodeHave = document.getElementById('barCodeHave')
        var nameHave = document.getElementById('nameHave')
        var priceHint = document.getElementById('priceHint')
        var amountHave = document.getElementById('amountHave')
        // var idHave = document.getElementById('idHave')

        localStorage.setItem('barCodeHave' + [i], barCodeHave.value)
        localStorage.setItem('nameHave' + [i], nameHave.value)
        localStorage.setItem('priceHint' + [i], priceHint.value)
        localStorage.setItem('amountHave' + [i], amountHave.value)
        // localStorage.setItem('idHave', [i])
    }
// fim set itensHave //********************************

// logica "Buy"    
    // function setItensBuy(){
    //     var barCodeBuy = document.getElementById('barCodeBuy')
    //     var nameBuy = document.getElementById('nameBuy')
    //     var priceBuy = document.getElementById('priceBuy')
    //     var amountBuy = document.getElementById('amountBuy')
    //     var store = document.getElementById('store')
    //     // var idBuy = document.getElementById('idBuy')

    //     localStorage.setItem('barCodeBuy' + [i], barCodeBuy)
    //     localStorage.setItem('nameBuy' + [i], nameBuy)
    //     localStorage.setItem('priceBuy' + [i], priceBuy)
    //     localStorage.setItem('amountBuy' + [i], amountBuy)
    //     localStorage.setItem('store' + [i], store)
    //     localStorage.setItem('idBuy' + [i], idBuy)
    // }
//fim itensBuy //********************************

function cadastraProdutoHave(){

    i = localStorage.getItem('idHave')

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
// function cadastraProdutoBuy(){
//     if( i == 0){
//         setItensBuy();
//         i++;
//         localStorage.setItem('idBuy', i)
//     }
//     else{
//         setItensBuy();
//         i++;
//         localStorage.setItem('idBuy', i)
//     }
// }

// listaHave
var tbodyListaProdutosHave = document.querySelector('#listaProdutoHave');

// fim listaHave //********************************

function getItensHave(){
    let barCodeHaveList = document.getElementById('barCodeHaveList'+ [i])
    let nameHaveList = document.getElementById('nameHaveList'+ [i])
    let priceHintList = document.getElementById('priceHintList'+ [i])
    let amountHaveList = document.getElementById('amountHaveList'+ [i])
    // let idHaveList = document.getElementById('idHaveList')

    barCodeHaveList.innerHTML = localStorage.getItem('barCodeHave'+[i])
    nameHaveList.innerHTML = localStorage.getItem('nameHave'+[i])
    priceHintList.innerHTML = localStorage.getItem('priceHint'+[i])
    amountHaveList.innerHTML = localStorage.getItem('amountHave'+[i])
}

function listaProdutoHave(){
    
    idHave = localStorage.getItem('idHave')
    console.log(idHave)
    i=0;
    
    for(let i = 0; i <= idHave; i++){
        console.log(i)
        
        var trListaHave = document.createElement('tr')
            trListaHave.id = "trListaHave"
            var trLista = document.querySelector('#trListaHave')

            tbodyListaProdutosHave.appendChild(trListaHave)

        var barCodeHaveList = document.createElement('td')
        barCodeHaveList.id = "barCodeHaveList"+ [i]
            
        var nameHaveList = document.createElement('td')
            nameHaveList.id = "nameHaveList"+ [i]

        var priceHintList = document.createElement('td')
            priceHintList.id = "priceHintList"+ [i]
            
        var amountHaveList = document.createElement('td')
            amountHaveList.id = "amountHaveList"+ [i]
                        
        trLista.appendChild(barCodeHaveList, nameHaveList,priceHintList,amountHaveList)
            
        getItensHave();
        
    }    
}

// listaBuy
    var tbodyListaProdutosBuy = document.getElementById('listaProdutoBuy');

//fim listaBuy //********************************

// function listaProdutoBuy(){   
    
    
//     var trLista = document.createElement('tr')
//         trLista.id = "trListaBuy"+[i]

//     var tdLista = document.createElement('td')
//         tdLista.id = "tdListaBuy" + [i]

//     tbodyListaProdutos.appendChild(trLista)
//         trLista.appendChild(tdLista)
// }