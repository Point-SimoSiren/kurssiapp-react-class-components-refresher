import React, { Component } from 'react'
import './App.css'

class KurssitMap extends Component {
  constructor(props) {
    super(props)
    this.state = { kurssit: [] }
  }

  componentDidMount() {
    fetch("https://kurssidbapiazure.azurewebsites.net/api/kurssit")
      .then(res => res.json())
      .then(kurssiLista => { this.setState({ kurssit: kurssiLista }) })
  }

  render() {
    let kurssit = this.state.kurssit
    if (kurssit.length > 0) {
      return (
        <div className="App">
          <h1>Kurssit</h1>
          <table>
            <thead><tr><th>Nimi</th><th>laajuus</th></tr></thead>
            <tbody>
              {kurssit.map(k => (
                <tr key={k.kurssiId}><td>{k.nimi}</td><td>{k.laajuus}</td></tr>
              )
              )}
            </tbody>
          </table>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <h1>Kurssit</h1>
          <p>Ladataan..</p>
        </div>
      )
    }
  }
}

export default KurssitMap
