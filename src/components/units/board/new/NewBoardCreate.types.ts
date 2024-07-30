import { ChangeEvent } from "react";
import { IQuery } from "../../../../common/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onChangeUserName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUserPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContentTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeURL: (event: ChangeEvent<HTMLInputElement>) => void;
  usernameError: string;
  userpasswordError: string;
  contentTitleError: string;
  contentError: string;
  onClickSubmitBtn: () => void;
  onClickUpdate: () => void;
  activeSubmitBtn: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
