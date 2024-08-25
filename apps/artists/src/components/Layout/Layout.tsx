
import { LayoutProps } from "@/types/Layout";
import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <div className="bg-zinc-950 h-screen w-screen overflow-y-scroll">
                <Navbar />
                {/* <SideBar /> */}
                <div className="mt-[8vw] flex flex-col gap-[1vw] mx-[2vw] pb-[2vw]">
                    {children}
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;