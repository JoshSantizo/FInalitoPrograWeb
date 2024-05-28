import axios from "axios";
import Link from "next/link";
import Film from "../types/film";
import { parsedEnv } from "../../../env";

type Props = {
    params:{
        episode_id: number;
    };
};

export default async function Page({params}: Props) {
    const response = await axios.get<Film[]>(`${parsedEnv.API_URL}/alpha/${params.episode_id}`);
    if (response.data.length === 0){
        return (
            <h1>No se pudo encontrar la pelicula</h1>
        )        
    }
    return (
        <main>
            <h1>Detalle de la pelicula</h1>
            <div>
                <p>
                    <b>Nombre:</b>{
                        response.data[0].title
                    }
                    <br></br><b>Capital:</b>{
                        response.data[0].director
                    }
                    <br></br><b>Población:</b>{
                        response.data[0].producer
                    }

                    <br></br><b>Población:</b>{
                        response.data[0].release_date
                    } 
                  
                </p>
                <Link href="/">Volver</Link>
            </div>
        </main>
    )
}