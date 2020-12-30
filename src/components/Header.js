import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

// Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import SearchBar from 'material-ui-search-bar'

function Header() {
  const classes = useStyles()
  let history = useHistory()

  const [data, setData] = useState({ search: '' })

  function goSearch(e) {
    history.push({ pathname: '/search/', search: '?search=' + data.search })
    window.location.reload()
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to='/'
              underline='none'
              color='textPrimary'
            >
              Blog
            </Link>
          </Typography>
          <SearchBar
            value={data.search}
            onChange={(newValue) => setData({ search: newValue })}
            onRequestSearch={() => goSearch(data.search)}
          />
          <nav>
            <Link
              color='textPrimary'
              href='#'
              className={classes.link}
              component={NavLink}
              to='/register'
            >
              Register
            </Link>
          </nav>
          <Button
            href='#'
            color='primary'
            variant='outlined'
            className={classes.link}
            component={NavLink}
            to='/login'
          >
            Login
          </Button>
          <Button
            href='#'
            color='primary'
            variant='outlined'
            className={classes.link}
            component={NavLink}
            to='/logout'
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}))

export default Header
