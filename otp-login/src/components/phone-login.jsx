import React, { useState } from 'react'
import OtpInput from './otp-input'

const PhoneOtpForm = () => {

    const [phoneNum, setPhoneNum ] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handlePhoneNum=(e)=>{
        setPhoneNum(e.target.value);
    }
    const handlePhoneSubmit=(e)=>{
        e.preventDefault();

        // Number validation
        const regex = /[^0-9]/g;
        if (phoneNum.length < 10 || regex.test(phoneNum)) {
          alert("Invalid Phone Number");
          return;
          
        };

        //Call Backend API
        //Show OTP Field    
        setShowOtpInput(true);
    }



    const onOtpSubmit=(otp)=>{
        console.log("Login Successful",otp)
    }


  return (
    <div>
      
        {!showOtpInput ? (<form onSubmit={handlePhoneSubmit} >
            <input type='text' value={phoneNum} onChange={handlePhoneNum} placeholder='Enter the Phone Number'/>
            <button type='submit'>Submit</button>
        </form>) : <div>
            <p>Enter OTP sent to {phoneNum}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div> }

    </div>
  )
}

export default PhoneOtpForm
