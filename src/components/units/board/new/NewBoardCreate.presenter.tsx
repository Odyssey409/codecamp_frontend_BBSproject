import * as Styles from "./NewBoardCreate.styles";
import { IBoardWriteUIProps } from "./NewBoardCreate.types";

export default function CreateNewBoardUI(props: IBoardWriteUIProps) {
  return (
    <Styles.MasterWrapper>
      <Styles.PageWrapper>
        <Styles.TitleWrapper>
          <Styles.InputTitleSpan>
            게시물 {props.isEdit ? "수정" : "등록"}
          </Styles.InputTitleSpan>
        </Styles.TitleWrapper>
        <Styles.LoginInfoWrapper>
          <Styles.InputBoxWrapper>
            <Styles.InputTitleSpan>작성자</Styles.InputTitleSpan>
            <Styles.InputBoxContainer
              placeholder="이름을 적어주세요."
              onChange={props.onChangeUserName}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              disabled={props.isEdit}
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
            defaultValue={props.data?.fetchBoard.title}
          ></Styles.InputBoxContainer>
          <Styles.ErrorMsgContainer>
            {props.contentTitleError}
          </Styles.ErrorMsgContainer>
        </Styles.InputBoxWrapper>
        <Styles.ContentBoxContainer>
          <Styles.InputTitleSpan>내용</Styles.InputTitleSpan>
          <Styles.ContentBoxInput
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContent}
            defaultValue={props.data?.fetchBoard.contents}
          ></Styles.ContentBoxInput>
          <Styles.ErrorMsgContainer>
            {props.contentError}
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
          <Styles.InputBoxContainer
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeURL}
          ></Styles.InputBoxContainer>
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
                defaultChecked={true}
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
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmitBtn}
          disabled={props.isEdit ? false : props.activeSubmitBtn}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </Styles.SubmitButton>
      </Styles.PageWrapper>
    </Styles.MasterWrapper>
  );
}
