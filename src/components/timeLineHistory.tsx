import styled from 'styled-components'
import { Work } from './work';  


const workList = [  
    {
        title: '***（現職）',
        description: `自社開発企業、主にWindowsアプリケーションの開発・Webアプリケーション開発を担当。

        `,
        periodStart: '2021年4月',
        periodEnd: '現在',
    },
    {
        title: '株式会社パトライト',
        description: '製造業。金属加工の業務に従事',
        periodStart: '2013年4月',
        periodEnd: '2019年12月',
    },
    {
        titile: '',
        desctiption: '',
        periodstart: '',
        periodEnd: '',
    },
    
];


export const TimeLineHistory = ({}) => {
    return (
        <SUncountedList className="timeline relative grid-cols-9">
            {workList.map((work, index) => (
                <Work key={index} title={work.title} description={work.description} periodStart={work.periodStart} periodEnd={work.periodEnd} />
            ))}
                
        </SUncountedList>
    );
};

const SUncountedList = styled.ul`
    padding: 0;


    
`;
