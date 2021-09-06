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

    localStorage.setItem('barCodeBuy' + i, barCodeBuy.value)
    localStorage.setItem('nameBuy' + i, nameBuy.value)
    localStorage.setItem('priceBuy' + i, priceBuy.value)
    localStorage.setItem('amountBuy' + i, amountBuy.value)
    localStorage.setItem('store' + i, store.value)
    localStorage.setItem('idBuy', i)
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
    idBuy = localStorage.getItem('idBuy')

    if( idBuy == null){
        i=0
        setItensBuy();
        i++;
        localStorage.setItem('idBuy', i)
    }
    else{
        i = idBuy
        setItensBuy();
        i++;
        localStorage.setItem('idBuy', i)
    }

    listaProdutoBuy()
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
        
    idBuy = localStorage.getItem('idBuy')
    
    i=0;

    for (let i = 0; i <= idBuy; i++){
    
        var trListaBuy = document.createElement('tr')
            trListaBuy.id = "trListaBuy" + i       
        
        
        var tbodyListaProdutos = document.querySelector('#listaProdutoBuy');
            tbodyListaProdutos.appendChild(trListaBuy)

        let barCodeBuy = document.createElement('td')
            barCodeBuy.id = "barCodeBuyList"+ i
            
        let nameBuy = document.createElement('td')
            nameBuy.id = "nameBuyList"+ i

        let priceBuy = document.createElement('td')
            priceBuy.id = "priceBuyList"+ i
            
        let amountBuy = document.createElement('td')
            amountBuy.id = "amountBuyList"+ i

        let store = document.createElement('td')
            store.id = "storeList"+ i
        
        trListaBuy.appendChild(barCodeBuy)
        trListaBuy.appendChild(nameBuy)
        trListaBuy.appendChild(priceBuy)
        trListaBuy.appendChild(amountBuy) 
        trListaBuy.appendChild(store) 

        var barCodeBuyList = document.getElementById('barCodeBuyList'+ i)
        var nameBuyList = document.getElementById('nameBuyList'+ i)
        var priceBuyList = document.getElementById('priceBuyList'+ i)
        var amountBuyList = document.getElementById('amountBuyList'+ i)
        var storeList = document.getElementById('storeList'+ i)
        // let idBuyList = document.getElementById('idBuyList')
    
        barCodeBuyList.innerHTML = localStorage.getItem('barCodeBuy'+i)
        nameBuyList.innerHTML = localStorage.getItem('nameBuy'+i)
        priceBuyList.innerHTML = localStorage.getItem('priceBuy'+i)
        amountBuyList.innerHTML = localStorage.getItem('amountBuy'+i)
        storeList.innerHTML = localStorage.getItem('store')
    }   
}