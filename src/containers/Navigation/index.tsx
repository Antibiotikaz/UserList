import classes from './Navigation.module.scss'
import Leaderboard from '../../assets/images/leaderboard.svg'
const NavigationContainer = () => {
    return (
        <div className={classes.NavigationContainer}>
            <img src={Leaderboard} alt="" />
            <h1>The most awesome <span>users list</span></h1>
        </div>
    )
}

export default NavigationContainer