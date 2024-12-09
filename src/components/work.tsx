import styled from 'styled-components'

interface WorkProps {
    title: string;
    description: string;
    periodStart: string;
    periodEnd: string;
}

export const Work = ({ title, description, periodStart, periodEnd }: WorkProps) => {


    return (
        <SWorkItem className="timeline">
                <li>
                    <article>
                        <div>
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <p>{periodStart}</p>
                            <p>{periodEnd}</p>
                        </div>
                    </article>
                </li>
        </SWorkItem>
    );
};

const SWorkItem = styled.li``;