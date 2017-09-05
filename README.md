## Question Editor for a Radio Button Matrix
### [https://question-editor.herokuapp.com/](https://question-editor.herokuapp.com/)


Built with create-react-app, Styled-Components, CSS Grid and React Transition Group.


Features:
- Ability to select images from the hard drive for every row and column
- Ability to set labels for every row and column
- Ability to add new rows and columns
- Ability to remove rows and columns
- A statistics panel

## Scripts

In the project directory, you can run:

#### `yarn start` or  `npm run start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000).<br>
The page will reload if you make edits, lint errors shows in the console.

#### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.<br>

#### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.

## How it works

### Structure
Application's state is managed in `App.js` component.


Table with radio button matrix is wrapped in styled `/Table` component, which has CSS Grid properties to render each children in a cell by column flow, this means first renders delete cells, after that image cells and so on...<br>
Advantage of rendering by grid column flow is that it's automatically adjusts width of that particular column if one of the cell's width has been changed (i.e. changing row/columns labels).

### Management

#### `Radio buttons`
`Checked` attributes are managed in each row's state, under `checked` key, by `false/true` value.
When user selects radio button, method `handleRadioChange()` is being called, which maps through `checked` values, setting up all to `false`, except the chosen. This let's user to chose only one option per row.


#### `Row/column labels`
Similarly to radio buttons, each of input tag's value is controlled by state, which changes when user enters text. Also has `size` attribute, which changes dinamicaly, to adjust text length.

#### `File uploads`

File uploads are managed by `input` tags with type attribute of file.

File reading is managed by web API `FileReader` object, which lets web applications asynchronously read the contents of files stored on the user's computer.

After user uploads file, new instance of `FileReader` and `FileReader.onloadend` handler event is created, which tracks when file ends to upload.

Calling `FileReader.readAsDataURL()` method, reads the content, once finished, the result attribute `FileReader.result` contains URL representing the file's data.