const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection(
{    user: 'root',
     host: 'localhost',
     password: '',
     database:'volunteers'
});

app.post('/create' , (req,res) =>
{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    db.query('Insert into employee (Employee_name,Employee_mail,Employee_password) values (?,?,?)',
               [name,email,password],(err,result)=> {
                   if(err)
                   {
                       console.log(err);
                   }else{
                       res.send("Values inserted");
                   }
               });

});

app.get('/employees',(req,res)=>
{
    db.query('Select * from employee',(err,result) =>{
    if(err)
    {
        console.log(err);
    }
    else{
        res.send(result);
    }
   });
});

app.post('/login',(req,res) =>
{
     const email = req.body.email;
     const password = req.body.password;
     db.query('Select * from employee where Employee_mail = ? and Employee_password = ?',[email,password],
         (err,result)=> {
             if(err)
             {
                 res.send(err);
             }
             else
             {
                 res.send(result);
             }
         });
})

app.post('/subscribe',(req,res) =>
{
     const Employee_id = req.body.Employee_id;
     const Initiative_id = req.body.Initiative_id;
     db.query('Select * from subscribe where Employee_id = ? and Initiative_id = ?',[Employee_id,Initiative_id],
         (err,result)=> {
             if(err)
             {
                 res.send(err);
             }
             else if(result.length>0)
             {
                 res.send(result);
             }
             else 
             {
                db.query('Insert into subscribe (Employee_id,Initiative_id) values (?,?)',
                [Employee_id,Initiative_id],(err,result1) =>
                {
                    if(err)
                   {
                      res.send(err);
                    }
                    else
                    {
                        res.send({message:'Thank you for subscribing'});
                    }
                }); 
                 
             }
         });
})

app.get('/initiatives',(req,res)=>
{
    db.query('Select * from initiative',(err,result) =>{
    if(err)
    {
        console.log(err);
    }
    else{
        res.send(result);
    }
   });
});

app.get('/subscribed',(req,res)=>
{
    db.query('select Subscribe_id,Employee_id,subscribe.Initiative_id as Subscribed_Initiativeid,Subscribe_date,Initiative_name,Initiative_category from subscribe,initiative where subscribe.Initiative_id = initiative.Initiative_id',
    (err,result) =>{
    if(err)
    {
        console.log(err);
    }
    else{
        res.send(result);
    }
   });
});

app.post('/addlog' , (req,res) =>
{
    const task = req.body.task;
    const hours = req.body.hours;
    const id = req.body.id;
    db.query('Insert into logs (subscribe_id,Tasks,Hours) values (?,?,?)',
               [id,task,hours],(err,result)=> {
                   if(err)
                   {
                       console.log(err);
                   }else{
                       res.send(result);
                   }
               });

});

app.post('/getlogs' ,(req,res) =>
{
    const id = req.body.id;
    db.query("Select Log_id,Tasks,Hours from logs where subscribe_id = ?",[id],(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.get('/alllogs',(req,res)=>
{
    db.query('select Log_id,logs.Subscribe_id,subscribe.Employee_id,subscribe.Initiative_id as Subscribed_Initiativeid,Employee_name,Initiative_name,Tasks,Hours from subscribe,initiative,employee,logs where subscribe.Initiative_id = initiative.Initiative_id and subscribe.Employee_id = employee.Employee_id and subscribe.Subscribe_id = logs.subscribe_id',
    (err,result) =>{
    if(err)
    {
        console.log(err);
    }
    else{
        res.send(result);
    }
   });
});

app.post('/getresponse',(req,res) =>
{
    Log_id = req.body.Log_id;
    Employee_id = req.body.Employee_id;
    db.query('Select * from applaud where Log_id = ? and Employee_id = ?',[Log_id,Employee_id],
    (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.post('/addresponse',(req,res) =>
{
    const log_id = req.body.log_id;
    const employee_id = req.body.employee_id;
    const response = req.body.cheertext;
    db.query('Insert into applaud (Log_id,Employee_id,Response) values (?,?,?)',[log_id,employee_id,response],
    (err,result) =>
    {
        if(err)
          console.log(err);
        else
        {
            res.send("Values inserted");
        }  
    });
});

app.post('/getapplauds',(req,res) =>
{
    Log_id = req.body.id;
    db.query('select applaud.Log_id,employee.Employee_name,applaud.Response,applaud.Response_time from applaud,employee where applaud.Employee_id = employee.Employee_id and applaud.Log_id = ?',
    [Log_id],
    (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>
{
    console.log("Hey server is running");
})