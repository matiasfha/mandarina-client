import React from 'react'
import TextField from 'material-ui/TextField'
import { white, blue500 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui/svg-icons/action/search'



const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  iconButton: {
    float: 'left',
    height: 40,
  },
  textField: {
    color: white,
    backgroundColor: blue500,
    borderRadius: 2,
    height: 35,
  },
  inputStyle: {
    color: white,
    paddingLeft: 5,
  },
  hintStyle: {
    height: 16,
    paddingLeft: 5,
    color: white,
  },
}

const SearchBox = ({ onChange }) => (
  <div className="row">
    <IconButton style={styles.iconButton} className="col-xs-1">
      <Search color={blue500} />
    </IconButton>
    <TextField
      className="col-xs-11"
      hintText="Buscar producto..."
      underlineShow={false}
      fullWidth={true}
      style={styles.textField}
      inputStyle={styles.inputStyle}
      hintStyle={styles.hintStyle}
      onChange={onChange}
    />
  </div>
)

export default SearchBox
