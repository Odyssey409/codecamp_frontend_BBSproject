import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CREATE_BOARD } from "./NewBoardCreate.queries";
import CreateNewBoardUI from "./NewBoardCreate.presenter";

export default function NewBoard() {
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

  const [activeSubmitBtn, setActiveSubmitBtn] = useState(true);

  const onChangeUserName = () => {
    setUsername(event.target.value);
    if (username !== "") {
      setUsernameError("");
    }
    if (username && userpassword && contentTitle && content) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
  };

  const onChangeUserPassword = () => {
    setPassword(event.target.value);
    if (userpassword !== "") {
      setPasswordError("");
    }
    if (username && userpassword && contentTitle && content) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
  };

  const onChangeContentTitle = () => {
    setContentTitle(event.target.value);
    if (contentTitle !== "") {
      setContentTitleError("");
    }
    if (username && userpassword && contentTitle && content) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
  };

  const onChangeContent = () => {
    setContent(event.target.value);
    if (content !== "") {
      setContentError("");
    }

    if (username && userpassword && contentTitle && content) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
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
    <CreateNewBoardUI
      onChangeUserName={onChangeUserName}
      onChangeUserPassword={onChangeUserPassword}
      onChangeContentTitle={onChangeContentTitle}
      onChangeContent={onChangeContent}
      onClickSubmitBtn={onClickSubmitBtn}
      usernameError={usernameError}
      userpasswordError={userpasswordError}
      contentTitleError={contentTitleError}
      contentError={contentError}
      activeSubmitBtn={activeSubmitBtn}
    />
  );
}
