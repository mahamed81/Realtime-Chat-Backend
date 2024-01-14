//runs http server
const express  = require("express")
//calls the server from any other origin
const cors = require("cors");
const { default: axios } = require("axios");



const app = express();
app.use(express.json())
app.use(cors({origin: true}))

app.post("/authenticate", async (req, res)=>{
    const {username} = req.body;
    try {
        const r =  await axios.put("https://api.chatengine.io/users/", 
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "aa10e906-f0ca-46f3-95b2-91759e006e9f"}})
        return res.status(r.status).json(r.data)

    } catch (e) {
       return res.status(e.response.status).json(e.response.data)
    }
})

app.get("/users", async (req, res)=>{
    const {username}= req.body;
    try {
    const users = await axios.get("https://api.chatengine.io/users/",
    {headers: {"private-key": "aa10e906-f0ca-46f3-95b2-91759e006e9f"}}
    )
    return res.status(users.status).json(users.data)
    } catch (e) {
       return res.status(e.response.status).json(e.response.data)
        
    }

})



app.listen(3001)

