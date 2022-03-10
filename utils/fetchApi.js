import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com/'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '06c5e05001msh8a1ae3234634cecp1286d8jsn0a70482ae5be'
          }
    })
    return data
}