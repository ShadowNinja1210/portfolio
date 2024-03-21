import Link from "next/link";

const gameList = [
  { name: "Simon Game", url: "/Simon_Game/index.html", imgUrl: "/assets/Simon_Game.png" },
  { name: "Maze Game", url: "/Maze_Game/index.html", imgUrl: "/assets/Maze_Game.png" },
  { name: "Drum Game", url: "/Drum_Game/index.html", imgUrl: "/assets/Drum_Game.png" },
  { name: "Dice Challenge", url: "/Dice_Challenge/index.html", imgUrl: "/assets/Dice_Challenge.png" },
];

const Games = () => {
  return (
    <main className="h-screen flex flex-col items-center p-12">
      <section className=" border-b-2 border-gray-600 w-full">
        <h1 className="font-medium text-4xl text-center text-gray-200">Games</h1>;
      </section>
      <section className="text-gray-100">
        <div className="flex gap-8 p-8 justify-center items-center flex-wrap">
          {gameList.map((game, index) => {
            return (
              <Link href={game.url} key={index}>
                <div
                  className="p-6 bg-slate-800 rounded-xl flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${game.imgUrl})`,
                    backgroundSize: "cover",
                    width: "200px",
                    height: "150px",
                    boxShadow: "2px 2px 6px 2px rgba(35, 0, 72, 0.5)",
                  }}
                >
                  <p className="font-white text-center text-xl font-semibold">{game.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Games;
