import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.4;
  border-right: 1px solid var(--twitter-background);
  /* min-width: fit-content; */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;

  .feed__header{
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fff;
    border: 1px solid var(--twitter-background);
    padding: 15px 20px;
    h2 {
      font-size: 20px;
      font-weight: 800;
    }
  }
 
`;
