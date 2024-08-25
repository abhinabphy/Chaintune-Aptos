
'use client'
import thumbnail from '@assets/thumbnail.svg'
import { Row, Title, TitleBlock, InfoBlock, SearchText1, SearchText2, Sno, Thumbnail, Wrap6, Wrap8, Wrap9, Wrap10 } from '@styles/playlist/style';
import { useReducer } from 'react';

interface TableProps {
    sno: string;
    title: string;
    artist: string;
    album: string;
    updatedAt: string;
    duration: string;
    image: string;
}

const SearchEntry: React.FC<TableProps> = ({ sno, title, artist, album, updatedAt, duration, image }) => {

    const initialState = {
        voted : false,
        status : 'vote'
    }

    // @ts-ignore
    const reducer = (state,action) =>{
        switch(action.type){
            case 'TOGGLE_VOTE':
                return {
                    ...state ,
                    voted : ! state.voted
                }
            case 'CHANGE_STATUS':
                return {
                    ...state,
                    status : 'voted' 
                }
        }
    }

    const toggleVote = () =>{
        dispatch({ 
            type : 'TOGGLE_VOTE'
        })
        console.log(state.voted)
        dispatch({
            type : 'CHANGE_STATUS'
        })
    }

    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <Row>
            <TitleBlock>
                <Sno>
                    <SearchText2>
                        {sno}
                    </SearchText2>
                </Sno>
                <Title>
                    <Thumbnail src={image} alt='' />
                    <Wrap6>
                        <SearchText1>
                            {title}
                        </SearchText1>
                        <SearchText2>
                            {artist}
                        </SearchText2>
                    </Wrap6>

                </Title>
            </TitleBlock>
            <InfoBlock>
                <SearchText2>
                    <Wrap10>
                        {album}
                    </Wrap10>
                </SearchText2>
                <SearchText2>
                    <Wrap10>
                        {updatedAt}
                    </Wrap10>
                </SearchText2>
                <SearchText2>
                    <Wrap10 style={{marginLeft:'4vw'}}>
                        {duration}
                    </Wrap10>
                </SearchText2>
                <SearchText2>
                    {/* <Wrap10>
                                <div onClick={toggleVote} className="px-4 py-3 text-xs text-white rounded-full bg-gray-700">
                                    {state.status} 
                                </div>
                    </Wrap10> */}
                </SearchText2>
            </InfoBlock>
        </Row>
    )
}

export default SearchEntry;