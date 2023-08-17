import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { display } from "@mui/system";

export default function Team() {
  return (
    <>
      <div className="team-container">
      <h2 style={{fontFamily:'Oswald, sans-serif', marginLeft:'20px', color: '#d9cba0'}}>The People</h2>
      <br></br>
      <div style={{ width: '100%' }}>
      <Box sx={{ display: 'flex',flexWrap:'wrap', justifyContent: 'center', p: 1, m: 1}}>
    <Card id='team-card' sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/christa_portfolio_pic.png"
          alt="christa"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' , fontFamily: 'Fuzzy Bubbles, cursive'}}>
        Christa Baccas
          </Typography>
          <Typography variant="body2" color="text.secondary">
               Hello, 
                My name is Christa Baccas, I'm 28 years old living in Austin, TX. With 3 years of experience in the technology field, I began the journey of becoming a web/software developer. Well versed in HTML, CSS/BootStrap, JavaScript, Databases, Node.js, and React. I have a passion for problem-solving and learning new things.
          </Typography>
          <div style={{ textAlign:'center'}}>
          <a href='https://www.linkedin.com/in/christa-baccas-77362a205/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/christa-baccas' target='_blank' rel='noreferrer'><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:christa-baccas@gmail.com' rel='noreferrer'><i className="fas fa-envelope footer-icons"></i></a> 
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card id='team-card' sx={{ maxWidth: 345, margin: 1 ,bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/ismeny-profile-chicago.jpg"
          alt="ismeny"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
          Ismeny Castro
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Hello! 
          My name is Ismeny Castro, I'm born and raised in Austin, Texas. 
          I love doing outdoor activites like going to the Greenbelt, paddleboarding on Town Lake, and picnics at Zilker Park with my dogs and friends. 
          I'm new to the tech field and excited to learn more about web development and pursue a career as a Full Stack MERN Developer.
          </Typography>
          <div style={{ textAlign:'center'}}>
          <a href='https://www.linkedin.com/in/ismeny-castro-b8b32821b/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/Ismeny' target='_blank' rel="noreferrer"><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:menysag2@gmail.com' rel="noreferrer"><i className="fas fa-envelope footer-icons"></i></a> 
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card id='team-card' sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/jayla-profile.jpg"
          alt="jayla"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
          Jayla Newton
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Hi, i'm Jayla!
          I'm a Full Stack MERN Developer and new to the tech industry. I'm eager to learn more about front-end development and how to create amazing user experiences. My projects on my portfolio demonstrate my skills. Check out my Github and feel free to contact me, let’s build something great!
          </Typography>
          <div style={{ textAlign:'center' }}>
          <a href='https://www.linkedin.com/in/jaylanewton/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/jayladenae' target='_blank' rel="noreferrer"><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:jayladenaer@gmail.com'><i className="fas fa-envelope footer-icons" rel="noreferrer"></i></a> 
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card id='team-card' sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/alex-profile-pic2.jpg"
          alt="alex"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
            Alex Gonzalez
          </Typography>
          <Typography variant="body2" color="text.secondary">
          🔭 I’m currently working on finding employment as an entry-level junior developer

🌱 I’m currently learning how to create and deploy a full-stack application using the MERN stack
👯 I’m looking to collaborate on exciting applications meant to meet real world needs
💬 Ask me about why I started investing in crypto and where I see myself in 10 years
😄 Pronouns: He/him
⚡ Fun fact: I love soccer, basketball, and competitive Call of Duty.
          </Typography>
          <div style={{ textAlign:'center'}}>
          <a href='https://www.linkedin.com/in/alexis-gonzalez-07/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/AlexisGonzalez07' target='_blank' rel="noreferrer"><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:alexis.gonzalez07@gmail.com'><i className="fas fa-envelope footer-icons" rel="noreferrer"></i></a> 
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  id='team-card' sx={{ maxWidth: 345 , margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/nikki-profile-pic.jpg"
          alt="nikki"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
           Nicole Dodge
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hey I’m Nicole! (some people call me Nikki)
            I’m new to the world of web development but have been no stranger to technology. Expertised in DSLR camera processes and Adobe applications, my profession prior to computers involved Wedding & Festival Photography, as well as the team photographer for a Division I football team. I spend most of my time at festivals and traveling across different national parks and different countries!
          </Typography>
          <div style={{ textAlign:'center'}}>
          <a href='https://www.linkedin.com/in/nicole-dodge5/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin footer-icons"></i></a>
          <a href='https://github.com/nicoledodge' target='_blank' rel="noreferrer"><i className="fab fa-github footer-icons"></i></a>
          <a href='mailto:nicoledodge5@gmail.com'><i className="fas fa-envelope footer-icons" rel="noreferrer"></i></a> 
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
    </div>
    </>
  );
}
