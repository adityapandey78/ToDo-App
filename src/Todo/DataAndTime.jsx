import React, { useEffect, useState } from 'react';

function DataAndTime() {
    const [dateTime, setDateTime] = useState();

    // Use useEffect to set up an interval that updates the date and time every second
    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date();
            let formattedDate = now.toLocaleDateString();
            let formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="date-time">{dateTime}</h2>
    );
}

export default DataAndTime;
