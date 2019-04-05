const axios = require("axios");
const _ = require("lodash");
const urljoin = require('url-join');
const base = "https://master-7rqtwti-iw4bgahutfk2y.us-2.platformsh.site";

module.exports = {
  base: base,

  /*
   * Get paginated data /node/TYPE endpoints and gather up url
   * aliases for the sitemap.
   *
   * @TODO: changefreq
   */
  async getUrlAliases(next, priority = 0.9) {
      let urls = [];
      let routes = {};
      const date = new Date().toISOString().substr(0, 19);
      let urlsIndex = 0;
    do {
      routes = await axios
        .get(next, {
          filter: {
            status: 1
          }
        })
        .then(async res => {
          const things = await res.data.data.map(
            thing => {
              return {
                alias: _.get(thing, "attributes.path.alias", null),
                type: _.get(thing, "type", null)
              };
            }
          );
          // type is for logging.
          let type = "";
          _.each(things, (thing, i) => {
            if (thing) {
              type = thing.type;
              if (type === "node--person") {
                priority = (_.get(res, "data.data.attributes.field_p_type") === "poet")
                  ? 0.9
                  : 0.8;
              }
              const path = _.get(thing, "alias", "");
              if (path !== "" && typeof path === 'string') {
                urls[urlsIndex] = {
                  url: path,
                  priority: priority,
                  changedfreq: "always",
                  lastmodISO: date
                };
                urlsIndex = urlsIndex + 1;
              } else {
                // log it.
                console.log("ERROR - sitemap-helpers: Data of type ",
                  typeof path,
                  " expected string; from ",
                  _.get(thing, "attributes.drupal_internal__nid", "DNE"),
                  "."
                )
              }
            }
          });
          next = _.get(res, "data.links.next.href", null);
        })
        .catch(err => console.log(err));
    } while (next !== null);

    return urls;
  },
  async allTheUrls() {
    let allUrls = [];

    const poems = await this.getUrlAliases(
      this.base + "/api/node/poems",
      0.9
    );
    allUrls = allUrls.concat(poems);

    const people = await this.getUrlAliases(
      this.base + "/api/node/person",
      0.9
    );
    allUrls = allUrls.concat(people);

    const anthologies = await this.getUrlAliases(
      this.base + "/api/node/anthologies",
      0.7
    );
    allUrls = allUrls.concat(anthologies);

    const basic_pages = await this.getUrlAliases(
      this.base + "/api/node/basic_page",
      0.5
    );
    allUrls = allUrls.concat(basic_pages);

    const books = await this.getUrlAliases(
      this.base + "/api/node/books",
      0.8
    );
    allUrls = allUrls.concat(books);

    const collections = await this.getUrlAliases(
     this.base + "/api/node/collections",
     0.8
    );
    allUrls = allUrls.concat(collections);

    const events = await this.getUrlAliases(
      this.base + "/api/node/events",
      0.5
    );
    allUrls = allUrls.concat(events);

    const institution = await this.getUrlAliases(
      this.base + "/api/node/institution",
      0.5
    );
    allUrls = allUrls.concat(institution);

    const lesson_plans = await this.getUrlAliases(
      this.base + "/api/node/lesson_plans",
      0.5
    );
    allUrls = allUrls.concat(lesson_plans);

    const listing = await this.getUrlAliases(
      this.base + "/api/node/listing",
      0.5
    );
    allUrls = allUrls.concat(listing);

    const magazine = await this.getUrlAliases(
      this.base + "/api/node/magazine",
      0.5
    );
    allUrls = allUrls.concat(magazine);

    const prize_or_program = await this.getUrlAliases(
      this.base + "/api/node/prize_or_program",
      0.5
    );
    allUrls = allUrls.concat(prize_or_program);

    const state = await this.getUrlAliases(
      this.base + "/api/node/state",
      0.5
    );
    allUrls = allUrls.concat(state);

    const sub_prize_or_program = await this.getUrlAliases(
      this.base + "/api/node/sub_prize_or_program",
      0.5
    );
    allUrls = allUrls.concat(sub_prize_or_program);

    const teach_this_poem = await this.getUrlAliases(
      this.base + "/api/node/teach_this_poem",
      0.5
    );
    allUrls = allUrls.concat(teach_this_poem);

    const texts = await this.getUrlAliases(
      this.base + "/api/node/texts",
      0.5
    );
    allUrls = allUrls.concat(texts);

    console.log(
      "INFO - sitemap-helpers: Recorded ",
      _.size(allUrls),
      " total URLs to the sitemap."
    );

    return allUrls;
  }
};