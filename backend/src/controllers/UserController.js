const Users = require('../models/Users')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const users = await Users.find();
        return response.json(users);
    },

    async store (request, response){
        const { name, bio } = request.body;

        let user = await Users.findOne({ name });

        if(!user){
            user = await Users.create({
                name,
                bio
               
    
            })

        }
    
    
        
    
        
        return response.json(user)
    }
}


