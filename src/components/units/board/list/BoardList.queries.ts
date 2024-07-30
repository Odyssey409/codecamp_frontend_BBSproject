import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $endDate: DateTime
    $startDate: DateTime
    $search: String
  ) {
    fetchBoards(
      page: $page
      endDate: $endDate
      startDate: $startDate
      search: $search
    ) {
      _id
      title
      writer
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;
