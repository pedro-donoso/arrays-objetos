let dato = document.getElementById('dato');
let dato2 = document.getElementById('dato2');

let cargarDatos = document.getElementById('cargarDatos');
let add = document.getElementById('add');
let orderBy = document.getElementById('orderBy')
let orderBySort = document.getElementById('orderBySort')
let orderByReverse = document.getElementById('orderByReverse')
let btnPop = document.getElementById('btnPop')
let btnShitf = document.getElementById('btnShitf')
let eliminado = document.getElementById('eliminado')

let sumar = document.getElementById('suma');
let promedio = document.getElementById('promedio');
let matrice = document.getElementById('matrice');
let matrice2 = document.getElementById('matrice2');

let arreglo;

function eliminarEspacios(array) {
    //Método Filter
    let datos = array.filter(function(item) {
        return item != "";
    })
    return datos
}

function caracterNumero(array) {
    //Método map
    let numero = array.map(function(item) {
        return parseInt(item)
    })
    return numero;
}


function metodoSplit(input) {
    return input.value.split(',')
}

function metodoJoin(array) {
    return array.join(', ')
}

cargarDatos.addEventListener('click', function() {
    let datos = metodoSplit(dato)
    if (datos.length > 0) {
        arreglo = eliminarEspacios(datos)
        console.log(arreglo)
        arreglo = caracterNumero(arreglo)
        matrice.innerHTML = `[${metodoJoin(arreglo)}]`
    }

    //    console.log(arreglo) 
})

sumar.addEventListener('click', function() {
    let valor = arreglo.reduce(function(acumulador, item) {
        return acumulador + item;
    }, 0)
    document.getElementById('resultadoSuma').innerHTML = valor
});

promedio.addEventListener('click', function() {
    let valor = arreglo.reduce(function(acumulador, item) {
        return acumulador + item;
    }, 0)
    document.getElementById('resultadoPromedio').innerHTML = valor / arreglo.length
})

add.addEventListener('click', function() {
    let datos = metodoSplit(dato2)
    if (datos.length > 0) {
        let nuevo = eliminarEspacios(datos)

        nuevo = caracterNumero(nuevo)

        if (typeof arreglo === 'undefined') {
            arreglo = nuevo
        } else {
            arreglo = arreglo.concat(nuevo)
        }
        matrice2.innerHTML = `[${metodoJoin(arreglo)}]`

    }
})

orderBySort.addEventListener('click', function() {
    let ordenado = arreglo.sort()
    orderBy.innerHTML = `Método sort [${ordenado}]`
})


orderByReverse.addEventListener('click', function() {
    let ordenado = arreglo.reverse()
    orderBy.innerHTML = `Método reverse [${ordenado}]`
})


btnPop.addEventListener('click', function() {
    arreglo.pop()
    eliminado.innerHTML = `Método reverse [${metodoJoin(arreglo)}]`
})


btnShitf.addEventListener('click', function() {
    arreglo.shift()
    eliminado.innerHTML = `Método shitf [${metodoJoin(arreglo)}]`
})