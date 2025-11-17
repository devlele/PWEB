let eventos = require('events');
let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();

ee.removeAllListeners('dados', function(fecha){
    console.log(fecha);
});
ee.emit('dados', 'Primeira vez '+Date.now());

setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);