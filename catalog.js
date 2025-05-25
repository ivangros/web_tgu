const getPostIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
};

const displayPost = (post) => {
    document.querySelector("[data-post-id]").textContent = `id: ${post.id}`;
    document.querySelector("[data-post-userId]").textContent = `userId: ${post.userId}`;
    document.querySelector("[data-post-title]").textContent = `title: ${post.title}`;
    document.querySelector("[data-post-body]").textContent = `body: ${post.body}`;
};

const displayError = (message) => {
    document.body.innerHTML = `<h1>${message}</h1>`;
};

const loadPostDetails = async () => {
    const postId = getPostIdFromUrl();
    if (!postId) {
        displayError("Post not found");
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) throw new Error("Failed to load post");

        const post = await response.json();
        displayPost(post);
        await loadComments(postId);
    } catch (error) {
        console.error("Post fetch error:", error);
        displayError(`Error loading post: ${error.message}`);
    }
};

const loadComments = async (postId) => {
    const commentsContainer = document.querySelector("[data-comments]");

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) throw new Error("Failed to load comments");

        const comments = await response.json();

        if (!comments.length) {
            commentsContainer.innerHTML = "<p>No comments yet.</p>";
            return;
        }

        commentsContainer.innerHTML = comments.map(comment => `
            <div class="comment-item">
                <div>postId: ${comment.postId}</div>
                <div>id: ${comment.id}</div>
                <div class="comment-item__name">name: ${comment.name}</div>
                <div>body: ${comment.body}</div>
                <div>email: ${comment.email}</div>
            </div>
        `).join("");

    } catch (error) {
        console.error("Comments fetch error:", error);
        commentsContainer.innerHTML = `<h2>Failed to load comments: ${error.message}</h2>`;
    }
};

document.addEventListener("DOMContentLoaded", loadPostDetails);
