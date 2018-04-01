class UserController {

  create = async (req, res) => res.status(200).json({
    hello: 'world',
  })

}

export default new UserController();
