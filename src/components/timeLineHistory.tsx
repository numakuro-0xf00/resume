import styled from 'styled-components'
import { Work } from './work';  


export const TimeLineHistory = ({}) => {
    return (
        <SUncountedList className="timeline relative grid-cols-9">

            <Work title='***(現職)' description='(description)' periodStart='2021年4月' periodEnd='現在'/>
            <Work title='株式会社パトライト' description='製造業。金属加工の業務に従事' periodStart='2013年4月' periodEnd='2019年12月' />
        </SUncountedList>
    );
};

const SUncountedList = styled.ul`
    padding: 0;


    
`;
