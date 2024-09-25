export const fetchGif = async ( category )=>{

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=b2eay4Ra4r6snWK3t5CLpxslc0GNYnry&limit=20&q='+category;

    const response = await fetch(url);
    const { data } = await response.json();
    
    
    const list = data.map( ({ id, title, images, user }) => ({ id, title, img: images.downsized_medium.url, description: user?.description  }))
    
    return list
}