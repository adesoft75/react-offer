import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AppChapters from './AppChapters'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function AppTabs(props) {
  const [value, setValue] = React.useState(0)
  const tabs = props.init.chapters.concat(props.init.items.filter((item) => item.parent === 0).map((item) => item.name))
  const handleChange = (event, newValue) => {setValue(newValue)}

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map(tab => <Tab label={tab} key={tab} {...a11yProps(tabs.indexOf(tab))} />)}
        </Tabs>
      </Box>
      {
        tabs.map((tab, index) => {
          return(
          <CustomTabPanel value={value} index={tabs.indexOf(tab)} key={tab} >
            <AppChapters init={props.init} index={tabs.indexOf(tab)} />
          </CustomTabPanel>
        )})
      }
    </Box>
  )
}