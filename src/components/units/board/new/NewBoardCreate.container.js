import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CREATE_BOARD, UPDATE_BOARD } from "./NewBoardCreate.queries";
import CreateNewBoardUI from "./NewBoardCreate.presenter";

export default function NewBoard(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");

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

  const onChangeYoutubeURL = () => {
    setYoutubeURL(event.target.value);
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
              youtubeUrl: youtubeURL,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    const myVariables = {
      boardId: router.query.boardId,
      password: userpassword,
      updateBoardInput: {},
    };

    if (!userpassword) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    if (!contentTitle) {
      myVariables.updateBoardInput.title = props.data?.fetchBoard.title;
    } else {
      myVariables.updateBoardInput.title = contentTitle;
    }
    if (!content) {
      myVariables.updateBoardInput.contents = props.data?.fetchBoard.contents;
    } else {
      myVariables.updateBoardInput.contents = content;
    }
    if (!youtubeURL) {
      myVariables.updateBoardInput.youtubeUrl =
        props.data?.fetchBoard.youtubeUrl;
    } else {
      myVariables.updateBoardInput.youtubeUrl = youtubeURL;
    }

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/boards/${result.data.updateBoard._id}`);
  };

  return (
    <CreateNewBoardUI
      onChangeUserName={onChangeUserName}
      onChangeUserPassword={onChangeUserPassword}
      onChangeContentTitle={onChangeContentTitle}
      onChangeContent={onChangeContent}
      onChangeYoutubeURL={onChangeYoutubeURL}
      onClickSubmitBtn={onClickSubmitBtn}
      usernameError={usernameError}
      userpasswordError={userpasswordError}
      contentTitleError={contentTitleError}
      contentError={contentError}
      activeSubmitBtn={activeSubmitBtn}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
    />
  );
}
