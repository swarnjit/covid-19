import React from "react";

function CountryDataModal(props) {
  const classes = useStyles();
  const { onClose, selectedCountry, open } = props;

  const handleClose = () => {
    onClose(selectedCountry);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      selectedCountry={selectedCountry}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText />
        </ListItem>

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedCountry: PropTypes.string.isRequired,
};
export default CountryDataModal;
