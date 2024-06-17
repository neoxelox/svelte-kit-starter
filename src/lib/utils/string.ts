export function removePrefix(str: string, suffix: string): string {
  if (str.startsWith(suffix)) {
    return str.slice(suffix.length, str.length);
  }

  return str;
}

export function removeSuffix(str: string, suffix: string): string {
  if (str.endsWith(suffix)) {
    return str.slice(0, str.length - suffix.length);
  }

  return str;
}
