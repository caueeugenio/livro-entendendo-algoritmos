


function procurarChave(){
    let array = [
        {
            box : 'nada'  
        },
        {
            box : 'nada'  
        },
        {
            box : 'chave'  
        }

    ]

    while(array != null){

        array.forEach( (item, indice) => {
            item.box

            if(item === 'chave'){
                console.log(`achei a chave${item[indice]}`)
            }
        });
    }
}

procurarChave();