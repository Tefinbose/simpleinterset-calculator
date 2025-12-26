import { useState } from "react";
import "./App.css";
import { Button, Stack, TextField } from "@mui/material";
Button;
Stack;

function App() {
  const [priciple, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [isPrinciple,setisPrinciple]=useState(true);
  const [isRate,setisRate]=useState(true);
  const [isYear,setisYear]=useState(true);

  const validateInputs = (e) => {
    // console.log(typeof tag);
    const {name,value} = e.target
    console.log(name);
    console.log(value);
    // regular expression
   if(!!value.match('^[0-9]*$')){
    if(name == "principle"){
      setPrinciple(value)
      setisPrinciple(true)
    }else if(name =="rate of interest"){
      setRate(value)
      setisRate(true)
    }else{
      setYear(value)
      setisYear(true)
    }
   }else{
    if(name == "principle"){
      setPrinciple(value)
      setisPrinciple(false)
    }else if(name =="rate of interest"){
      setRate(value)
      setisRate(false)
    }else{
      setYear(value)
      setisYear(false)
    }
   }
  };
  // Reset function
  const handleReset = ()=>{
    setPrinciple("")
    setisPrinciple(true)
    setRate("")
    setisRate(true)
    setYear("")
    setisYear(true)
  }
  // Calculate function
  const handleCalculate=()=>{
    setInterest((priciple*rate*year)/100)
  }

  return (
    <>
      <div
        style={{ minHeight: "100vh", width: "100%" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "600px" }} className="bg-light rounded p-5">
          <h3 className="text-center ">Simple interest calculator</h3>
          <p className="text-center"> calculate the simple interest easily</p>
          <div className="bg-warning p-3 text-light text-center rounded">
            <h1>{interest}</h1>
            <p>Total simple interest</p>
          </div>
          {/* form section for priciple amount */}
          <form className="mt-5" action="">
            <div className="w-100">
              <TextField
                onChange={(e) => validateInputs(e)}
                className="w-100"
                id="outlined-principle"
                label="principle amount"
                variant="outlined"
                 name="principle"
                 value={priciple}
              />
              {
                isPrinciple == false &&
                <span className="text-danger">Invalid input</span>}
            </div>
          </form>
          {/* rate of interest */}
          <form className="mt-5" action="">
            <div className="w-100">
              <TextField
              onChange={(e)=>validateInputs(e)}
                className="w-100"
                id="outlined-rate"
                label="rate of interest"
                variant="outlined"
                name="rate of interest"
                value={rate}
              />
              {
                isRate == false &&
                <span className="text-danger">Invalid input</span>}
            </div>
            {/* year */}
          </form>
          <form className="mt-5" action="">
            <div className="w-100">
              {/* imported from the material UI---->textfield 1st line */}
              <TextField
              onChange={(e)=>validateInputs(e)}
                className="w-100"
                id="outlined-year"
                label="year"
                variant="outlined"
                name="year"
                value={year}
              />
             {
             isYear == false &&
             <span className="text-danger">Invalid input</span>}
            </div>
            <Stack direction="row" spacing={2}>
              <Button
                className="bg-black mt-5 text-white"
                style={{ width: "50%", height: "70px" }}
                variant="text"
                onClick={handleCalculate}
              >
                Calculate
              </Button>
              <Button
                className="mt-5"
                style={{ width: "50%", height: "70px" }}
                variant="contained"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
