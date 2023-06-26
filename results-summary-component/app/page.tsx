import ScoreCategory from '@/components/ScoreCategory';

function Home() {
  return (
    <main className="flex justify-center items-center h-[100dvh] text-[18px]">
      <div className="flex border-[1px] rounded-xl bg-white shadow-lg">
        <div
          className="bg-gradient-to-t from-royal-blue to-slate-blue 
        rounded-3xl p-8 flex flex-col items-center gap-8
        text-light-lavender"
        >
          <div className="font-medium">Your Result</div>
          <div
            className="rounded-full p-10 text-center
          bg-gradient-to-t  from-persian-blue-circle
          to-violet-blue-circle
          aspect-square"
          >
            <div className="text-5xl text-white font-bold">76</div>
            <div className="text-xs text-light-lavender-score">of 100</div>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center max-w-[200px]">
            <div className="text-white text-2xl font-semibold">Great</div>
            <div className="text-sm text-center text-light-lavender">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-4 justify-between">
          <div className="font-bold">Summary</div>
          <div className="flex flex-col gap-2">
            <ScoreCategory
              bgColor="bg-light-red"
              textColor="text-light-red"
              icon="/images/icon-reaction.svg"
              title="Reaction"
              score={80}
            />
            <ScoreCategory
              bgColor="bg-orange-yellow"
              textColor="text-orange-yellow"
              icon="/images/icon-memory.svg"
              title="Memory"
              score={92}
            />
            <ScoreCategory
              bgColor="bg-green-teal"
              textColor="text-green-teal"
              icon="/images/icon-verbal.svg"
              title="Verbal"
              score={61}
            />
            <ScoreCategory
              bgColor="bg-cobalt-blue"
              textColor="text-cobalt-blue"
              icon="/images/icon-visual.svg"
              title="Visual"
              score={72}
            />
          </div>
          <button
            className="bg-dark-gray-blue 
          rounded-full
          text-white
          py-2 text-base"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
export default Home;
