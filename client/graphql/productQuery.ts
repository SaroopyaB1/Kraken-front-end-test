import { DocumentNode, OperationVariables, TypedDocumentNode, gql, useQuery } from "@apollo/client";

export const GET_AllProducts : DocumentNode | TypedDocumentNode<any, OperationVariables > = gql`query{
  allProducts{
  		id,
      name,
      power,
      description,
      price,
      quantity,
      brand,
      weight,
      height,
      width,
      length,
      model_code,
      colour,
      img_url,
  }  
}
  `;


 