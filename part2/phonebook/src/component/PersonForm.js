import React from "react"

const PersonForm = ({ name, number, handleNameChange, handleNumberChange, addPerson }) => {
    return (
        <>
            <form onSubmit={addPerson}>  {/*注意提交表单是onSubmit不是onChange*/}
                <div>
                    name:<input type='text' value={name} onChange={handleNameChange} />
                </div>
                <div>number: <input type='text' value={number} onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form >
        </>
    )
}


export default PersonForm
