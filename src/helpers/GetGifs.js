

//* Definamos una función para hacer el Fetch()
export const getGifs = async( category ) => {

    // const url =`https://api.giphy.com/v1/gifs/search?api_key=zqCGhlvetJF70glMLSANFP2No5qH7pht&q=${ category }&limit=10`;
    const url =`https://api.giphy.com/v1/gifs/search?api_key=9srUW8BZYsb7qqWRDGBcInExM8QQdgIY&q=${ category }&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json(); //* await resp.json() nos devuelve un arreglo de objetos
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    //? Otra forma de devolver un objeto sin emplear la palabra return
    
    // const gifs = data.map( img => ({
    //     id: img.id,
    //     title: img.title,
    //     url: img.images.downsized_medium.url
    // })); 

    // console.log(gifs);
    // console.log('--> ',url);

    return gifs;
};

