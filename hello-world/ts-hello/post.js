"use strict";
exports.__esModule = true;
var Post = /** @class */ (function () {
    function Post(totalLikes) {
        this.totalLikes = totalLikes;
    }
    Post.prototype.LikeClicked = function () {
        this.likedByThisUser ? this.totalLikes-- : this.totalLikes++;
        this.ToggleLike();
        console.log("Likes: " + this.totalLikes);
    };
    Post.prototype.ToggleLike = function () {
        this.likedByThisUser = !this.likedByThisUser;
    };
    return Post;
}());
exports.Post = Post;
