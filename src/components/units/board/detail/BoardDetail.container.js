import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0.0);
  const [contentLength, setContentLength] = useState(0);
  const [activeSubmitBtn, setActiveSubmitBtn] = useState(true);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentError, setContentError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const { data: commentsData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onChangeWriter = () => {
    setWriter(event.target.value);
    if (writer !== "") {
      setWriterError("");
    }
    if (writer && password && content && rating) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
  };

  const onChangePassword = () => {
    setPassword(event.target.value);
    if (password !== "") {
      setPasswordError("");
    }
    if (writer && password && content && rating) {
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

    if (content.length > 100) {
      setContentError("입력 최대 글자 수를 초과하였습니다");
    } else {
      setContentError("");
    }

    if (writer && password && content && rating) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
    setContentLength(content.length);
  };

  const onChangeRating = (value) => {
    setRating(value);
    if (rating !== null) {
      setRatingError("");
    }

    if (writer && password && content && rating) {
      setActiveSubmitBtn(false);
    } else {
      setActiveSubmitBtn(true);
    }
  };

  const onClickCommentSubmitBtn = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!content) {
      setContentError("내용을 입력해주세요.");
    }
    if (!rating) {
      setRatingError("별점을 입력해주세요.");
    }
    if (writer && password && content && rating) {
      alert("댓글이 등록되었습니다.");

      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: content,
              rating: rating,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickDelete = async (event) => {
    try {
      const result = await deleteBoard(
        {
          variables: {
            boardId: event.target.id,
          },
        },
        router.push(`/boards/list`),
        alert("게시글 삭제가 완료되었습니다.")
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onClickToList = async (event) => {
    try {
      router.push(`/boards/list`);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickToList={onClickToList}
      onClickMoveEdit={onClickMoveEdit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContent={onChangeContent}
      onChangeRating={onChangeRating}
      onClickCommentSubmitBtn={onClickCommentSubmitBtn}
      activeSubmitBtn={activeSubmitBtn}
      writerError={writerError}
      passwordError={passwordError}
      contentError={contentError}
      ratingError={ratingError}
      contentLength={contentLength}
      commentsData={commentsData}
    />
  );
}
