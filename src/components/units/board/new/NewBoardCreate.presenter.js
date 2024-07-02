import * as Styles from "./NewBoardCreate.styles";

export default function CreateNewBoardUI(props) {
  return (
    <Styles.MasterWrapper>
      <Styles.PageWrapper>
        <Styles.TitleWrapper>
          <Styles.InputTitleSpan>게시물 등록</Styles.InputTitleSpan>
        </Styles.TitleWrapper>
        <Styles.LoginInfoWrapper>
          <Styles.InputBoxWrapper>
            <Styles.InputTitleSpan>작성자</Styles.InputTitleSpan>
            <Styles.InputBoxContainer
              placeholder="이름을 적어주세요."
              onChange={props.onChangeUserName}
            ></Styles.InputBoxContainer>
            <Styles.ErrorMsgContainer>
              {props.usernameError}
            </Styles.ErrorMsgContainer>
          </Styles.InputBoxWrapper>
          <Styles.InputBoxWrapper>
            <Styles.InputTitleSpan>비밀번호</Styles.InputTitleSpan>
            <Styles.InputBoxContainer
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeUserPassword}
            ></Styles.InputBoxContainer>
            <Styles.ErrorMsgContainer>
              {props.userpasswordError}
            </Styles.ErrorMsgContainer>
          </Styles.InputBoxWrapper>
        </Styles.LoginInfoWrapper>
        <Styles.InputBoxWrapper>
          <Styles.InputTitleSpan>제목</Styles.InputTitleSpan>
          <Styles.InputBoxContainer
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeContentTitle}
          ></Styles.InputBoxContainer>
          <Styles.ErrorMsgContainer>
            {props.ContentTitleError}
          </Styles.ErrorMsgContainer>
        </Styles.InputBoxWrapper>
        <Styles.ContentBoxContainer>
          <Styles.InputTitleSpan>내용</Styles.InputTitleSpan>
          <Styles.ContentBoxInput
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContent}
          ></Styles.ContentBoxInput>
          <Styles.ErrorMsgContainer>
            {props.ContentError}
          </Styles.ErrorMsgContainer>
        </Styles.ContentBoxContainer>
        <Styles.AddressBoxWrapper>
          <Styles.InputTitleSpan>주소</Styles.InputTitleSpan>
          <Styles.AddressNumberBox>
            <Styles.InputBoxContainer placeholder="07250"></Styles.InputBoxContainer>
            <button>우편번호 검색</button>
          </Styles.AddressNumberBox>
          <Styles.InputBoxContainer></Styles.InputBoxContainer>
          <Styles.InputBoxContainer></Styles.InputBoxContainer>
        </Styles.AddressBoxWrapper>
        <Styles.InputBoxWrapper>
          <Styles.InputTitleSpan>유튜브</Styles.InputTitleSpan>
          <Styles.InputBoxContainer placeholder="링크를 복사해주세요."></Styles.InputBoxContainer>
        </Styles.InputBoxWrapper>
        <Styles.InputBoxWrapper>
          <Styles.InputTitleSpan>사진 첨부</Styles.InputTitleSpan>
          <Styles.PhotoAddWrapper>
            <Styles.PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </Styles.PhotoAddBtn>
            <Styles.PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </Styles.PhotoAddBtn>
            <Styles.PhotoAddBtn>
              <span>+</span>
              <span>Upload</span>
            </Styles.PhotoAddBtn>
          </Styles.PhotoAddWrapper>
        </Styles.InputBoxWrapper>
        <Styles.InputBoxWrapper>
          <Styles.InputTitleSpan>메인 설정</Styles.InputTitleSpan>
          <Styles.RadioBtnWrapper>
            <Styles.RadioBtnLabel>
              <Styles.CheckBoxInput
                name="mainSetting"
                type="radio"
                defaultChecked="true"
              ></Styles.CheckBoxInput>
              <span>유튜브</span>
              <Styles.CheckBoxInput
                name="mainSetting"
                type="radio"
              ></Styles.CheckBoxInput>
              <span>사진</span>
            </Styles.RadioBtnLabel>
          </Styles.RadioBtnWrapper>
        </Styles.InputBoxWrapper>
        <Styles.SubmitButton
          onClick={props.onClickSubmitBtn}
          disabled={props.activeSubmitBtn}
        >
          등록하기
        </Styles.SubmitButton>
      </Styles.PageWrapper>
    </Styles.MasterWrapper>
  );
}
