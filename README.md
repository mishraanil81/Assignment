## Global Indications

- Please write your code to run on the latest version of Chrome without any server. The code should work when the `index.html` file is opened directly in Google Chrome.
- Do not use external libraries. Please write your code using only the JavaScript specifications and APIs that are available on the latest version of Google Chrome.
- Please use git to record the steps you took in your work. (see the [Instructions](#instructions) section below.)

## Requirements

1. When `index.html` is opened in the browser, the content of constant `USERS` in `json/data.js` will appear as a table on the browser. Table column order should be the same as the order already written in `index.html`.
    - Show the user’s full name in the “Name” column, in `last name, first names` order. Including a comma and space between the two names.
2. When `button#start` is clicked, table rows will be shuffled in a new, random order once every second.
3. The process in 2 will stop when `button#stop` is clicked.
4. When the user’s full name is very long, truncate it and show an ellipsis. (Use your judgment about how long “very long” is.)
5. When `button#sort` is clicked, rows will be sorted - first by balance, in descending order, and second by user ID, in ascending order. That is, if multiple rows have the same balance, order those rows with the same balance amount by ID.
6. When the randomized shuffle process is enabled, disable `button#sort`.
7. Use bootstrap’s classes to give elements meaningful styling.

## Additional Notes

- Please write your code in a way that avoids triggering unnecessary reflows and repaints.
- As long as your code fulfills the requirements, you may add other optional features or requirements (i.e. add/change css classes, refactor index.html..).

## Instructions

1. Initialize git in this folder by using `git init` and then make commits as you would normally do. Please refrain from pushing anything, we will only look at your local branch.
2. You are welcome to add your implementation to the existing files or add additional `.js` / `.css` files in the way that seems best to you.
3. Try to do as much as you can, but please do not spend more than 3 hours on this task.
4. Please tell us in the `notes.md` file about the reasons behind the decisions you made.
5. Once you are finished, compress the whole folder into a single `.zip` file. Please do not use other compression formats.

## Notes

- If you discover any concerns that you are unable to address within the given time, please make note of it in the `notes.md` file.
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/).

## How We Assess

- Does the resulting web page behave according to the requested specifications?
- Will your code be easy for engineers of different levels - including juniors - to read, understand, and maintain?
