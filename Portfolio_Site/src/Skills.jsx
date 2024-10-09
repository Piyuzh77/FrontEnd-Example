import React, { useState } from 'react';
import Modal from './Modal';
import Footer from './footer';

const Skills = () => {
  const [skills, setSkills] = useState([
    { category: 'Front End Development', skill: 'HTML', percentage: 90 },
    { category: 'Front End Development', skill: 'CSS', percentage: 85 },
    { category: 'Front End Development', skill: 'JS', percentage: 80 },
    { category: 'Front End Development', skill: 'PHP', percentage: 75 },
    { category: 'Front End Development', skill: 'WordPress', percentage: 85 },
    { category: 'Languages', skill: 'Hindi', percentage: 90 },
    { category: 'Languages', skill: 'English', percentage: 85 },
    { category: 'Back End Development', skill: 'NodeJS', percentage: 90 },
    { category: 'Back End Development', skill: 'SSR', percentage: 85 },
  ]);

  const [category, setCategory] = useState('');
  const [skill, setSkill] = useState('');
  const [percentage, setPercentage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSkill = () => {
    if (category && skill && percentage) {
      const newSkill = { category, skill, percentage: parseInt(percentage) };
      setSkills((prevSkills) => [...prevSkills, newSkill]);
      setCategory('');
      setSkill('');
      setPercentage('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Skills & Languages</h1>
      <p className="text-center font-normal text-gray-600 pb-5 mb-3">
        Ut adipisicing duis non ullamco labore commodo eu commodo. Cupidatat
        veniam voluptate velit aliquip
        <br /> magna sunt veniam labore voluptate occaecat officia minim
        tempor.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {['Front End Development', 'Languages', 'Back End Development'].map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div key={index} className="mb-4">
                  <p className="flex justify-between">
                    <span>{skill.skill}</span>
                    <span>{skill.percentage}%</span>
                  </p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      <button 
        onClick={() => setIsModalOpen(true)} 
        className="mt-8 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
      >
        Add Skill
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddSkill}
        category={category}
        setCategory={setCategory}
        skill={skill}
        setSkill={setSkill}
        percentage={percentage}
        setPercentage={setPercentage}
      />
      <Footer></Footer>
    </div>
  );
};

export default Skills;
