import styled from 'styled-components';

export const SidebarIcon = styled.div`
  display: flex; 
  align-items: center;
  cursor: pointer;
  padding: 20px;
  transform: color .3s ;

  &:hover{
    background: #e8f5fe;
    border-radius: 30px;
    color: var(--twitter-color);
    transform: color .3s ;
  }

  > h2 {
    font-weight: 800;
    font-size: 20px;
    margin-left: 20px;
  }

  
`;
