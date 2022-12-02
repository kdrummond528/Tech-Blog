const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            // ...req.body,
            where: {
                user_id: req.session.user_id,
            },
            include: [{ model: User }]
        });

        //     res.status(200).json(newProject);
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", { posts, logged_in: req.session.logged_in });

    } catch (err) {
        res.status(400).json(err);
    }
});

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const projectData = await Project.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

// if (!projectData) {
//     res.status(404).json({ message: 'No project found with this id!' });
//     return;
// }

//     res.status(200).json(projectData);
// } catch (err) {
//     res.status(500).json(err);
// }
// });

module.exports = router;
