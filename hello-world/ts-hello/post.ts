export class Post {

    private likedByThisUser: boolean;

    constructor(private totalLikes?: number) { }

    LikeClicked() {
        this.likedByThisUser ? this.totalLikes-- : this.totalLikes++;
        this.ToggleLike();
        console.log("Likes: " + this.totalLikes);
    }

    ToggleLike(){
        this.likedByThisUser = !this.likedByThisUser;
    }
}