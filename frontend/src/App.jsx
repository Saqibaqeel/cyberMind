

import JobCard from './componenets/JobCard'
import JobFilter from './componenets/JobFilter'
import Navbar from './pages/Navbar'
import CreateJobModal from './pages/CreateJobModal'
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Form from './componenets/Form'

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  return (
    <>
     <Navbar onOpenModal={handleOpenModal} />
      <CreateJobModal show={showModal} handleClose={handleCloseModal} />
      <JobFilter/>
      <JobCard/>
    
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
