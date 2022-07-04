import React, {useState} from "react";

export const CustomContext = React.createContext(null);

const CustomContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favorites, setFavorites] = useState([])
    const [mustwatch, setMustWatch] = useState([])

    const addToFavorites = (item) => {
        setFavorites([...favorites, item.id])
    };

    const removeFromFavorites = (item) => {
        setFavorites(favorites.filter(
            (itemId) => itemId !== item.id
        ))
    };

    const addToMustWatch = (item) => {
        setMustWatch([...mustwatch, item.id])
    };

    const removeFromMustWatch = (item) => {
        setMustWatch(mustwatch.filter(
            (itemId) => itemId !== item.id
        ))
    };

    const addReview = (item, review) => {
        setMyReviews({...myReviews, [item.id]: review})
    };

    return (
        <CustomContext.Provider
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
        </CustomContext.Provider>
    );
};

export default CustomContextProvider;