module.exports = function (migration) {
  // Get the content type that you want to migrate
  const contentType = migration.editContentType("job");

  // Create a new rich text field
  // contentType.createField("descriptionShort", {
  //   name: "description-short",
  //   type: "RichText",
  //   localized: true,
  //   required: true,
  // });

  //Migrate existing content from the text field to the new rich text field
  migration.transformEntries({
    contentType: "job",
    from: ["description"],
    to: ["descriptionShort"],
    transformEntryForLocale: (fromFields, currentLocale) => {
      const existingText = fromFields.description[currentLocale] || "";
      return {
        descriptionShort: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  marks: [],
                  value: existingText,
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
      };
    },
  });
  contentType.moveField("descriptionShort").afterField("location");
};
