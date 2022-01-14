export const getGifts = async(category) => {
    //el encodeURI limpia lo que se introduce, por ejemplo, los espacios los reemplaza por $20 para no crear problemas
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=owb15xPxzyNDn0gnG3xUQs6Q7h4SWLm5`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            //el signo de interrogación es para asegurar si trae o no la carpeta images
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}