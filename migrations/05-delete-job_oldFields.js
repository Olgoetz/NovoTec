module.exports = function (migration) {
  // Get the content type that you want to migrate
  const contentType = migration.editContentType("job");

  contentType.deleteField("description");
  contentType.deleteField("longDescription");
  contentType.deleteField("tasksOld");
  contentType.deleteField("profileOld");
};
