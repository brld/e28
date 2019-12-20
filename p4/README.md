# Project 4
+ By: Brandon Darby
+ Production URL: <http://p4.learnglobal.us>

## Improvements based on P3 peer review feedback
* Fixed un-favorite button within Favorites page (no longer removes all favorites)
* Added documentation to concat.apply method in UsersPage.vue
* Resolved console error when attempting to navigate to the Favorites page with at least one favorited post
* Favorite button now changes to "Un-favorite" within post page when clicked to signify change in favorites list

## Outside resources
* Course zipfoods example (https://github.com/susanBuck/e28/blob/master/zipfoods/)
* Vuelidate documentation (https://vuelidate.js.org/)
* Cypress documentation (https://docs.cypress.io/)
* Mocha documentation (https://mochajs.org/)
* 2 posts contributed to by Peter Boughton and Katharine Osborne on StackOverflow (exact lines where help was derived are cited within corresponding code files)

## Notes for instructor
* Database moved to firebase for write ability
* e2e tests replicate moving from top to bottom, left to right and testing all relevant features in its path
* Unit test is fairly basic as e2e covers all remaining bases not covered by unit test
* No feature to add tags as moving to firebase broke the way my application handled tags (key-value based lists for tags instead of standard js lists meaning each tag was spaced out letter per letter)