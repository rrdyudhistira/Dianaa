import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
 
const useStyle = createUseStyles({
    timerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    dateItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});
 
const Clock = ({ deadline }: {deadline: any}) => {
    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [dateTimer, setDateTimer] = useState<any>();
    const classes = useStyle();
 
    useEffect(() => {
        getTimeUntil(deadline);
        setDateTimer(setInterval(() => getTimeUntil(deadline), 1000));
 
        return () => {
            clearInterval(dateTimer);
        };
    }, []);
 
    const leading0 = (num: any) => {
        return num < 10 ? "0" + num : num;
    };
 
    const getTimeUntil = (deadline: any) => {
        const time: any = Date.parse(deadline) - Date.parse(new Date().toString());
        if (time < 0) {
            setDate({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
 
            setDate({ days, hours, minutes, seconds });
        }
    };
 
    return (
        <div className='flex justify-center text-center space-x-6 md:space-x-20 py-10 md:px-20 md:py-10'>
            <div className={classes.dateItem}>
                <span className="font-KoHo font-bold text-5xl md:text-6xl lg:text-6xl">
                    {leading0(date.days)}
                </span>{" "}
                <span className="font-KoHo font-bold text-xs md:text-xl">Hari</span>
            </div>
            <div className={classes.dateItem}>
                <span className="font-KoHo font-bold text-5xl md:text-6xl lg:text-6xl">
                    {leading0(date.hours)}
                </span>{" "}
                <span className="font-KoHo font-bold text-xs md:text-xl">Jam</span>
            </div>
            <div className={classes.dateItem}>
                <span className="font-KoHo font-bold text-5xl md:text-6xl lg:text-6xl">
                    {leading0(date.minutes)}
                </span>{" "}
                <span className="font-KoHo font-bold text-xs md:text-xl">Menit</span>
            </div>
            <div className={classes.dateItem}>
                <span className="font-KoHo font-bold text-5xl md:text-6xl lg:text-6xl">
                    {leading0(date.seconds)}
                </span>{" "}
                <span className="font-KoHo font-bold text-xs md:text-xl">Detik</span>
            </div>
        </div>
    );
};
 
const Timer = () => {
    const [deadline, setDeadline] = useState("Nov, 05, 2023");
    const classes = useStyle();
 
    return <Clock deadline={deadline} />;
};
 
export default Timer;