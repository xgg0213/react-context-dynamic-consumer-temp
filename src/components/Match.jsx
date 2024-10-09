import { useState, useContext, useEffect } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Match=()=> {
    const { sign } = useContext(HoroscopeContext);
    const [match, setMatch] = useState(false);

    const handleClick = () => setMatch((prev)=> !prev);

    // whenever the sign changes, the match is set to false, may not be necessary depending on use case
    // useEffect(() => {
	// 	setMatch(false);
	// }, [sign]);

    return (
        <div>
            <button onClick={handleClick}>Show Match</button>
            {match && <div>Match: {sign.match} </div>}
        </div>
    )
}

export default Match;