import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
export default class IPFSManager {

  
    public async handleUploadToIPFS(file: File, uploadType: string) {
    
      const formData = new FormData();
      formData.append('file', file);
  
      const metadata = JSON.stringify({
        name: `${file.name}`,
      });
      formData.append('pinataMetadata', metadata);
  
      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append('pinataOptions', options);
  
      try {
        // const resFile = await axios.post(
        //   'https://api.pinata.cloud/pinning/pinFileToIPFS',
        //   formData,
        //   {
        //     maxBodyLength: Infinity,
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       Authorization: `Bearer ${PINATA_API_KEY}`,
        //     },
        //   }
        // );
  
        // console.log(resFile.data.IpfsHash);
        // return resFile.data.IpfsHash;  
        const options = {
          method: 'GET',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMTZiOTFjZC00Yzk2LTQ0YmQtYjQ5OC1hNDMyMzA0OWIxYzciLCJlbWFpbCI6ImFtYW5ndXB0YTQzMjAwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWZhNDJiM2Q4ZWFmNWYzYmZjNTYiLCJzY29wZWRLZXlTZWNyZXQiOiJhNzU4ZmRmYjU0MDA2NzYzYTExMzY1MmI2MzE0YWYyYzA2OTA3MTExNGY4OGRiZjA2YmM0ZGEwMDgxOTJhOGY2IiwiZXhwIjoxNzU2MTUxNjYwfQ.WTRdDtvwS12bGVVuWtKea7IBGsdmdV-uuzxxyD9zmD8'
          }
        };
        
        fetch('https://api.pinata.cloud/data/testAuthentication', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
  

      } catch (error) {
        console.log('Error: ', error);
      }
      
    }
  }