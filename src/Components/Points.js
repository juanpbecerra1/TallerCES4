import { useContext } from "react";
import UserContext from '../Context/UserContext';

const Points = () => {
    const userContext = useContext(UserContext);
    const { points } = userContext;
    const { level } = userContext;
    return (<>
        <div class="container-points">
            <h3> Points: {points} </h3>
        </div>
        <div class="container-level">
            <h3> Level: {level} </h3>
        </div>
    </>

    )
}

export default Points
