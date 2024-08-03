const express = require('express');
const router = express.Router();

const obj={
    a:'5',
    b:'functionsl'
}
router.get('/',(req,res)=>{
    res.json(obj);
})

module.exports = router;