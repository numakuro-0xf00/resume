import { styled } from "styled-components";

export const Qualification = ({}) => {
    return (
        <SQualification>
          <h3 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-3 dark:text-white">Qualification</h3>
          <SQualificationList>
            <li>応用情報技術者試験合格</li>
            <li>TOEIC L&R 720点</li>
          </SQualificationList>
        </SQualification>
    );
}

const SQualification = styled.div`
    
`;
const SQualificationList = styled.ul``;