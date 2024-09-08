import chalk from "chalk";
/**
 * Logs an error message about the usage of both deprecated and new props in same component with different values.
 */
export function logPropMigrationError(
  filePath: string,
  componentName: string,
  deprecatedPropName: string,
  newPropName: string
): void {
  const message =
    `${packageName()} ${error()} ${componentNameStyle(componentName)} ${filePathStyle(filePath)} > uses both ` +
    `${deprecatedPropNameStyle(deprecatedPropName)} and ${newPropNameStyle(newPropName)}. ` +
    `\n\t\tSkipping migration. Please review this usage and refer to the migration guide for further instructions.`;

  console.error(message);
}

// chalk styling
const packageName = () => chalk.dim("[@vibe/codemod]");
const error = () => chalk.bgRed(" ERROR ");
const componentNameStyle = (name: string) => chalk.bold.bgYellow.black(` ${name} `);
const filePathStyle = (path: string) => chalk.bold(path);
const deprecatedPropNameStyle = (name: string) => chalk.italic.red(`"${name}" (deprecated)`);
const newPropNameStyle = (name: string) => chalk.italic.green(`"${name}"`);