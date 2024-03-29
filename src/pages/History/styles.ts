import styled from "styled-components";

export const Container = styled.main`
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  div {
    width: 800px;
    border: 1px solid #ececec;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: #222;
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
    }
    td {
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  max-height: 42vh;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
