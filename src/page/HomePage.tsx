import React, { Suspense } from 'react';
/** React */
import PBSChart from '@components/home/PBSChart.tsx'
import QTChart from '@components/home/QTChart.tsx'
/** Query */
import { useAdminQuery } from '@/api/AdminQuery.ts'
/** Style */
import { ChartBox } from '@style/common/ChartStyle.ts'
import { PageContainer } from '@style/common/PageStyle.ts'



const HomePage: React.FC = () => {
    const { data, isLoading } = useAdminQuery();

    return(
        <PageContainer>
            {
                !isLoading ?
                        <div>
                            <ChartBox>
                                <Suspense fallback={<div>hello</div>}>
                                    <PBSChart startDate={data.startDate} endDate={data.endDate}/>
                                </Suspense>
                            </ChartBox>

                            <QTChart startDate={data.startDate} endDate={data.endDate}/>
                        </div>
                    :
                    null
            }
        </PageContainer>
    )
};

export default HomePage;