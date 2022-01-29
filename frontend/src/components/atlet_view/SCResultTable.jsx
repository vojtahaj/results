import React from 'react';
import Transcription from './Transcription';
import '../../css/scTable.css';
import CategoryList from "../CategoryList";
import DashboardCategoryDetailStomp from "../dashboards/DashboardCategoryDetailStomp";

class SCResultTable extends React.Component {

    render() {

        let protocol = this.props.protocol.map((athlet, key) => (
            <tr key={key}>
                <td className={"rank"}>{isNaN(athlet.poradi) ? athlet.poradi : athlet.poradi + '.'}</td>
                <td className={"rank"}>{athlet.bib}</td>
                <td>{athlet.jmeno}</td>
                <td className={"tj"}>{athlet.tj ? athlet.tj : athlet.klub}</td>
                <td className={"time"}>{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</td>
                {athlet.ztrata > 0 ?
                    <td className="gap">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>
                    :
                    <td className="gap_first">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>}
                <td className={"cat"}>{athlet.zkrkat}</td>
                {/*<td>&nbsp;</td>*/}
                {/*<td>&nbsp;</td>*/}
            </tr>
        ));

        let row =
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                {/*<td>&nbsp;</td>*/}
                {/*<td>&nbsp;</td>*/}
            </tr>;
        let oneRow = <>
            {protocol}
            {row}
        </>
        let twoRows = <>
            {protocol}
            {row}
            {row}
        </>;
        let threeRows = <>
            {row}
            {row}
            {row}
        </>;

        return (
            <>
                <table className={"result"}>
                    <tbody>
                    <tr>
                        <th>
                            Poř.
                        </th>
                        <th>
                            Stč.
                        </th>
                        <th>
                            Jméno
                        </th>
                        <th>
                            TJ
                        </th>
                        <th>
                            Čas
                        </th>
                        <th>
                            Ztráta
                        </th>
                        <th>
                            Kat.
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="7">
                            Události v cíli
                        </th>
                    </tr>

                    {this.props.protocol.length === 0 ? threeRows : this.props.protocol.length === 1 ? twoRows :
                        this.props.protocol.length === 2 ? oneRow : protocol}

                    <tr>
                        <th colSpan="9">
                            Výsledky
                        </th>
                    </tr>

                    {this.props.athletes.map((athlet, key) => (
                        <tr key={athlet.id}>
                            <td className={"rank"}>{athlet.poradi}.</td>
                            <td className={"rank"}>{athlet.bib}</td>
                            <td>{athlet.jmeno}</td>
                            {/*{console.log(athlet.tj.localeCompare("    ") === 0)}*/}
                            <td className={"tj"}>{athlet.tj.localeCompare("    ") === 0 ? athlet.klub : athlet.tj}</td>
                            <td className={"time"}>{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</td>
                            <td className="gap">{(key === 0) ? "" : Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>
                            <td className={"cat"}>{athlet.zkrkat}</td>
                            {/*<td>&nbsp;</td>*/}
                            {/*<td>&nbsp;</td>*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>)
    }
}

export default SCResultTable;