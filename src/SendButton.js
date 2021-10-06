import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

const SendButton =  ({handleChange}) => {
    return (
        <Card>
            <TextField placeholder = 'subject' onChange = {handleChange(/*pass the event target value*/)}>
            </TextField>
            <TextField placeholder = 'to' onChange = {handleChange(/*pass the event target value*/)}>
            </TextField>
            <TextField placeholder = 'message' onChange = {handleChange(/*pass the event target value*/)}>
            </TextField>
            <button>
                Send an email!
            </button>
        </Card>
    )
}

export default SendButton;