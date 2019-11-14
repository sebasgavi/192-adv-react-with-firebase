import React from 'react';
import { Paper, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EditRounded as EditIcon, RemoveRedEyeRounded as EyeIcon } from '@material-ui/icons';
import { Word } from '../../components/Word/Word';
import ContentEditable from 'react-contenteditable';
import { fb } from '../../utils/firebase';

function App() {
  const [ isEditable, setEditable ] = React.useState(true);
  const [ title, setTitle ] = React.useState('');
  const [ text, setText ] = React.useState('');
  const [ words, setWords ] = React.useState(['una', 'dos']);

  const classes = useStyles();

  const handleEditClick = () => {
    setEditable((previousValue) => !previousValue);
  }

  const handleTitleChange = (event) => {
    let title = event.target.value;
    setTitle(title);
  }

  const handleTitleBlur = (event) => {
    let title = event.target.innerText;
    let db = fb.firestore();
    db.collection('titles').doc('LA').set({
      title: title,
    });
  }

  React.useEffect(() => {
    let db = fb.firestore();
    let doc = db.collection('titles').doc('LA');
    let observer = doc.onSnapshot(docSnapshot => {
      setTitle(docSnapshot.data().title);
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }, []);

  const handleTextBlur = (event) => {
    let text = event.target.innerText;
    setText('');

    // set words concatenating previous words with splitted string from dom element.
    setWords((prevValue) => {
      return [
        ...prevValue,
        ...text.split(' '),
      ];
    });
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>

        <Paper>
          <ContentEditable
            html={title || 'Untitled document'}
            disabled={!isEditable}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            tagName='p'
            className={classes.title + ' ' + (!title && classes.empty)}
            />
        </Paper>

        <Paper className={classes.document}>
          {words.map((word, index) => <Word key={index+word}>{word}</Word>)}
          <ContentEditable
            html={text}
            disabled={!isEditable}
            onChange={handleTextChange}
            onBlur={handleTextBlur}
            tagName='p'
            />
        </Paper>
      </div>

      <Fab color="secondary" aria-label="edit" className={classes.fab}
        onClick={handleEditClick}>
        {isEditable ? <EyeIcon /> : <EditIcon />}
      </Fab>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      body: {
        margin: 0,
      },
      '*': {
        boxSizing: 'border-box',
      },
      p: {
        fontFamily: 'sans-serif',
        margin: 0,
      },
    },
    root: {
      backgroundColor: 'lightgray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: 40,
    },
    container: {
      width: 800,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      padding: '6px 8px',
    },
    empty: {
      color: 'gray',
    },
    document: {
      marginTop: 20,
      padding: 10,
      flexBasis: 'auto',
      flexGrow: 1,
    },
    text: {

    },
    fab: {
      position: 'fixed',
      right: 40,
      bottom: 40,
    },
  }
});

export default App;
