const Persons = ({ persons }) => {
    if (persons.length === 0) return null
    return (
        <>
            {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}  {/*如果连击两次按钮会出现两个key相同的报错，新增警示弹窗*/}
            {/*key加了没加上的问题*/}
        </>
    )
}

export default Persons
