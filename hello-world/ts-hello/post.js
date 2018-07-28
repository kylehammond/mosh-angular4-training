"use strict";
exports.__esModule = true;
var Post = /** @class */ (function () {
    function Post(totalLikes) {
        this.totalLikes = totalLikes;
    }
    Post.prototype.LikeClicked = function () {
        this.likedByThisUser ? this.totalLikes-- : this.totalLikes++;
        this.likedByThisUser = !this.likedByThisUser;
        console.log("Likes: " + this.totalLikes);
    };
    return Post;
}());
exports.Post = Post;
