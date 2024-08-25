import React from 'react'
import Image from 'next/image'
import bg from '@assets/bg.svg'
import {Ele32, Ele321, Ele322, Rec_play, Rec_name} from '@styles/recPlay/style'

const RecPlay = () => {
  return (
    <Ele32>
        <Ele321>Recently Played</Ele321>
        <Ele322>
            <Rec_play>
              <Image src={bg} alt='' style={{width: '4.476vw', height: '4.476vw', borderRadius: '12px'}}/>
              <Rec_name>Quadeca</Rec_name>
            </Rec_play>
            <Rec_play>
              <Image src={bg} alt='' style={{width: '4.476vw', height: '4.476vw', borderRadius: '12px'}}/>
              <Rec_name>Quadeca</Rec_name>
            </Rec_play>
            <Rec_play>
              <Image src={bg} alt='' style={{width: '4.476vw', height: '4.476vw', borderRadius: '12px'}}/>
              <Rec_name>Quadeca</Rec_name>
            </Rec_play>
            <Rec_play>
              <Image src={bg} alt='' style={{width: '4.476vw', height: '4.476vw', borderRadius: '12px'}}/>
              <Rec_name>Quadeca</Rec_name>
            </Rec_play>
            <Rec_play>
              <Image src={bg} alt='' style={{width: '4.476vw', height: '4.476vw', borderRadius: '12px'}}/>
              <Rec_name>Quadeca</Rec_name>
            </Rec_play>
        </Ele322>
    </Ele32>
  )
}

export default RecPlay