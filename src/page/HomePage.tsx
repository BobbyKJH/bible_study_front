import React from 'react';
/** React */
import PBSChart from '@components/home/PBSChart.tsx'
import QTChart from '@components/home/QTChart.tsx'
/** Query */
import { useAdminQuery } from '@/api/AdminQuery.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'



const HomePage: React.FC = () => {
    const { data, isLoading } = useAdminQuery();

    return(
        <PageContainer>
            {
                !isLoading ?
                        <div>
                            <PBSChart startDate={data.startDate} endDate={data.endDate}/>
                            <QTChart startDate={data.startDate} endDate={data.endDate}/>
                            1
                        </div>
                    :
                    null
            }
        </PageContainer>
    )
};

export default HomePage;