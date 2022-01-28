import { GlobalStyle } from "./styles/global";

import { useState } from "react";

import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransitionsTable } from "./components/TransitionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Summary/>
      <TransitionsTable/>
      <GlobalStyle/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}
