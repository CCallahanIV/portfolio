// renderObject.js renders given content from the object array data to the page.

portArticleView.renderObject = function(ObjectArray, destinationID, templateID) {
  ObjectArray.forEach(function(a) {
    $(destinationID).append(a.toHtml(templateID));
  });
};
