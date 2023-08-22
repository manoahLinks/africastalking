const User = require(`../model/user`)

// get all users
exports.getUsers = async (req, res) => {

    try {
        
        const response = await User.find({})
        return res.status(200).json({message: 'success', data: response})

    } catch (error) {
        return res.status(400).json({message: 'Error getting users', error: error.message})
    }
}

// get a particular user
exports.getSingleUser = async (req, res) => {
    try {   

        const {id} = req.params

        const response = await User.findById(id)
        return res.status(200).json({message: 'success', data: response})
        
    } catch (error) {
        return res.status(400).json({message: 'Error getting users', error: error.message})
    }
}

module.exports