const Users = require('../models/Users')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const users = await Users.find();
        return response.json(users);
    },

    async findByDestination(request, response){
        const destination = request.params.destination
        // const location = request.params.location
        console.log(request.params)
        const match = await Users.find({destination});
        console.log(match)
        return response.json(match);
    },

    async attUser(request, response){
        const users = await Users.find();
        return response.json(users);
    },

    async deleteUser(request, response){
        const users = await Users.find();
        return response.json(users);
    },



    async store (request, response){
        const { name, bio, location, email, hour, tel, destination } = request.body;

        let user = await Users.findOne({ name, bio, email });

        if(!user){
            user = await Users.create({
                name,
                bio,
                location,
                destination,
                email,
                hour,
                tel
               
    
            })

        }
    
    
        
    
        
        return response.json(user)
    }
}


