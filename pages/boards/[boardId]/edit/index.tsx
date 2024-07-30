import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NewBoard from "../../../../src/components/units/board/new/NewBoardCreate.container";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/common/types/generated/types";

export default function EditProductPage() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  return <NewBoard isEdit={true} data={data} />;
}
