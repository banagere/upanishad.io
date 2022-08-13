import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  url: {
    type: "string",
    resolve: (doc) => `/u/${doc._raw.flattenedPath}`,
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    weight: { type: "string", required: true },
    veda: { type: "string", required: true },
    category: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "u",
  documentTypes: [Post],
});
