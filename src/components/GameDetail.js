//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//REDUX
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { smallImage } from '../util';
//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({path}) => {
    const navigate = useNavigate();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }

    //Get Platform images
    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    //Get Stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<img alt="star" key ={i} src={starFull}/>);
            }else{
                stars.push(<img alt="star" key ={i} src={starEmpty}/>);
            }
        }
        return stars;
    }

    //Data
    const {screen, game, isLoading} = useSelector(state => state.detail);

    return(
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={path}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${path}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map((data) => (
                                <img src={getPlatform(data.platform.name)} key={data.platform.id} alt={data.platform.name}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${path}`} src={smallImage(game.background_image, 640)} alt="image" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image, 640)} key={screen.id} alt="game" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    );

};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 7rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;


export default GameDetail;