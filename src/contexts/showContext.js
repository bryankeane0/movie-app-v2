import React, {useState} from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favorites, setFavorites] = useState([])
    const [mustwatch, setMustWatch] = useState([])

    const addToFavorites = (tvshow) => {
        setFavorites([...favorites, tvshow.id])
    };

    const removeFromFavorites = (tvshow) => {
        setFavorites(favorites.filter(
            (sId) => sId !== tvshow.id
        ))
    };

    const addToMustWatch = (tvshow) => {
        setMustWatch([...mustwatch, tvshow.id])
    };

    const removeFromMustWatch = (tvshow) => {
        setMustWatch(mustwatch.filter(
            (sId) => sId !== tvshow.id
        ))
    };

    const addReview = (tvshow, review) => {
        setMyReviews({...myReviews, [tvshow.id]: review})
    };

    return (
        <TvShowContext.Provider
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
        </TvShowContext.Provider>
    );
};

export default TvShowContextProvider;