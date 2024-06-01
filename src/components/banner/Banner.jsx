import React from 'react'
import "./banner.css"
const Banner = () => {
  return (
  <div className="section-wrapper">
  <div className="section-content">
    <div className="single-banner">
      <div className="filter">
        <div className="container">
          <div className="textbox">
            <div className="text-1">Inserisci il tuo veicolo o il pezzo cercato</div>
            <div className="text-2">Inserisci il modello del tuo veicolo o il riferimento del pezzo</div>
          </div>
          <div className="homepageSearch">
            <form action="/search" className="form-search">
              <input type="text" name="q" placeholder="Ricerca" className='df' autoComplete="off" />
              <button type="submit" className="bn">
                <span>Ricerca</span>
              </button>
            </form>      
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner
