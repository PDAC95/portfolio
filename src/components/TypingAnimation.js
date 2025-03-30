import dynamic from 'next/dynamic';

const TypeIt = dynamic(() => import('typeit-react'), { ssr: false });

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 70,
          loop: true,
          strings: ["Software Engineer","Full Stack Engineer", "Project Manager", "Scrum Master", "Digital Marketing Specialist", "UX/UI Designer"],
          breakLines: false,
        }}
      />
    </span>
  );
};

export default TypingAnimation;
