const getProps = (obj, path, defaultValue = undefined) => {
  try {
    // eslint-disable-next-line no-useless-escape
    const parts = path.split(/[\]\[\.]/).filter((x) => x);
    let attempt = { ...obj };
    const i = 0;
    while (i <= parts.length - 1) {
      if (!attempt || !attempt[parts[i]]) return defaultValue;
      attempt = attempt[parts[i]];
    }
    return attempt;
  } catch {
    return defaultValue;
  }
};

export default getProps;
