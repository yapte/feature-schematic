import { strings } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree, apply, chain, mergeWith, move, template, url } from '@angular-devkit/schematics';
import { SchemaOptions } from './schema-options';
import { dasherize } from "@angular-devkit/core/src/utils/strings";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function featureSchematic(_options: SchemaOptions): Rule {
  return chain([
    (tree: Tree, _context: SchematicContext) => tree,
    mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          ..._options,
        }),
        move(`/${dasherize(_options.name)}`, `/src/app/${dasherize(_options.destination)}/${dasherize(_options.name)}`),
      ]),
    ),
  ]);
}
