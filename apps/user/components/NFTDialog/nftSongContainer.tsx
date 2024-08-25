'use client'

import feel from "@assets/feel.png"
import {CostDiv, DetailsDiv, RankDiv, SongPoster, SongWrapper} from "@styles/nftDialog/style";

const NFTSongContainer = () => {
    return (
        <SongWrapper>
            <SongPoster alt="Hi" src={feel} width={144} height={144}/>
            <DetailsDiv>
                <RankDiv>#1</RankDiv>
                <CostDiv>
                    <p>
                        Last Sold
                    </p>
                    <h1>
                        0.2305 ETH
                    </h1>

                    <h2>
                        @larsvander
                    </h2>

                </CostDiv>
            </DetailsDiv>

        </SongWrapper>


    );
};

export default NFTSongContainer;