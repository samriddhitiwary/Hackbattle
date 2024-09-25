import React from 'react';
import './ViewRecords.css'; 

const ViewRecords = () => {
  return (
    <div className="fullscreen-image">
        <div className='charts'>
        <div class="flex flex-wrap">
  
  <div class="w-1/2 p-4 ml-">
    <div class="bg-gray-200 h-32 flex items-center justify-center">
      Row 1, Column 1
    </div>
    <div class="bg-gray-300 h-32 flex items-center justify-center">
      Row 2, Column 1
    </div>
    <div class="bg-gray-400 h-32 flex items-center justify-center">
      Row 3, Column 1
    </div>
  </div>

  
  <div class="w-1/2 p-4">
    <div class="bg-gray-200 h-32 flex items-center justify-center">
      Row 1, Column 2
    </div>
    <div class="bg-gray-300 h-32 flex items-center justify-center">
      Row 2, Column 2
    </div>
    <div class="bg-gray-400 h-32 flex items-center justify-center">
      Row 3, Column 2
    </div>
  </div>
</div>

        </div>
    </div>
  );
}

export default ViewRecords;
