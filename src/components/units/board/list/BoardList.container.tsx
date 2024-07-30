import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import React from "react";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickBoardWriteBtn = async () => {
    try {
      router.push(`/boards/new`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBoardDetailBtn = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log(event.currentTarget.id);
    try {
      router.push(`/boards/${event.currentTarget.id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardListUI
      data={data}
      onClickBoardWriteBtn={onClickBoardWriteBtn}
      onClickBoardDetailBtn={onClickBoardDetailBtn}
    />
  );
}
