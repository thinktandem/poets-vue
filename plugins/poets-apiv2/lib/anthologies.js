import _ from "lodash";

/**
 * @file
 * Version 2 node client for Poets API
 *
 * Anthologies
 */

// Helper to translate array of poem ids to drupal stuff
const getPoems = (poems = []) =>
  _(poems)
    .map(poem => ({
      type: "node--poems",
      id: poem
    }))
    .value();

// Anthology creation defaults
const anthologyCreateDefaults = (title = "My Anthology") => ({
  type: "node--anthologies",
  attributes: {
    title,
    metatag_normalized: []
  }
});

// Anthology update defaults
const anthologyUpdateDefaults = (id, poems = []) => ({
  type: "node--anthologies",
  id,
  attributes: {
    metatag_normalized: []
  },
  // @TODO: do we need more relationships here?
  // or a way to mix in auxiliary data?
  relationships: {
    field_poems: {
      data: getPoems(poems)
    }
  }
});

/**
 * Create Anthologies
 *
 * @param {Object} request The axios library
 * @param {Object|Array} data An object or array of objects
 * @param {Object} options Options
 * @return {Object} the response object
 */
export function create(request, data, options = {}) {
  // Normalize to array if needed
  if (!_.isArray(data)) data = [data];
  // Make all the requestz
  return Promise.all(
    _(data)
      .map(anthology =>
        request(
          "/api/node/anthologies",
          _.merge({}, anthologyCreateDefaults(anthology.title), anthology),
          _.merge({}, options, { method: "post" })
        )
      )
      .value()
  );
}

/**
 * Get Anthologies
 *
 * @param {Object} request The axios library
 * @param {Object} options
 * @return {Object} the response object
 */
export function get(request, options = {}) {
  return request("/api/node/anthologies", {}, options);
}

/**
 * Update Anthologies
 *
 * @param {Object} request The axios library
 * @param {Object|Array} data An object or array of objects
 * @param {Object} options Options
 * @return {Object} the response object
 */
export function update(request, data = {}, options = {}) {
  // Normalize to array if needed
  if (!_.isArray(data)) data = [data];
  // Make all the requestz
  return Promise.all(
    _(data)
      .map(anthology =>
        request(
          `/api/node/anthologies/${anthology.id}`,
          _.merge(
            {},
            anthologyUpdateDefaults(anthology.id, anthology.poems),
            anthology
          ),
          _.merge({}, options, { method: "patch" })
        )
      )
      .value()
  );
}

export default { create, get, update };
