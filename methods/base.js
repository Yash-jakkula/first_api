const prisma = require("../prisma/db");

const home = async (req, res) => {
  const { a, b } = req.query;

  const sum = parseInt(a) + parseInt(b);
  const users = await prisma.user.findMany();
  res.status(200).json({
    message: "users are ",
    data: users,
  });
};

module.exports = {
  home,
};
