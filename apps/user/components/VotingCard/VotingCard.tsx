'use client'
import { SearchPlaylist } from '@components';
import { MainContainer, HeaderContainer, Title, VotesContainer, VotesText, GridContainer, FlexColumn, FlexRow, TitleText, SubTitleText, StyledImage, SongTitleText, SongDetailsText, VoteCountText, StyledModal, ModalContent, SvgButton, VotingColumn } from '@styles/VotingCard/style';
import { useReducer } from 'react';

const StyledComponentsExample = () => {

  const reducer = (state: { modal: any }, action: { type: any }) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          modal: !state.modal
        };
      default:
        return state;
    }
  }

  const initialState = {
    modal: false
  };

  const toggleModal = () => {
    dispatch({
      type: 'TOGGLE_MODAL',
    });
    console.log(state.modal);
  }

  const closeModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch({
      type: 'TOGGLE_MODAL'
    });
    console.log(state.modal);
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContainer>
      <HeaderContainer>
        <Title>Comunity Voting</Title>
        <VotesContainer>
          <VotesText>235 Votes Received</VotesText>
          <SvgButton onClick={toggleModal} >
           <svg width="2.5vw" height="2.5vw" viewBox="0 0 48 48" fill="gray" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_99_888)">
              <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_99_888)" fill-opacity="0.5" />
              <circle cx="24" cy="24" r="23.5" stroke="url(#paint1_linear_99_888)" stroke-opacity="0.06" />
            </g>
            <path d="M18 18H30M30 18V30M30 18L18 30" stroke="white" />
            <defs>
              <filter id="filter0_b_99_888" x="-120" y="-120" width="288" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="60" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_99_888" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_99_888" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_99_888" x1="5.41463" y1="-0.821918" x2="31.039" y2="66.0898" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1C1E22" stop-opacity="0.66" />
                <stop offset="0.758478" stop-color="#1F2228" />
              </linearGradient>
              <linearGradient id="paint1_linear_99_888" x1="-2.50699e-06" y1="-1.68493" x2="17.7678" y2="58.5959" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
           </svg>
          </SvgButton>
        </VotesContainer>
      </HeaderContainer>
      <GridContainer>
        <VotingColumn>
          <FlexRow>
              <svg width="4vw" height="4vw" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
                <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_100_889)" />
                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_100_889)" stroke-opacity="0.06" />
                <path d="M31.9998 35.9997C37.1545 35.9997 41.3332 31.821 41.3332 26.6663C41.3332 21.5117 37.1545 17.333 31.9998 17.333C26.8452 17.333 22.6665 21.5117 22.6665 26.6663C22.6665 31.821 26.8452 35.9997 31.9998 35.9997Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.9468 34.5202L25.3335 46.6668L32.0002 42.6668L38.6668 46.6668L37.0535 34.5068" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_100_889" x1="29.4704" y1="-17.3333" x2="82.1817" y2="42.1701" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4A6A9B" />
                    <stop offset="0.738289" stop-color="#4B27DD" />
                    <stop offset="1" stop-color="#5E14BC" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_100_889" x1="-3.34265e-06" y1="-2.24657" x2="23.6904" y2="78.1279" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            <TitleText>Next Voting Round <br /> in 1d:23h:48m</TitleText>
          </FlexRow>
          <SubTitleText>Top 3 songs from the list will be added to the playlist when this round ends. Learn More</SubTitleText>
        </VotingColumn>
        <FlexRow>
          <StyledImage src="http://localhost:3000/_next/static/media/playlistCover.f385e57c.svg" alt="" />
          <FlexColumn>
            <SongTitleText>Are You Bored Yet (feat. Clairo)</SongTitleText>
            <SongDetailsText>Wallows, Clairo</SongDetailsText>
            <VoteCountText>23 Votes</VoteCountText>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <StyledImage src="http://localhost:3000/_next/static/media/playlistCover.f385e57c.svg" alt="" />
          <FlexColumn>
            <SongTitleText>Are You Bored Yet (feat. Clairo)</SongTitleText>
            <SongDetailsText>Wallows, Clairo</SongDetailsText>
            <VoteCountText>23 Votes</VoteCountText>
          </FlexColumn>
        </FlexRow>
      </GridContainer>
      {
        state.modal && (
          <StyledModal >
            <ModalContent>
              {/* <SearchPlaylist handleSearchClose={closeModal}/> */}
            </ModalContent>
          </StyledModal>
        )
      }
    </MainContainer>
  );
};

export default StyledComponentsExample;