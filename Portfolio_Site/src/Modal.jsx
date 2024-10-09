import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, category, setCategory, skill, setSkill, percentage, setPercentage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && skill && percentage) {
      onSubmit();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-1/3">
          <h2 className="text-xl font-bold mb-4">Add New Skill</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Category:</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Skill:</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Percentage:</label>
              <input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Add Skill
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
