import {Movie} from './Movie'

function Movies(props){
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
             <Movie key={movie.imdbID} {...movie} />)
        ) : (<f3>No movies found</f3>
        )}
    </div>
}
export {Movies}