import React from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import Marquee from "react-fast-marquee";
import useTitle from '../../../../hooks/useTitle';

const Notice = () => {
    useTitle('Notice')
    return (
        <section>
            <SectionHeader>Notice Board</SectionHeader>
            <div>
                <div >

                    <Marquee className=' py-1 text-red-600 bg-yellow-400 text-xl'>
                         Welcome to Rythmic! Stay tuned for exciting updates, new courses, and interactive features 
                        Musically yours,
                        The Rythmic Team ||
                    </Marquee>
                    <div className='mx-auto container flex justify-center p-5'>
                        {/* You can open the modal using ID.showModal() method */}
                        <button className="btn h-[40vh] w-full text-3xl" onClick={()=>window.my_modal_3.showModal()}>No available notice</button>
                        <dialog id="my_modal_3" className="modal">
                          <form method="dialog" className="modal-box">
                            <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Welcome to notice board!</h3>
                            <p className="py-4">
                                There is no notice available for this moment <br />
                                Press ESC key or click on ✕ button to close</p>
                          </form>
                        </dialog>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Notice;