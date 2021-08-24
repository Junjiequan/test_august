# Initial stage - define scope

## Requirements

1. Use functional components
2. Filter button for Todo, Doing, Done options.
3. Add optional deadline to item. ( A date and time for when an item should be complete)

## Additional functionalities

- Save todos to localStorage (User experience consideration)
- Drag and drop functionality (User interaction consideration)

## Tool choice

- Redux for state management
- React-sortablejs library for drag & drop
- Styled-component for styling

# Process

## Analyze challenges

1. Redux-toolkit settings? (first time trying redux-toolkit)
2. How to include deadline option whilst creating todo items? manualy type date and time or use library to get a calendar?
3. Filtering todos? create switch method or just use reducer actions?

## Problem encounterd during process

- Type causing serious laggs (conflict between calendar value & input value useState hook)
  - Removed Input onChange useState hook replaced by get value from e.currentTarget and problem solved.
