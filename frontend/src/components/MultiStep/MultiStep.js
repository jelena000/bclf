import React from 'react'

const MultiStep = ({ stepNum, onStepChange, completed}) => {

    const isCompleted = (step) => {
        if(!(completed && completed.length > step))
            return false;

        return completed[step];
    }

    return (
        <div className=' flex flex-wrap justify-center items-center w-full  m-auto border-b border-b-gray-200'>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div onClick={() => onStepChange(0)}  className={'transition-all z-50 relative  h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(0) || stepNum == 0 ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        {
                            isCompleted(0) ?
                                <i className="material-icons likes-icon text-white text-base " >check</i>
                            :
                                <span className='cursor-pointer'>1</span>
                        }
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 0  ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10 , width: '200%'}}>
                    GENERAL INFO
                </div>
                <div className=' md:flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='flex justify-center items-center pl-5  text-center '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div onClick={() => onStepChange(1)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(1) || stepNum == 1 ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        {
                            isCompleted(1) ? 
                                <i className="material-icons likes-icon text-white text-base" >check</i>
                            :
                                2
                        }
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 1  ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10 , width: '200%'}}>
                    PERSONAL INFORMATION
                </div>
                <div className='hidden md:flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='flex justify-center items-center pl-5  text-center '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>

                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs relative'>
                <div>
                    <div  onClick={() => onStepChange(2)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm  hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(2) || stepNum == 2  ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        {
                            isCompleted(2) ? 
                                <i className="material-icons likes-icon text-white text-base" >check</i>
                            :
                                3
                        }   
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 2  ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10, width: '200%'}}>
                    REGISTRATION
                </div>
                <div className='flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='flex justify-center items-center pl-5  '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>

                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div  onClick={() => onStepChange(3)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(3) || stepNum == 3  ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        4
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 3  ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10, width: '200%'}}>
                    ACCOMMODATION
                </div>
                <div className='hidden md:flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='flex justify-center items-center pl-5  '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div  onClick={() => onStepChange(4)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(4) || stepNum == 4  ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        5
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 4  ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10, width: '200%'}}>
                    TRANSFERS
                </div>
                <div className='flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='flex justify-center items-center pl-5  '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>

                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div  onClick={() => onStepChange(5)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(5) || stepNum == 5  ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        6
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 5 ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10, width: '200%'}}>
                    INVOICE
                </div>
                <div className='flex justify-center items-center absolute top-10 -right-12 pl-5'>
                    <div className='hidden md:flex justify-center items-center pl-5  '>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>
                        <span className='h-1 w-1 bg-blue-500 rounded-full mx-2'></span>

                    </div>
                </div>
            </div>
            <div className='w-1/2 p-5 md:w-1/7 flex flex-col gap-3 justify-center items-center  text-xs  relative'>
                <div>
                    <div  onClick={() => onStepChange(6)}  className={'transition-all z-50 relative h-10 w-10 border  rounded-full flex justify-center items-center text-white  text-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:border-0 ' + (isCompleted(6) || stepNum == 6 ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-500 ')}>
                        7
                    </div>
                </div>
                <div className={'text-xs pt-3  text-center ' + (stepNum == 6 ? 'text-blue-600' : 'text-gray-400')}  style={{ fontSize: 10, width: '200%'}}>
                    SUBMIT
                </div>
            </div>
        </div>
    )
}

export default MultiStep;
