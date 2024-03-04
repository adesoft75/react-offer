import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Check } from '@mui/icons-material'
import AppTable from './AppTable'
import WidgetsIcon from '@mui/icons-material/Widgets'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AppChapters() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab icon={<WidgetsIcon color="primary"/>} iconPosition="end" label="Общее" {...a11yProps(0)} />       
        <Tab iconPosition="end" label="Обследования" {...a11yProps(0)} />       
        <Tab iconPosition="end" label="Совещания" {...a11yProps(1)} />
        <Tab icon={<Check />} iconPosition="end" label="ПИР" {...a11yProps(2)} />
        <Tab iconPosition="end" label="ПИР ИБ" {...a11yProps(3)} />
        <Tab iconPosition="end" label="ПИР смежные" {...a11yProps(4)} />
        <Tab iconPosition="end" label="ЭПБ" {...a11yProps(5)} />
        <Tab icon={<Check />} iconPosition="end" label="Поставка" {...a11yProps(6)} />
        <Tab icon={<Check />} iconPosition="end" label="ЗПИ" {...a11yProps(7)} />
        <Tab icon={<Check />} iconPosition="end" label="СМР" {...a11yProps(8)} />
        <Tab iconPosition="end" label="ШМР" {...a11yProps(9)} />
        <Tab iconPosition="end" label="Метрология" {...a11yProps(10)} />
      </Tabs>     
      <TabPanel value={value} index={0}>       
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <AppTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <AppTable />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <AppTable />
      </TabPanel>
      
    </Box>
  );
}