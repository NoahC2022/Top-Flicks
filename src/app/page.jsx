import Movie from "./Movie"

export default async function Home() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)

    return (
      <main>
          <h1 className="text-lg py-2 m-4">These movies are the shit!</h1>
          <h1 className="text-lg py-2 m-4">`{process.env.API_KEY}`</h1>
            {res.results.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    />
          ))}
      </main>
  )
}
