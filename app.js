
const argv= require('./config/yargs').argv;
const colors= require('colors');

     

const {crearArchivo,ListarTabla}= require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar':
            ListarTabla (argv.base, argv.limite);
       
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`El archivo ha sido creado: `, colors.red(` ${archivo}`)))
    .catch(err=> console.log(err));
    break;

    default:
    console.log ('Comando no reconocido ');



}


//let argv2= process.argv;

//console.log( 'limite',argv.limite);


//let parametro= argv[2];
//let base= parametro.split('=')[1]

