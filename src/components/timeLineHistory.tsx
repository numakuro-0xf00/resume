import styled from 'styled-components'
import { Work } from './work';  


export const TimeLineHistory = ({}) => {
    return (
        <SUncountedList className="timeline">
            <p>here is workHistoryTImeLine</p>

            <Work title='***(現職)' description='(description)' periodStart='(start)' periodEnd='(end)'/>
        </SUncountedList>
    );
};

const SUncountedList = styled.ul`s
    list-style-type: dotted;
    padding: 0;
`;

