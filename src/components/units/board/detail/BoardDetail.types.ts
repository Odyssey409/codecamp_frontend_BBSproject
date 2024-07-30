import { IQuery } from "../../../../common/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveEdit: () => void;
  onClickToList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onClickCommentSubmitBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  activeSubmitBtn: boolean;
  writerError: string;
  passwordError: string;
  contentError: string;
  ratingError: string;
  contentLength: number;
  commentsData?: Pick<IQuery, "fetchBoardComments">;
  onClickCommentDelete: (CommentId: string) => void;
  writer: string;
  password: string;
  content: string;
  rating: number;
  onClickCommentUpdate: (CommentId: string) => void;
  isEditComment: boolean;
  onClickCommentUpdateSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}
