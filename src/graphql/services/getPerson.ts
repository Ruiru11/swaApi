import axios from "axios";
import { Result } from "../../type";

export default async function getPerson(root:undefined,{personId}: {
    personId:number,
}): Promise<Result | {
    message: string
}>{
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${personId}`)

        return response.data
    }
    catch(e: any) {
        throw {
            message: e.message
        }
    }
}
