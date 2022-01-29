import React from 'react';
import '../../css/resultTable.css';
import Transcription from "./Transcription";

class AD1ResultTable extends React.Component {

    doResult(result, fromRank) {
        let preRank = fromRank;
        let preTime = 0;
        // let resultArr = [];

        for (let i = 0; i < result.length; i++) {
            const athlet = result[i];
            const first = result[0].cas
            // console.log(athlet.cas);
            // athlet.rank = 0;

            if (athlet.cas === preTime) {
                athlet.poradi = "=" + preRank;
                // console.log("atl,por" + athlet.poradi);
            } else {
                preRank = i + 1 + fromRank;
                preTime = athlet.cas;
                athlet.poradi = preRank;
                // console.log("atl,por2".poradi);
            }
            if (i > 0 && result.length > 1) {
                athlet.ztrata = athlet.cas - first;
            } else athlet.ztrata = 0;
        }
        return result;
    }

    render() {
        let atleti = [];
        // console.log(this.props.raceInfo.koloZavodu);
        if (this.props.raceInfo.koloZavodu === 2) {
            let r1k = [];
            let r2k = [];
            for (let i = 0; i < this.props.athletes.length; i++) {
                if (this.props.athletes[i].cas2 === 0) {
                    r1k.push(this.props.athletes[i]);
                } else r2k.push(this.props.athletes[i]);
            }

            atleti = this.doResult(r2k, 0).concat(this.doResult(r1k, r2k.length));
        } else atleti = this.props.athletes;
        let proto = this.props.protocol;
        console.log(atleti.length)
        console.log(atleti)
        if (atleti.length > 0)
            for (let i = 0; i < proto.length; i++) {
                if (typeof proto[i].poradi === 'number') {
                    try {
                        proto[i].poradi = atleti.find(({stc}) => stc === proto[i].stc).poradi
                        if (proto[i].poradi === 1) {
                            proto[i].ztrata = -atleti[1].ztrata
                        }
                        //proto[i].ztrata = atleti.find(({stc}) => stc === proto[i].stc).ztrata
                        // console.log(proto[i].ztrata)
                        //console.log(proto[i].poradi)
                    } catch (err) {
                        // console.log('neni ve vzsledkach')
                    }
                }
            }
        let protocol = proto.map((athlet, key) => (
            <tr key={key}>
                <td className={"cat"}>{isNaN(athlet.poradi) ? athlet.poradi : athlet.poradi + '.'}</td>
                <td className={"cat"}>{athlet.bib}</td>
                <td>{athlet.jmeno} <br/>{athlet.tj.localeCompare("    ") === 0 ? athlet.klub : athlet.tj}</td>
                <td className={"time"}>{Transcription.transposeTime(athlet.cas1, this.props.raceInfo.pocDes)}</td>
                <td className={"time"}>{Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}</td>
                {this.props.raceInfo.koloZavodu === 3 ?
                    <td className={"time"}>{Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}</td> : null}
                <td className={"time"}>{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</td>
                {athlet.ztrata > 0 ?
                    <td className="gap time">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>
                    :
                    <td className="gap_first time">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>}
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
                <td>&nbsp;</td>
                {this.props.raceInfo.kolZavodu === 3 ? <td>&nbsp;</td> : null}
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
                        Čas 1
                    </th>
                    <th>
                        Čas 2
                    </th>
                    {this.props.raceInfo.koloZavodu === 3 ? <th>Čas 3</th> : null}
                    <th>
                        Čas
                    </th>
                    <th>
                        Ztráta.
                    </th>
                    <th>
                        Kat.
                    </th>
                </tr>
                <tr>
                    <th colSpan="9">
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

                {atleti.map((athlet, key) => (
                    <tr key={key}>
                        <td className={"cat"}>{athlet.poradi}.</td>
                        <td className={"cat"}>{athlet.bib}</td>
                        <td>{athlet.jmeno}<br/>
                            {athlet.klub}
                        </td>
                        <td className={"time"}>{Transcription.transposeTime(athlet.cas1, this.props.raceInfo.pocDes)}</td>
                        <td className={"time"}>{athlet.cas2 === 0 ? "" : Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}</td>
                        {this.props.raceInfo.koloZavodu === 3 ?
                            <td className={"time"}>{Transcription.transposeTime(athlet.cas2, this.props.raceInfo.pocDes)}</td> : null}
                        <td className={"time"}>{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</td>
                        {athlet.ztrata > 0 ?
                            <td className="gap">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>
                            :
                            <td className="gap_first">{Transcription.transposeTime(athlet.ztrata, this.props.raceInfo.pocDes)}</td>}
                        <td className={"cat"}>{athlet.zkrkat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default AD1ResultTable;