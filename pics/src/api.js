import axios from 'axios';


const searchImages = async (term) => {
    const {data} = await axios.get('https://api.unsplash.com/search/photos', {
        headers :{
            Authorization: 'Client-ID LLYVGfHDBMb1AmmJuxddWZSyLX_8ixj1ipk_6Hs2dmQ'
        },
        params:{
            query: term
        }
    });

    return data.results;
};

export default searchImages;