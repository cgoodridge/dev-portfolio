import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

const Contact = (props) => {

    
     
        
    return (
        <section id="contact">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "white", textAlign:"center" }}>
            <span>Get In Touch</span>
          </h1>
          <div className="">
            
            <div className="center contact-form">
                <Box sx={{width: '60%'}}>
                    <div>
                        <TextField id="Name" label="Name" size="large" variant="standard" fullWidth/>
                    </div>
                    <div>
                        <TextField id="Email" label="E-Mail" variant="standard" fullWidth/>
                    </div>
                    <div>
                        <TextField id="Subject" label="Subject" variant="standard" fullWidth/>
                    </div>
                    <div>
                        <TextField id="Message" label="Message" variant="standard" rows={4} fullWidth multiline/>
                    </div>
                </Box>
            </div>

          </div>
        </div>
      </section>
    );
}

export default Contact;
