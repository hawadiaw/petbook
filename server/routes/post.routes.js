const PostController = require("../controllers/post.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.get("/api/posts", PostController.getAllPosts);
	app.get("/api/posts/checkLiked", PostController.checkIfLiked);
	app.post("/api/posts", PostController.createPost);
	app.put("/api/posts/add-comment/:id", PostController.addComment);
	app.put("/api/posts/add-like", PostController.addLike);
	app.put("/api/posts/delete-like", PostController.deleteLike);
	app.get('/api/posts/:id', PostController.getOne);
	app.put("/api/posts/update-content/:id", PostController.updateContent);
	app.put("/api/posts/delete-comment/", PostController.deleteComment);
	app.delete("/api/posts/delete-post/:id", PostController.deletePost);
};
