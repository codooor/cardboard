import { gql } from "@apollo/client";

export const GET_SPORTS = gql`
  query GetAllSports {
    getAllSports {
      id
      name
    }
  }
`;
