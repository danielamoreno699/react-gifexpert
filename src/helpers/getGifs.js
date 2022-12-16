export const getGifs = async(category) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=PVEFxZ2gGGEpR7d6x135S6vFwQzJQQ7z&q=${category}&limit=20`

    const resp = await fetch(url)
    const {data } = await resp.json()
    //console.log(data)
    const gifs = data.map(img => ({
        id : img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log('gifs', gifs)
    return gifs

}