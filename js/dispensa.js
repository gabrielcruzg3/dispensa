function setItensHave(){
    var barCodeHave = document.getElementById('barCodeHave')
    var nameHave = document.getElementById('nameHave')
    var priceHint = document.getElementById('priceHint')
    var amountHave = document.getElementById('amountHave')
    // var idHave = document.getElementById('idHave')

    localStorage.setItem('barCodeHave' + i, barCodeHave.value)
    localStorage.setItem('nameHave' + i, nameHave.value)
    localStorage.setItem('priceHint' + i, priceHint.value)
    localStorage.setItem('amountHave' + i, amountHave.value)
    localStorage.setItem('idHave', i)
    }

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

function cadastraProdutoHave(){

    idHave = localStorage.getItem('idHave')

    if( idHave == null){
        i=0
        setItensHave();
        i++; 
        localStorage.setItem('idHave', i)
    }
    else{
        i = idHave;
        setItensHave();        
        i++;
        localStorage.setItem('idHave', i)
    }   
    
    listaProdutoHave()
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

// function getItensHave(){
//     var barCodeHaveList = document.getElementById('barCodeHaveList'+ i)
//     var nameHaveList = document.getElementById('nameHaveList'+ i)
//     var priceHintList = document.getElementById('priceHintList'+ i)
//     var amountHaveList = document.getElementById('amountHaveList'+ i)
//     // let idHaveList = document.getElementById('idHaveList')

//     barCodeHaveList.innerHTML = localStorage.getItem('barCodeHave'+i)
//     nameHaveList.innerHTML = localStorage.getItem('nameHave'+i)
//     priceHintList.innerHTML = localStorage.getItem('priceHint'+i)
//     amountHaveList.innerHTML = localStorage.getItem('amountHave'+i)
// }

function listaProdutoHave(){
    
    idHave = localStorage.getItem('idHave')
    console.log(idHave)
    i=0;

    for (let i = 0; i <= idHave; i++){
    
        var trListaHave = document.createElement('tr')
            trListaHave.id = "trListaHave" + i       
        
        
        var tbodyListaProdutos = document.querySelector('#listaProdutoHave');
            tbodyListaProdutos.appendChild(trListaHave)

        let barCodeHave = document.createElement('td')
            barCodeHave.id = "barCodeHaveList"+ i
            
        let nameHave = document.createElement('td')
            nameHave.id = "nameHaveList"+ i

        let priceHint = document.createElement('td')
            priceHint.id = "priceHintList"+ i
            
        let amountHave = document.createElement('td')
            amountHave.id = "amountHaveList"+ i
        
        trListaHave.appendChild(barCodeHave)
        trListaHave.appendChild(nameHave)
        trListaHave.appendChild(priceHint)
        trListaHave.appendChild(amountHave)  

        var barCodeHaveList = document.getElementById('barCodeHaveList'+ i)
        var nameHaveList = document.getElementById('nameHaveList'+ i)
        var priceHintList = document.getElementById('priceHintList'+ i)
        var amountHaveList = document.getElementById('amountHaveList'+ i)
        // let idHaveList = document.getElementById('idHaveList')
    
        barCodeHaveList.innerHTML = localStorage.getItem('barCodeHave'+i)
        nameHaveList.innerHTML = localStorage.getItem('nameHave'+i)
        priceHintList.innerHTML = localStorage.getItem('priceHint'+i)
        amountHaveList.innerHTML = localStorage.getItem('amountHave'+i)
    }
     

}

    var tbodyListaProdutosBuy = document.getElementById('listaProdutoBuy');

function listaProdutoBuy(){   
        
    var trLista = document.createElement('tr')
        trLista.id = "trListaBuy"+[i]

    var tdLista = document.createElement('td')
        tdLista.id = "tdListaBuy" + [i]

    tbodyListaProdutos.appendChild(trLista)
        trLista.appendChild(tdLista)
}