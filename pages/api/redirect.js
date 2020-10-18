export default (req, res) => {
    console.log(req.query.option)
    if(req.query.option == 'ls'){
        res.redirect(`/ls`)
    }
}