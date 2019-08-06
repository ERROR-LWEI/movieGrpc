import fetch from "../../middleware/Http";
import Movie from "./interface/movie";
import { AxiosResponse } from "axios";

export async function getMovieProId(id): Promise<Movie> {
    const data: AxiosResponse<Movie> = await fetch<Movie>({
        url: `https://douban.uieee.com/v2/movie/subject/${id}`,
        method: 'GET'
    });
    return data.data
}