import axios from "axios";
import { IPeopledata } from "../../type";

export default async function getPeople(root:undefined,{page}: {
    page:number
}): Promise<IPeopledata | {
    message: string
}>{
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page || 1}`)

        return response.data
    }
    catch(e: any) {
        throw {
            message: e.message
        }
    }
}
