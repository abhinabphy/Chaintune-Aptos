import axios, { AxiosResponse } from 'axios';

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
        const resFile = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            maxBodyLength: Infinity,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiMDIxYWI0Ny1lNzdiLTRmOTktOThjNC1mOTYxN2JjMmU0MzYiLCJlbWFpbCI6ImFiaGluYWJpaXRnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxOWUyMjYyZTk3MmMxNjk2MTAzMiIsInNjb3BlZEtleVNlY3JldCI6IjlhZmExMmVlYjM5MDIzY2VjMTllMmI0MWE0M2U3ZjI0ZDcxOWRhZDc5ZjI1NGI1OGUxYTM3ODVlNTc0NWE1MjUiLCJleHAiOjE3NTYwMjAyNDd9.kuFtbjmgGbE8dw-mZZ3FVJJoXEZF5irPN0CYF4HDDDg `,
            },
          }
        );
  
        console.log(resFile.data.IpfsHash);
        return resFile.data.IpfsHash;  
      } catch (error) {
        console.log('Error: ', error);
      }
      
    }
  }