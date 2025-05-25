import { Post } from "./src/components/catalog.js";

const renderPostItem = ({ id, title, body }) => `
    <a href="catalog.html?id=${id}" class="post-item">
        <span class="post-item__title">${title}</span>
        <span class="post-item__body">${body}</span>
    </a>
`;

const getPostItems = async ({ limit, page }) => {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch posts");

        const items = await res.json();
        const total = Number(res.headers.get("x-total-count"));
        return { items, total };
    } catch (error) {
        console.error("Post fetch error:", error);
        return { items: [], total: 0 };
    }
};

const renderPhotoItem = ({ id, title, url }) => `
    <a href="photos/${id}" class="photo-item">
        <span class="photo-item__title">${title}</span>
        <img src="${url}" class="photo-item__image">
    </a>
`;

const getPhotoItems = async ({ limit, page }) => {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch photos");

        const items = await res.json();
        const total = Number(res.headers.get("x-total-count"));
        return { items, total };
    } catch (error) {
        console.error("Photo fetch error:", error);
        return { items: [], total: 0 };
    }
};

const init = () => {
    const container = document.getElementById("posts");
    if (container) {
        new Post(container, {
            renderItem: renderPostItem,
            getItems: getPostItems,
        }).init();
    }
};

document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
