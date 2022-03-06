import React from "react";

const Total = ({ parts }) => {
    return (
        <>
            <b>total of {parts.map(part => part.exercises).reduce((prev, cur) => prev + cur, 0)} exercises</b>
        </>
    )
}

export default Total;