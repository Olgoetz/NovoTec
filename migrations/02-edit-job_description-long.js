const { richTextFromMarkdown } = require("@contentful/rich-text-from-markdown");

module.exports = function (migration) {
  // Get the content type that you want to migrate
  const contentType = migration.editContentType("job");

  // Create a new rich text field
  contentType.createField("descriptionLong", {
    name: "description-long",
    type: "RichText",
    localized: true,
    required: true,
  });

  //Migrate existing content from the text field to the new rich text field
  migration.transformEntries({
    contentType: "job",
    from: ["longDescription"],
    to: ["descriptionLong"],
    transformEntryForLocale: async (fromFields, currentLocale) => {
      const existingText = fromFields.longDescription[currentLocale] || "";

      const richTextDocument = await richTextFromMarkdown(existingText);
      return {
        descriptionLong: richTextDocument,
      };
    },
  });

  contentType.moveField("descriptionLong").afterField("descriptionShort");
};
