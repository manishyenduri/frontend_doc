import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 30;
  const left = 40;
  // const height = 40;
  const width = 40;
  const height = 40;

  return {
    top: `${top}%`,
    width:`${width}%`,
    left: `${left}%`,
    height: `${height}%`,
    // height: `${height}%`,
    transform: `translate(-${top}%, -${left}%`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    borderRadius:'10px',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: 'white',
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  const extraStyle = (props.extraStyle ? props.extraStyle : {});

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.handleCloseModal}
      >
        <div style={{ ...modalStyle, ...extraStyle }} className={classes.paper}>
         {props.children}
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}
