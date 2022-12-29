import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Telstra</div>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/telstra-logo-purple-background-800x800.png" className={classes.image}/>
            <nav>
   
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/generate'>Generate</Link>
                    </li>
                    <li>
                        <Link to='/validate'>Validate</Link>
                    </li>
                    <li>
                        <Link to='/renew'>Renew</Link>
                    </li>
                    <li>
                        <Link to='/download'>Download</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default MainNavigation