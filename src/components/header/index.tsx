import { Container } from "./styles";

interface props {
  searchActived: boolean;
  alterView(value: boolean): void;
}

export function Header({ alterView, searchActived }: props) {
  function handlerNewPassWord() {
    alterView(false);
  }

  function handlerList() {
    alterView(true);
  }

  return (
    <Container>
      <span>Central de Senhas</span>

      <ul>
        <li
          onClick={handlerNewPassWord}
          className={!searchActived ? "actived" : ""}
        >
          Cadastrar
        </li>
        <li onClick={handlerList} className={searchActived ? "actived" : ""}>
          Consultar
        </li>
      </ul>
    </Container>
  );
}
