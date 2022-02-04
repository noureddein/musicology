import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import StatisticsCounter from '../Common/StatisCounter';
import './styles/statistics.css'

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'

const statisticsDic = [
    {
        total: 1200,
        disc: 'Club'
    },
    {
        total: 2000,
        disc: 'Active Member'
    },
    {
        total: 1000,
        disc: 'Community'
    },
]

function Statistics() {

    return (
        <>
            <div className='statisticsContainer'>
                <SectionTitle title={'Our Statistics'} paragraph={paragraph} />
                <div className='countersCounter'>
                    {
                        statisticsDic.map((item, idx) =>
                            <StatisticsCounter key={idx}
                                total={item.total} disc={item.disc}
                            />)
                    }
                </div>
            </div>
        </>
    );
}

export default Statistics;