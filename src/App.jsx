import { BrowserRouter, Route, Routes } from "react-router-dom";



import "./App.css";
import Menubar from "./components/menubar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <BrowserRouter>

      <Menubar />

      <Routes>
        <Route path="/dhruval" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
// import {
//   Box,
//   Button,
//   Chip,
//   Container,
//   Divider,
//   Stack,
//   Typography,
// } from '@mui/material'

// function App() {
//   const skills = [
//     'React JS',
//     'JavaScript',
//     'HTML',
//     'CSS',
//     'Material UI',
//     'Bootstrap',
//     'API Integration',
//     'Git & GitHub',
//     'SQL Server',
//     'IIS Deployment',
//   ]

//   return (
//     <Box
//       sx={{
//         background: '#f5f6f8',
//         minHeight: '100vh',
//         py: 4,
//         fontFamily: 'system-ui',
//       }}
//     >
//       <Container maxWidth="md">

//         {/* HEADER CARD */}
//         <Box
//           sx={{
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >

//           {/* NAME */}
//           <Typography sx={{ fontSize: '1.8rem', fontWeight: 700 }}>
//             Dhruvalkumar M.
//           </Typography>

//           <Typography sx={{ color: '#555', mt: 0.5 }}>
//             Front-End Developer
//           </Typography>

//           <Typography sx={{ fontSize: '0.9rem', mt: 1, color: '#666' }}>
//             📞 9106789002 | 8980818059
//           </Typography>

//           <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
//             📧 gamitdhruval5@gmail.com
//           </Typography>

//           <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
//             📍 L.H Road, Surat (Near East Zone Office)
//           </Typography>

//           {/* BUTTONS */}
//           <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
//             <Button variant="contained">
//               Contact
//             </Button>

//             <Button
//               variant="outlined"
//               href="https://wa.me/919106780902"
//             >
//               WhatsApp
//             </Button>
//           </Stack>
//         </Box>

//         {/* OBJECTIVE */}
//         <Box
//           sx={{
//             mt: 2,
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >
//           <Typography sx={{ fontWeight: 700, mb: 1 }}>
//             Objective
//           </Typography>

//           <Typography sx={{ color: '#555', fontSize: '0.9rem' }}>
//             Passionate Web Developer with hands-on experience in
//             web development, testing, and client support. Focused on
//             building user-friendly digital solutions.
//           </Typography>
//         </Box>

//         {/* EXPERIENCE */}
//         <Box
//           sx={{
//             mt: 2,
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >
//           <Typography sx={{ fontWeight: 700 }}>
//             Professional Experience
//           </Typography>

//           <Typography sx={{ mt: 1, fontWeight: 600 }}>
//             Vitra Technologies LLP (2021 – Present)
//           </Typography>

//           <Typography sx={{ fontSize: '0.9rem', color: '#555', mt: 1 }}>
//             • React JS & Ionic development<br />
//             • UI design using MUI, Bootstrap<br />
//             • Testing & debugging<br />
//             • Client support & training<br />
//             • IIS deployment
//           </Typography>
//         </Box>

//         {/* SKILLS */}
//         <Box
//           sx={{
//             mt: 2,
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >
//           <Typography sx={{ fontWeight: 700, mb: 1 }}>
//             Technical Skills
//           </Typography>

//           <Stack direction="row" flexWrap="wrap" gap={1}>
//             {skills.map((s, i) => (
//               <Chip key={i} label={s} size="small" />
//             ))}
//           </Stack>
//         </Box>

//         {/* EDUCATION */}
//         <Box
//           sx={{
//             mt: 2,
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >
//           <Typography sx={{ fontWeight: 700 }}>
//             Education
//           </Typography>

//           <Typography sx={{ mt: 1, fontSize: '0.9rem' }}>
//             SHRI S.G. HIGH SCHOOL – Commerce (2015) – 65%
//           </Typography>

//           <Typography sx={{ fontSize: '0.9rem' }}>
//             VNSGU – BCA (2018) – 68.9%
//           </Typography>
//         </Box>

//         {/* RESUME */}
//         <Box
//           sx={{
//             mt: 2,
//             background: '#fff',
//             borderRadius: 2,
//             p: 3,
//             border: '1px solid #e5e7eb',
//           }}
//         >
//           <Typography sx={{ fontWeight: 700, mb: 1 }}>
//             Resume Preview
//           </Typography>

//           <Box
//             sx={{
//               height: 400,
//               border: '1px solid #ddd',
//               borderRadius: 1,
//               overflow: 'hidden',
//             }}
//           >
//             <iframe
//               src="https://drive.google.com/file/d/1_Pzw2HMn8W5u9TDl3-2bTP97ec-A70A8/preview"
//               width="100%"
//               height="100%"
//               style={{ border: 'none' }}
//               title="Resume"
//             />
//           </Box>

//           <Button
//             sx={{ mt: 2 }}
//             variant="contained"
//             href="/resume.pdf"
//             download
//           >
//             Download Resume
//           </Button>
//         </Box>

//       </Container>
//     </Box>
//   )
// }

// export default App