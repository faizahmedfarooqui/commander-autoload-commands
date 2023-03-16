/**
 * @file libraries/commander.ts
 * @description CommanderJS library
 * @author Faiz A. Farooqui <faizahmed.in@gmail.com> (https://faizahmed.in)
 */

import { Command } from 'commander';
import { readdir } from 'fs/promises';

export default class Commander {
  public cwd: string = process.cwd();
  public program: Command = new Command();

  public static async register() {
    const command = new Commander();
    await command.init();
    await command.addCommands();
    await command.close();
  }

  public async init() {
    this.program
      .name('Sample CLI')
      .version('Sample CLI Version v0.0.1')
      .description('CLI tool built using CommanderJS & TypeScript which autoloads commands from a directory');
  }

  public async addCommands () {
    const files: string[] = await readdir('./src/commands');

    for await (const file of files) {
      if (!file.endsWith('.ts')) {
        continue;
      }

      const commands = await import('../commands/' + file.replace('.ts', ''));
      commands.default(this.program);
    }
  }

  public async close () {
    this.program.parseAsync();
  }
}
