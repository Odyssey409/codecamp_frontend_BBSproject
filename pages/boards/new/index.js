import { useState } from "react";
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
  ErrorMsgContainer,
} from "../../../styles/newBoardRegister";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      contents
      title
      _id
    }
  }
`;

export default function NewBoardPages() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [userpasswordError, setPasswordError] = useState("");
  const [contentTitleError, setContentTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const onChangeUserName = () => {
    setUsername(event.target.value);
    if (username !== "") {
      setUsernameError("");
    }
  };

  const onChangeUserPassword = () => {
    setPassword(event.target.value);
    if (userpassword !== "") {
      setPasswordError("");
    }
  };

  const onChangecontentTitle = () => {
    setContentTitle(event.target.value);
    if (contentTitle !== "") {
      setContentTitleError("");
    }
  };

  const onChangecontent = () => {
    setContent(event.target.value);
    if (content !== "") {
      setContentError("");
    }
  };

  const onClickSubmitBtn = async () => {
    if (!username) {
      setUsernameError("작성자를 입력해주세요.");
    }
    if (!userpassword) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!contentTitle) {
      setContentTitleError("제목을 입력해주세요.");
    }
    if (!content) {
      setContentError("내용을 입력해주세요.");
    }
    if (username && userpassword && contentTitle && content) {
      alert("게시물이 등록되었습니다.");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: username,
              password: userpassword,
              title: contentTitle,
              contents: content,
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
        console.log(result);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <MasterWrapper>
      <PageWrapper>
        <TitleWrapper>
          <InputTitleSpan>게시물 등록</InputTitleSpan>
        </TitleWrapper>
        <LoginInfoWrapper>
          <InputBoxWrapper>
            <InputTitleSpan>작성자</InputTitleSpan>
            <InputBoxContainer
              placeholder="이름을 적어주세요."
              onChange={onChangeUserName}
            ></InputBoxContainer>
            <ErrorMsgContainer>{usernameError}</ErrorMsgContainer>
          </InputBoxWrapper>
          <InputBoxWrapper>
            <InputTitleSpan>비밀번호</InputTitleSpan>
            <InputBoxContainer
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeUserPassword}
            ></InputBoxContainer>
            <ErrorMsgContainer>{userpasswordError}</ErrorMsgContainer>
          </InputBoxWrapper>
        </LoginInfoWrapper>
        <InputBoxWrapper>
          <InputTitleSpan>제목</InputTitleSpan>
          <InputBoxContainer
            placeholder="제목을 작성해주세요."
            onChange={onChangecontentTitle}
          ></InputBoxContainer>
          <ErrorMsgContainer>{contentTitleError}</ErrorMsgContainer>
        </InputBoxWrapper>
        <ContentBoxContainer>
          <InputTitleSpan>내용</InputTitleSpan>
          <ContentBoxInput
            placeholder="내용을 작성해주세요."
            onChange={onChangecontent}
          ></ContentBoxInput>
          <ErrorMsgContainer>{contentError}</ErrorMsgContainer>
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
        <SubmitButton onClick={onClickSubmitBtn}>등록하기</SubmitButton>
      </PageWrapper>
    </MasterWrapper>
  );
}
