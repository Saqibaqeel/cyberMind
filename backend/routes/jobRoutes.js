const router = require('express').Router();
const protected=require('../middleware/protected')

const {createJob, getJobById, getAlljobs,searchJob} = require('../controllers/jobControllers');
router.post('/create',  createJob);
router.get('/getAlljob', getAlljobs);
router.get('/',searchJob);
router.get('/:id',  getJobById);






module.exports=router;