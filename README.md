# Initial stage - define scope

## Requirements

1. Use functional components
2. Filter button for Todo, Doing, Done options.
3. Add optional deadline to item. ( A date and time for when an item should be complete)

## Additional functionalities

- Save todos to localStorage (User experience consideration)
- ~~Drag and drop functionality (User interaction consideration)~~ (It was the plan but spend too much time on other things)

# Process

## Tool choice

- Redux for state management
- ~~React-sortablejs library for drag & drop~~
- Styled-component for styling
- And some other non-essential packages included while building.

## Analyze challenges

1. Redux-toolkit settings? (first time trying redux-toolkit)
2. How to include deadline option whilst creating todo items? manualy type date and time or use library to get a calendar?
3. Filtering todos? create switch method or just use reducer actions?

## Solution for challenges

1. Read redux-toolkit documentation + watching tutorials to learn how to setup Redux-toolkit
2. Found package that exactly fulfill the date & time requirement.
3. reducer for filter seems to be not a good idea. So, I used switch statement inside useSelector hook.

## Problem encounterd during process

- Input typing cause serious laggs (input value change causing `new Date()` re-render)

  - Removed Input onChange useState hook replaced by get value from e.currentTarget and problem solved.

- Tried to make todo filter with reducer and noticed reducer always changes the original state.

  - Made switch statement inside useSelector hook to get filtered data, so the original state remains unchanged.

- These types are driving me crazy.
  - Endless Googling for type issues.

# DONE

Probably spend roughly 6~7 hours.

Some say redux-tookit is easier to use, hmm, ITS still hard :D
