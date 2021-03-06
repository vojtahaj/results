import React from 'react';
import WinklTable from "./WinklTable";
import StartListTable from "./StartListTable";
import SimpleResultTable from "./SimpleResultTable";
import ADResultTable from "./ADResultTable";
import MidResultTable from "./MidResultTable";

class AtletView extends React.Component {


    render() {

        const result = this.props.athletes.filter(athlete => {
            return athlete.flg === 9;
        });
        result.sort((a, b) => {
            return a.cas - b.cas;
        });
        // console.log(result);

        const startlist = this.props.athletes.filter(athlete => {
                return athlete.flg === 2 || athlete.flg === 3 || athlete.flg === 1 || athlete.flg === 14
                    || athlete.flg === 12 || athlete.flg === 13 || athlete.flg === 11;
            }
        );

        let inProgress = this.props.athletes.filter(athlete => {
            return athlete.flg !== 9 && athlete.flg !== 14;
        });
        //todo vyresit dsq dnf pro AD

        if (this.props.raceInfo.druhZavodu === 3){
            inProgress = this.props.athletes.filter(athlete => {
                return athlete.flg > 2 && athlete.flg < 10;
            })
            // console.log(inProgress);
        }

        //jestli je raceInfo.stc v cili a predtim byl v inProgress, tak ho tam nech jako aktualni a pak smaz
        // let prePor = 0;
        // let preTimeIP = 0;
        // for (let i = 0; i < result.length; i++) {
        //     if (preTimeIP === result[i].cas) {
        //         prePor++;
        //     }
        //     if (result[i].bib === this.props.raceInfo.stc) {
        //         result[i].poradi = i - prePor + 1;
        //         inProgress.splice(inProgress.length - 1, 0, result[i])
        //     }
        // }
        //todo vyresit problem odstoupeni a diskvalifikace - nekam je ukladat a projit to pole s nimi, kdyby nahodou nedojel,
        // ci byl diskvalifikovan

        startlist.sort((a, b) => {
            return a.stc - b.stc;
        });
        // console.log('druh zavodu: ');
        // console.log(this.props.raceInfo);

//projde pole tech co jsou v cili a nastavi jim poradi, kdyby nahodou bylo vice lidi se stejnym casem
        let preRank = 0;
        let preTime = 0;
        let resultArr = [];

        for (let i = 0; i < result.length; i++) {
            const athlet = result[i];
            // console.log(athlet.cas);
            // athlet.rank = 0;

            if (athlet.cas === preTime) {
                athlet.poradi = "=" + preRank;
                // console.log("atl,por" + athlet.poradi);
            }
            else {
                preRank = i + 1;
                preTime = athlet.cas;
                athlet.poradi = i + 1;
                // console.log("atl,por2".poradi);
            }

            // console.log(this.props.raceInfo.stc);
            // console.log(athlet.bib);
            resultArr.push(athlet);
                {/*<TableRow key={athlet.id} className={*/}
                    {/*this.props.raceInfo.stc == athlet.bib ? "resultRowActive" : (i % 2 === 0) ? "resultDark" : ''*/}
                {/*}>*/}
                    {/*<TableCell component="th" scope="row">{athlet.poradi}.</TableCell>*/}
                    {/*<TableCell align="right">{athlet.bib}</TableCell>*/}
                    {/*<TableCell>{athlet.jmeno}</TableCell>*/}
                    {/*<TableCell>{athlet.tj}</TableCell>*/}
                    {/*<TableCell>{athlet.klub}</TableCell>*/}
                    {/*<TableCell>{athlet.zkrkat}</TableCell>*/}
                    {/*<TableCell align="right">{Transcription.transposeTime(athlet.cas, this.props.raceInfo.pocDes)}</TableCell>*/}

                {/*</TableRow>*/}
            // );
        }

        return (
            <>

            {(() => {
                switch (this.props.raceInfo.druhZavodu) {
                    case 1:
                        return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                    case 2:
                        return <>
                        {/*<InProgressTable athletes={inProgress} />*/}
                        <ADResultTable raceInfo={this.props.raceInfo} athletes={result}/>
                        </>;
                    case 3:
                        return <>
                        <MidResultTable raceInfo={this.props.raceInfo} athletes={result} inProgress={inProgress}/>
                        <MidResultTable raceInfo={this.props.raceInfo} athletes={result} inProgress={inProgress}/>
                        </>;
                    case 12:
                        return <WinklTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                    default:
                        return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                }
            })()}

            <br/>

            {/*<StartListTable athletes={inProgress.concat(startlist).sort((a, b) => {*/}
                {/*return a.bib - b.bib;*/}
            {/*})}/>*/}

            <StartListTable athletes={startlist}/>
            </>
        )
    }
}

export default AtletView;