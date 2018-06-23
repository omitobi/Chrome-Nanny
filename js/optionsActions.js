//Other actions

$(document).ready(function() {
  $('#addToBlockList').click( function () {
    addBlockSet();
  });

  $('#clearBlockListTags').click(function () {
    clearBlockListUrlTags();
  });

  $('#clearBlockList').click(function () {
    clearBlockListBlock();
  });

  $('#addTagToWhiteList').click(function () {
    addTagToWhiteListDiv();
  });

  $('#addToWhiteList').click(function () {
    addToWhiteList();
  });

  $('#clearWhiteListTags').click(function () {
    clearWhiteListUrlTags();
  });

  $('#clearWhiteList').click(function () {
    clearWhiteListBlock();
  });
});
