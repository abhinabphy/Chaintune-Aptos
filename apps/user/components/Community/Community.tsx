'use client'
import React, { ReactElement, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import MixedCard from '../MixedCard/MixedCard'
import Image from 'next/image'
import banner_one from "../../public/banner_one.jpg"
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, PlaylistContainer, BadaContainer } from "@styles/communityPlaylist/style"

const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;


const Community = ({ cardComponent, title, data }: { cardComponent: (data: any) => ReactElement, title: string, data: any[] }) => {

  useEffect(() => {
    console.log(data)
  })

  return (
    <Container className='min-h-[40vh] mb-4'>
      <FlexContainer>
        <Title>{title}</Title>
        <RoundedButton>
          <NextImageComponent src={arrow} alt="" width={12} height={12} />
        </RoundedButton>
      </FlexContainer>
      <PlaylistContainer className='w-full'>
        {data?.map(d => (
          cardComponent(d)
        ))}
        {/* <Marquee className='w-full'> */}
        {/* <div className='h-[30vh] min-w-full bg-white '></div>
        <div className='h-[30vh] min-w-full bg-white '></div>
        <div className='h-[30vh] min-w-full bg-white '></div>
        <div className='h-[30vh] min-w-full bg-white '></div>
        <div className='h-[30vh] min-w-full bg-white '></div> */}
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        <Image  height={1000} width={1000} alt='firstbanner' className='h-[30vh] min-w-full' src={banner_one}/>
        {/* </Marquee> */}
    
       
      </PlaylistContainer>
    </Container>
  )
}

export default Community