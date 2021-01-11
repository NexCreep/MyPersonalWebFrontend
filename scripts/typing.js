var totalStrings = ["NexCreep", "Raul Lopez-Bravo"];
var typeIt = new TypeIt("#typing", { speed: 70, loop: true, waitUntilVisible: true });

totalStrings.forEach(function (str) {
    typeIt.type(str);
    typeIt.pause(1300);
    typeIt.delete(str.length);
})

typeIt.go();