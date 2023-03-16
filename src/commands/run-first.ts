/**
 * @file commmands/run-first.ts
 * @description Sample command with a choice option and a mandatory argument
 * @author Faiz A. Farooqui <faizahmed.in@gmail.com> (https://faizahmed.in)
 */

import { Command, Option } from 'commander';
import action from '../actions/run-first';

export default async (program: Command) => {
	const choicesOptions: Option = new Option(
		'-c, --choices <choices>',
		'this is a choice option'
	).choices([
		'abc', 'def'
	]);

	program
		.command('run:first')
		.argument('<argument>', 'description of the argument')
		.addOption(choicesOptions.makeOptionMandatory())
		.description('description of the run:first command')
		.action(action);
};
