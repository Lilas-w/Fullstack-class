import React from 'react'

const StatisticsLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, bad, neutral }) => {
    let all = good + bad + neutral;
    let average = (good - bad) / all;
    let positive = good / all * 100;

    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    } else {
        return (
            <table>
                <tbody>
                    <StatisticsLine text='good' value={good} />
                    <StatisticsLine text='neutral' value={neutral} />
                    <StatisticsLine text='bad' value={bad} />
                    <StatisticsLine text='all' value={all} />
                    <StatisticsLine text='average' value={average} />
                    <StatisticsLine text='positive' value={positive} />
                </tbody>
            </table>
        )
    }
}
export default Statistics