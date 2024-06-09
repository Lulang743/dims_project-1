import React from 'react';
import './style.css';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'whitesmoke',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    borderRadius: 5,
  },
  titleLabel: {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableContainer: {
    borderRadius: 10,
    boxShadow: `0px 3px 5px rgba(0, 0, 0, 0.1)`,
    backgroundColor: '#ffffff',
    marginTop: theme.spacing(3),
    overflow: 'hidden',
    width: 1200,
    paddingRight: '10px'
  },
  tableHeaderCell: {
    backgroundColor: '#0098da',
    color: 'white',
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f9f9f9',
    },
  },
  actionButton: {
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: '#0077b6',
      color : 'white',
    },
  },
}));

const ViewDrugs = () => {
  const classes = useStyles();

  // Sample data for table (replace with your data)
  const rows = [
    { SNO: 1, DrugName: 'Drug A', Category: 'Category 1', Quantity: 100, BrandName: 'Xy', DrugUnit: 50, Description: 'okay fine', Manufacturer: 'Manufacturer X', DateOfManufacture: '2024-01-01', DateOfExpiry: '2025-01-01' }
    // Add more rows as needed
  ];

  const handleOrderButtonClick = () => {
    window.location.href = '/DrugOrder'; 
    console.log('Order button clicked');
  };

  return (
   <div className='container-class'>
     <Container maxWidth="md">
   
   <Box className={classes.header}>
     <Typography variant="h5" className={classes.titleLabel}>
       Available Stock
     </Typography>
   </Box>

   <TableContainer component={Box} className={classes.tableContainer}>
     <Table>
       <TableHead>
         <TableRow>
           <TableCell className={classes.tableHeaderCell}>SNO</TableCell>
           <TableCell className={classes.tableHeaderCell}>Drug Name</TableCell>
           <TableCell className={classes.tableHeaderCell}>Category</TableCell>
           <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
           <TableCell className={classes.tableHeaderCell}>Brand Name</TableCell>
           <TableCell className={classes.tableHeaderCell}>Drug Unit (ml)</TableCell>
           <TableCell className={classes.tableHeaderCell}>Description</TableCell>
           <TableCell className={classes.tableHeaderCell}>Manufacturer</TableCell>
           <TableCell className={classes.tableHeaderCell}>Manufacture Date</TableCell>
           <TableCell className={classes.tableHeaderCell}>Expiry Date</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
             </TableCell>
           </TableRow>
         ))}
          {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
             </TableCell>
           </TableRow>
         ))}
          {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
               
             </TableCell>
           </TableRow>
         ))}
          {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
              
             </TableCell>
           </TableRow>
         ))}
          {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
               
             </TableCell>
           </TableRow>
         ))}
          {rows.map((row, index) => (
           <TableRow key={index} className={classes.tableRow}>
             <TableCell>{row.SNO}</TableCell>
             <TableCell>{row.DrugName}</TableCell>
             <TableCell>{row.Category}</TableCell>
             <TableCell>{row.Quantity}</TableCell>
             <TableCell>{row.BrandName}</TableCell>
             <TableCell>{row.DrugUnit}</TableCell>
             <TableCell>{row.Description}</TableCell>
             <TableCell>{row.Manufacturer}</TableCell>
             <TableCell>{row.DateOfManufacture}</TableCell>
             <TableCell>{row.DateOfExpiry}</TableCell>
             <TableCell>
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 </Container>
 <div class="button-row">
        <button class="btn">Add New Drug</button>
        <button class="btn">Update Drug</button>
        <button class="btn">Delete Drug</button>
    </div>
</div>

  );
};

export default ViewDrugs;
