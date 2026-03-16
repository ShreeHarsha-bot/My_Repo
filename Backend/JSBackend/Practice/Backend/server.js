import express from 'express';

const app= express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/movies',(req,res)=>{
 const movies = [
  {
    id: 1,
    movieName: "Inception",
    content: "A skilled thief enters people's dreams to steal secrets but gets a chance to plant an idea in someone's mind."
  },
  {
    id: 2,
    movieName: "The Dark Knight",
    content: "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City."
  },
  {
    id: 3,
    movieName: "Interstellar",
    content: "Astronauts travel through a wormhole in search of a new planet to save humanity."
  },
  {
    id: 4,
    movieName: "Avengers: Endgame",
    content: "The Avengers assemble once again to undo the destruction caused by Thanos."
  },
  {
    id: 5,
    movieName: "Spider-Man: No Way Home",
    content: "Spider-Man's identity is revealed and he seeks help from Doctor Strange to fix the problem."
  }
];
res.send(movies);
});

app.get('/movies/trio',(req,res)=>{
    const trilogy = [
  {
    id: 1,
    movieName: "Batman Begins",
    content: "Bruce Wayne trains with the League of Shadows and returns to Gotham to become Batman, fighting crime and stopping the villain Ra's al Ghul."
  },
  {
    id: 2,
    movieName: "The Dark Knight",
    content: "Batman faces the Joker, a chaotic criminal who tries to break Gotham's spirit and push Batman to his limits."
  },
  {
    id: 3,
    movieName: "The Dark Knight Rises",
    content: "Eight years after the Joker, Batman returns to stop Bane, a powerful terrorist who plans to destroy Gotham City."
  }
];
res.send(trilogy)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server at ${port}'); 
})