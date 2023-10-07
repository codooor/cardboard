import styles from "../assets/css/Teams.module.css";

export default function Teams() {
  return (
    <>
      <h3>MLB Teams</h3>
      <main className={styles.teamsContainer}>
        <div className={styles.teamDivisions}>
          <section>
            <h6>American League Central</h6>
            <ul>
              <li>Chicago White Sox</li>
              <li>Cleveland Guardians</li>
              <li>Detroit Tigers</li>
              <li>Kansas City Royals</li>
              <li>Minnesota Twins</li>
            </ul>
          </section>

          <section>
            <h6>National League Central</h6>
            <ul>
              <li>Chicago Cubs</li>
              <li>Cincinnati Reds</li>
              <li>Milwaukee Brewers</li>
              <li>Pittsburgh Pirates</li>
              <li>St. Louis Cardinals</li>
            </ul>
          </section>

          <section>
            <h6>American League East</h6>
            <ul>
              <li>New York Yankees</li>
              <li>Boston Red Sox</li>
              <li>Toronto Blue Jays</li>
              <li>Tampa Bay Rays</li>
              <li>Baltimore Orioles</li>
            </ul>
          </section>

          <section>
            <h6>National League East</h6>
            <ul>
              <li>Atlanta Braves</li>
              <li>Miami Marlins</li>
              <li>New York Mets</li>
              <li>Philadelphia Phillies</li>
              <li>Washington Nationals</li>
            </ul>
          </section>

          <section>
            <h6>American League West</h6>
            <ul>
              <li>Houston Astros</li>
              <li>Los Angeles Angels</li>
              <li>Oakland Athletics</li>
              <li>Seattle Mariners</li>
              <li>Texas Rangers</li>
            </ul>
          </section>

          <section>
            <h6>National League West</h6>
            <ul>
              <li>Arizona Diamondbacks</li>
              <li>Colorado Rockies</li>
              <li>Los Angeles Dodgers</li>
              <li>San Diego Padres</li>
              <li>San Francisco Giants</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
