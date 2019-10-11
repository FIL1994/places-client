import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  credentials: "same-origin",
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

// call on login and logout
// client.resetStore()
export default client;
