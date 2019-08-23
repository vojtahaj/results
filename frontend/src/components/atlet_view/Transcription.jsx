const Transcription = {

    changeFlg(flg) {
        if (flg === 1)
            return "DNS";
        if (flg === 2)
            return "STRT";
        else if (flg === 3)
            return "TRT";
        else if (flg === 9)
            return "CIL";
        else if (flg === 11)
            return "DNF";
        else if (flg === 12)
            return "DSQ";
        else return "XXX"
    },

    transposeTime(time) {
        if (time === 0) return "";
        let pD = this.props.raceInfo.pocDes;

        var milliseconds = parseInt((time % 1000))
            , seconds = parseInt((time / 1000) % 60)
            , minutes = parseInt((time / (1000 * 60)) % 60)
            , hours = parseInt((time / (1000 * 60 * 60)) % 24);

        milliseconds = (pD === 1) ? milliseconds / 100 :
            (pD === 2) ? milliseconds / 10 : milliseconds;

        // hours = (hours < 10) ? "0" + hours : hours;
        hours = (hours === 0) ? "" : hours + ":";
        minutes = (minutes === 0) ? "" : (minutes < 10) ? "0" + minutes + ":" : minutes + ":";
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds === 0 && pD === 2) ? "00" :
            (milliseconds === 0 && pD === 3) ? "000" : milliseconds;

        return hours + minutes + seconds + "." + milliseconds;
    },

    transposeSpd(spd) {
        if (spd === 0)
            return "";
        else return (spd / 1000).toFixed(3) + " km/h";
    }
}

export default Transcription;