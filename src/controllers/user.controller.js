let dataBase = require('../db/user.database');
class UserController
{
    async getUser(req, res)
    {
        try 
        {
            if(dataBase)
            {
                res.status(200).send(dataBase);
            }else
            {
                res.status(200).send({
                    message:"No Data Found"
                });
            }
            
        } catch (error) 
        {
            res.status(400).send({
                message:error
            })
            
        }


    }
}


module.exports = new UserController();