//readyState = 0

var xhr = new XMLHttpRequest

xhr.addEventListener("readystatechange", ()=> {
    console.log(`Nuevo Estado ${xhr.readyState}`)
})

//readyState = 1
//XHR.open(metodo String, url String)

xhr.open("get", "info.txt");

//XHR.send([{String|FormData|Blob}])
xhr.send()