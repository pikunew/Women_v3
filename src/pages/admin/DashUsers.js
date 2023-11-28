import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { helplineLoadAction } from '../../redux/actions/helplineAction';

const DashHelplines = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(helplineLoadAction());
  }, []);

  const { helplines, loading } = useSelector((state) => state.loadHelplines);
  let data = [];
  data = helplines !== undefined && helplines.length > 0 ? helplines : [];

  const deleteHelplineById = (e, id) => {
    console.log(id);
  };

  const columns = [
    {
      field: '_id',
      headerName: 'Issue ID',
      width: 150,
      editable: true,
    },
    {
      field: 'issue',
      headerName: 'Issue',
      width: 150,
    },
    {
      field: 'firstName',
      headerName: 'User',
      width: 150,
      valueGetter: (params) => params.row.user?.firstName,
    },
    
    
    {
      field: 'agen',
      headerName: 'Agency',
      width: 150,
      renderCell: (params) => `$${params.row.agen}`,
    },
    {
      field: 'createdAt',
      headerName: 'Creation Date',
      width: 250,
      renderCell: (params) =>
        moment(params.row.createdAt).format('MMMM Do YYYY HH:mm:ss'),
    },
    {
      field: 'Actions',
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
          <Button variant="contained">
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to={`/admin/edit/helpline/${values.row._id}`}
            >
              Edit
            </Link>
          </Button>
          <Button
            onClick={(e) => deleteHelplineById(e, values.row._id)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
          Helplines List
        </Typography>
        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            component={Link}
            to="/admin/createhelplines"
          >
            Create Helpline
          </Button>
        </Box>
        <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
          <Box sx={{ height: 800, width: '100%' }}>
            <DataGrid
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
              getRowId={(row) => row._id}
              rows={data}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default DashHelplines;
