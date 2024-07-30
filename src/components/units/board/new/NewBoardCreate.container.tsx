import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CREATE_BOARD, UPDATE_BOARD } from "./NewBoardCreate.queries";
import CreateNewBoardUI from "./NewBoardCreate.presenter";

import { IBoardWriteProps } from "./NewBoardCreate.types";
import { IUpdateBoardInput } from "../../../../common/types/generated/types";

export default function NewBoard(props: IBoardWriteProps) {
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

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeContentTitle = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
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

  const onChangeYoutubeURL = (event: ChangeEvent<HTMLInputElement>) => {
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
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    const updateBoardInput: IUpdateBoardInput = {}; // 초기화

    // boardId의 타입을 안전하게 처리
    const boardId = Array.isArray(router.query.boardId)
      ? router.query.boardId[0]
      : router.query.boardId;

    if (!userpassword) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    // updateBoardInput 설정
    if (!contentTitle) {
      updateBoardInput.title = props.data?.fetchBoard.title || ""; // 기본값 설정
    } else {
      updateBoardInput.title = contentTitle;
    }

    if (!content) {
      updateBoardInput.contents = props.data?.fetchBoard.contents || ""; // 기본값 설정
    } else {
      updateBoardInput.contents = content;
    }

    if (!youtubeURL) {
      updateBoardInput.youtubeUrl = props.data?.fetchBoard.youtubeUrl || ""; // 기본값 설정
    } else {
      updateBoardInput.youtubeUrl = youtubeURL;
    }

    const myVariables = {
      boardId,
      password: userpassword,
      updateBoardInput,
    };

    try {
      const result = await updateBoard({
        variables: myVariables,
      });

      // 성공적으로 업데이트 후 리다이렉트
      if (result.data) {
        router.push(`/boards/${result.data.updateBoard._id}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message); // 오류 메시지 표시
      }
    }
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
