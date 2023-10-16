import React from "react";
import './styles.scss'
export default function NavBar() {
  return(
    <div className="nav-bar">
        <ul>
            <li>
              <a href="/delivery/espetos">Espetos</a>
            </li>
            <li>
              <a href="#bebidas">Bebidas
              </a>
            </li>
            <li>
              <a href="#bebidas-nao-alcoolicas">
                Bebidas não alcoólicas
              </a>
            </li>
            <li>
              <a href="/delivery/roshs">Roshs</a>
            </li>
        </ul>
    </div>
  )
}
