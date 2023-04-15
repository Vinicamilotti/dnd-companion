import { Char } from "../schemas/character.schema,";
import "./styles/sheet.css";
import { useState } from "react";
export const Sheet = ({ props }: { props: Char }) => {
  const [char, setChar] = useState<Char>(props);
  return (
    <div id="sheetConteiner">
      <h1>Ficha de {char.charName}</h1>
      <div id="sheetMenu">
        <nav>
          <button>Salvar</button>
          <button>Exportar</button>
          <button>Desfazer alterações</button>
        </nav>
      </div>
      <div id="basics">
        <div id="names">
          <div>
            <h4>Nome:</h4>
            <p
              onClick={(e) => {
                e.currentTarget.contentEditable = "true";
              }}
              onBlur={(e) => {
                setChar({ ...char, charName: e.currentTarget.innerText });
              }}
            >
              {char.charName}
            </p>
          </div>
          <div>
            <h4>Jogador:</h4>
            <p
              onClick={(e) => {
                e.currentTarget.contentEditable = "true";
              }}
              onBlur={(e) => {
                setChar({ ...char, username: e.currentTarget.innerText });
              }}
            >
              {char.username}
            </p>
          </div>
          <div id="classes">
            <h4>Classes:</h4>
            <ul>
              {char.classes?.map((item, index) => {
                return (
                  <li key={index}>
                    {item} / lvl: {char.lvl?.[index]}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div id="stats">
        <div className="statBlock">
          <div className="statName">
            <h5>Strength</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, str: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.str}</p>`;
              }
            }}
          >
            <p>{char.str}</p>
          </div>
          <div className="mod">{Math.floor((char.str - 10) / 2)}</div>
        </div>
        <div className="statBlock">
          <div className="statName">
            <h5>Dexterity</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, dex: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.dex}</p>`;
              }
            }}
          >
            {char.dex}
          </div>
          <div className="mod">{Math.floor((char.dex - 10) / 2)}</div>
        </div>
        <div className="statBlock">
          <div className="statName">
            <h5>Const</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, cons: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.cons}</p>`;
              }
            }}
          >
            {char.cons}
          </div>
          <div className="mod">{Math.floor((char.cons - 10) / 2)}</div>
        </div>
        <div className="statBlock">
          <div className="statName">
            <h5>Wisdom</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, wis: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.wis}</p>`;
              }
            }}
          >
            {char.wis}
          </div>
          <div className="mod">{Math.floor((char.wis - 10) / 2)}</div>
        </div>
        <div className="statBlock">
          <div className="statName">
            <h5>Int</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, inte: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.inte}</p>`;
              }
            }}
          >
            {char.inte}
          </div>
          <div className="mod">{Math.floor((char.inte - 10) / 2)}</div>
        </div>
        <div className="statBlock">
          <div className="statName">
            <h5>Charisma</h5>
          </div>
          <div
            className="number"
            onClick={(e) => {
              e.currentTarget.contentEditable = "true";
            }}
            onBlur={(e) => {
              const newValue = parseInt(e.currentTarget.innerText);
              if (!Number.isNaN(newValue)) {
                setChar({ ...char, cha: newValue });
              } else {
                e.currentTarget.innerHTML = `<p>${char.cha}</p>`;
              }
            }}
          >
            {char.cha}
          </div>
          <div className="mod">{Math.floor((char.cha - 10) / 2)}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
