import React, { useEffect, useState, useRef } from 'react';
import '../Components/styles/statistics.css'
import CountUp from 'react-countup';

const StatisticsCounter = ({ disc, total }) => {

    const [end, setEnd] = useState(0)
    const container = useRef();


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setEnd(total)
                })
            }, { threshold: 1 })
        observer.observe(container.current)
    })

    return (
        <>
            <div className='counterContainer' ref={container}>
                <p>
                    <CountUp
                        start={0}
                        end={end}
                        duration={2.5}
                        prefix='+'
                        separator={disc === 'Community' ? '.' : null}
                    />
                </p>
                <p>{disc}</p>
            </div>
        </>
    );

}

export default StatisticsCounter;
