import axios from "axios";
import { IPeopledata } from "../../type";

export default async function getPeople(root:undefined,{page,query}: {
    page:number,
    query:string
}): Promise<IPeopledata | {
    message: string
}>{
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page || 1}&search=${query || ""}`)

        return response.data
    }
    catch(e: any) {
        throw {
            message: e.message
        }
    }
}
