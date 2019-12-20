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
    let sum = 0;
    for (let key of Object.keys(this.posts)) {
        sum += 1
        console.log(key)
    }
    return sum;
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