// Based on Susan Buck's "cart" class

export default class Favorites {

  constructor() {
    let favorites = localStorage.getItem('favorites');

    this.posts = (favorites) ? JSON.parse(favorites) : [];
  }

  getPosts() {
    return this.posts;
  }

  count() {
    return this.posts.length();
  }

  update() {
    localStorage.setItem('favorites', JSON.stringify(this.posts))
  }

  add(postSlug) {

    let post = this.getPost(postSlug)

    if (!post) {
      this.posts.push({
        slug: postSlug,
      });
    }

    this.update();
  }

  remove(postSlug) {
    let post = this.getPost(postSlug)

    let postIndex = this.posts.indexOf(post);

    if (post) {
      this.posts.splice(postIndex, 1);
      this.update();
    } 
  }

  getPost(postSlug) {
    return this.posts.find(({ slug }) => slug === postSlug) || null;
  }
}