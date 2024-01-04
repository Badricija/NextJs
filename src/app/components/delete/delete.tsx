/*import { useRouter } from "next/router"; // Only import useRouter
interface DeleteButtonProps {
  blogId: string;
  commentId?: string;
}
const DeleteButton = ({ blogId, commentId }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async (id: string | undefined) => {
    let endpoint = '';
    let redirect = false;
    
    if( id === commentId) {
      endpoint = `http://localhost:3000/api/posts/comments/${commentId}`;
    } else if (id === blogId) {
      endpoint = `http://localhost:3000/api/posts/${blogId}`;
      redirect = true;
    }
    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "DELETE"
      });
      if (response.ok) {
        if (redirect) {
          await router.push("/admin");
        } else {
          router.replace(router.asPath); // Use router.replace to refresh the page
        }
      }
    }
  };
  // Your button element or any other UI that triggers handleDelete should go here
  // For example:
  // <button onClick={() => handleDelete(commentId || blogId)}>Delete</button>
  // Rest of your component...
};*/