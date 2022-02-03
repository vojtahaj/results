import React from 'react';
import WinklTable from "./WinklTable";
import StartListTable from "./StartListTable";
import SimpleResultTable from "./SimpleResultTable";
import ADResultTable from "./ADResultTable";
import MidResultTable from "./MidResultTable";
import RelayResultTable from "./RelayResultTable";
import Transcription from "./Transcription";
import SCResultTable from "./SCResultTable";
import AD1ResultTable from "./AD1ResultTable";

class AtletView extends React.Component {
    state = {
        protocolArray: []
    }

    render() {
        let result = [];

        if (this.props.raceInfo.druhZavodu !== 6) {
            result = this.props.athletes.filter(athlete => {
                return athlete.flg === 9;
            });
            result.sort((a, b) => {
                return a.cas - b.cas;
                // console.log(this.props.athletes)
            });
        } else { //kdyz jsou stafety, tak to serad podle stc
            // console.log("jsou stafety")
            result = this.props.athletes;
            result.sort((a, b) => {
                return a.stc - b.stc;
            });
        }
        const startlist = this.props.athletes.filter(athlete => {
                return athlete.flg === 2 || athlete.flg === 3 || athlete.flg === 1 || athlete.flg === 14
                    || athlete.flg === 12 || athlete.flg === 13 || athlete.flg === 11;
            }
        );

        let inProgress = this.props.athletes.filter(athlete => {
            return athlete.flg !== 9 && athlete.flg !== 14;
        });
        //todo vyresit dsq dnf pro AD

        if (this.props.raceInfo.druhZavodu === 3) {
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
            const a = result[0];
            const first = a.cas
            const athlet = result[i];

            // console.log(athlet.cas);
            // athlet.rank = 0;

            if (athlet.cas === preTime) {
                athlet.poradi = "=" + preRank;
                // console.log("atl,por" + athlet.poradi);
            } else {
                preRank = i + 1;
                preTime = athlet.cas;
                athlet.poradi = i + 1;
                // console.log("atl,por2".poradi);
            }
            if (i > 0 && result.length > 1) {
                athlet.ztrata = athlet.cas - first;
            } else athlet.ztrata = 0;
            resultArr.push(athlet);
        }

        let lastAthlete = false;
        if (resultArr.length > 0) {
            if (this.props.raceInfo.kodStc === 9) {
                lastAthlete = resultArr.find(({stc}) => stc === this.props.raceInfo.stc)
                if (lastAthlete !== undefined && lastAthlete.poradi === 1 && result.length > 2) {
                    lastAthlete.ztrata = -resultArr[1].ztrata;
                }
                // else lastAthlete=false;
            } else if (this.props.raceInfo.kodStc === 1 || this.props.raceInfo.kodStc === 11 || this.props.raceInfo.kodStc === 12) {
                //atlet DNS, DSQ nebo DNF
                // console.log('dns,dsq,dnf')
                lastAthlete = this.props.athletes.find(({stc}) => stc === this.props.raceInfo.stc)
                if (lastAthlete !== undefined) {
                    if (lastAthlete.flg === 9 || lastAthlete.flg === 3)
                        // console.log(lastAthlete.flg)
                        lastAthlete = false;
                    else {
                        lastAthlete.poradi = Transcription.changeFlg(lastAthlete.flg)
                        lastAthlete.ztrata = 0;
                    }
                }
            } else {
                lastAthlete = false;
            }
            if (lastAthlete === undefined) {
                lastAthlete = false;
            }

            if (lastAthlete !== false) {
                if (this.state.protocolArray.length >= 1) {
                    if (this.state.protocolArray[0].jmeno !== lastAthlete.jmeno || this.state.protocolArray[0].flg !== lastAthlete.flg) {
                        this.state.protocolArray.unshift(lastAthlete);
                        for (let i = 1; i < 3; i++) {
                            if (this.state.protocolArray[i] !== undefined) {
                                // console.log(this.state.protocolArray[i].stc)
                                const a = result.find(({stc}) => stc === this.state.protocolArray[i].stc)
                                if (a !== undefined) {
                                    this.state.protocolArray[i].poradi = a.poradi;
                                    this.state.protocolArray[i].ztrata = a.ztrata;
                                }
                            }
                        }
                    }
                } else this.state.protocolArray.push(lastAthlete)
                this.state.protocolArray.splice(3)

            }
        }

        //zajimaji me pouze prvni dva prvky pole, 3 jsou pro sichr, kdyby bylo nekdy potreba,
        // pak asi lepsi, kdyz by toho bylo vic??? zalezi na druhu zavodu asi taky trochu.
        return (
            <>

                {(() => {
                    switch (this.props.raceInfo.druhZavodu) {
                        case 1:
                            return <SCResultTable raceInfo={this.props.raceInfo} athletes={resultArr}
                                                  protocol={this.state.protocolArray}
                                                  categories={this.props.category}/>;
                        //return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                        case 2:
                            return <>
                                {/*<InProgressTable athletes={inProgress} />*/}
                                <AD1ResultTable raceInfo={this.props.raceInfo} athletes={resultArr}
                                                protocol={this.state.protocolArray}/>
                                {/*<ADResultTable raceInfo={this.props.raceInfo} athletes={result}*/}
                                {/*               protocol={this.state.protocolArray}/>*/}
                            </>;
                        case 3:
                            return <>
                                <MidResultTable raceInfo={this.props.raceInfo} athletes={result}
                                                inProgress={inProgress}/>
                                <MidResultTable raceInfo={this.props.raceInfo} athletes={result}
                                                inProgress={inProgress}/>
                            </>;
                        case 6:
                            return <RelayResultTable raceInfo={this.props.raceInfo} athletes={result}
                                                     inProgress={inProgress}/>
                        case 12:
                            return <WinklTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                        default:
                            return <SCResultTable raceInfo={this.props.raceInfo} athletes={resultArr}
                                                  protocol={this.state.protocolArray}/>;
                        //return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                    }
                })()}

                <br/>

                {/*<StartListTable athletes={inProgress.concat(startlist).sort((a, b) => {*/}
                {/*return a.bib - b.bib;*/}
                {/*})}/>*/}

                {this.props.raceInfo.druhZavodu !== 6 ? <StartListTable athletes={startlist}/> : ``}
            </>
        )
    }
}

export default AtletView;