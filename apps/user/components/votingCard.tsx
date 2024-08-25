
import  Image  from 'next/image';
import playlistCover from '@assets/playlistCover.svg'
import { VotingCardContainer, Artists, CardInfo, PlaylistCover,Wrap6, VoteCardCount } from '@styles/playlist/style';
const VotingCard=()=>{
    return (
       <VotingCardContainer>
            <PlaylistCover src={playlistCover} alt=''/>
            <Wrap6>
                <Wrap6>
                    <CardInfo>
                        Are You Bored Yet (feat. Clairo)
                    </CardInfo>
                    <Artists>
                        Wallows, Clairo
                    </Artists>
                </Wrap6>
                <VoteCardCount>
                    23 Votes
                </VoteCardCount>
            </Wrap6>
       </VotingCardContainer>
    )
}

export default VotingCard;