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

  add(postId) {

    let post = this.getPost(postId)

    if (!post) {
      this.posts.push({
        id: postId,
      });
    }

    this.update();
  }

  remove(postId) {
    let post = this.getPost(postId)

    let postIndex = this.posts.indexOf(post);

    if (post) {
      this.posts.splice(postIndex, 1);
      this.update();
    } 
  }

  getPost(postId) {
    return this.posts.find(({ id }) => id === postId) || null;
  }
}