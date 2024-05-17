
export const FetchMovie= async()=>{
    try{
        const response=await fetch('https://api.sampleapis.com/movies/family')
        const json=await response.json()
        return json
    }
    catch(error) {
        console.log('error Trying to fetch movies', error);
        return error
    }
    }
   
