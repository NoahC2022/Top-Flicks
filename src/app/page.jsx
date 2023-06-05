import Movie from "./Movie";

export default async function Home() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)

    return (
      <main className="bg-secondary mx-12 my-12">
        <div className=" bg-primary w-full rounded-lg">
          <h1 className=" text-3xl font-bold py-2 m-4">Top Flicks 🎞️</h1>
          </div>
            <div className=" text-container bg-scroll bg-[url('/dbg.jpg')] text-white h-full w-full rounded-md bg-no-repeat bg-cover px-6 py-4 grid gap-16 grid-cols-fluid"  >
            {res.results.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    />
            ))}
            </div>
      </main>
  )
}
