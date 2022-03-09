import React from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return <div>Too many countries, specify some other fliter</div>
    }

    if (countries.length === 0) {  //不要写else if
        return <div>No matches, specify some other fliter</div>
    }

    if (countries.length > 1) {
        return (
            <div>
                {countries.map(({ name }) =>
                    <div key={name.common}>
                        {name.common}
                    </div>
                )}
            </div>
        )
    }

    return <Country country={countries[0]} />
}

export default Countries