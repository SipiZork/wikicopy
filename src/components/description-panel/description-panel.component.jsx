import React from 'react'

import './description-panel.styles.scss'

const DescriptionPanel = () => (
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
)

export default DescriptionPanel