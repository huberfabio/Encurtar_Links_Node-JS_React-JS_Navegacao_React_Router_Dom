// buscar os links
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// salvar os links no localstorage
export async function saveLink(key, newLink){
   let linksStored = await getLinksSave(key)
   
   // se encontrar o link a ser salvo não deixa duplicar
   const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log("ESSE LINK JÁ EXISTE NA SUA LISTA!");
        return;
    }

    // não achou, vamos adicionar
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("LINK SALVO COM SUCESSO");
}

// deletar os links
export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return(item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

    console.log("LINK DELETADO COM SUCESSO");

    return myLinks;
}
