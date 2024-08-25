import { LayoutProps } from "@/types/Layout";
//import { WalletProvider } from "@app/WalletContext";
import { NavBar, PlaySong, SideBar } from "@components";
import { Fragment } from "react";

const Layout = ({ children }: LayoutProps) => {
    return (
        
        <Fragment>
            <div className="bg-zinc-950 h-screen w-screen">
                <NavBar />
                <SideBar />
                {children}
                <div className="fixed bottom-0 flex justify-center" style={{width: '100vw'}}>
                    <PlaySong />
                </div>
            </div>
        </Fragment>
        
    );
}

export default Layout;