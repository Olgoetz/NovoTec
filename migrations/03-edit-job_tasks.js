const { richTextFromMarkdown } = require("@contentful/rich-text-from-markdown");

module.exports = function (migration) {
  // Get the content type that you want to migrate
  const contentType = migration.editContentType("job");

  // Create a new rich text field
  contentType.createField("tasksNew", {
    name: "tasks",
    type: "RichText",
    localized: true,
    required: true,
  });

  //Migrate existing content from the text field to the new rich text field
  migration.transformEntries({
    contentType: "job",
    from: ["tasks"],
    to: ["tasksNew"],
    transformEntryForLocale: async (fromFields, currentLocale) => {
      const existingText = fromFields.tasks[currentLocale] || "";

      const richTextDocument = await richTextFromMarkdown(existingText);
      return {
        tasksNew: richTextDocument,
      };
    },
  });

  contentType.changeFieldId("tasks", "tasksOld");
  contentType.changeFieldId("tasksNew", "tasks");

  contentType.moveField("tasks").afterField("descriptionLong");
};
