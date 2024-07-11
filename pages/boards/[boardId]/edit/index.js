import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NewBoard from "../../../../src/components/units/board/new/NewBoardCreate.container";

export default function EditProductPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <NewBoard isEdit={true} data={data} />;
}
