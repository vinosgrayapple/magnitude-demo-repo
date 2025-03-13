import { test } from 'magnitude-ts';

const sampleTodos = [
    "Take out the trash",
    "Buy groceries",
    "Build more test cases with Magnitude"
];

test('can add a todo')
    .step('Enter and add a todo')
        .data({ todo: sampleTodos[0] })
        .check('Todo appears')

test('can mark todos complete')
    .step('Add a todo')
    .step('Mark the todo as done')
        .check('Check that it appears to be marked complete, and that completed count is 1')

test('can add multiple todos')
    .step('Create 3 todos')
        .data(sampleTodos.join(", "))
        .check('Todo total count should be 3')


