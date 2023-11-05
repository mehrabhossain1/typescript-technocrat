"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing");
        }
    };
    searchName(null);
    //   Unknown typeof
    const getSpeedInMeterPerSecond = (val) => {
        if (typeof val === "number") {
            const convertedSpeed = (val * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        }
        else if (typeof val === "string") {
            const [res, unit] = val.split(" ");
            const convertedSpeed = (parseFloat(res) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ${unit}`);
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond(null);
    //   Never type
    const throwErr = (msg) => {
        throw new Error(msg);
    };
    throwErr("error hogaya");
}
