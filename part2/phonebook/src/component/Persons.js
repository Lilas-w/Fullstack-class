const Persons = ({ persons, deletePerson }) => {
    return (
        <>
            {persons.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>)}  {/*如果连击两次按钮会出现两个key相同的报错，新增警示弹窗*/}

        </>
    )
}

export default Persons
