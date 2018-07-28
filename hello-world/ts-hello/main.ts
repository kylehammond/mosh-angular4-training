import { Point } from './point';
import { Post } from './post';
import { LikeComponent } from './like.component'

let point = new Point(1, 2);
point.draw();

let post = new Post(148);
post.LikeClicked();
post.LikeClicked();
post.LikeClicked();
post.LikeClicked();
post.LikeClicked();

let component = new LikeComponent(10, true);
component.onClick();
console.log('likesCount: ' + component.likesCount + ', isSelected: ' + component.isSelected);
component.onClick();
console.log('likesCount: ' + component.likesCount + ', isSelected: ' + component.isSelected);
component.onClick();
console.log('likesCount: ' + component.likesCount + ', isSelected: ' + component.isSelected);