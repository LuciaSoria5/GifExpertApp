export const getGifs = async( category ) => {
    const limit = 10;
    // ojo con la api key, estoy usando la que no es jeje
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eMC8kZEL3UMVVc1tWxIgTzIDMqV0zZxb&q=${ category }&limit=${ limit }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};