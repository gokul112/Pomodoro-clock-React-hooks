import {useState,useEffect} from 'react';


export default () => {
const [sessionLengthSec,setsessionLength] = useState(60*25)
const [breakLengthSec,setbreakLength] = useState(300)
const [currentSession,setCurrentSession] = useState("Session");
const [intervalId,setIntervalId] = useState(null);
const [timeLeft, setTimeLeft] = useState(sessionLengthSec);

useEffect(()=>{
    setTimeLeft(sessionLengthSec)
},[sessionLengthSec]);

const isStart = intervalId !== null;


return{
    breakLengthSec,
    sessionLengthSec,
    decrementSessionLength : () => {
        const newLength = sessionLengthSec - 60;
        if(newLength<=0){
            setsessionLength(0)
        }
        else{
            setsessionLength(newLength)
        }
    },

    incrementSessionLength : () => {
        setsessionLength(sessionLengthSec + 60);
    },


    decrementLength : () => {
        const newLength = breakLengthSec - 60;
        if(newLength<=0){
            setbreakLength(0)
        }
        else{
            setbreakLength(newLength)
        }
    },

    incrementLength : () => {
        setbreakLength(breakLengthSec + 60);
    },
    currentSession,
    isStart,
    timeLeft,
    startTimer : () => {
            if(isStart){  //Stop
                clearInterval(intervalId);  
                setIntervalId(null)
            }
            else{   //start
                const newInterval =  setInterval(() => {
                    setTimeLeft(prevState => {
                        const newValue = prevState-1;
                        if(newValue>=0)
                            return newValue;
                        if(currentSession === "Session"){   //Changing when session length over
                            setCurrentSession("Break");
                            setTimeLeft(breakLengthSec)
                        }
                        else if(currentSession === "Break"){
                            setCurrentSession("Session"); //Changing when break length over
                            setTimeLeft(sessionLengthSec)
                            }
                        });
                    }, 1000);
                    setIntervalId(newInterval)
            }
        },
        reset : () => {
            if(!isStart){
                setbreakLength(300);
                setsessionLength(60*25);
                setTimeLeft(60*25); 
            }
        }



}

}






