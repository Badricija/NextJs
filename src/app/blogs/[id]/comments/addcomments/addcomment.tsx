import { IComment } from "../../../../../../models/Comment";
import notFound from "../../../not-found";
import styles from "./addcomment.module.css";

interface addComment {
    type: IComment;
}
const getComment = async (blogId: any) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/comments`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch comment");
        }
        const commentData = await res.json();
        const { comment } = commentData;
        return comment;
    } catch (error) {
        console.log("Error loading comment:", error);
    }
};
const CommentDetails = async (blogId: any) => {
    const comment = await getComment(blogId);
    if (!comment) {
        return notFound();
    }
    return (
        <div className={styles.commentblog}>
            <h2 className={styles.title}>Here you can see what are oher people opinions on this blog</h2>
            <div className={styles.commentpost}>
                <h4 className={styles.author}>{comment.author}</h4>
                <p className={styles.thecomment}>{comment.comment}</p>
            </div>
        </div>
    )
};
export default CommentDetails;