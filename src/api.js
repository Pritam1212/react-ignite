const api_key = `key=0069a8b9510140c597b829c9f4c5a23f`;

//Base URL
const base_url = `https://api.rawg.io/api/`;

//Getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) return `0${month}`;
    else return month;
};

const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    if(day < 10) return `0${day}`;
    else return day;
};

//Current day/Month/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?${api_key}`;

//Game Screeenshots
export const gameScreenshotsUrl = (game_id) => `${base_url}games/${game_id}/screenshots?${api_key}`;

//Searched Game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&${api_key}&page_size=9`;
