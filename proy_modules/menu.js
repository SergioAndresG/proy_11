const mostrarMenu =  () => {

    return new Promise( resolve => {
        //console.clear();
        console.log(`************************`.bgGreen);
        console.log(`*Seleccione una Opcion**`.bgGreen);
        console.log(`************************\n`.bgGreen);
        console.log(`${'1.'.bgGreen} Crear nuevo producto`);
        console.log(`${'2.'.bgGreen} Listar Producto`);
        console.log(`${'3.'.bgGreen} Listar Clientes`);
        console.log(`${'4.'.bgGreen} Listar Pedidos`);
        console.log(`${'5.'.bgGreen} Enviar Pedidos`);
        console.log(`${'6.'.bgGreen} Borrar Pedidos`);
        console.log(`${'0.'.bgGreen} Salir\n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una Opcion : ', (opt) => {
            readLine.close();
            resolve(opt);
        })
       
    })
};


const pausa = () => {
    return new Promise(resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
            readLine.close();
            resolve();
        })
    })
};

module.exports = {
    mostrarMenu,
    pausa
}