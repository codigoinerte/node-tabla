
const fs = require('fs');
const {green, bgBrightYellow, dim, grey} = require('colors');

const crearArchivo = async (base = 5, list=false, h=10) => {

    try {
 
        let salida = '';
    
        for(let i = 1; i <= h; i++)
        {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(list)
        {
            
            console.log("===================================".green);
            console.log(`            Tabla del `.green.bold + `${base}`.bold.red + `           `);
            console.log("===================================".green);                    
            console.log(salida.green);
        }
    
        const fileName = `./salida/tabla-del-${base}.txt`;
    
        fs.writeFileSync(fileName, salida);
    
        return fileName;
        
    } catch (error) {
        throw error;        
    }



}

module.exports = {
    crearArchivo
}