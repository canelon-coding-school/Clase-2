const dev = {
    name: 'Nicolas Danelon',
    id: '89012'
}

function getData({id, name}) {
   
    console.log(`El nombre del dev es ${name} y su id es ${id}`);
}

getData(dev)