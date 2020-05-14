import React from 'react'

import DescriptionPanel from '../description-panel/description-panel.component'

import './article.styles.scss'

const Article = () => (
  <div>
    <h1 className="title">
      Communist Mutants from Space
    </h1>
    <span className="wiki">From Wikipedia, the free encyclopedia</span>
    <DescriptionPanel />
    <article className="content-description content">
      <p>
        Communist Mutants from Space is a fixed shooter video game programmed by Stephen H. Landrum for the Atari 2600 with the Starpath Supercharger cassette accessory.
        It was published in 1982 by Starpath (formerly Arcadia).[2] The game is similar to Galaxian,[3] adding a variety of gameplay-changing options.
      </p>
      <div className="contents-links">
        <h3>Contents</h3>
        <ol>
          <li>Plot</li>
          <li>Gameplay
            <ol>
              <li>Game options</li>
            </ol>
          </li>
          <li>Easter egg</li>
          <li>References</li>
          <li>External links</li>
        </ol>
      </div>
    </article>
    <article className="content">
      <h2 className="article-title">Plot</h2>
      <hr />
      <p>
        Aliens from the communist planet of Rooskee are invading peaceful, democratic planets and turning their inhabitants into "Communist Mutants."
        The communist mutant armies are controlled by the Mother Creature, a strange alien who has gone mad due to irradiated vodka.[4]
      </p>
    </article>
    <article className="content">
      <h2 className="article-title">Gameplay</h2>
      <hr />
      <div className="content-img">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Commiemutants.png/270px-Commiemutants.png" alt="gameplay" />
        <div className="content-img-description">Destroy the Mother Creature while avoiding mutants and their bombs.</div>
      </div>
      <p>
        The player starts off with three reserve cannons. The object is to destroy the mutants aliens and, most importantly, the Mother Creature. 
        The mutants hatch from moving eggs at the top of the screen. Because the Mother Creature replenishes eggs when they hatch or are destroyed, 
        it must be defeated before the player can advance to the next wave. If a mutant or a bomb thrown by a mutant comes into contact with the cannon, 
        the cannon will be destroyed and a reserve must be called up. A new cannon is awarded on every other wave.
      </p>
      <h3 className="sub-title">Game options</h3>
      <p>
        An in-game menu allows a variety of gameplay changes. The player may toggle the shield option on or off. If activated, "shield" mode allowed a player to press down on the joystick to become invincible for a short period (only one shield was allotted per level). "Time warp" allows the player to press up on the joystick to temporarily slow the enemies.
        The type of shot fired can be changed by activating the "penetrating fire" option (which enhances the beam fired so that it can hit two mutants rather than one) and/or the "guided fire" option
        (which causes the beam to be moved with the joystick rather than firing in a straight line).
      </p>
      <p>
        The menu also allows for multiple players (up to four) to play. Players one and three share the first joystick while players two and four share the second.
      </p>
    </article>
    <article className="content">
      <h2 className="article-title">Easter egg</h2>
      <hr />
      <p>
        Holding fire during power-on of the Atari 2600 causes the "HI" on the high scores screen to change to "SHL", the initials of programmer Stephen H. Landrum.[5]
      </p>
    </article>
    <article className="content">
      <h2 className="article-title">References</h2>
      <hr />
      <ol className="references-ol">
        <li>Hague, James. "The Giant List of Classic Game Programmers".</li>
        <li>I break for Arcadians:Entertainment abounds in a gaggle of games, Page 26, InfoWorld, 27 Jun 1983,</li>
        <li>Brundage, Darryl (June 23, 2005). "Communist Mutants from Space". The Atari Times.</li>
        <li>"Communist Mutants from Space manual". archive.org. Starpath. 1982.</li>
        <li>Federico, Chris. "The Complete 2600 Easter Egg Archive". Orphaned Computers & Game Systems. Retrieved 2007-12-28.</li>
      </ol>
    </article>
  </div>
)

export default Article