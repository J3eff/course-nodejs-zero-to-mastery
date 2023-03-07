const Toughts = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render('toughts/home')
    }

    static async dashboard(req, res) {
        res.render('toughts/dashboard')
    }

    static createTought(req, res) {
        res.render('toughts/create')
    }

    static async createToughtSave(req, res) {
        const tought = {
            title: req.body.title,
            UserId: req.session.userId
        }

        try {
            await Toughts.create(tought)

            req.flash('message', 'Pensamento criado com sucesso!')

            req.session.save(() => {
                res.renderect('/toughts/dashboard')
            })
        } catch (error) {
            console.log('Aconteceu um erro: ' + error)
        }
    }
}