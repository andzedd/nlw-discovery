module.exports = {
    index(req,res) {
        return res.render('index')
    },
    orphanages(req,res) {
        return res.render('orphanages')
    },
    create_orphanage(req,res) {
        return res.render('create-orphanage')
    },
    orphanage(req,res) {
        return res.render('orphanage')
    }
}