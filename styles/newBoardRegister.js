import styled from "@emotion/styled";

export const MasterWrapper = styled.div`
  box-sizing: border-box;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 50px;
  padding-bottom: 60px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
`;

export const LoginInfoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > * {
    &:first-child {
      width: 45%;
      margin-right: 50px;
    }
    &:last-child {
      width: 45%;
    }
  }
`;

export const InputBoxWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-start;
`;

export const InputBoxContainer = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin-top: 10px;
  opacity: 0.6;
  color: rgba(0, 0, 0, 0.1);
  &.contentBoxInput {
    height: 300px;
  }
`;

export const ContentBoxContainer = styled.div`
  width: 81%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

export const ContentBoxInput = styled.textarea`
  width: 100%;
  height: 300px;
  font-size: 15px;
  opacity: 0.5;
  margin-top: 15px;
`;

export const AddressBoxWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const AddressNumberBox = styled.div`
  margin-top: 15px;
  width: 20%;
  display: flex;
  flex-direction: row;
  > * {
    &:first-child {
      margin-top: 0px;
    }
    &:last-child {
      background-color: black;
      color: white;
      width: 300px;

      font-size: 10px;
      margin-left: 20px;
    }
  }
`;

export const PhotoAddWrapper = styled.button`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
`;

export const PhotoAddBtn = styled.div`
  margin-top: 15px;
  height: 50px;
  width: 50px;
  padding: 13px;
  background-color: #bdbdbd;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  > * {
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

export const RadioBtnWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: white;
  margin-top: 15px;
`;

export const InputTitleSpan = styled.span`
  font-weight: 600;
`;

export const RadioBtnLabel = styled.label`
  width: 80%;
  accent-color: #ffd600;

  > * {
    &:nth-child(2n) {
      font-weight: 600;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

export const CheckBoxInput = styled.input`
  appearance: none;

  border: 1px solid #ffd600;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  &:checked {
    appearance: auto;
    border-radius: 50%;
    border: 1px solid #ffd600;
    accent-color: #ffd600;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 40px;
  background-color: #ffd600;
  color: black;
  font-weight: 800;
  border: none;
  padding: 10px 50px 10px 50px;
`;
