function pascalToKebab(pascalCaseString: string) {
  const kebabCaseString = pascalCaseString
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return kebabCaseString;
}

function isKebabCase(str: string) {
  const kebabCaseRegex = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
  return kebabCaseRegex.test(str);
}

export { pascalToKebab, isKebabCase };
