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
} from "../../../styles/newBoardRegister";

export default function NewBoardPages() {
  return (
    <MasterWrapper>
      <PageWrapper>
        <TitleWrapper>
          <span>게시물 등록</span>
        </TitleWrapper>
        <LoginInfoWrapper>
          <InputBoxWrapper>
            <span>작성자</span>
            <InputBoxContainer placeholder="이름을 적어주세요."></InputBoxContainer>
          </InputBoxWrapper>
          <InputBoxWrapper>
            <span>비밀번호</span>
            <InputBoxContainer placeholder="비밀번호를 입력해주세요."></InputBoxContainer>
          </InputBoxWrapper>
        </LoginInfoWrapper>
        <InputBoxWrapper>
          <span>제목</span>
          <InputBoxContainer placeholder="제목을 작성해주세요."></InputBoxContainer>
        </InputBoxWrapper>
        <InputBoxWrapper>
          <span>내용</span>
          <InputBoxContainer placeholder="내용을 작성해주세요."></InputBoxContainer>
        </InputBoxWrapper>
        <AddressBoxWrapper>
          <span>주소</span>
          <AddressNumberBox>
            <InputBoxContainer placeholder="07250"></InputBoxContainer>
            <button>우편번호 검색</button>
          </AddressNumberBox>
          <InputBoxContainer></InputBoxContainer>
          <InputBoxContainer></InputBoxContainer>
        </AddressBoxWrapper>
        <InputBoxWrapper>
          <span>유튜브</span>
          <InputBoxContainer placeholder="링크를 복사해주세요."></InputBoxContainer>
        </InputBoxWrapper>
      </PageWrapper>
      <InputBoxWrapper>
        <span>사진 첨부</span>
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
        <span>메인 설정</span>
        <RadioBtnWrapper>
          <RadioBtnLabel>
            <input type="radio"></input>
            <span>유튜브</span>
            <input type="radio"></input>
            <span>사진</span>
          </RadioBtnLabel>
        </RadioBtnWrapper>
      </InputBoxWrapper>
    </MasterWrapper>
  );
}
