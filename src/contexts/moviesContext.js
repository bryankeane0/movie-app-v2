import React, {useState} from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favorites, setFavorites] = useState([])
    const [mustwatch, setMustWatch] = useState([])

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie.id])
    };

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    const addToMustWatch = (movie) => {
        setMustWatch([...mustwatch, movie.id])
    };

    const removeFromMustWatch = (movie) => {
        setMustWatch(mustwatch.filter(
            (mId) => mId !== movie.id
        ))
    };

    const addReview = (movie, review) => {
        setMyReviews({...myReviews, [movie.id]: review})
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                mustwatch,
                addToMustWatch,
                removeFromMustWatch,
                addReview,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;