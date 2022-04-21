const apps = require("../data/apps");

const getAll = ({ Id, appName, domain, mimeType, published } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(apps);

    if (Id) {
      result = result.filter((item) => item.Id === Number(Id));
    }

    if (appName) {
      result = result.filter((item) => item.appName.toLowerCase().includes(appName.toLowerCase().trim()));
    }

    if (domain) {
      //multiple domain selected then perform filter on it
      result = domain.flatMap((domainItem) => result.filter(({ domain }) => domain.includes(domainItem) ? domain : ``));

      //sorts retrieve result by its Id
      result = result.sort((firstRow, secondRow) => firstRow.Id - secondRow.Id);
    }

    if (mimeType) {
      result = result.filter((item) => item.mimeType === mimeType);
    }

    if (published && published != `all`) {
      result = result.filter((item) => item.published.includes(published));
    }

    resolve({ code: 200, data: result });
  });

const getById = (Id) =>
  new Promise((resolve) => {
    const app = apps.find((app) => app.Id === Number(Id));

    if (app) {
      resolve({ code: 200, data: app });
    } else {
      resolve({
        code: 404,
        data: { message: `No app found for id ${Id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
