import Card from '@material-ui/core/Card'

const Email =  ({emails}) => {
    return (
        <Card variant = 'outlined'>
            <div>sender: {emails[1]?.sender}</div>
            <div>recipient: {emails[1]?.recipient}</div>
            <div>subject: {emails[1]?.subject}</div>
            <div>date: {emails[1]?.date}</div>
            <div>id: {emails[1]?.id}</div>
            <div>message: {emails[1]?.message}</div>
        </Card>
    )
}

export default Email;