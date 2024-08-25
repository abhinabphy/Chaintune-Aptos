'use client'

const MintNft =()=>{
    return(
        <div style={{width:`fit-content`, height:`fit-content`, display:`flex`, flexDirection:`column`, alignItems:`center`}}>
        <div style={{display:`flex`,flexDirection:`column`, width:`71vw`, height:`fit-content`, borderRadius:`24px`, backgroundColor:`rgba(31, 34, 40, 0.50)`, justifyContent:`space-between`,padding:`8px`}}>
            <div>
                <p style={{fontSize:`20px`,color:`white`, margin:`10px 16px`}}>Mint NFTs</p>
            </div>
            <div style={{display:`flex`,flexDirection:`row`, width:`100%`, height:`fit-content`, borderRadius:`16px`, backgroundColor:`rgba(28, 30, 34, 0.8)`, justifyContent:`space-between`,padding:`16px 24px`, alignItems:`center`}}>
                <div style={{display:`flex`,flexDirection:`row`, justifyContent:'space-between',width:`35%`}}>
                    <div style={{display:`flex`,flexDirection:`column`}}>
                        <p style={{fontSize:`14px`,color:`white`, opacity:`0.6`}}>Collection of</p>
                        <p style={{fontSize:`24px`,color:`white`}}>25</p>
                    </div>
                    <div>
                        <p style={{fontSize:`14px`,color:`white`, opacity:`0.6`}}>Gas Fee</p>
                        <p style={{fontSize:`24px`,color:`white`}}>CHT 0.2345</p>
                    </div>
                </div>
                <div style={{width:`fit-content`, height:`44px`, display:`flex`, justifyContent:`center`, alignItems:`center`, padding:`12px 32px`, borderRadius:`24px`,backgroundColor:`rgba(255, 255, 255, 0.10)`}}>
                    <p>Minting will be automatically done</p>
                </div>
            </div>
        </div>
        <div style={{width:`240px`, height:`44px`, display:`flex`, justifyContent:`center`, alignItems:`center`, padding:`12px 32px`, borderRadius:`24px`,backgroundColor:`white`, marginTop:`16px`}}>
            <p>Launch Release</p>
        </div>
        </div>
    )
}

export default MintNft