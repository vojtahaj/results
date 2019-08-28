import React from 'react';
import WinklTable from "./WinklTable";
import StartListTable from "./StartListTable";
import SimpleResultTable from "./SimpleResultTable";
import ADResultTable from "./ADResultTable";

class AtletView extends React.Component {


    render() {

        const result = this.props.athletes.filter(athlete => {
            return athlete.flg === 9;
        });
        result.sort((a, b) => {
            return a.cas > b.cas;
        });

        const startlist = this.props.athletes.filter(athlete => {
                return athlete.flg !== 9;
            }
        );
        startlist.sort((a,b) => {
           return a.bib > b.bib;
        });

        return (
            <>

            {(() => {
                switch (this.props.raceInfo.druhZavodu) {
                    case 1:
                        return <SimpleResultTable raceInfo={this.props.raceInfo} athletes={result}/>;
                    case 2:
                        return <ADResultTable raceInfo={this.props.raceInfo} athletes={result}/>;
                    case 12:
                        return <WinklTable raceInfo={this.props.raceInfo} athletes={result}/>;
                    default:
                        return <WinklTable raceInfo={this.props.raceInfo} athletes={result}/>;
                }
            })()}

            <br/>

            <StartListTable athletes={startlist}/>
            </>
        )
    }
}

export default AtletView;