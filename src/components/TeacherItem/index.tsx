import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/6085932?s=460&u=b3b8df2e1b6a64302badad72d1d8d59901e69607&v=4"
          alt="Guilherme Almeida"
        />
        <div>
          <strong>Guilherme Almeida</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        <br />
        <br />
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;