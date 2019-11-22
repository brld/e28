// Based on Susan Buck's "cart" class

export default class Favorites {

  constructor() {
    let favorites = localStorage.getItem('favorites');

    this.posts = (favorites) ? JSON.parse(favorites) : [];
  }

  getPosts() {
    return this.posts;
  }

  update() {
    localStorage.setItem('favorites', JSON.stringify(this.posts))
  }

  toggle(postId) {

    let post = this.getPost(postId)

    if (post) {
      this.posts.splice({
        id: postId,
      });

    } else {
      this.posts.push({
          id: postId,
      });
    }

    this.update();
  }

  getPost(postId) {
    return this.posts.find(({ id }) => id === postId) || null;
  }
}