import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import './PurchaseOrder.css';

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
    backgroundColor: '#0098da',
    color: 'white',
    
  },
}));

const PurchaseOrder = () => {
  const classes = useStyles();
  const rows = [
    { SNO: 1, DrugName: 'Drug A', Category: 'Category 1', Quantity: 100, BrandName: 'Xy', DrugUnit: 50, Description: 'okay fine', Manufacturer: 'Manufacturer X', DateOfManufacture: '2024-01-01', DateOfExpiry: '2025-01-01' },
    // Add more rows as needed
  ];

  const handleOrderButtonClick = () => {
    window.location.href = '/DrugOrder'; 
    console.log('Order button clicked');
  };
  
  const [scheduleInfo, setScheduleInfo] = useState('');

  // Function to fetch and set schedule information based on SNO
  const handleScheduleInfo = (sno) => {
    // You can implement your logic here to fetch schedule information based on the SNO
    // For demonstration purposes, let's assume you have a function called getScheduleInfoBySNO
    const info = getScheduleInfoBySNO(sno);
    setScheduleInfo(info);
  };

  // Dummy function for demonstration purposes
  const getScheduleInfoBySNO = (sno) => {
    // Here you can implement logic to fetch schedule information from a database or API
    // For demonstration, I'll just return some dummy data based on SNO
    switch (sno) {
      case 'I':
        return 'High potential for abuse, no current medical use.';
      case 'II':
        return 'Some medical uses, but high potential for abuse.';
      case 'III':
        return 'Requires prescription.';
      case 'IV':
        return 'Viable medical use.';
      case 'V':
        return 'Low potential for abuse';
      default:
        return null;
    }
  };

  return (
    
      <Container maxWidth="md">
   
   <Box className={classes.header}>
     <Typography variant="h5" className={classes.titleLabel}>
       Available Drugs
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
           <TableCell className={classes.tableHeaderCell}>Action</TableCell>
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
               <Button
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
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
               <Button
                 variant="contained"
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
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
               <Button
                 variant="contained"
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
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
               <Button
                 variant="contained"
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
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
               <Button
                 variant="contained"
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
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
               <Button
                 variant="contained"
                 className={classes.actionButton}
                 onClick={handleOrderButtonClick}
               >
                 Add To Cart
               </Button>
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 </Container>
    
  );
};

export default PurchaseOrder;
