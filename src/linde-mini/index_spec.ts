import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("linde-mini", () => {
  it("works", async () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = await runner.runSchematic("linde-mini", {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
