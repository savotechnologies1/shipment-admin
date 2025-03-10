import React from "react";
import img from "../../assets/rule_icon.png";

const rules = [
 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate veritatis optio velit possimus adipisci ut eveniet doloremque tempora quasi voluptate dolore, ratione iusto assumenda atque natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam e natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blane natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blane natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blane natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blane natus eos ea similique deserunt illum obcaecati amet ducimus sunt? Repellat quidem ab neque, natus modi adipisci quo corporis distinctio, facere recusandae cum praesentium minus culpa voluptate reiciendis? Delectus soluta sapiente doloremque molestiae eos in a illum aperiam laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blan laboriosam voluptates velit repellat, eius amet facilis necessitatibus consequatur vero ducimus iure obcaecati natus! Illum, ducimus unde minima quos voluptas error facilis sed eos dolorum enim inventore numquam blanditiis. Id consequuntur dolores veritatis sit blanditiis ducimus."
];

const AffiliateRules = () => {
  return (
    <div className="p-7">
      <div className="flex flex-row items-center gap-4 mb-6">
        <img src={img} alt="Rules Icon" />
        <h1 className="text-xl md:text-4xl font-bold text-[#213C70]">Rules</h1>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Affiliate Program Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {rules.map((rule, index) => (
            <p key={index}>{rule}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AffiliateRules;
