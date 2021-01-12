const md = document.getElementById('markdown');
const converter = new showdown.Converter();

fetch("../README.md")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(text => {
        console.log('MD catched');
        var mdtext = text;
        var html = converter.makeHtml(mdtext);
        md.innerHTML = html;
        console.log('MD to HTML => OK');
    })
    .catch(err => {
        console.error(err);
        let message = err.statusText || "Ocurrio un error"
        md.innerHTML = `Error ${err.status}: ${message}`;
    })