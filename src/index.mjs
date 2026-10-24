import assert from 'node:assert/strict';
import { getMetadata, listModels, getModel } from 'openrouter-models';

const models = listModels();
assert(models.length > 0);
const first = getModel(models[0].id);
assert(first, 'A listed model should be retrievable by identifier');
console.log('Bundled dataset metadata:', getMetadata());
console.log('First model:', first);
