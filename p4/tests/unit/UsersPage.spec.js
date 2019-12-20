import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import UsersPage from '@/components/pages/UsersPage.vue'

describe('UsersPage.vue', () => {
  // Users are interpolated so a sample posts list are inputted

  let posts = [
    {
      slug: 'testing-123',
      author: 'Adam',
      subject: 'Testing 123',
      date: '11-11-2018',
      content: 'Whats up world YO YO YO!',
      tags: ['greeting']
    },
    {
      slug: 'welcome-everyone',
      author: 'Bob',
      subject: 'Welcome everyone',
      date: '12-12-2018',
      content: 'HEY and welcome to all new users!',
      tags: ['greeting', 'welcome']
    }
  ]

  it('displays a list of users', () => {
    const wrapper = shallowMount(UsersPage, {
      computed: {
        posts: function() {
          return [posts]
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include('Users');
  })
})
