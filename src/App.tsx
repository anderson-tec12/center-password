import { useState } from "react";
import { Header } from "./components/header";
import { NewPassword } from "./pages/NewPassowrd";
import { History } from "./pages/History";
import GlobalStyle from "./styles/global";

function App() {
  const [listView, setListView] = useState(false);

  function alterView(value: boolean) {
    setListView(value);
  }
  return (
    <>
      <Header alterView={alterView} searchActived={listView} />

      {!listView && <NewPassword />}
      {listView && <History />}
      <GlobalStyle />
    </>
  );
}

export default App;
