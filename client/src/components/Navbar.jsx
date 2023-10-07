import React from "react";
import styles from "../assets/css/Navbar.module.css";
import { useQuery } from "@apollo/client";
import { GET_SPORTS } from "../graphql/queries";
import { BiArrowToBottom } from "react-icons/bi";

function Button({ children }) {
  return <button>{children}</button>;
}

export default function Navbar() {
  const { loading, error, data } = useQuery(GET_SPORTS);

  const getTeamsClick = () => {
    alert("League Clicked");
  };

  if (loading)
    return (
      <>
        <h6>Loading:</h6>
        <p>Bare with us</p>
      </>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <header className={styles.topnav}>
      <nav>
        <a href="#home">NFL</a>
        <a href="#news">MLB</a>
        <a href="#contact">NBA</a>
        <a href="#about">NCAAF</a>

        <div className={styles.dropdown}>
          <Button className={styles.dropbtn}>
            Leagues <BiArrowToBottom />
          </Button>
          <div className={styles.dropdownContent}>
            {data &&
              data.getAllSports.map((sport) => (
                <a onClick={getTeamsClick} key={sport.id} href="#">
                  {sport.name}
                </a>
              ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
