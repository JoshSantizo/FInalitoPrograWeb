import axios from "axios";
import { parsedEnv } from "../../env";
import Link from "next/link";
import { title } from "process";
import Film from "./types/film";


export default async function Home() {
  const response = await axios.get<Film[]>(`${parsedEnv.API_URL}/films`);
  
  return (
    <main>
      <h1>Listado de países:</h1>

      <div>

        {response.data.map((films, index) => (
        <article key={index}>
         
          <Link href={`/${films.episode_id}`}>Ir al país</Link>
        </article>
        ))}
      </div>
    </main>
  );
}
