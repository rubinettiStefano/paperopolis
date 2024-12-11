//sarà la mia lista di paperini
let mieiPaperini = null;

//funzione che viene chiamata in automatico quando la pagina viene caricata
function prendiIPaperiniDalServeConAJAX()
{
    //qui faccio una request GET a /mannaggina
    //la response conterrà il JSON di 3 paperini
    //perchè il mio metodo nel rest controller produce una lista di 3 paperini
    // [
    //   {
    //     "urlo": "Quack!",
    //     "condanna": "Condanna 1"
    //   },
    //   {
    //     "urlo": "Quack Quack!",
    //     "condanna": "Condanna 2"
    //   },
    //   {
    //     "urlo": "Super Quack!",
    //     "condanna": "Condanna 3"
    //   }
    // ]
    $.ajax({
        url: "/mannaggina",
        method: "GET",
        //qui gli passo la callBack, la FUNZIONE DA CHIAMARE QUANDO ARRIVA LA RESPONSE
        //success si ""TRIGGERA"" quando arriva la response, sì
        success: riempiListaPaperini
        //qui non lo vedete ma in automatico gli passa anche un parametro, contenente il body della response
        //il JSON sopracitato
    })
}

//qui arriva in automatico come parametro il JSON PARSATO, che io chiamo "responseDelMannagginaDiServer"
function riempiListaPaperini(responseDelMannagginaDiServer)
{
    mieiPaperini = responseDelMannagginaDiServer;//lo mette nella lista
    graficaPaperini();//chiama la funzione che grafica la pagina
}

function graficaPaperini()
{
    let cont = `<h1>PAPERINI</h1>`
    for(let p of mieiPaperini)
        cont+=`<p>${p.id} ${p.urlo}  ${p.condanna}</p>`

    document.getElementById('paperopolist').innerHTML = cont;
}

function salvaPapeffimero(event)
{
    event.preventDefault();
    //vado a pigghiare a form
    let miaForm = document.getElementById('paperopoform');
    console.log("form prima della conversione",miaForm);
    let formConvertitaInOggetto = Object.fromEntries(new FormData(miaForm).entries());
    console.log("form dopo la conversione",formConvertitaInOggetto);
    let mannajson = JSON.stringify(formConvertitaInOggetto);
    console.log("form dopo la JSONIZZAZIONE ",mannajson);

    $.ajax({
        url: "/mannaggina",
        method: "POST",
        contentType: "application/json",
        data: mannajson,
        success:aggiungiPaperinoAllaLista
    })
}

//                              qui ci sarà il JSON restituito da server
//                          {"id":8,"urlo":"yeeeeeeeeeee","condanna":"MANNAGGINA PAPEROTTO"}
function aggiungiPaperinoAllaLista(ilPapeffimero)
{
    //lo aggiungo alla lista
    mieiPaperini.push(ilPapeffimero);
    //rigrafico la lista anche con lui dentro
    graficaPaperini();
}


