import React, {useEffect} from 'react'

// Local Imports
import { ResultWrapper } from './styles'
import { PlayerProfile } from '../ArchivePlayerHeadline/ArchivePlayerHeadline'

const PlayerInfo: React.FC<{ data: PlayerProfile }> = (data) => {
    
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