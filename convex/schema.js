import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  brags: defineTable({
    name: v.string(),
    description: v.string(),
    brags: v.array()
  })
})