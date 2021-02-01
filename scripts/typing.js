if (window.matchMedia("(min-width: 800px)").matches){
    var totalStrings = ["Raul Lopez-Bravo", "NexCreep"];
    var typeIt = new TypeIt("#typing", { speed: 70, loop: true, waitUntilVisible: true });

    totalStrings.forEach(function (str) {
        typeIt.type(str);
        typeIt.pause(1300);
        typeIt.delete(str.length);
    })

    typeIt.go();
}else{
    document.getElementById('typing').innerHTML = 'Raul Lopez'
}
