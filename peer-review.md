## P3 Peer Review

+ Reviewer's name: brld
+ Reviwee's name: terichadbourne
+ URL to reviewee's Github repo: *<https://github.com/terichadbourne/e28>*

*Answer the following questions in regards to the student's project you
are reviewing. Include context and code examples in your answers when
relevant.*


### Are you able to produce any errors or unexpected results?
The console was clear of errors and the application functioned as expected.

### Were there any parts of the interface that you found confusing or unclear?
It took me a minute to understand the purpose of the site but the interface was straightforward beyond that.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
A brief comment linking the toggleFilter method to the favorites feature would be beneficial although the code is readable and self explanitory for the most part.

### Are there any parts of the code that you found interesting or taught you something new?
I did not get to implementing a central app.js that holds the myjsonserver api so it was interesting to see that put into practice with a student made application.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
This is purely visual but my recollection from seeing the course material as well as other languages is that it's common to put a space between dynamic prop-based text and its surrounding double braces, i.e. that you would use {{ placeholder }} rather than {{placeholder}}

### Do you have any additional comments not covered in the above questions?
Upon further testing the rant/rave cards seem to have a significant amount of padding as far as click-able area (you can click substantially outside of the card border and still trigger the button). This is not present with the user cards so hence why I assumed it wasn't expected behavior.
