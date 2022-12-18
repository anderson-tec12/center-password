import styled from "styled-components";

export const Container = styled.main`
  color: #fff;
  display: flex;
  justify-content: center;

  form {
    margin-top: 120px;
    min-width: 470px;
    display: block;
    padding: 1.5rem 1.1rem;
    border: 1px solid #ececec;

    p {
      font-size: 17px;
      margin-bottom: 10px;
    }

    fieldset {
      border: none;

      & + fieldset {
        margin-top: 10px;
      }

      input {
        display: block;
        width: 100%;
        padding: 0.5rem 0.175rem;
      }
    }

    footer {
      display: flex;
      margin-top: 14px;
      gap: 10px;

      button {
        padding: 8px;
        width: 50%;
        font-size: 0.9rem;
      }
    }
  }
`;
