import React, { Component } from 'react'
import './App.css'

class KurssitFor extends Component {
    constructor(props) {
        super(props)
        this.state = { kurssit: [], visible: "table" }
    }

    componentDidMount() {
        fetch("https://kurssidbapiazure.azurewebsites.net/api/kurssit")
            .then(res => res.json())
            .then(kurssiLista => { this.setState({ kurssit: kurssiLista }) })
    }

    render() {
        const { kurssit, visible } = this.state
        let viesti = ""
        let taulukko = []
        let tHeaders = <tr><th>Nimi</th><th>Laajuus</th></tr>
        if (kurssit.length > 0) {
            for (let i = 0; i < kurssit.length; i++) {
                const k = kurssit[i]
                taulukko.push(<tr key={k.kurssiId}>
                    <td>{k.nimi}</td>
                    <td>{k.laajuus}</td>
                </tr>)
            }
        }
        else {
            viesti = "Ladataan..."
        }
        //Ehdollinen return
        if (visible === "table") {
            return (<>
                <h1>Kurssit</h1>
                <table><thead>{tHeaders}</thead><tbody>{taulukko}</tbody></table>
                <p>{viesti}</p>
            </>
            )
        } else if (visible === "addform") {
            return (
                <h1>Uuden kurssin lisääminen</h1>
            )

        } else {
            return (
                <h1>Sovellusvirhe - lataa sivu uudelleen!</h1>
            )
        }
    }
}

export default KurssitFor
