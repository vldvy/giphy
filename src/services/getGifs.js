
const apiKey = 'U1w8OhvodRNaBYI1MtGpRmEcb1EpCAeY'


export default function getGifs({ keyword } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {title, id, images} = image
                    const {url} = image.images.downsized_medium
                    return {title, id, url, images}
                })
            return gifs
            }
            
        })
}