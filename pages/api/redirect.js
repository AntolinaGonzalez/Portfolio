export default (req, res) => {
    console.log(req.query.option)
    if(req.query.option == 'ls'){
        res.redirect(`/ls`)
    }
    if(req.query.option == 'cd Contact'){
        res.redirect(`/contact`)
    }

    res.redirect(`/error?cd=${req.query.option}`)
}