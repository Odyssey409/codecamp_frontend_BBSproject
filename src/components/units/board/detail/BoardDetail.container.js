import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

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

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickToList={onClickToList}
    />
  );
}
