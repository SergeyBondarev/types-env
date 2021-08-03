const env = (key, type, defaultValue) => {
  if (!process.env[key]) return defaultValue;

  const value = process.env[key];
  switch (type) {
    case "string":
      return value;
    case "boolean":
      const lower = value.toLowerCase();
      if (["1", "true", "yes", "y", "ok", "on"].includes(lower)) return true;
      if (["0", "false", "no", "n", "nok", "off"].includes(lower)) return false;
      throw new Error(`Invalid env variable ${key}. Expected a boolean: ${value}`);
    case "number":
      const parsed = parseInt(value);
      if (isNaN(parsed)) throw new Error(`Invalid env variable ${key}. Expected a number: ${value}`);
      return parsed;
    default:
      throw new Error(`Unsupported type ${type} for env variable ${key}. Should be 'string', 'boolean' or 'number'`);
  }
}

module.exports = env;
