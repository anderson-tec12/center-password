import { useForm } from "react-hook-form";

import { Container } from "./styles";

export function NewPassword() {
  const {} = useForm();
  return (
    <Container>
      <form action="">
        <p>Inserir uma nova aplicação com senha</p>
        <fieldset>
          <label htmlFor="app">Aplicação</label>
          <input id="app" name="app" type="text" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" />
        </fieldset>

        <footer>
          <button>Cancelar</button>
          <button>Cadastrar</button>
        </footer>
      </form>
    </Container>
  );
}
