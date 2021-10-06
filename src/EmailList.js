import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

const EmailList =  ({emails}) => {
    let emailList = emails.map((email, index) => {
    return (
    <Grid item xs = {12} sm = {12} md = {12} lg = {12}>
        <Card>
            <Grid container>
                    <Grid item xs = {6} sm = {6} md = {6} lg = {6}>{email.sender}</Grid>
                    <Grid item xs = {6} sm = {6} md = {6} lg = {6}>{email.subject}</Grid>
            </Grid>
        </Card>
    </Grid>
    )
    })
    return <Grid container>{emailList}</Grid>;
}

export default EmailList;