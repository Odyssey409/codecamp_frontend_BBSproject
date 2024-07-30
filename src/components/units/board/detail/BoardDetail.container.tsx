import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import React from "react";

import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../common/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(2.5);
  const [contentLength, setContentLength] = useState(0);
  const [activeSubmitBtn, setActiveSubmitBtn] = useState(true);
  const [passwordForEditComment, setPasswordForEditComment] = useState("");
  const [idForEditComment, setIdForEditComment] = useState("");
  const [isEditComment, setIsEditComment] = useState(false);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentError, setContentError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  const { data: commentsData } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeRating = (value: number) => {
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
    const boardId = router.query.boardId;

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
    if (
      writer &&
      password &&
      content &&
      rating &&
      typeof boardId === "string"
    ) {
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
            boardId: boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: boardId },
            },
          ],
        });
        setWriter("");
        setPassword("");
        setContent("");
        setRating(2.5);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: event.currentTarget.id,
        },
      });
      router.push(`/boards/list`), alert("게시글 삭제가 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickToList = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      router.push(`/boards/list`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickCommentDelete = async (CommentId: string) => {
    const passwordInput = prompt("댓글 비밀번호 입력" + "");

    try {
      const result = await deleteBoardComment({
        variables: {
          password: passwordInput, // 비밀번호 어떻게 받아올지 고민
          boardCommentId: CommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      alert("댓글 삭제가 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCommentUpdate = (CommentId: string) => {
    const passwordInput = prompt("댓글 비밀번호 입력") || ""; // null 체크 및 기본값 설정
    if (passwordInput) {
      setPasswordForEditComment(passwordInput);
      setIdForEditComment(CommentId);
      setIsEditComment(true);
    } else {
      alert("비밀번호가 입력되지 않았습니다."); // 비밀번호가 입력되지 않은 경우 알림
    }
  };

  const onClickCommentUpdateSubmit = async () => {
    console.log(passwordForEditComment);
    console.log(idForEditComment);

    try {
      const result = await updateBoardComment({
        variables: {
          password: passwordForEditComment, // 비밀번호 어떻게 받아올지 고민
          boardCommentId: idForEditComment,
          updateBoardCommentInput: { contents: content, rating: rating },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      alert("댓글 수정이 완료되었습니다.");
      setIsEditComment(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
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
      onClickCommentDelete={onClickCommentDelete}
      writer={writer}
      password={password}
      content={content}
      rating={rating}
      onClickCommentUpdate={onClickCommentUpdate}
      isEditComment={isEditComment}
      onClickCommentUpdateSubmit={onClickCommentUpdateSubmit}
    />
  );
}
