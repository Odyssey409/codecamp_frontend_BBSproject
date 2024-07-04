import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickBoardWriteBtn = async () => {
    try {
      router.push(`/boards/new`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickBoardDetailBtn = async (event) => {
    console.log(event.target.id);
    try {
      router.push(`/boards/${event.target.id}`);
    } catch (error) {
      alert(error.message);
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
