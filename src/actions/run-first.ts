/**
 * @file actions/run-first.ts
 * @description Attached action to the run-first command
 * @author Faiz A. Farooqui <faizahmed.in@gmail.com> (https://faizahmed.in)
 */

export default async (
  choices: string, options: {}
): Promise<void> =>
  console.log({ choices, options });
