const argv = require('yargs')
                .options({
                    
                    'b': {
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe:'It is the base of the multiplication table' },
                    
                    'l': {
                    alias: 'list',
                    type:'boolean',
                    default:false,
                    describe:'Show table in console'},
                    
                    'h': {
                    alias: 'hasta',
                    type:'number',
                    default:10,
                    describe:'Limit of number shows'}
                
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    if(isNaN(argv.h)){
                        throw 'La limite de numeros tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;