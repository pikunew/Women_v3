import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { helplineLoadAction } from '../../redux/actions/helplineAction';


const DashHelplines = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(helplineLoadAction());
  }, [dispatch]);

  const { helplines } = useSelector((state) => state.loadHelplines);
  let data = [];
  data = helplines !== undefined && helplines.length > 0 ? helplines : [];

  //delete helpline by Id
  const deleteHelplineById = (e, id) => {
    console.log(id);
  };

  const columns = [
    {
      field: 'uid',
      headerName: 'UID',
      width: 80,
      editable: true,
    },
    {
      field: 'issue',
      headerName: 'Issue',
      width: 150,
    },
    {
      field: 'user',
      headerName: 'User',
      width: 150,
    },
    {
      field: 'stt',
      headerName: 'Verification',
      width: 100,
    },
    {
      field: 'agen',
      headerName: 'Agency',
      type: Number,
      width: 300,
    },
    {
      field: 'num',
      headerName: 'Numbers',
      type: Number,
      width: 150,
    },
    {
      field: 'map',
      headerName: 'Location',
      type: Number,
      width: 200,
    },
    {
      field: 'Actions',
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
          <Button variant="contained">
            <Link style={{ color: 'white', textDecoration: 'none' }} to={`https://womenhelpline-backend.onrender.com/admin/edit/helpline/${values.row._id}`}>
              Edit
            </Link>
          </Button>
          <Button onClick={(e) => deleteHelplineById(e, values.row._id)} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
        Helplines list
      </Typography>
      <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/createhelplines">
            Create Helpline
          </Link>
        </Button>
      </Box>
      <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
        <Box sx={{ height: 800, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
            sx={{
              '& .MuiTablePagination-displayedRows': {
                color: 'white',
              },
              color: 'white',
              [`& .${gridClasses.row}`]: {
                bgcolor: (theme) => theme.palette.secondary.main,
              },
              button: {
                color: '#ffffff',
              },
            }}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashHelplines;
