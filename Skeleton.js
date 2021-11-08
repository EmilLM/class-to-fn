import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const Row = styled.div`
    height: ${(props) => props.theme.size.desktop.cashierPWRowHeight};
    width: 100%;
    margin: 3px;
    background-color: ${(props) => props.theme.color.text.base};
    border-radius: ${(props) => props.theme.radius.soft};
`;

function WithdrawalsSkeleton({amount}) {
   return (
       <Wrapper>
            {Array.from({ length: amount }, (_, k) => (
                <Row key={k} />
            ))}
       </Wrapper>
   );
};
  
export default WithdrawalsSkeleton;