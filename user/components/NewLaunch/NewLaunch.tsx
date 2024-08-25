import React from 'react'
import Image from 'next/image'
import arrow from '@assets/arrow.svg'
import {Ele1, Ele11, Ele12, Ele121, Wrap12} from '@styles/newLaunch/style'

const NewLaunch = () => {
  return (
    <Ele1>
        <Ele11>New Album Launch and Drop by The Black Keys!</Ele11>
        <Ele12>
        <Ele121>in 2d:14h:33m</Ele121>
        <Wrap12>
            <Image src={arrow} alt="" style={{width: '0.9vw', height: '0.9vw'}}/>
        </Wrap12>
        </Ele12>
    </Ele1>
  )
}

export default NewLaunch