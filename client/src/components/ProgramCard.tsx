type Program = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramCard({ program }: { program: Program }) {
  return (
    <>
      <h1>{program.title}</h1>
      <p>
        {program.country}, {program.year}
      </p>
      <img src={program.poster} alt={program.title} />
      <p>{program.synopsis}</p>
    </>
  );
}
export default ProgramCard;
