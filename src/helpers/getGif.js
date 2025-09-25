export const getGif = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=FGSl1B7gvbiWxXV0WdUOl0irEo0gOYet&q=${category}&limit=3`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;

}