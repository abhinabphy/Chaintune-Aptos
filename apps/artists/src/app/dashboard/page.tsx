'use client'
import { AlbumsCard, CommunityCard, CreateCard, EarningsCard, Layout, ManageCard, StatisticsCard } from "@/components";

const Dashboard = () => {
    return (
        <Layout>
            <StatisticsCard />
            <div className="flex flex-row gap-[1vw]">
                <CreateCard />
                <EarningsCard />
            </div>
            <div className="flex flex-row gap-[1vw]">
                <AlbumsCard />
                <CommunityCard />
                <ManageCard />
            </div>
        </Layout>
    );
}

export default Dashboard;