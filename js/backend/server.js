import express  from "express";
const app = express();

app.get('/', (req, resp) => {
    resp.send('server is ready');
});

app.get('/api/jokes', (req, resp) => {
    const jokes = [
        {
            id: 1,
            title: "a jokes",
            content: "first jokes"
        },
        {
            id: 2,
            title: "2 jokes",
            content: "second jokes"
        },
        {
            id: 3,
            title: "3 jokes",
            content: "three jokes"
        },
        {
            id: 4,
            title: "4 jokes",
            content: "four jokes"
        },
    ];
    resp.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);

});
