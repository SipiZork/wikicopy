import React from 'react';
import './App.css'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  setIndex = (index) => { 
    this.setState({ activeIndex: index })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <aside className="page-menu">
            <div className="logo">
              <img src="https://en.wikipedia.org/static/images/project-logos/enwiki.png" alt="logo" />
            </div>
            <div className="menu-items">
              <a href="http://localhost:3000">Main page</a>
              <a href="http://localhost:3000">Contents</a>
              <a href="http://localhost:3000">Featured content</a>
              <a href="http://localhost:3000">Current events</a>
              <a href="http://localhost:3000">Random article</a>
              <a href="http://localhost:3000">Donate to Wikipedia</a>
              <a href="http://localhost:3000">Wikipedia store</a>
              <span className="menu-sub-title">Interaction</span>
              <a href="http://localhost:3000">Help</a>
              <a href="http://localhost:3000">About Wikipedia</a>
              <a href="http://localhost:3000">Community Portal</a>
              <a href="http://localhost:3000">Recent changes</a>
              <a href="http://localhost:3000">Contact page</a>
              <span className="menu-sub-title">Tools</span>
              <a href="http://localhost:3000">What links here</a>
              <a href="http://localhost:3000">Related changes</a>
              <a href="http://localhost:3000">Upload file</a>
              <a href="http://localhost:3000">Special pages</a>
              <a href="http://localhost:3000">Permanent link</a>
              <a href="http://localhost:3000">Page information</a>
              <a href="http://localhost:3000">Wikidata item</a>
              <a href="http://localhost:3000">Cite this page</a>
              <span className="menu-sub-title">Print/export</span>
              <a href="http://localhost:3000">Download as PDF</a>
              <a href="http://localhost:3000">Printable version</a>
              <span className="menu-sub-title">Languages</span>
              <a href="http://localhost:3000">Español</a>
            </div>
          </aside>
          <div className="page">
            <header className="header">
              <div className="signin-singup">
                <span role="img" aria-label="asd">👤Not Logged in</span><a href="#a">Talk</a> <a href="#a">Contributions</a> <a href="#a">Create account</a> <a href="#a">Lig in</a>
              </div>
              <nav className="content-menu">
                <div className="left-menu">
                  <div className={`menu-item ${this.state.activeIndex === 0 ? 'active' : null}`} onClick={() => this.setIndex(0)}>
                    Article
                  </div>
                  <div className={`menu-item ${this.state.activeIndex === 1 ? 'active' : null}`} onClick={() => this.setIndex(1)}>
                    Talk
                  </div>
                </div>
                <div className="searchfield">
                  <input type="search" placeholder="Search Wikipedia" />
                  <label htmlFor="search"><span role="img" aria-label="asd">🔍</span></label>
                </div>
                <div className="right-menu">
                  <div className={`menu-item ${this.state.activeIndex === 2 ? 'active' : null}`} onClick={() => this.setIndex(2)}>
                    Read
                  </div>
                  <div className={`menu-item ${this.state.activeIndex === 3 ? 'active' : null}`} onClick={() => this.setIndex(3)}>
                    Edit
                  </div>
                  <div className={`menu-item ${this.state.activeIndex === 4 ? 'active' : null}`} onClick={() => this.setIndex(4)}>
                    View History
                  </div>
                </div>
              </nav>
            </header>
            <section className="page-content">
              <h1 className="title">
                Communist Mutants from Space
              </h1>
              <span className="wiki">From Wikipedia, the free encyclopedia</span>
              <div className="description">
                <h5>Communist Mutants from Space</h5>
                <div className="description-img">
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/85/Communist_Mutants_from_Space_cover.jpg" alt="desc" />
                  <div className="description-img-description">Cover art</div>
                </div>
                <div className="infos">
                  <div className="info-names">
                    <p>Developer(s)</p>
                    <p>Publisher(s)</p>
                    <p>Programmer(s)</p>
                    <p>Platform(s)</p>
                    <p>Reales</p>
                    <p>Genre(s)</p>
                    <p>Mode(s)</p>
                  </div>
                  <div className="info-values">
                    <p>Starpath</p>
                    <p>Starpath</p>
                    <p>Stephen H. Landrum</p>
                    <p>Atari 2600</p>
                    <p>NA: 1982</p>
                    <p>Fixed shooter</p>
                    <p>Single-player</p>
                  </div>
                </div>
              </div>
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
            </section>
          </div>
        </div>
      </div>
    )
  }
}
export default App
