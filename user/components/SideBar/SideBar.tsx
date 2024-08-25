"use client"

import  Image  from 'next/image';
import bg from '@assets/bg.svg';
import arr2 from '@assets/arr2.svg';
import { Cont, Top, Top1, Top2, Text, List, ListItem, ItemInfo, Info1, Info2 } from "@styles/sidebar/style";
import { useRef, useState } from 'react';

const SideBar = () => {

  const [val, setVal] = useState<Number>(1);
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  const handleClick = (val:Number) => {
    // console.log(val)
    setVal(val)
    if(val===1 && ref1.current && ref2.current){
      ref1.current.style.color = '#FFF'
      ref2.current.style.color = '#ffffff56'
    }
    if(val===2 && ref1.current && ref2.current){
      ref2.current.style.color = '#FFF'
      ref1.current.style.color = '#ffffff56'
    }
  }

  return (
    <Cont>
      <Top>
        <Top1>
          <Text ref={ref1} onClick={() => handleClick(1)} style={{ color: '#FFF' }} >Library</Text>
          <Text ref={ref2} onClick={() => handleClick(2)} style={{ color: '##ffffff56' }} >Queue</Text>
        </Top1>
        <Top2>
          <Image src={arr2} alt="no" />
        </Top2>
      </Top>
      {val === 1 ? 
      <List>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
      </List> : 
      <List>
        {/* <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem> */}
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
        <ListItem>
          <Image src={bg} alt='' style={{width: '3.916vw', height: '3.916vw', borderRadius: '12px'}} />
          <ItemInfo>
            <Info1>Daily Mix 2</Info1>
            <Info2>Playlist • Made by ChainTune</Info2>
          </ItemInfo>
        </ListItem>
      </List>  
    }
    </Cont>
  );
};

export default SideBar;
