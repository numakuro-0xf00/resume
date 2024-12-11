import styled from 'styled-components'
import { Work } from './work';  


export const TimeLineHistory = ({}) => {
    return (
        <SUncountedList className="timeline relative grid-cols-9">

            <Work title='***(現職)' description='(description)' periodStart='(start)' periodEnd='(end)'/>
        </SUncountedList>
    );
};

const SUncountedList = styled.ul`
    padding: 0;


    
`;

