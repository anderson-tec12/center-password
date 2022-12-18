import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  background: #202024;
  display: flex;
  color: #e1e1e6;
  padding: 0.5rem 1.25rem;
  align-items: center;

  span {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: 0.625rem;

    li {
      list-style: none;
      font-weight: 500;
      border-bottom: 1px solid #202024;
      cursor: pointer;

      &.actived {
        border-color: #e1e1e6;
      }
    }
  }
`;
