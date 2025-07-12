import React, { useState } from 'react';
import { Eye, FileText, BookOpen } from 'lucide-react';

const Resources = () => {
  const [activeSemester, setActiveSemester] = useState('Semester 1');
  const [selectedSubject, setSelectedSubject] = useState('Calculus and Linear Algebra');
  
  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];
  
  const subjects = [
    'Calculus and Linear Algebra',
    'Communicative English',
    'Electrical and Electronics Engineering',
    'Engineering Graphics and Design',
    'Programming for Problem Solving',
    'Semiconductor Physics and Computational...'
  ];

  const units = [
    { name: 'Unit 1: Matrices', type: 'PPTs' },
    { name: 'Unit 2: Functions Of Several...', type: 'PYQs' },
    { name: 'Unit 3: Ordinary Differential...', type: 'Syllabus' },
    { name: 'Unit 4: Differential Calculus...', type: 'PPTs' },
    { name: 'Unit 5: Sequence And Series', type: 'PYQs' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Resources</h1>
        <p className="text-lg text-green-400">
          Your complete academic toolkit, curated and shared by students like you.
        </p>
      </div>

      {/* Semester Tabs */}
      <div className="flex flex-wrap gap-2">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => setActiveSemester(semester)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base ${
              activeSemester === semester
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {semester}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subjects List */}
        <div className="lg:col-span-1 space-y-3">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedSubject === subject
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="font-medium text-sm lg:text-base">{subject}</span>
            </button>
          ))}
        </div>

        {/* Subject Details */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-400">{selectedSubject}</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">PPTs</span>
              <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm">PYQs</span>
              <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm">Syllabus</span>
            </div>
          </div>

          <div className="space-y-3">
            {units.map((unit, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-700 rounded-lg p-4 gap-3">
                <div className="flex-1">
                  <h3 className="text-white font-medium text-sm lg:text-base">{unit.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    unit.type === 'PPTs' ? 'bg-green-600 text-white' :
                    unit.type === 'PYQs' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {unit.type}
                  </span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;