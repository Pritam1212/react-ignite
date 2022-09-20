
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailsAction';
import { Link } from 'react-router-dom';

import {popup} from "../animations";


import {smallImage} from "../util";

const Game = ({name, released, image, id}) => {
    const stringPath = id.toString();
    //Load details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return(
        <StyledGame
        variants={popup} initial="hidden" animate="show"
        layoutId={stringPath} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${stringPath}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPath}`} src={image} alt={name} />
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;