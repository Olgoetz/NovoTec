const { richTextFromMarkdown } = require("@contentful/rich-text-from-markdown");

module.exports = function (migration) {
  // Get the content type that you want to migrate
  const contentType = migration.editContentType("job");

  // Create a new rich text field
  contentType.createField("profileNew", {
    name: "profile",
    type: "RichText",
    localized: true,
    required: true,
  });

  //Migrate existing content from the text field to the new rich text field
  migration.transformEntries({
    contentType: "job",
    from: ["profile"],
    to: ["profileNew"],
    transformEntryForLocale: async (fromFields, currentLocale) => {
      const existingText = fromFields.profile[currentLocale] || "";

      const richTextDocument = await richTextFromMarkdown(existingText);
      return {
        profileNew: richTextDocument,
      };
    },
  });

  contentType.changeFieldId("profile", "profileOld");
  contentType.changeFieldId("profileNew", "profile");

  contentType.moveField("profile").afterField("tasks");
};
