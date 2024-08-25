'use client'
import React, { ReactElement, useEffect } from 'react'
import MixedCard from '../MixedCard/MixedCard'
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, Image, PlaylistContainer, BadaContainer } from "@styles/communityPlaylist/style"

const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;


const Community = ({ cardComponent, title, data }: { cardComponent: (data: any) => ReactElement, title: string, data: any[] }) => {

  useEffect(() => {
    console.log(data)
  })

  return (
    <Container>
      <FlexContainer>
        <Title>{title}</Title>
        <RoundedButton>
          <NextImageComponent src={arrow} alt="" width={12} height={12} />
        </RoundedButton>
      </FlexContainer>
      <PlaylistContainer>
        {data?.map(d => (
          cardComponent(d)
        ))}
      </PlaylistContainer>
    </Container>
  )
}

export default Community