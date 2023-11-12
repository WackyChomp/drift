// https://docs.uploadthing.com/api-reference/react
// use generatereacthelpers
// There's another import that looks similar

import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();