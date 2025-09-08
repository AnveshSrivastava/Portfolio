import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const Button1 = styled.a`
  border: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  margin: 1rem;
  width: 80px;
  height: 60px;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 50px;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }

`;


const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Technical Skills
</Title>
<Description>
Languages: Java, Python, C, C++, JavaScript, TypeScript, SQL.<br></br>
Web Development: HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js, Vue.js, Spring Boot.<br></br>
Databases: MongoDB, MySQL, PostgreSQL.<br></br>
Programming Concepts: Data Structures & Algorithms, Object-Oriented Programming (OOP).<br></br>
Tools & Platforms: Git, GitHub, Azure, Android Studio, Sanity.
</Description>

            </Main>
            <Button1 href="/resume.pdf" download = "Anvesh-Srivastav-Resume.pdf">Download my<br></br> resume</Button1>
            <Main>
<Title>
    <Design width={40} height={40} /> Non-Technical Skills
</Title>
<Description>
Alongside my technical expertise, I bring strong leadership, teamwork, and communication skills, developed through organizing cultural and technical events at my college. I enjoy vibe coding, mentoring peers, and collaborating on projects that combine creativity with problem-solving. My curiosity drives me to explore new tools and technologies, while my adaptability helps me thrive in dynamic environments.
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
