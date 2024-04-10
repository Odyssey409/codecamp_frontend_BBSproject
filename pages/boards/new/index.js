import {
  InputBoxWrapper,
  LoginInfoWrapper,
  MasterWrapper,
  PageWrapper,
  TitleWrapper,
  InputBoxContainer,
  AddressBoxWrapper,
  AddressNumberBox,
  PhotoAddWrapper,
  PhotoAddBtn,
  RadioBtnWrapper,
  RadioBtnLabel,
  InputTitleSpan,
  ContentBoxInput,
  ContentBoxContainer,
  SubmitButton,
  CheckBoxInput,
} from "../../../styles/newBoardRegister";

export default function NewBoardPages() {
  return (
    <MasterWrapper>
      <PageWrapper>
        <TitleWrapper>
          <InputTitleSpan>게시물 등록</InputTitleSpan>
        </TitleWrapper>
        <LoginInfoWrapper>
          <InputBoxWrapper>
            <InputTitleSpan>작성자</InputTitleSpan>
            <InputBoxContainer placeholder="이름을 적어주세요."></InputBoxContainer>
          </InputBoxWrapper>
          <InputBoxWrapper>
            <InputTitleSpan>비밀번호</InputTitleSpan>
            <InputBoxContainer placeholder="비밀번호를 입력해주세요."></InputBoxContainer>
          </InputBoxWrapper>
        </LoginInfoWrapper>
        <InputBoxWrapper>
          <InputTitleSpan>제목</InputTitleSpan>
          <InputBoxContainer placeholder="제목을 작성해주세요."></InputBoxContainer>
        </InputBoxWrapper>
        <ContentBoxContainer>
          <InputTitleSpan>내용</InputTitleSpan>
          <ContentBoxInput placeholder="내용을 작성해주세요."></ContentBoxInput>
        </ContentBoxContainer>
        <AddressBoxWrapper>
          <InputTitleSpan>주소</InputTitleSpan>
          <AddressNumberBox>
            <InputBoxContainer placeholder="07250"></InputBoxContainer>
            <button>우편번호 검색</button>
          </AddressNumberBox>
          <InputBoxContainer></InputBoxContainer>
          <InputBoxContainer></InputBoxContainer>
        </AddressBoxWrapper>
        <InputBoxWrapper>
          <InputTitleSpan>유튜브</InputTitleSpan>
          <InputBoxContainer placeholder="링크를 복사해주세요."></InputBoxContainer>
        </InputBoxWrapper>
        <InputBoxWrapper>
          <InputTitleSpan>사진 첨부</InputTitleSpan>
          <PhotoAddWrapper>
            <PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </PhotoAddBtn>
            <PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </PhotoAddBtn>
            <PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </PhotoAddBtn>
          </PhotoAddWrapper>
        </InputBoxWrapper>
        <InputBoxWrapper>
          <InputTitleSpan>메인 설정</InputTitleSpan>
          <RadioBtnWrapper>
            <RadioBtnLabel>
              <CheckBoxInput
                name="mainSetting"
                type="radio"
                defaultChecked="true"
              ></CheckBoxInput>
              <span>유튜브</span>
              <CheckBoxInput name="mainSetting" type="radio"></CheckBoxInput>
              <span>사진</span>
            </RadioBtnLabel>
          </RadioBtnWrapper>
        </InputBoxWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </PageWrapper>
    </MasterWrapper>
  );
}
