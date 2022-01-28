import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransitionsTable } from "./components/TransitionsTable";


export function App() {
  return (
    <>
      <Header/>
      <Summary/>
      <TransitionsTable/>
      <GlobalStyle/>
    </>
  );
}
