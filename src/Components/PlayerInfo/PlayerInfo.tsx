import React, {useEffect} from 'react'

// Local Imports
import { ResultWrapper } from './styles'
import { PlayerProfile } from '../SearchPlayerInput/SearchPlayerInput'

interface PlayerProfileProps {
    data: PlayerProfile
}

const PlayerInfo: React.FC<PlayerProfileProps> = ({data}) => {
    
    useEffect(() => {
        console.log("Data inside", data)
    }, [data])

    return (
        <ResultWrapper>
            Hey
        </ResultWrapper>
    )
}

export default PlayerInfo;
