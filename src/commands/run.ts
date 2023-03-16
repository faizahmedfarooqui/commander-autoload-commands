/**
 * @file commmands/run.ts
 * @description Basic sample command
 * @author Faiz A. Farooqui <faizahmed.in@gmail.com> (https://faizahmed.in)
 */

import { Command } from 'commander';
import action from '../actions/run';

export default async (program: Command) => {
	program
		.command('run')
		.description('description of the run command')
		.action(action);
};
