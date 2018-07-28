export class Post {

    private likedByThisUser: boolean;

    constructor(private totalLikes?: number) { }

    LikeClicked() {
        this.likedByThisUser ? this.totalLikes-- : this.totalLikes++;
        this.likedByThisUser = !this.likedByThisUser;
        console.log("Likes: " + this.totalLikes);
    }
    
}