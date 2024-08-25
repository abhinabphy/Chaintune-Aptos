
import React, { useState } from 'react';
import {Container, Item, Icon} from '../../../styles/ReleaseOptions/style'
import disc from '../../../assets/disc.svg'
import folder from '../../../assets/folder.svg'

interface ReleaseOptionProps {
  label:string;
  isSelected: boolean;
  onClick: () => void;
  iconSrc: any;
}
const ReleaseOptions:React.FC<ReleaseOptionProps> = (props) => {
    return (
      <Item isSelected={props.isSelected} onClick={props.onClick}>
        <Icon src={props.iconSrc.src} isSelected={props.isSelected} />
        {props.label}
      </Item>
    );
  };
  

  
  export default ReleaseOptions;