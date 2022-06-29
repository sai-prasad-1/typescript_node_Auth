import chalk from 'chalk';

export class Logging {
    public static log = (args: any) => this.info(args);

    public static info = (args: any) => console.log(chalk.bold.greenBright(`\n[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);

    public static warn = (args: any) => console.log(chalk.bold.yellow(`\n[${new Date().toLocaleString()}] [WARNING]`), typeof args === 'string' ? chalk.yellowBright(args) : args);

    public static error = (args: any) => console.log(chalk.bold.red(`\n[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? chalk.redBright(args) : args);
}