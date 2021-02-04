import React from 'react';
import WinklTable from "./WinklTable";
import StartListTable from "./StartListTable";
import SimpleResultTable from "./SimpleResultTable";
import ADResultTable from "./ADResultTable";
import MidResultTable from "./MidResultTable";
import RelayResultTable from "./RelayResultTable";

class AtletView extends React.Component {


    render() {
        let result = [];

        if(this.props.raceInfo.druhZavodu !==6){
            result = this.props.athletes.filter(athlete => {
                return athlete.flg === 9;
            });
            result.sort((a, b) => {
               return a.cas - b.cas;
        });
        }
        else { //kdyz jsou stafety, tak to serad podle stc
            console.log("jsou stafety")
            result = this.props.athletes;
            result.sort((a,b) => {
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
        // console.log(result);
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
                    case 6:
                        return <RelayResultTable raceInfo={this.props.raceInfo} athletes={result} inProgress={inProgress}/>

                    case 12:
                        return <WinklTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
                    default:
                        return <RelayResultTable raceInfo={this.props.raceInfo} athletes={result} inProgress={inProgress}/>
                        // return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={resultArr}/>;
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