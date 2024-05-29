import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  MasterWrapper,
  PageWrapper,
  boardHeaderWrapper,
} from "../../../styles/boardDetail";

import {
  faMagnifyingGlass,
  faChevronRight,
  faChevronDown,
  faHouse,
  faLocationDot,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      writer
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <MasterWrapper>
      <PageWrapper>
        <BoardDetailPage>hi</BoardDetailPage>
      </PageWrapper>
    </MasterWrapper>
  );
}
