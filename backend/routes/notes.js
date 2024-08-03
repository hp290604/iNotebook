const express = require('express');
const router = express.Router();

const obj={
    a:'5',
}
router.get('/',(req,res)=>{
    res.json(obj);

})

module.exports = router;