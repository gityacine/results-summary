import Skill from "./Skill";
import data from "./data.json";

export default function Card() {
    return(
        <div className="flex flex-col h-full w-full bg-white">
            <div className="flex flex-col items-center bg-[#7857ff] rounded-b-3xl py-7 px-10">
                <h2 className="text-[#ebf1ff] font-hankengrotesk text-xl font-bold">Your Result</h2>
                <div className="flex flex-col items-center justify-center w-44 h-44 rounded-full bg-indigo-700 my-6">
                    <h1 className="text-white font-hankengrotesk text-7xl font-extrabold">76</h1>
                    <p className="text-[#c8c7ff] text-lg font-hankengrotesk">of 100</p>
                </div>
                <h1 className="text-white font-hankengrotesk text-3xl mb-2 font-extrabold">Great</h1>
                <p className="text-center text-[#ebf1ff] text-lg font-hankengrotesk">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className="flex flex-col min-h-auto justify-between space-y-5 p-8">
                <h1 className="font-hankengrotesk text-xl font-bold">Summary</h1>
                <div className="flex flex-col space-y-4">
                {data.map((skill, index) => (
                    <Skill
                        key={index}
                        source={skill.icon}
                        category={skill.category}
                        score={skill.score}
                        colorIndex={index}
                    />
                ))}
                </div>
                <button className="bg-[#303b5a] text-white py-4 rounded-full font-hankengrotesk text-xl font-bold">Continue</button>
            </div>
        </div>
    );
}