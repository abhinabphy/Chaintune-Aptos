'use client'
import React, { useCallback, useState } from 'react';
import {DropArea, Instructions, FileInput,Container} from "../../../styles/CoverArt/style"
import Image from 'next/image'
import upload from '../../../assets/upload.svg'

const CoverArt: React.FC = () => {
    // const [isDragActive, setIsDragActive] = useState(false);
  
    // const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    //   e.preventDefault();
    //   setIsDragActive(true);
    // };
  
    // const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    //   e.preventDefault();
    //   setIsDragActive(false);
    // };
  
    // const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    //   e.preventDefault();
    //   setIsDragActive(false);
    //   // Process the files
    //   const files = e.dataTransfer.files;
    //   if (files && files.length > 0) {
    //     const file = files[0];
    //     // Handle the file upload...
    //   }
    // };
  
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        // Handle the file upload...
      }
    };
  
    const onClick = useCallback(() => {
      const fileInput = document.getElementById('fileInput');
      fileInput?.click();
    }, []);
  
    return (
        <Container>
                        <div style={{fontFamily: 'Aileron',fontSize: '2vw',fontWeight: '300',color:'white'}}>Cover Art</div>
      <DropArea
        // isDragActive={isDragActive}
        // onDragOver={onDragOver}
        // onDragLeave={onDragLeave}
        // onDrop={onDrop}
        onClick={onClick}
      >
        <FileInput
          type="file"
          id="fileInput"
          accept=".png,.jpg,.jpeg"
          onChange={onFileChange}
        />
        <Image src={upload} alt="" style={{width: '5vw', height: '5vw'}}/>
        <Instructions>
            
            <span style={{fontSize:'2.2vh'}}>Browse File or Drag and drop the file here</span>
            <br />
            <span style={{opacity:0.6}}>.png and .jpg files with 1:1 aspect ratio up to 10mb are supported. ChainTune recommends 1080px or more for best quality.</span>
        </Instructions>
      </DropArea>
      </Container>
    );
  };
  
  export default CoverArt;