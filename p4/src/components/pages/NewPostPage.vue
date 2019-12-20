<template>
  <div id="new-post">
    <h1>New Post</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="subject">Subject (min 3)</label>
        <input 
          type="text" 
          :class='{ "form-input-error": $v.post.subject.$error }'
          v-model="$v.post.subject.$model"
        />

        <div v-if='$v.post.subject.$error'>
          <div
            class='form-error'
            v-if='!$v.post.subject.required'
          >You need to enter a subject.</div>

          <div
            class='form-error'
            v-else-if='!$v.post.subject.minLength'
          >Your subject must contain at least 3 characters.</div>

          <div
            class='form-error'
            v-else-if='!$v.post.subject.doesNotExist'
          >A post has already been created with this subject.</div>
        </div>
      </div>

      <div class="form-group">
        <label for="username">Username (min 3)</label>
        <input 
          type="text" 
          :class='{ "form-input-error": $v.post.author.$error }'
          v-model="$v.post.author.$model"
        />

        <div v-if='$v.post.author.$error'>
          <div
            class='form-error'
            v-if='!$v.post.author.required'
          >You need to enter a username.</div>

          <div
            class='form-error'
            v-else-if='!$v.post.author.minLength'
          >Your username must contain at least 3 characters.</div>
        </div>
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model='post.content'></textarea>

        <div v-if='$v.post.content.$error'>
          <div
            class='form-error'
            v-if='!$v.post.content.required'
          >You need to enter post content.</div>
        </div>
      </div>

      <div class="form-group">
        <label for="tags">Tags (comma separated)</label>
        <input 
          type="text" 
          :class='{ "form-input-error": $v.post.tags.$error }'
          v-model="post.tags"
        />
      </div>

      <button type="submit">Create Post</button>

      <div class="form-error" v-if="areFormErrors">There are errors you need to correct before submitting.</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { required, minLength, alpha } from 'vuelidate/lib/validators';

let post = {
  slug: '',
  subject: '',
  author: '',
  content: '',
  tags: []
};

export default {
  name: 'NewPostPage',
  data: function() {
    return {
      post: post,
      areFormErrors: false
    };
  },
  validations: {
    post: {
      subject: {
        required,
        minLength: minLength(3)
      },
      author: {
        required,
        minLength: minLength(3),
        alpha
      },
      content: {
        required
      },
      tags: {
        alpha
      }
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.areFormErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.areFormErrors) {
        // Title to slug function courtesy of Peter Boughton on StackOverflow
        this.post.slug = this.post.subject.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');

        app.axios
          .post(app.config.api + 'posts.json', this.post)
          .then(response => {
            let key = response.data.name;

            this.$store.commit('createPost', {
              [key]: this.post
            });

            this.$router.push({
              name: 'post',
              params: { slug: this.post.slug }
            });

            console.log(response);
          });
      }
    }
  }
};
</script>

<style scoped>

</style>