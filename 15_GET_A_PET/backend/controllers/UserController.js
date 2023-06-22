const User = require('../models/User');

module.exports = class UserController {
    static async register(req, res) {
        const { name, email, phone, password, confirmPassword } = req.body;

        // validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return;
        }
        if (!email) {
            res.status(422).json({ message: 'O email é obrigatório' })
            return;
        }
        if (!phone) {
            res.status(422).json({ message: 'O telefone é obrigatório' })
            return;
        }
        if (!password) {
            res.status(422).json({ message: 'A senha é obrigatório' })
            return;
        }
        if (!confirmPassword) {
            res.status(422).json({ message: 'A confirmação de senha é obrigatório' })
            return;
        }         
        if(password !== confirmPassword){
            res.status(422).json({ message: 'A senha e a confirmação de senha precisam ser iguais!' })
            return;
        } 

        // check if user exists
        const userExist = await User.findOne({ email: email});
        if(userExist){
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!'})
            return
        }
      

    }
}