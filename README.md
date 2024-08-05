In the role of testing and optimization software engineer, you will work extensively on manipulating existing DOM, using vanilla JS. In this exercise, we would like you to use your knowledge of JS and CSS to update the look and feel, as well as add interactivity to index.html. If you have any questions while completing this test, please reach out to your interview contact.

##Code will be evaluated on:##
1. How closely you follow instructions
2. How clean and reusable the code is
3. How scalable the code is
4. How well the page reflows to various screen sizes like mobile and tablet

##Instructions:##
1. Fork this repo
2. In your own repo, **create a new branch**
3. **Alter only index.js and index.css** (see below for the changes we expect). **Do not alter any other files.**
4. You can use the 3 reference images as guidance: final-design-when-page-scrolled-to-top.png, final-design-open-question.png and final-design-when-page-scrolled-to-top.png
5. You can use goal.html as a reference of what the altered DOM should look like
6. Once your changes are complete, push your new branch and create a PR to merge your new branch back to **your main branch.** **DO NOT CREATE A PR TO THE ORIGINAL REPO.** If you do, other candidates can see your work.
7. Send a link of your PR to your interview contact

##Expected changes to index.css (you can use 3 included reference images as a reference):##
1. Update the masonry section to use a grid layout with 3 equal columns in desktop
2. The brick with the "double" class should use 2 columns in desktop
3. The brick with the "triple" class should use 3 columns in desktop
4. Make any additions you feel help the masonry section layout look better in tablet and mobile sizes
5. Have faq answers start as hidden
6. Have interaction with the faq questions change the cursor appearance to look like it is a button or link
7. Change the arrow indicator on faq questions to point down when open (bonus if you can get the transition to be animated)
8. Make the banner "sticky" (fixed to the bottom of the screen) when showing



###Expected changes to index.js:###
Updates to processBackgroundColor():
1. Obtain the text content of the first child element of "el". Add the found text content as a background to "el". You can assume there will always text content.
2. Remove the first child

###Updates to processHero():###
1. If a paragraph has links, add the class "action-area" to the paragraph
2. If a link is inside a bold tag:
    a. add the class "con-button" to the link
    b. move the link outside of the bold tag
    c. delete the bold tag
3. If a link is inside an italics tag:
    a. add the classes "con-button blue" to the link
    b. move the link outside of the italics tag
    c. then delete the italics tag

###After the you run processBackgroundColor, the "brick" divs will always have 3 paragraphs remaining.  Updates to processBrick():###
1. Add the class "title" to the first paragraph
2. Add the class "price" to the second paragraph
3. Add the class "description" to the third paragraph

###Updates to processFaq():###
1. Make the function more flexible so that questions can easily be added or removed from the object
2. Add the ability to click on a question to toggle the answer between open and closed states. (bonus if you can get any open questions to close when you open a new one)

###Updates to processBanner():###
1. If a link is inside a bold tag:
    a. add the classes "con-button" and "blue" to the link
    b. move the link outside of the bold tag
    c. delete the bold tag
2. Toggle the banner to only show when the "hero" div is completely off screen (bonus if you can make a small transition to slide up and down when revealing/hiding)
