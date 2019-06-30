import {FETCH_IMAGES} from "./types";

const IMAGES_PER_PAGE = 24;

export const fetchImages = () => dispatch => {
    fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&per_page='+IMAGES_PER_PAGE)
        .then(res => res.json())
        .then(images =>
            dispatch({
                type: FETCH_IMAGES,
                payload: images
            })
        )
};
