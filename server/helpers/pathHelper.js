import path from 'path';
import _ from 'lodash';

let rootPath = path.join(__dirname, '../..');
console.log(rootPath);
let defaultDataPath = path.join(rootPath, 'data');

export default {
    path,
    getRelative: getRelativePath,
    getDataRelative: getDataRelativePath
};

function getRelativePath() {
    let args = _.toArray(arguments);

    args.unshift(rootPath);

    return path.join.apply(this, args);
}

function getDataRelativePath() {
    let args = _.toArray(arguments);

    args.unshift(getDataPath());

    return path.join.apply(this, args);
}

function getDataPath() {
    if (process.env['NODE_DATA_DIR']) {
        return process.env['NODE_DATA_DIR'];
    }

    return defaultDataPath;
}