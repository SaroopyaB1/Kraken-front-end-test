import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./main";

export default function Home() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <div className="home">
          <Main />
        </div>
      </main>
    </ApolloProvider>
  );
}
