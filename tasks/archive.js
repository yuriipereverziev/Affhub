const zip = require('zip-local');
const { paths } = require('./settings');

function archive() {
  zip.sync.zip(paths.build.main).compress().save(`${paths.build.main}/y.p.affhub.lp0.zip`);
  return Promise.resolve("Done!");
}

module.exports = archive;
