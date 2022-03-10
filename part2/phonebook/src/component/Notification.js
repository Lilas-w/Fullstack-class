const Notification = ({ value }) => {
    if (value === null) {
        return null
    }

    const style = {
        color: value.type === 'alert' ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <>
            <div style={style}>{value.message}</div>
        </>
    )
}

export default Notification;
