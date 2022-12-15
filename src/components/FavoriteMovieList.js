import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFavorite} from "../actions/favoritesActions"


const FavoriteMovieList = (props) => {
    const favorites = [];

    const removeFavoriteClickHandler = (e) => {
        props.removeFavorite(parseInt(e.target.id))
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.displayFavorites && props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" id={movie.id} onClick={removeFavoriteClickHandler}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => ({
    favorites: state.favoritesReducer.favorites,
    displayFavorites:state.favoritesReducer.displayFavorites
})

export default connect(mapStateToProps,{removeFavorite})(FavoriteMovieList);