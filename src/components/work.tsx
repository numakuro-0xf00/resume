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
            <article>
                <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-9  rounded-xl sm:p-5 xl:p-6">
                    <time className="flex-col items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
                        <span className="block">{periodStart}</span>
                        <span> 〜 </span>
                        <span className="block">{periodEnd}</span>
                    </time>
                    <span className="flex-col block md: col-start-3">
                        <SCircle className="relative w-8 h-8 mt-1 -ml-1 bg-gray-400 rounded-full" />
                        <svg viewBox={`0 0 24 100%`} className="col-start-3  relative text-gray-400 fill-current">
                            <line className="absolute float-left stroke-gray-400" x1="12" x2="12" y1="0" y2="100%"stroke-width="3"></line>
                        </svg>
                    </span>
                    <div className="flex flex-col md:col-start-4 md:col-span-4">
                        <h4 className="block">{title}</h4>
                        <p>{description}</p>
                        
                    </div>
                    
                </div>
            </article>
        </SWorkItem>
    );
};

const SWorkItem = styled.li`

`;

const SCircle = styled.div`
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
`;

const SLine = styled.div`
    
`;

