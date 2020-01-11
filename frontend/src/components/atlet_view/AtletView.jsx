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
                return athlete.flg === 1;
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
            console.log(inProgress);
        }

        //jestli je raceInfo.stc v cili a predtim byl v inProgress, tak ho tam nech jako aktualni a pak smaz
        let prePor = 0;
        let preTime = 0;
        for (let i = 0; i < result.length; i++) {
            if (preTime === result[i].cas) {
                prePor++;
            }
            if (result[i].bib === this.props.raceInfo.stc) {
                result[i].poradi = i - prePor + 1;
                inProgress.splice(inProgress.length - 1, 0, result[i])
            }
        }
        //todo vyresit problem odstoupeni a diskvalifikace - nekam je ukladat a projit to pole s nimi, kdyby nahodou nedojel,
        // ci byl diskvalifikovan

        startlist.sort((a, b) => {
            return a.bib - b.bib;
        });
        // console.log('druh zavodu: ');
        // console.log(this.props.raceInfo);

        return (
            <>

            {(() => {
                switch (this.props.raceInfo.druhZavodu) {
                    case 1:
                        return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={result}/>;
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
                        return <WinklTable raceInfo={this.props.raceInfo} athletes={result}/>;
                    default:
                        return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={result}/>;
                }
            })()}

            <br/>

            {/*<StartListTable athletes={inProgress.concat(startlist).sort((a, b) => {*/}
                {/*return a.bib - b.bib;*/}
            {/*})}/>*/}

            <StartListTable athletes={startlist.sort((a, b) => {
                return a.bib - b.bib;
            })}/>
            </>
        )
    }
}

export default AtletView;