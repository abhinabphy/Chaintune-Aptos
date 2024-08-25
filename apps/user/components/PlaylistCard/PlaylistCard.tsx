import styled from 'styled-components';
import { CardContainer, CoverImage, Cover, Play, PlayImage,Text,Name,Artists,CardInfo,Wrap1,Tag,Wrap2,Wrap3,Wrap4,Options,OptionsWrap} from "@styles/playlist/style"
import coverBg from '@assets/coverBg.svg'
import play from '@assets/play.svg'
import dropdown from '@assets/dropdown.svg'
import more from '@assets/more.svg'
import  Image  from 'next/image';
const PlaylistCard=()=>{
    return (
        <CardContainer>
            <Cover>
                <CoverImage src={coverBg} alt="" />
                <Play>
                    <PlayImage src={play} alt=''/>
                </Play>
            </Cover>
            <Text>
                <Wrap1>
                    <Wrap4>
                        <Tag>
                            Playlist
                        </Tag>
                        <Tag>
                            Community-Contributed
                        </Tag>
                    </Wrap4>
                    <Wrap4>
                        <OptionsWrap>
                            <Options src={dropdown} alt=''/>
                        </OptionsWrap>
                        <OptionsWrap>
                            <Options src={more} alt=''/>
                        </OptionsWrap>
                    </Wrap4>
                </Wrap1>
                <Wrap2>
                    <Wrap3>
                        <Name>
                            Feel-Good Indie Rock
                        </Name>
                        <Artists>
                            Featuring Strawberry Guy, Husbands, Pinegrove and more...
                        </Artists>
                    </Wrap3>
                    <CardInfo>
                        Made by Klariet • 54 songs  •  3 hr 18 min
                    </CardInfo>
                </Wrap2>
            </Text>
        </CardContainer>
    )
}

export default PlaylistCard;