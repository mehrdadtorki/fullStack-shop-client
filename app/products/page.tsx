import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const AllProducts = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  client
    .query({
      query: gql`
        query getAllProducts {
          allProducts {
            product_id
            name
            unit_price
            quantity_in_stock
            discount_percentage
            image_url
            price_after_discount
            description
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return <div>get all products</div>;
};

export default AllProducts;
