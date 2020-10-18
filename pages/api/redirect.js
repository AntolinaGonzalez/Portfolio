export default (req, res) => {
    if(req.query.option == 'ls'){
        res.redirect(`/ls`)
    }

    res.redirect(`/error?cd=${req.query.option}`)
}