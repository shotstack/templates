removeEmptyOrNull = (obj) => {
    Object.keys(obj).forEach(k =>
        (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
        (!obj[k] && obj[k] !== undefined && obj[k] !== 0) && delete obj[k]
    );

    return obj;
};

module.exports.output = (template) => {
    console.log(JSON.stringify(removeEmptyOrNull(template), null, 2));
}
