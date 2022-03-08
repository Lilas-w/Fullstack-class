import React from 'react'

const Persons = ({ persons }) => {
    return (
        <>
            {persons.map(persons => <p key={persons.name}>{persons.name} {persons.number}</p>)}  {/*如果连击两次按钮会出现两个key相同的报错，新增警示弹窗*/}
        </>
    )
}

export default Persons