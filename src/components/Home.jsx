import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const navigate=useNavigate();

  const [company, setCompany] = useState("");
  const [letterType, setLetterType] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [refNo,setRefNo]=useState("");
  const [designation,setDesignation]=useState("");
  const [joiningDate,setJoiningDate]=useState("");
  const [logo,setLogo]=useState("https://rusutikaa.github.io/docs/developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png");

  const submitDetails=(e)=>{
      e.preventDefault();
    if(!company.trim()||!letterType.trim()||!username.trim()||!address.trim()||logo==="https://rusutikaa.github.io/docs/developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/Art/defaultphoto_2x.png")
    alert("Enter all the details properly!");
    else{
      navigate(`generateletter`,{state:{company,letterType,username,address,logo,refNo,designation,joiningDate}});
    }
  }

  const handleCompany = (event) => {
    setCompany(event.target.value);
    console.log(event.target.value);
  };

  const handleLetterType = (event) => {
    setLetterType(event.target.value);
    console.log(event.target.value);
  };

  const uploadImage=async(e)=>{
    const file=e.target.files[0];
    const base64=await convertBase64(file);
    setLogo(base64.toString());
  }
  
  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      
      fileReader.onerror=(err)=>{
        reject(err);
      }
    })
  }

  return (
    <div style={{minHeight:'92.5vh', minWidth:'100vw', backgroundColor: '#00c0d9',backgroundImage: `url("https://www.transparenttextures.com/patterns/gray-floral.png")`}}>

      <div className="container d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3"></div>
                <h1 className='heading' style={{color:'#24134d' }}>Letter Generator</h1>
          </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center mq" style={{height: '55%'}}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%'},
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form-group text-center">
               
                <input type="file" className="form-control-file d-none" id="exampleFormControlFile1" onChange={(e)=>uploadImage(e)} />
              <div className="form-group">
              <div className="text-center mb-2"><img className="rounded mt-5" src={logo}  style={{width:"50%",height:"50%", border: "5px solid blue"}} alt="" /></div>
              <label htmlFor="exampleFormControlFile1" className='btn btn-primary mybtn'>Upload a logo</label>
              </div>
              </div>
            </Box>
          </div>



          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 tfield">
            <Box sx={{ minWidth: 120}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"><strong>Company</strong></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  label="Company"
                  onChange={handleCompany}
                >
                  <MenuItem value={"Comp1"}>Comp1</MenuItem>
                  <MenuItem value={"Comp2"}>Comp2</MenuItem>
                  <MenuItem value={"Comp3"}>Comp3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, marginTop: '20px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"><strong>Letter Type</strong></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={letterType}
                  label="Letter Type"
                  onChange={handleLetterType}
                >
                  <MenuItem value={"type1"}>Type 1</MenuItem>
                  <MenuItem value={"type2"}>Type 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '20px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Name" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '20px'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Address" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%' , marginTop: '20px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Reference No." InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={refNo} onChange={(e) => setRefNo(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '20px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Designation" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '100%', marginTop: '20px' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Joining Date" InputLabelProps={{style: {fontWeight:'bold'}}} variant="standard" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
            </Box>
            <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-info mybtn text-white mt-3 mb-2' onClick={submitDetails}>Submit</button>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Home;


//<div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded mt-5" src={nImg}  style={{width:"80%"}}/><span className="font-weight-bold">Upload image</span><input type="file" className="text-center form-control" onChange={(e)=>{uploadImage(e)}}/></div>