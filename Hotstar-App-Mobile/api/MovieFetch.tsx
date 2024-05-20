
export const FetchMovie= async(genre)=>{
    try{
        const response=await fetch(`https://api.sampleapis.com/movies/${genre}`)
        const json=await response.json()
        return json
    }
    catch(error) {
        console.log('error Trying to fetch movies', error);
        return error
    }
    }
   
