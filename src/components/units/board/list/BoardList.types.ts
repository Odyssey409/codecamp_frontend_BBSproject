import { MouseEvent } from "react";
import { IQuery } from "../../../../common/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickBoardWriteBtn: () => void;
  onClickBoardDetailBtn: (event: MouseEvent<HTMLDivElement>) => void;
}
