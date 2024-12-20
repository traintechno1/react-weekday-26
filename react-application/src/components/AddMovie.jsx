import { useState } from "react";
import "../css/AddMovie.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMovie = () =>{

    let [movieForm, setMovieForm] = useState({
        movieName: '',
        releaseYear: '',
        language: ''
    });

    let [movies, setMovies] = useState([]);

    let handleInputChange = (event) =>{
        let {name, value} = event.target;
        setMovieForm({...movieForm , [name] : value });
    }

    let submitForm = (event) =>{
        event.preventDefault();
        if(!movieForm.movieName){
            toast.error('Enter Movie Name', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"                
            });
        }else{
            setMovies([...movies, movieForm]);
    
            setMovieForm({
                movieName: '',
                releaseYear: '',
                language: ''
            })

            toast.success('Movie Added Successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

    return(
        <>
            <div className="form-container">
                <h3 className="form-heading">Add Movie Form</h3>
                <form>
                    <div className="form-element">
                        <label className="label" htmlFor="movieName">Movie Name:</label>
                        <input 
                            className="input-box"
                            id="movieName"
                            name="movieName"
                            type="text"
                            value={movieForm.movieName}
                            onChange={handleInputChange}
                            required
                            placeholder="Movie Name" />
                    </div>

                    <div className="form-element">
                        <label className="label" htmlFor="releaseYear">Release Year:</label>
                        <input 
                            className="input-box" 
                            id="releaseYear"
                            name="releaseYear"
                            type="number"
                            value={movieForm.releaseYear}
                            onChange={handleInputChange}
                            placeholder="Release Year" />
                    </div>
                    
                    <div className="form-element">
                        <label className="label" htmlFor="language">Language:</label>
                        <input 
                            className="input-box"
                            id="language"
                            name="language"
                            type="text"
                            value={movieForm.language}
                            onChange={handleInputChange}
                            placeholder="Language" />
                    </div>

                    <div className="btn-container">
                        <button className="submit-btn" type="submit" onClick={submitForm}>Submit</button>
                    </div>
                </form>
            </div>

            <div className="form-container table-container">
                <h3 className="form-heading">Movies {movies.length}</h3>
                <table className="form-heading">
                    <thead>
                        <tr>
                            <th>
                                Sr No.
                            </th>
                            <th>
                                Movie Name
                            </th>
                            <th>
                                Release Year
                            </th>
                            <th>
                                Language
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>    
                                            {index + 1}
                                        </td>
                                        <td>    
                                            {movie.movieName}
                                        </td>
                                        <td>
                                            {movie.releaseYear}
                                        </td>
                                        <td>
                                            {movie.language}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
            <ToastContainer />
        </>
    )
}

export default AddMovie;