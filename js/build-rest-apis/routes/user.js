const express = require("express");
const router = express.Router();
const {
    addUser,
    getAllUsersHandller,
    getUserById,
    updateUserById,
    deleteUserById,
} = require("../controller/User")

// router.get("/users", async (req, resp) => {
//   const allDBusers = user.find({ });
//   const html = `
//         <ul>
//             ${allDBusers
//               .map(
//                 (user) => `<li>
//                 ${user.first_name}
//             </li>`
//               )
//               .join(" ")}
//         </ul>
//     `;
//   resp.status(200).send(html);
// });

router.route("/")
.get(getAllUsersHandller)
.post(addUser)

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById )
  .delete(deleteUserById)
  module.exports = router;
