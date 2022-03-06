import React from "react";
const Part = ({ part }) => {
    //不能在此处加key
    return (
        <>
            <p>
                {part.name} {part.exercises}
            </p>
        </>
    )
}
export default Part;