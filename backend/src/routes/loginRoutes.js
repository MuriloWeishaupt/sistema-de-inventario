import express from 'express'
import Account from '../models/acesso.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const newAccount = await new Account(
            {
                email, password
            }
        );
        await newAccount.save()
        res.status(200).json(newAccount);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/login', async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/loginAcesso', async (req, res) => {
    try {
        const {email, password } = req.body
        const user = await Account.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials '})
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid Credencials' })
        }

        return res.status(201).json({ message: 'Login successful!' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

export default router