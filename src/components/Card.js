import React from 'react';

const Card = ({ id, name, email}) => {    
    return (
        //<h1>RoboFriends</h1>        
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>  
            {/* <img alt = 'robots' 
                // eslint-disable-next-line
                src = {'https://robohash.org/${id}?size=80x180'} />                 */}
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;